import React,{Component} from 'react';
import Menu from '../menu/menu';
import {NavLink} from 'react-router-dom';
import GenderChart from '../genderchart/genderchart';
import {data} from '../../primary';
class GenderPrimaryChart extends Component{
    constructor(props){
        super(props);
        this.state={
            data:[]

        }
    }
    componentWillMount(){

    }
    render(){
        return(
            <div className="App">
            <Menu>
            <div className="menu-header" style={{
                alignItems:"flex-start",
            }}>
              <NavLink to="/primary">Total dropouts in regions</NavLink >               
                <NavLink to="/genderprimary">Male / Female dropouts in region</NavLink>
                <NavLink to="/districtprimary">total dropouts in districts</NavLink>
            </div>  
            <GenderChart data={data} />           
            </Menu> 

            </div>

        )
    }
}
export default GenderPrimaryChart;