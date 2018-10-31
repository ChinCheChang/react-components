import React from 'react';
import './signup.css';
import { ZIndehandler } from '../../functions/zIndexs'

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: ''
    }
  }

  componentDidMount() {
    ZIndehandler(this.props.zIndex);
  }

  onNameChange = (event) => {
    this.setState({name: event.target.value});
  }

  onEmailChange = (event) => {
    this.setState({email: event.target.value});
  }

  onPasswordChange = (event) => {
    this.setState({password: event.target.value});
  }

  onSubmit = (event) => {
    this.props.onRouteChange('main');
    this.props.onSignin(true);

    // fetch('#', {
    //   method: 'POST',
    //   headers: {'content-type': 'application/json'},
    //   body: JSON.stringify({
    //     name: this.state.name,
    //     email: this.state.email,
    //     password: this.state.password
    //   })
    // })
    // .then(res => res.json())
    // .then(data => {
    //   if (data.id){
    //     this.props.updateUser(data);
    //     this.props.onRouteChange('main');
    //   }
    // })
    // .catch(err => console.log(err));
  }

  render() {
    return(
        <article className="signup-content br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 shadow-5 center">
          <main className="pa4 black-80">
            <div className="measure">
              <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="f3 fw6 ph0 mh0">Register</legend>
                <div className="mt3">
                  <label className="db fw6 lh-copy f6">Name</label>
                  <input onChange={this.onNameChange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-black w-100" type="text" name="name"  id="name"/>
                </div>
                <div className="mt3">
                  <label className="db fw6 lh-copy f6">Email</label>
                  <input
                    onChange={this.onEmailChange}
                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-black w-100"
                    type="email"
                    name="email-address"
                    id="email-address"
                  />
                </div>
                <div className="mv3">
                  <label className="db fw6 lh-copy f6">Password</label>
                  <input
                    onChange={this.onPasswordChange}
                    className="b pa2 input-reset ba bg-transparent hover-bg-black hover-black w-100"
                    type="password"
                    name="password"
                    id="password"
                  />
                </div>
              </fieldset>
              <div className="">
                <input
                  onClick = {this.onSubmit}
                  className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                  type="submit"
                  value="Register"
                />
              </div>
            </div>
          </main>
        </article>
    );
  }
}


export default Signup;
