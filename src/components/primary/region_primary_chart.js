import React,{Component} from 'react';
import Menu from '../menu/menu';
import {NavLink} from 'react-router-dom';
import RegionChart from '../chart/chart';
import {data} from '../../primary';
class RegionPrimaryChart extends Component{
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
            <RegionChart data={data} />           
            </Menu> 

            </div>

        )
    }
}
export default RegionPrimaryChart;