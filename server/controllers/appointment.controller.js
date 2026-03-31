const Appointment = require('../models/Appointment.model');
const { sendNotification } = require('../services/notification.service');

// @desc    Create new appointment
// @route   POST /api/appointments
// @access  Public
const createAppointment = async (req, res) => {
  try {
    const { name, phone, service, date, time, notes } = req.body;

    // Validate required fields
    if (!name || !phone || !service || !date || !time) {
      return res.status(400).json({ success: false, message: 'Please fill in all required fields' });
    }

    const appointment = await Appointment.create({
      name,
      phone,
      service,
      date,
      time,
      notes,
    });

    // Attempt to trigger the notification synchronously but WITHOUT await
    // Alternatively, await it if you want the request to block, but it's best not to block UI.
    // However, requirements state: "If notification fails, log the error but still save appointment".
    // We already wrapped the service logic in a try-catch, so we can await it or run it in bg.
    // Let's await it to simulate synchronous sending
    await sendNotification({ name, service, date, time });

    res.status(201).json({ success: true, data: appointment });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to create appointment', error: error.message });
  }
};

// @desc    Get all appointments
// @route   GET /api/appointments
// @access  Public
const getAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, count: appointments.length, data: appointments });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to fetch appointments', error: error.message });
  }
};

// @desc    Get single appointment
// @route   GET /api/appointments/:id
// @access  Public
const getAppointmentById = async (req, res) => {
  try {
    const appointment = await Appointment.findById(req.params.id);

    if (!appointment) {
      return res.status(404).json({ success: false, message: 'Appointment not found' });
    }

    res.status(200).json({ success: true, data: appointment });
  } catch (error) {
    // Check if error is due to an invalid ObjectId
    if (error.name === 'CastError') {
      return res.status(404).json({ success: false, message: 'Appointment not found' });
    }
    res.status(500).json({ success: false, message: 'Failed to fetch appointment', error: error.message });
  }
};

// @desc    Update appointment
// @route   PUT /api/appointments/:id
// @access  Public
const updateAppointment = async (req, res) => {
  try {
    let appointment = await Appointment.findById(req.params.id);

    if (!appointment) {
      return res.status(404).json({ success: false, message: 'Appointment not found' });
    }

    appointment = await Appointment.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({ success: true, data: appointment });
  } catch (error) {
    if (error.name === 'CastError') {
      return res.status(404).json({ success: false, message: 'Appointment not found' });
    }
    res.status(500).json({ success: false, message: 'Failed to update appointment', error: error.message });
  }
};

// @desc    Delete appointment
// @route   DELETE /api/appointments/:id
// @access  Public
const deleteAppointment = async (req, res) => {
  try {
    const appointment = await Appointment.findById(req.params.id);

    if (!appointment) {
      return res.status(404).json({ success: false, message: 'Appointment not found' });
    }

    await appointment.deleteOne();

    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    if (error.name === 'CastError') {
      return res.status(404).json({ success: false, message: 'Appointment not found' });
    }
    res.status(500).json({ success: false, message: 'Failed to delete appointment', error: error.message });
  }
};

module.exports = {
  createAppointment,
  getAppointments,
  getAppointmentById,
  updateAppointment,
  deleteAppointment,
};
