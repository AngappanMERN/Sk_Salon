import React, { useState } from 'react';

const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    notes: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const formatTime12Hour = (time24) => {
    if (!time24) return time24;
    const [h, m] = time24.split(':');
    const hours = parseInt(h, 10);
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const hours12 = hours % 12 || 12;
    return `${hours12}:${m} ${ampm}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const payload = {
        ...formData,
        time: formatTime12Hour(formData.time)
      };

      const response = await fetch('http://localhost:5000/api/appointments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong. Please try again.');
      }

      setSuccess(true);
      setFormData({ name: '', phone: '', service: '', date: '', time: '', notes: '' });
      
      // Auto-hide success message after 5 seconds
      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden" id="booking">
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto text-center mb-16">
        <h4 className="text-[#C5A059] text-5xl mb-4 script-font">
          Reservation
        </h4>

        <h2 className="text-4xl md:text-5xl text-[#333] font-semibold tracking-tight">
          Book an Appointment
        </h2>
        <p className="mt-4 text-gray-500 max-w-xl mx-auto">
            Schedule your salon services easily. Our team of expert stylists is here to provide you with a premium beauty experience.
          </p>
      </div>

        <div className="bg-[#fcfbf9] shadow-xl shadow-[#C5A059]/10 rounded-2xl p-8 md:p-12 border border-[#eae0d5]">
          {error && (
            <div className="mb-6 bg-red-50 border-l-4 border-red-500 p-4 text-red-700">
              <p>{error}</p>
            </div>
          )}
          {success && (
            <div className="mb-6 bg-green-50 border-l-4 border-green-500 p-4 text-green-700">
              <p>Appointment booked successfully! We will contact you soon.</p>
            </div>
          )}
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Customer Name */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-700 uppercase tracking-wider">Customer Name</label>
              <input 
                type="text" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                required 
                placeholder="Full Name"
                className="bg-white border focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] outline-none border-gray-200 p-4 rounded-md transition-all duration-300 w-full text-gray-800 placeholder-gray-400"
              />
            </div>

            {/* Phone Number */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-700 uppercase tracking-wider">Phone Number</label>
              <input 
                type="tel" 
                name="phone" 
                value={formData.phone} 
                onChange={handleChange} 
                required 
                placeholder="Contact Number"
                className="bg-white border focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] outline-none border-gray-200 p-4 rounded-md transition-all duration-300 w-full text-gray-800 placeholder-gray-400"
              />
            </div>

            {/* Service Type */}
            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="text-sm font-medium text-gray-700 uppercase tracking-wider">Service Type</label>
              <select 
                name="service" 
                value={formData.service} 
                onChange={handleChange} 
                required
                className="bg-white border focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] outline-none border-gray-200 p-4 rounded-md transition-all duration-300 w-full text-gray-800 appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23C5A059%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-size-[12px_12px] bg-no-repeat bg-position-[right_1.5rem_center]"
              >
                <option value="" disabled>Select a service</option>
                <option value="Haircut & Styling">Haircut & Styling</option>
                <option value="Hair Coloring">Hair Coloring</option>
                <option value="Facial Treatments">Facial Treatments</option>
                <option value="Manicure & Pedicure">Manicure & Pedicure</option>
                <option value="Makeup">Makeup</option>
                <option value="Massage">Massage</option>
                <option value="Shaving & Trimming">Shaving & Trimming</option>
              </select>
            </div>

            {/* Appointment Date */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-700 uppercase tracking-wider">Appointment Date</label>
              <input 
                type="date" 
                name="date" 
                value={formData.date} 
                onChange={handleChange} 
                required 
                className="bg-white border focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] outline-none border-gray-200 p-4 rounded-md transition-all duration-300 w-full text-gray-800"
              />
            </div>

            {/* Appointment Time */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-700 uppercase tracking-wider">Appointment Time</label>
              <input 
                type="time" 
                name="time" 
                value={formData.time} 
                onChange={handleChange} 
                required 
                className="bg-white border focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] outline-none border-gray-200 p-4 rounded-md transition-all duration-300 w-full text-gray-800"
              />
            </div>

            {/* Notes */}
            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="text-sm font-medium text-gray-700 uppercase tracking-wider">Notes (Optional)</label>
              <textarea 
                name="notes" 
                value={formData.notes} 
                onChange={handleChange} 
                placeholder="Any special requests or instructions..."
                rows="4"
                className="bg-white border focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] outline-none border-gray-200 p-4 rounded-md transition-all duration-300 w-full text-gray-800 placeholder-gray-400 resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="md:col-span-2 mt-4 text-center">
              <button 
                type="submit" 
                disabled={loading}
                className="bg-[#C5A059] hover:bg-[#b58b45] text-white tracking-widest uppercase font-medium py-4 px-12 rounded-md transition-colors duration-300 text-lg shadow-lg shadow-[#C5A059]/30 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center mx-auto"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Booking...
                  </>
                ) : (
                  'Book Appointment'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Booking;
