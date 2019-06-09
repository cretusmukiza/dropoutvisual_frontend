import React,{Component} from 'react';
import Menu  from '../menu/menu';
import {Link} from 'react-router-dom';
import Loader from 'react-loader-spinner'
import './upload.css';
class Upload extends Component{
    constructor(props){
        super(props);
        this.state={
            email:"",
            password:'',
            displayError:false,
            error:'',
            status:false
        }
        this.onHandleSubmit=this.onHandleSubmit.bind(this);
    }
    onHandleSubmit(event){
        event.preventDefault()
        this.setState({
            displayError:true,
            error:'Data is in invalid format'
        })
    }
    render(){
        return(
            <div className="App">
            <Menu>
                <form className="upload-form" >
                    <h2>Upload your data</h2>
                    <div className="upload-input">
                        <select name="region">
                            <option value="">Select region</option>
                            <option value="">Dar Es Salaam</option>
                            <option value="">Tanga</option>
                            <option value="">Arusha</option>
                            <option value="">Dodoma</option>
                            <option value="">Mbeya</option>
                        </select>
                        <select name="region">
                            <option value="">Select council</option>
                            <option value="">Kinondoni</option>
                            <option value="">Tanga</option>
                            <option value="">Bandari</option>
                            <option value="">Dodoma</option>
                            <option value="">Mbeya</option>
                        </select>
                        
                    </div>
                    <div className="upload-input">
                    <select name="school-level">
                            <option value="">Select the school level </option>
                            <option value="">Primary school</option>
                            <option value="">Secondary school</option>
                           
                     </select>
                     <select name="gender">
                            <option value="">Select the gender. </option>
                            <option value="">Male</option>
                            <option value="">Female</option>
                           
                     </select>                      
                                       
                    </div>
                    <div className="upload-input">
                        <input type="number" name="death_female" placeholder="Number of female students dead" />
                        <input type="number" name="death_male" placeholder="Number of male students dead" />                      
                                       
                    </div>
                    <div className="upload-input">
                        <input type="number" name="pregnancy_female" placeholder="Number of pregnant female students" />
                        <input type="number" name="pregnancy_male" placeholder=""  disabled/>                      
                                       
                    </div>
                    <div className="upload-input">
                        <input type="number" name="truancy_female" placeholder="Number of truant female students " />
                        <input type="number" name="truancy_male" placeholder="Number of truant male students " />                       
                                       
                    </div>
                     
                    <div className="upload-input"
                        style={{
                            display:`${this.state.displayError?'flex':'none'}`
                        }}
                    
                    >
                          <p>{this.state.error}</p>  

                    </div>  
                    <div className="upload-input">
                         <input type="submit " value="upload data" onClick={this.onHandleSubmit} className="submit" />
                
                    </div>                
                
                </form>
           
           
    
                
            </Menu> 

            </div>

        );
    }
}
export default Upload;