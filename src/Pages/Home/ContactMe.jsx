import { useState } from "react";
import Toast from "../../components/toastNotification";

export default function ContactMe() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    message: "",
  });

  const [responseMsg, setResponseMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      name: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      contact: formData.contact,
      message: formData.message,
    };

    try {
      setLoading(true);
      const res = await fetch(
        "https://api-alisher.expinsoft.com/api/form/submit",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      if (res.status === 200) {
        setResponseMsg("Message sent successfully!");
        setToastVisible(true);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          contact: "",
          message: "",
        });
      } else {
        const result = await res.json();
        setResponseMsg(result.message || "❌ Failed to send message.");
      }
    } catch (error) {
      console.error(error);
      setResponseMsg("Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="Contact" className="contact--section">
      {loading && (
        <div className="loader-container">
          <span className="loader"></span>
        </div>
      )}

      <div>
        {/* <p className="sub--title">Get In Touch</p> */}
        <h2>Contact Me</h2>
        <p className="text-lg">
          I'd love to hear from you. Fill out the form and I'll get back to you!
        </p>
      </div>

      <form onSubmit={handleSubmit} className="contact--form--container">
        <div className="container">
          <label className="contact--label">
            <span className="text-md">First Name</span>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="contact--input text-md"
              required
            />
          </label>

          <label className="contact--label">
            <span className="text-md">Last Name</span>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="contact--input text-md"
              required
            />
          </label>

          <label className="contact--label">
            <span className="text-md">Email</span>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="contact--input text-md"
              required
            />
          </label>

          <label className="contact--label">
            <span className="text-md">Contact</span>
            <input
              type="tel"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              className="contact--input text-md"
              required
            />
          </label>
        </div>

        <label className="contact--label">
          <span className="text-md">Message</span>
          <textarea
            name="message"
            rows="8"
            value={formData.message}
            onChange={handleChange}
            className="contact--input text-md"
            placeholder="Type your message..."
            required
          />
        </label>
        <div>
          <button
            className="btn btn-primary contact--form--btn"
            type="submit"
            disabled={loading}
          >
            Submit
          </button>
        </div>

        {/* {responseMsg && (
          <p style={{ marginTop: "1rem", fontWeight: "bold" }}>{responseMsg}</p>
        )} */}
        <Toast
          message={responseMsg}
          show={toastVisible}
          onClose={() => setToastVisible(false)}
        />
      </form>
    </section>
  );
}
