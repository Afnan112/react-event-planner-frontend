import { useState } from "react";
import { useNavigate } from "react-router";
import { setTokens } from "../lib/api";
import axios from "axios";

function Login() {
const navigate = useNavigate();

const [formData, setFormData] = useState({
    username: "",
    password: "",
});

const [error, setError] = useState("");

const handleChange = (event) => {
    setFormData({
    ...formData,
    [event.target.name]: event.target.value,
    });
};

const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");

    try {
    const response = await axios.post(
        `http://127.0.0.1:8000/api/token/`,
        formData
    );
    setTokens({
        access: response.data.access,
        refresh: response.data.refresh,
    });
    // navigate("/");
    navigate("/allevents")
    } catch (err) {
    console.log(err);
    setError("Invalid username or password");
    }
};

return (
    <div>
    <h1>Login</h1>
    <form onSubmit={handleSubmit}>
        <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
        <input
        type="text"
        name="username"
        placeholder="Username"
        value={formData.username}
        onChange={handleChange}
        className="form-control"
        required
        />
    </div>
    <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        className="form-control"
        required
        />
    </div>
        <button type="submit">Login</button>
        {error && <p>{error}</p>}
    </form>
    </div>
);
}

export default Login;
