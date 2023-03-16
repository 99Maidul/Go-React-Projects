import { useState } from 'react';
import Input from './form/input.js';


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (email == 'admin@example.com') {
            alert("Login Successful");
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