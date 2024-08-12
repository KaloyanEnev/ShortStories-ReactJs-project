import { useState } from "react";
import { Link } from "react-router-dom";
import "../../css/Register.css"

export default function Register() {
    const [values, setValues] = useState({
      email: '',
      password: '',
      'confirm-password': '',
    });
  
    const [error, setError] = useState('');
  
    const changeHandler = (e) => {
      setValues({
        ...values,
        [e.target.name]: e.target.value,
      });
    };
  
    const submitHandler = (e) => {
      e.preventDefault();
      // Add your registration logic here
      // Example: Check if passwords match, etc.
      if (values.password !== values['confirm-password']) {
        setError('Passwords do not match.');
      } else {
        setError('');
        // Proceed with registration
      }
    };
  
    return (
      <section id="register-page" className="auth-section">
        <form id="register" onSubmit={submitHandler}>
          <div className="form-container">
            <div className="brand-logo"></div>
            <h1>Register</h1>
  
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={values.email}
              onChange={changeHandler}
              placeholder="maria@email.com"
              className="input-field"
            />
  
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              id="register-password"
              value={values.password}
              onChange={changeHandler}
              className="input-field"
            />
  
            <label htmlFor="confirm-password">Confirm Password:</label>
            <input
              type="password"
              name="confirm-password"
              id="confirm-password"
              value={values['confirm-password']}
              onChange={changeHandler}
              className="input-field"
            />
            
            {error && (
              <p className="error-message">{error}</p>
            )}
  
            <input className="btn-submit" type="submit" value="Register" />
  
            <p className="field">
              <span>
                If you already have a profile, click <Link to="/login">here</Link>
              </span>
            </p>
          </div>
        </form>
      </section>
    );
  }