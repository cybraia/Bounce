import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { FaLinkedin, FaInstagram } from "react-icons/fa";

function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // const data = {
    //   Email: email
    // }
    // axios.post('https://sheet.best/api/sheets/dfe206f7-5d3a-450f-ac6e-b3d9abee3cd8', data).then((response)=>{
    //   console.log(response)
    //   setEmail('')
    // })
    fetch("https://sheetdb.io/api/v1/xriojrh84zl0x", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: {
          Email: email,
        },
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
    setEmail("");
  };
  return (
    <div>
      <h1 className="hero-heading">
        <span
          style={{
            color: "white",
            fontWeight: "900",
            fontSize: "3rem",
          }}
        >
          Join us today!
        </span>
      </h1>
      <form
        className="form-group justify-content-center align-items-center"
        onSubmit={handleSubmit}
        style={{ display: "flex", alignItems: "center" }}
      >
        <input
          type="email"
          className="form-control"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          style={{ margin: "1.2rem", marginLeft: "0%", width: "40%" }}
        />
        <Button
          type="submit"
          style={{
            background: "#4CFFDF",
            borderRadius: "1.4rem",
            color: "black",
            padding: "0.70rem",
            border: "none",
          }}
        >
          Join the waitlist
        </Button>
      </form>
      <h6 className="justify-content-center align-items-center text-white">
        Follow Us
      </h6>
      <div className="container d-flex justify-content-center align-items-center">
        <div style={{ display: "flex", alignItems: "center" }}>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "white", fontSize: "1.5rem", margin: "0 1rem" }}
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "white", fontSize: "1.5rem", margin: "0 1rem" }}
          >
            <FaInstagram />
          </a>
        </div>
      </div>
      <div style={{ minHeight: "20vh", marginTop: "5%" }}>
        <a
          href="inventor@letsbounce.info"
          className="justify-content-center align-items-center text-white text-decoration-none"
        >
          Contact Us!
        </a>
      </div>
    </div>
  );
}

export default Footer;
