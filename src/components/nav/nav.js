import React,{Component} from 'react';
import './nav.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook,faList,faUserCircle} from '@fortawesome/free-solid-svg-icons'
import {NavLink} from 'react-router-dom';
library.add(faAddressBook,faList,faUserCircle)
class Navigation extends Component{
    constructor(props){
        super(props);
        this.state={

        }
        this.logout=this.logout.bind(this);
    }
    logout(){
        localStorage.removeItem('usertoken')
        window.location.replace('/');
    }
    render(){
        return(
        <nav>
            <a><FontAwesomeIcon icon="list"/></a>
            <ul>    
               <li><NavLink to="/home" activeClassName="active">Home</NavLink></li> 
               <li><NavLink to="/secondary" activeClassName="active">Secondary schools</NavLink></li> 
               <li> <NavLink to="/primary" activeClassName="active">Primary School</NavLink></li>
               <li><NavLink to="/upload" activeClassName="active">Upload data</NavLink></li>
            </ul>
            <div>
                <FontAwesomeIcon icon="user-circle" />
               <span><a onClick={this.logout}>Logout</a></span> 

            </div>
        </nav>
        )
    }
}
export default Navigation;