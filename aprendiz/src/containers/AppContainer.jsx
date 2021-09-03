import React, {Component} from 'react'
import Login from '../components/Login'
import Registro from '../components/Registro'

export default class AppContainer extends Component {
    render() {
        return (
            <div>
                <Login />
                <Registro />
            </div>
        )
    }
}
