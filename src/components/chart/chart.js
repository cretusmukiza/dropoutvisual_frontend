import React,{Component} from 'react';
import {Chart} from 'react-google-charts';
import './chart.css';
import _ from 'lodash';
import { type } from 'os';
class RegionChart extends Component{
    constructor(props){
        super(props);
        this.state={

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
                    regionSum=sum[i];
                }
                else{
                    regionSum+=Number(sum[i]);
                }

            }
            return [key,regionSum];
        } ) 
        const width=window.innerWidth
        var screenWidth="103%";
        var screeHeight="400px"  
        if(width<600){
         screenWidth="100%";
         screeHeight="400px"  
        }

      
       
        console.log(reducedUsers);
        return(
          
            <div className={"my-pretty-chart-container"} >
                 <Chart
            width="100%"
            height="400px"
            chartType="Bar"
            loader={<div>Loading Chart</div>}
            data={finalUser}
            options={{  
             // Material design options
            chart: {
            title: 'Total dropout vs Region',
     
            },
            }}
            // For tests
            rootProps={{ 'data-testid': '2' }}
            />
             </div>
        )
        
    }
}
export default RegionChart;