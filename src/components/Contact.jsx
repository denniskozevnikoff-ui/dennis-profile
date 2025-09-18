import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Contact() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    contactNumber: '',
    email: '',
    message: ''
  });

  // keep form values updated
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // when form is submitted
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);

    // kick user back to home after submit
    navigate('/');
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '30px',
    padding: '40px',
    color: 'white'
  };

  const panelStyle = {
    background: '#222',
    padding: '20px',
    borderRadius: '10px',
    width: '400px',
    textAlign: 'center'
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    width: '400px'
  };

  const inputStyle = {
    padding: '10px',
    borderRadius: '6px',
    border: '1px solid #555'
  };

  return (
    <div style={containerStyle}>
      <div style={panelStyle}>
        <h2>Contact Information</h2>
        <p>Email: youremail@example.com</p>
        <p>Phone: +1 (123) 456-7890</p>
        <p>Location: Your City, Your Country</p>
      </div>

      {/* the actual form */}
      <form onSubmit={handleSubmit} style={formStyle}>
        <input
          style={inputStyle}
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
        <input
          style={inputStyle}
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
        <input
          style={inputStyle}
          type="text"
          name="contactNumber"
          placeholder="Contact Number"
          value={formData.contactNumber}
          onChange={handleChange}
        />
        <input
          style={inputStyle}
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          style={inputStyle}
          name="message"
          placeholder="Message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
        />
        <button
          type="submit"
          style={{
            ...inputStyle,
            background: '#4CAF50',
            color: 'white',
            cursor: 'pointer',
            border: 'none'
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
