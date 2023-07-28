import React, { useEffect, useState } from "react";
import "./Nav.css";
import { useNavigate } from "react-router-dom";

export default function Nav() {
  const [show, setShow] = useState(false);
  const [SerchValue, setSerchValue] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setShow(true);
      } else {
        setShow(false);
      }
    });

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  const handleChange = (e) => {
    setSerchValue(e.target.value);
    navigate(`/search?q=${e.target.value}`);
  };

  return (
    <nav className={`nav ${show && "nav_black"}`}>
      <img
        alt="Netflix logo"
        src="https://images.ctfassets.net/4cd45et68cgf/7LrExJ6PAj6MSIPkDyCO86/542b1dfabbf3959908f69be546879952/Netflix-Brand-Logo.png"
        className="nav_logo"
        onClick={() => window.location.reload()}
      />

      <input
        value={SerchValue}
        onChange={handleChange}
        className="nav_input"
        type="text"
        placeholder="Serch the movie"
      />

      <img
        alt="User logged"
        src="https://img.icons8.com/?size=512&id=gYI9v0NbFgxC&format=png"
        className="nav_avatar"
      />
    </nav>
  );
}
