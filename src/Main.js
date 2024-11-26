import React from 'react';
import { Link } from 'react-router-dom';
import mainpic from './mainpic.jpg';
import salad from './salad.jpg';
import bruchetta from './bruchetta.jpg';
import dessert from './dessert.jpg';


function Main() {
  return (
    <main className="main-container">
      <section className="first-section">
        <div className="text-container">
          <h1 className="yellow-text">Little Lemon</h1>
          <h2 className="yellow-text">Chicago</h2>
          <p>We are a family owned <br/>
          Mediterranenan restaurant,<br/>
          focused on traditional<br/>
          recipes served with a modern twist
          </p>
          <Link to="/reservation">
            <button className="button">Reserve a table </button>
          </Link>
        </div>
        <div className="image-container">
          <img src={mainpic} alt="Mainpicture" className="main-image" />
        </div>
      </section>

      <section className="menusection-header">
        <h1>This weeks specials!</h1>
        <a href="/order">
          <button className="button">Online menu </button>
        </a>
      </section>

      <section className="menu-item">
      <div className="menu-container">
          <img src={salad} alt="salad" className="menu-image" />
          <h3 className="menu-header">Greek salad</h3>
          <p className="menu-text">The famous greek salad of crispy  lettus</p>
          <a href="/dish1" className="button">Order a delivery</a>
        </div>

        <div className="menu-container">
          <img src={bruchetta} alt="bruchetta" className="menu-image" />
          <h3 className="menu-header">Bruschetta</h3>
          <p className="menu-text">Our Bruschetta is made from </p>
          <a href="/dish2" className="button">Order a delivery</a>
        </div>

        <div className="menu-container">
          <img src={dessert} alt="dessert" className="menu-image" />
          <h3 className="menu-header">Lemon dessert</h3>
          <p className="menu-text">A brief description of Dish 3 goes here.</p>
          <a href="/dish3" className="button">Order a delivery</a>
        </div>
      </section>
    </main>
  );
}


export default Main;