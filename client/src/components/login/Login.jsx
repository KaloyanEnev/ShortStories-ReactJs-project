import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../css/Login.css';
import { useLogin } from '../../hooks/useAuth';
import { useForm } from '../../hooks/useForm';
const initialValues = {
    email: "",
    password: "",
  };
  
export default function Login() {
    const [error, setError] = useState("");

    const login = useLogin();
    const navigate = useNavigate();
    const loginHandler = async ({ email, password }) => {
      try {
        await login(email, password);
        console.log("succ login");
  
        navigate("/");
      } catch (err) {
        setError(err.message)
        console.log("no succ");
  
        console.log(err.message);
      }
    };
    const { values, changeHandler, submitHandler } = useForm(
      initialValues,
      loginHandler
    );
  
    return (
      <section id="login-page" className="auth-section">
        <form id="login-form" onSubmit={submitHandler}>
          <div className="form-container">
            <div className="brand-logo">
             
            </div>
            <h1>Login</h1>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={values.email}
              onChange={changeHandler}
              placeholder="example@gmail.com"
              className="input-field"
            />
  
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={values.password}
              onChange={changeHandler}
              className="input-field"
            />
              {error && (
              <p className="error-message">{error}</p>
            )}
            <input type="submit" className="btn-submit" value="Login" />
            <p className="signup-link">
              <span>
                Don't have an account? <Link to='/register'>Sign up here</Link>
              </span>
            </p>
          </div>
        </form>
      </section>
    );
}