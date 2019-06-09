import React,{Component} from 'react';
import Menu from '../menu/menu';
import {NavLink} from 'react-router-dom';
import GenderChart from '../genderchart/genderchart';
import {data} from '../../secondary';
class GenderSecondaryChart extends Component{
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
                <NavLink to="/regionsecondary">Total dropouts in regions</NavLink >               
                <NavLink to="/gendersecondary">Male / Female dropouts in region</NavLink>
                <NavLink to="/districtsecondary">total dropouts in districts</NavLink>
            </div>  
            <GenderChart data={data} />           
            </Menu> 

            </div>

        )
    }
}
export default GenderSecondaryChart;