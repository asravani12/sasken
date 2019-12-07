import React from 'react';
import logo from './logo.svg'
import './Sign.css'

class Sign extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDisabled: true
    }
    this.submitForm = this.submitForm.bind(this);
  }
  validateEmail(email) {
    const pattern = /[a-zA-Z0-9]+[.]?([a-zA-Z0-9]+)?[@][a-z]{3,9}[.][a-z]{2,5}/g;
    const result = pattern.test(email);
    if (result === true) {
      this.setState({
        emailError: false,
        email: email
      })
    } else {
      this.setState({
        emailError: true
      })
    }
  }
  handleChange(e) {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });

    if (e.target.name === 'firstname') {
      if (e.target.value === '' || e.target.value === null) {
        this.setState({
          firstnameError: true
        });
      } else {
        this.setState({
          firstnameError: false,
          firstName: e.target.value
        })
      }
    }
    if (e.target.name === 'lastname') {
      if (e.target.value === '' || e.target.value === null) {
        this.setState({
          lastnameError: true
        })
      } else {
        this.setState({
          lastnameError: false,
          lastName: e.target.value
        })
      }
    }
    if (e.target.name === 'email') {
      this.validateEmail(e.target.value);
    }
    if (e.target.name === 'phonenumber') {
      if (e.target.value === '' || e.target.value === null) {
        this.setState({
          phonenumberError: true
        })
      } else {
        this.setState({
          phonenumber: false,
          phonenumberError: e.target.value
        })
      }
    }
    if (this.state.firstnameError === false && this.state.lastnameError === false &&
      this.state.emailError === false && this.state.phonenumberError === false) {
      this.setState({
        isDisabled: false
      })
    }
  }
  submitForm(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div className="main-div">
        <div className="border">
        <div className="lee">
          <img src={logo} width="50px" height="50px" />
        </div>
        <div className="lee">
          <h1>this is project</h1>
          <p>this is </p>
        </div>
        </div>

        <div className="container left">
          <div className="arrow"><i class="fas fa-arrow-left"></i></div>
          <img src="C:/Users/Sravani/Pictures/pexels-photo-1650861.jpg" width="10px" height="10px" />
          <div className="signup">SIGN UP</div>
          <p>Signup to continue</p>

          <div className="card-body">
            <form id="signup-form">
              <div className="form-group">
                <div className="form-label-group">
                  <label htmlFor="firstname">Name<span>*</span></label><br />
                  <div className="first">
                    <input type="text" id="firstname" name="firstname" placeholder=" First name" onChange={(e) => { this.handleChange(e) }} className="form-control" />

                    <div className="msg-first">
                      {this.state.firstnameError ? <span style={{ color: "red" }}>Please Enter First Name</span> : ''}
                    </div>
                    <div className="last">
                      <input type="text" id="lastname" name="lastname" placeholder=" Last Name" onChange={(e) => { this.handleChange(e) }} className="form-control" />
                      <div className="msg-last">
                        {this.state.lastnameError ? <span style={{ color: "red" }}>Please Enter Last Name</span> : ''}
                      </div>
                    </div>
                  </div>
                </div>
              </div><br />
              <div className="form-group">
                <div className="form-label-group">
                  <label htmlFor="email">Email<span>*</span></label><br />
                  <input type="email" id="email" name="email" className="form-control" placeholder="Enter your email" onChange={(e) => { this.handleChange(e) }} />

                  {this.state.emailError ? <span style={{ color: "red" }}>Please Enter valid email address</span> : ''}
                </div>
              </div><br />
              <div className="form-group">
                <div className="form-label-group">
                  <label htmlFor="phonenumber">Phone Number<span>*</span></label><br />
                  <input type="text" id="phonenumber" name="phonenumber" className="form-control" placeholder="Phone Number" onChange={(e) => { this.handleChange(e) }} />

                  {this.state.phonenumberError ? <span style={{ color: "red" }}>Please enter 10 Digits Phone Number</span> : ''}
                </div>
              </div>
              <div className="form-group">
                <div className="form-label-group">
                  <label htmlFor="password">Address<span>*</span></label><br />
                  <textarea className="form-control" placeholder="Address" value="Address" /><br />
                </div>
              </div>
              <div className="form-group">
                <div className="form-label-group">
                  <label htmlFor="When did you buy">When did you buy<span>*</span></label><br />
                  <input type="text" className="form-control" placeholder="When did you buy" />
                </div>
              </div>
              <div className="form-group">
                <div className="form-label-group">
                  <label htmlFor="When did you sell">When did you sell<span>*</span></label><br />
                  <input type="text" className="form-control" placeholder="When did you sell" />
                </div>
              </div>
              <div className="form-group">
                <div className="form-label-group">
                  <label htmlFor="userid">User ID<span>*</span></label><br />
                  <input type="text" className="form-control" placeholder="User ID" />
                </div>
              </div>
              <button>Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default Sign;

