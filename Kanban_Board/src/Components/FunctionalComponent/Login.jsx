import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import '../../assets/css/login.css'
const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email format";
    if (!formData.password) newErrors.password = "Password is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    try {
      const response = await axios.post("http://localhost:3002/login", {
        email: formData.email,
        password: formData.password,
      });
      if (response.data.loggedIn) {
        console.log("Login Successful:", response.data);
        alert(response.data.message);
        navigate("/about");
      }
      else{
        console.log("Login UnSuccessful:", response.data);
        alert(response.data.message);
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert(response.data.message);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">

      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
    </div>
  );
};

export default Login;