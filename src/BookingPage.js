// src/BookingPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import BookingForm from './BookingForm';
import submitAPI from './submitAPI';

function BookingPage() {
  const navigate = useNavigate();

  const submitForm = async (formData) => {
    try {
      const success = await submitAPI(formData);
      if (success) {
        navigate('/booking-confirmed');
      } else {
        alert('There was an error submitting your booking. Please try again.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('An unexpected error occurred. Please try again.');
    }
  };

  return (
    <div className="booking-page">
      <h1>Book Your Table</h1>
      <p>Fill out the form below to reserve your table!</p>
      <BookingForm onSubmit={submitForm} /> {}
    </div>
  );
}

export default BookingPage;

