import React, { Component } from 'react'

export default class Login extends Component {
    
    constructor (){
        super();
        this.state = {
            usuarios:{
                username: '',
                password: ''
            }
        }
    }

    handleChange = async e => {
        await this.setState({
            usuarios: {
                ...this.state.usuarios,
                [e.target.name]: e.target.value
            }
        });
        console.log(this.state.usuarios) //imprimir todo el estado 
    }
    
    
    render() {
        return (
            <div>
            <form className="form-signin">
                <h1 className="h4 mb-3 font-weight-normal">
                    Inicio de sesión
                </h1>

                <input
                    type="email"
                    id="inputEmail"
                    className="form-control mt-1"
                    placeholder="Email"
                    required=""
                    name="username"
                    onChange={this.handleChange}
                />

                <input
                    type="Password"
                    id="inputPassword"
                    className="form-control mt-1"
                    placeholder="Contreña"
                    required=""
                    name="password"
                    onChange={this.handleChange}
                />

                <button
                    type="submit"
                    className="btn btn-primary btn-block"
                    // onChange={this.iniciarSesion()}
                >
                    Login
                </button>

                <div className="">
                    <p>Login with social networks</p>

                    <div className="google-btn btn-primary">
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
                </div>
                  <a
                    to=""
                    className="Link"
                    href="to"
                   >
                    Create new account
                </a>
            </form>
        </div>
        )
    }
}
