const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a customer name'],
    trim: true,
  },
  phone: {
    type: String,
    required: [true, 'Please provide a phone number'],
  },
  service: {
    type: String,
    required: [true, 'Please specify the service type'],
  },
  date: {
    type: Date,
    required: [true, 'Please provide an appointment date'],
  },
  time: {
    type: String,
    required: [true, 'Please provide an appointment time'],
  },
  notes: {
    type: String,
    default: '',
  }
}, {
  timestamps: true // This will automatically add createdAt and updatedAt
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

module.exports = Appointment;
