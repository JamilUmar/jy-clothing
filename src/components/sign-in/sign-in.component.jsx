import React from "react";
import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signInWithGoogle } from '../../firebase/firebase.utils'


import "./sign-in.style.scss";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

 handleSubmit = e => {
  e.preventDefault();

  this.setState({ email: '', password: '' });
 }

 handleChange = e => { 
  const { name, value } = e.target;
  this.setState({[name]: value})
 }

  render() {
    return (
      <div className="sign-in">
        <h2>I alreay have an account</h2>
        <span>Sign in with your Email and Password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            value={this.state.email}
            name="email"
            type="email"
            label='email'
            required
            handleChange={this.handleChange}/>
          <FormInput
            value={this.state.password}
            name="password"
            type="password"
            label='password'
            required
            handleChange={this.handleChange}
          />
          <div className='buttons'>
          <CustomButton type="submit">sign In</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignin>
            Sign In with Google
          </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
