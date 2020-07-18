import React from "react";
import { axiosWithAuth } from '../utils/axiosWithAuth';
import './Login.scss';

class Login extends React.Component {
  state = {
    credentials: {
      username: "",
      password: ""
    }
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();
    axiosWithAuth()
    .post("/api/login", this.state.credentials)
    .then(res => {
      localStorage.setItem("token", res.data.payload)
      this.props.history.push("/protected")
    })
    .catch(err => console.log("Err is:", err.response))
  }
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  render(){
    return (
      <div className="form">
        <h2>Hello, Please login to see your bubbles.</h2>
        <form onSubmit={this.login}>
          <div>
            <input
              id="input"
              type="text"
              name="username"
              value={this.state.credentials.username}
              placeholder="User Name"
              onChange={this.handleChange}
              required
            />
            <input
              id="input"
              type="password"
              name="password"
              value={this.state.credentials.password}
              placeholder="Password"
              onChange={this.handleChange}
              required
            />
          </div>
          <button>Log In</button>
        </form>
      </div>
    );
  }
};

export default Login;

