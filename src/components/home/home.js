import React,{Component} from 'react';
import Menu from '../menu/menu';
import Slider from '../menu/slider'
import Chart from 'react-google-charts';
import {data as primary} from '../../primary';
import {data as secondary} from '../../secondary';
import SummaryMap from '../../summary_map';
import MapSummary from '../map_summary';
class Home extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    render(){
        return(        
            <div className="App">           
            <Menu>
            <div className="menu-header">
                    <p>Welcome</p>
                    <p>Visitors <span>1000</span></p>
                </div>
                <div className="menu-welcome">
                   <p> Welcome!</p>
                    <p>View and explore student dropout statistics for years 2012 to 2017.</p>
                   <p>Also, use your own data. Visualize, get the feel of your data and quickly draw insights from it. </p>   
                </div>
                <div className="map">
                    <div className="dropout-map">
                        <div className="map-header">
                            
                        </div>
                        <div className="map-content">
                            <MapSummary data={primary} />
                        </div>
                        <div className="map-footer">
                            <Slider />
                        </div>
                        <div className="map-graph">

                              <SummaryMap data={primary} title="A map of dropouts in primary school 2013" />
                        </div>
                    </div>
                    <div className="dropout-map">
                        <div className="map-header">
                
                        </div>
                        <div className="map-content">
                           <MapSummary data={secondary} />
                        </div>
                        <div className="map-footer">
                            <Slider />
                        </div>
                        <div className="map-graph">
                          <SummaryMap data={secondary} title="" />
                        
                        </div>
                       
                    </div>
                </div>

        </Menu>     
    

            </div>
        )
       
    }
}
export default Home;