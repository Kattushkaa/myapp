import './App.css';
import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookingPage from './BookingPage';
import ConfirmedBooking from './ConfirmedBooking'; // Corrected import path

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Header />
          <Nav />
        </header>
        <main className="App-main">
          <Routes>
            <Route path="/home" element={<Main />} />
            <Route path="/reservation" element={<BookingPage />} />
            <Route path="/booking-confirmed" element={<ConfirmedBooking />} />
          </Routes>
        </main>
        <footer className="App-footer">
          <Footer />
        </footer>
      </div>
    </Router>
  );
}

export default App;


