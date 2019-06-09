import React,{Component} from 'react';
import Menu from '../menu/menu';
import {NavLink} from 'react-router-dom';
import RegionChart from '../chart/chart';
import {data} from '../../secondary';
class RegionSecondaryChart extends Component{
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
                <NavLink to="/secondary">Total dropouts in regions</NavLink >               
                <NavLink to="/gendersecondary">Male / Female dropouts in region</NavLink>
                <NavLink to="/districtsecondary">total dropouts in districts</NavLink>
            </div>  
            <RegionChart data={data} />           
            </Menu> 

            </div>

        )
    }
}
export default RegionSecondaryChart;