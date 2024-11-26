import React from 'react';
import footer from './footer.png';

function Footer() {
  return (
    <footer className="App-footer">
      <div className="footer-content">
        <img src={footer} alt="Little Lemon Footer" className="footer-image" />
        <p>© 2024 Little Lemon. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
