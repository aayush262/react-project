import React from 'react';
import FormInput from '../common/formInput/formInput';
import { Button } from '../common/button/button';
import './login.css';
import { Link } from 'react-router-dom';

const defaultForm = {
    email: '',
    password: ''
}

export class Login extends React.Component {
    constructor(){
        super();
        this.state={
            data:{
                ...defaultForm
            },
            error: {
                ...defaultForm
            },
        isValid: false,
        isSubmitting: false
        }
    }

    handleSubmit= e =>{
        e.preventDefault();
    }
    

    handleChange = e => {
        const { name, value} = e.target;
        this.setState((previousState)=>{
            return{
                data: {
                    ...previousState.data,
                    [name]: value
                }
            }
        },()=>{
           this.validateForm(name);
        })
    }

    validateForm=(fieldName)=>{
        let errMsg;
        switch (fieldName) {
            case 'email': errMsg = this.state.data.email?this.state.data.email.includes('@'&&'.com')?'':'Invalid Email':'Email is required'
                break;
            case 'password': errMsg = this.state.data.password?'':'Password is required'
                break;
            default:
                break;
        }

        this.setState((previousState)=>{
            return{
                error: {
                    ...previousState.error,
                    [fieldName]: errMsg
                }
            }
        })
    }

    render(){

        const marginTop = {
            marginTop: '20px'
        }
        const red={
            color: 'red'
        }

        let submitBtn = this.state.isSubmitting
            ?  <Button style = { marginTop } type="submit" disabled={true}>SIGN IN</Button>
            : <Button style = { marginTop } type="submit">SIGN IN</Button>
        return(
            <div className="sign-in">
                <h2 className="title">I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput label='Email' handleChange={this.handleChange} type="text"  name="email"></FormInput>
                    <span style={red}>{this.state.error.email}</span>
                    <FormInput label= 'Password' handleChange={this.handleChange} type="password" name="password"></FormInput>
                    <p style={red}>{this.state.error.password}</p>

                    {submitBtn}
                </form>
                <h2 className="title">Don't have an account?</h2>
                <h3><Link to="/register">Sign Up Now</Link></h3>
            </div>
        )
    }
}