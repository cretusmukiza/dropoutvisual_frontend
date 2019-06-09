import React,{Component} from 'react';
import './login.css';
import {Link} from 'react-router-dom';
import Loader from 'react-loader-spinner';
import axios from 'axios';
class Login extends  Component{
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:'',
            error:"",
            displayError:false,
            status:false

        }
        this.onChange=this.onChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
    }
    onChange(event){
        event.preventDefault();
        this.setState({
            [event.target.name]:event.target.value
        });
    }
    onSubmit(event){
        event.preventDefault();
        const {email,password}=this.state;
        if(email==="" || password===""){
            this.setState({
                error:"Please fill details",
                displayError:true
            })
        }
        else{
            this.setState({
                error:"",
                displayError:false,
                status:true
            })
            axios.post('https://whispering-plateau-93041.herokuapp.com/users/login',{
                email:email,
                password:password
            }).then((res)=>{
                console.log(res)  
                localStorage.setItem('usertoken',true);
                if(res.data.status){
                    this.setState({
                        status:false,
                        displayError:false
                    });
                    window.location.replace('/home')
                }
                else{
                    this.setState({
                        error:res.data.error,
                        status:false,
                        displayError:true
                    })
                    console.log(res.data.error)
                }
              
            }).catch((error)=>{
                console.log(error)
            })
        }
    }
    render(){
        return(
            <div className="home">
            <div className="form">
                <h2>login into your account</h2>
                <form  onSubmit={this.onSubmit}>
                    <input type="text" name="email" placeholder="Email address" onChange={this.onChange} 
                        value={this.state.email}
                    />
                    <input type="password" name="password" placeholder="Password" onChange={this.onChange}
                        value={this.state.password}
                    />
                    <input type="submit" value="log in" />
                    <div className="errors" style={{
                        display:`${this.state.displayError?"flex":"none"}`
                    }}  >
                        {this.state.error}
                    </div>
                    <div className="status" style={{
                        display:`${this.state.status?"flex":"none"}`}}>
                        <Loader type="ThreeDots" color="#1389E7" height={80} width={80} />                    
                    </div>
                </form>
                
                <div className="form-footer">
                    <p>Need an account? <Link to="/signup">Signup</Link></p>
                </div>
            </div>
            
            </div>

        )
    }
}
export default Login;