// src/BookingForm.js
import React, { useState } from 'react';

function BookingForm() {
  const [resDate, setResDate] = useState('');
  const [resTime, setResTime] = useState('');
  const [guests, setGuests] = useState(1); // Default to 1 guest
  const [occasion, setOccasion] = useState('no-occasion'); // Default to "no occasion"

  // Sample available times
  const availableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00'];

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // You can handle the form data (e.g., send it to an API)
    alert(`Reservation for ${resDate} at ${resTime} with ${guests} guest(s) for a ${occasion}`);
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '20px', maxWidth: '400px' }}>
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={resDate}
        onChange={(e) => setResDate(e.target.value)}
        required
      />

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={resTime}
        onChange={(e) => setResTime(e.target.value)}
        required
      >
        {availableTimes.map(time => (
          <option key={time} value={time}>
            {time}
          </option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests (1-10)</label>
      <input
        type="number"
        id="guests"
        min="1"
        max="10"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
        required
      />

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
        required
      >
        <option value="no-occasion">No Occasion</option>
        <option value="anniversary">Anniversary</option>
        <option value="birthday">Birthday</option>
      </select>

      <button type="submit" className="button">Reserve</button>
    </form>
  );
}

export default BookingForm;
