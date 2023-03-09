import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './sign-up.styles.scss';

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
      passwordMatchError: false,
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
  
    if (password !== confirmPassword) {
      this.setState({ passwordMatchError: true });
      return;
    }
  
    // Create a new user object to send to the backend
    const newUser = {
      name: displayName,
      email: email,
      password: password
    };
  
    try {
      // Send an HTTP POST request to the backend to create a new user
      const response = await fetch('http://your-backend-api-url/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)
      });
  
      // Handle the response from the backend
      const data = await response.json();
      console.log(data); // Log the response data for debugging purposes
    } catch (error) {
      console.error(error); // Log any errors that occur during the request
    }
  
    // Clear the form and state after successful submission
    this.setState({ displayName: '', email: '', password: '', confirmPassword: '', passwordMatchError: false });
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword, passwordMatchError } = this.state;

    return (
      <div className='sign-up'>
        <h2 className='title'>Sign up with your name, email, and password</h2>
        {passwordMatchError && (
          <div style={{ color: 'red', marginTop: '10px' }}>Password does not match, please try again.</div>
        )}
        <form className='sign-up-form' onSubmit={this.handleSubmit}>
          <FormInput
            type='text'
            name='displayName'
            value={displayName}
            onChange={this.handleChange}
            label='Name'
            required
          />
          <FormInput
            type='email'
            name='email'
            value={email}
            onChange={this.handleChange}
            label='Email'
            required
          />
          <FormInput
            type='password'
            name='password'
            value={password}
            onChange={this.handleChange}
            label='Password'
            required
          />
          <FormInput
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            onChange={this.handleChange}
            label='Confirm Password'
            required
          />
          <CustomButton type='submit'>SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;