// src/BookingPage.js
import React from 'react';
import BookingForm from './BookingForm';  // Import the BookingForm component

function BookingPage() {
  return (
    <div className="booking-page">
      <h1>Book Your Table</h1>
      <p>Fill out the form below to reserve your table!</p>
      <BookingForm />  {/* Embed the BookingForm component */}
    </div>
  );
}

export default BookingPage;
