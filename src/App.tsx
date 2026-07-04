import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import MenuItem from './components/MenuItem';
import LikeButton from './components/LikeButton';
import Footer from './components/Footer';
import { menuData } from './data';

const App: React.FC = () => {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? 'app dark' : 'app'}>
      <Header />

      <button className="toggle" onClick={() => setDark(!dark)}>
        {dark ? '☀️ Light' : '🌙 Dark'}
      </button>

      <section className="hero">
        <img src="/chornaqe.jpg" alt="Fresh Chornaqe" className="hero-img" />
        <h2>Fresh Chornaqe Daily</h2>
        <p>Fried dough, served with tea or milk.</p>
        <LikeButton />
      </section>

      <section className="menu">
        <h2>Menu</h2>
        <div className="grid">
          {menuData.map((item) => (
            <MenuItem key={item.id} item={item} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default App;
