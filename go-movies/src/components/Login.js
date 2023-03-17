import { useState } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import Input from './form/input.js';


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { setJwtToken } = useOutletContext();
    const { setAlertClassName } = useOutletContext();
    const { setAlertMessage } = useOutletContext();

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("email/pass", email, password)

        if (email === "admin@example.com") {
            setJwtToken("abc");
            setAlertClassName("d-none")
            setAlertMessage("")
            navigate("/")
        } else {
            setAlertClassName("alert alert-danger")
            setAlertMessage("Invalid credentials")
        }
    }
    return (
        <div className="col-md-6 offset-md-3">
            <h2>Login</h2>
            <hr />

            <form onSubmit={handleSubmit}>
                <Input
                    title="Email Address"
                    type="email"
                    className="form-control"
                    name="email"
                    autoComplete="email-new"
                    onChange={(event) => setEmail(event.target.value)}
                />
                <Input
                    title="Password"
                    type="password"
                    className="form-control"
                    name="password"
                    autoComplete="password-new"
                    onChange={(event) => setEmail(event.target.value)}
                />
                <hr />
                <button type="submit" className="btn btn-primary">Login</button>

            </form>



        </div>
    )
}
export default Login;