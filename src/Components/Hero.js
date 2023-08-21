import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ip from "../assets/bounce.png";
import { motion } from "framer-motion";

function MyVerticallyCenteredModal(props) {
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
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      style={{
        backgroundColor: "rgb(104,233,210, 0.7)",
      }}
    >
      <Modal.Header closeButton>
        {/* <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title> */}
      </Modal.Header>
      <Modal.Body style={{ backgroundColor: "black", color: "white" }}>
        <h1
          style={{
            textAlign: "center",
            fontWeight: "bolder",
            color: "#4CFFDF",
          }}
        >
          Get early access to our travel buddy
        </h1>
        <h6 style={{ textAlign: "center" }}>
          Enter your email and you will be among the first ones to access
          Bounce!
        </h6>
        <form
          className="form-group"
          onSubmit={handleSubmit}
          style={{ display: "flex", alignItems: "center" }}
        >
          <input
            type="email"
            className="form-control"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            style={{ margin: "1.2rem", width: "70%" }}
          />
          <Button
            type="submit"
            onClick={props.onHide}
            style={{
              background: "#4CFFDF",
              borderRadius: "1.4rem",
              color: "black",
              padding: "0.75rem",
              border: "none",
            }}
          >
            Join the waitlist
          </Button>
        </form>
      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
  );
}

const HeroSection = () => {
  const [modalShow, setModalShow] = useState(false);

  const [scrollY, setScrollY] = useState(0);
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    setScrollY(window.scrollY);
    if (window.scrollY > 100) { // You can adjust this threshold
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Define a scaling factor based on your requirements.
  // For example, we can scale down the image by 0.001 units for every pixel scrolled.
  const scale = Math.max(1 - scrollY * 0.001, 0.9); // 0.5 is the minimum scale
  const translateX = scrollY * 0.7; // Translate to the right

  return (
    <div>
    <section className="hero-section d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-md-10 mx-auto text-center">
            <h1 className="hero-heading">
              <span
                style={{
                  background: "linear-gradient(to right, #8AC6D1, #AE8AC6)",
                  webkitBackgroundClip: "text",
                  webkitTextFillColor: "transparent",
                  fontWeight: "900",
                  fontSize: "4rem",
                }}
              >
                The future of travel at your fingertips
              </span>
            </h1>
            <motion.button
      className={`btn btn-primary ${isSticky ? 'sticky' : ''}`}
      onClick={() => setModalShow(true)}
      style={{
        background: "linear-gradient(to right, #8AC6D1, #AE8AC6)",
        borderRadius: "1.6rem",
        color: "black",
        marginTop: isSticky ? '0' : "10%",
        padding: "0.75rem",
        position: isSticky ? 'fixed' : 'relative',
        top: isSticky ? '2rem' : '',
        right: isSticky ? '2rem' : '',
        transition: 'all 0.3s',
      }}
    >
      Join the Waitlist
    </motion.button>
          </div>
          <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </div>
        
      </div>
    </section>

    <div style={{marginTop: '2%'}}>
        <motion.img
          src={ip}
          style={{
            height: "50%",
            width: `${28 * scale}%`,
            marginTop: `${7 * scale}%`,
            transform: `translateX(${translateX}px)`,
          }}
        />
        </div>
        </div>
  );
};

export default HeroSection;
