import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../css/Register.css"
import { useForm } from "../../hooks/useForm";
import { useRegister } from "../../hooks/useAuth";
const initialValues = {
    email: "",
    password: "",
    "confirm-password": "",
  };

export default function Register() {
    const [error, setError] = useState("");
    const register = useRegister();
    const navigate = useNavigate();
    const registerHandler = async (values) => {
      if (values.password !== values["confirm-password"]) {
        setError("Passwords mismatch");
        return;
      }
      try {
        await register(values.email, values.password);
  
        navigate("/");
      } catch (err) {
          setError(err.message)      
        console.log(err.message);
      }
    };
  
    const { values, changeHandler, submitHandler } = useForm(
      initialValues,
      registerHandler
    );
  
  
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