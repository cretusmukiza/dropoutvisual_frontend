import React,{Component} from 'react';
import {Chart} from 'react-google-charts';
import _ from 'lodash';
import { type } from 'os';
import ReactMapGL from 'react-map-gl';
class MapSummary extends Component{
    constructor(props){
        super(props);
        this.state={
             width:"180%",
             viewport: {
             width: '100%',
            height: '100%',
            latitude: -6.3728253,
            longitude:34.8924826,
            zoom: 4.5
            }
        }   
    }
 
  
    render(){

        console.log(this.props.data)
        const graph=this.props.data.map((regions)=>{
            const result=_.pick(regions,['region','grand_total']);
         
            return  result; 
        } 
        
        )
        var reducedUsers = _.reduce(graph, function (result, user) {
            
                (result[user.region] || (result[user.region] = [])).push(user);
            
          
            return result;
        }, {});
        
        var finalUser=_.map(reducedUsers).map((user,index)=>{
            const regionObject={};
            const key=user[0].region;            
            const sum=user.map((result)=>{
                return result.grand_total
            })
            var regionSum=0;
            for(let i=0; i<sum.length;i++){ 
                if(isNaN(sum[i])){
                    regionSum="City";
                }
                else{
                    regionSum+=Number(sum[i]);
                }

            }
            return [key,regionSum];
        } ) 
        const width=window.innerWidth
        const height=window.innerHeight;
        var screenWidth="99.38%";
        var screeHeight="99.38%"  
        if(width< 800){
         screenWidth="100%";
         screeHeight="100"  
        }

      
       
        console.log(finalUser);
        return(
            <ReactMapGL
            mapStyle="mapbox://styles/mapbox/streets-v9"
            mapboxApiAccessToken="pk.eyJ1IjoibXVraXphIiwiYSI6ImNqd25pcnJicjI4OGg0YW8yaTNlZzNhZmgifQ.2mwFABC4m_yejI5zwsnGAA"
            onViewportChange={(viewport) => this.setState({viewport})}
            {...this.state.viewport}
        />
        )
    }
        
}
export default MapSummary;