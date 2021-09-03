import React, { Component } from 'react'
import axios from 'axios'
import md5 from 'md5'
import {Link} from 'react-router-dom'

const URL = 'https://apialbum.herokuapp.com/usuario'

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

    iniciarSesion = async () =>{

        await axios.get(URL,{
            params: {
                    username: this.state.usuarios.username,
                    password: md5(this.state.usuarios.password)
            }}
            )

            .then(response =>{

                return response.data;

            })

            .then(response =>{

                if(response.length){

                    const respuesta = response[0];
                    alert(`Bienvenido ${respuesta.nombre} ${respuesta.apellido_paterno}`)
                
                }else{
                    alert('el usuario o la contraseña no son correctos');
                } 

            })

            .catch(error =>{

                console.log(error);

            })
    }
    
    handleSubmit = e =>{
        e.preventDefault();
        this.iniciarSesion()
    }
    
    render() {
        return (
            <div>
            <form className="form-signin" onSubmit={this.handleSubmit}>
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
                  <Link
                    to="/registro"
                    className="Link"
                   >
                    Create new account
                </Link>
            </form>
        </div>
        )
    }
}
