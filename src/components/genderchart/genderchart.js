import React,{Component} from 'react';
import {Chart} from 'react-google-charts';
import  '../chart/chart.css';
import _ from 'lodash';
import { type } from 'os';
class GenderChart extends Component{
    constructor(props){
        super(props);
        this.state={
            region:"",
            data:[],
            width:"180%"
        }
        }
       render(){
        const graph=this.props.data.map((regions)=>{
            const result=_.pick(regions,['region','total_male','total_female']);
         
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
            const sum_female=user.map((result)=>{
                return result.total_female
            })
            const sum_male=user.map((result)=>{
                return result.total_male
            })

            var female_sum=0;
            var male_sum=0
            for(let i=0; i<sum_female.length;i++){ 
                if(isNaN(sum_female[i])){
                 female_sum=sum_female[i];
                }
                else{
                 female_sum+=Number(sum_female[i]);
                }

            }
            for(let i=0; i<sum_male.length;i++){ 
                if(isNaN(sum_male[i])){
                 male_sum=sum_male[i];
                }
                else{
                 male_sum+=Number(sum_male[i]);
                }

            }
            return [key ,female_sum,male_sum];
        } ) 
       
       
        const regions=this.props.data.map((region)=>{
            if(region.region!=="REGION"){
                return region.region
            }
           
        })       
        const width=window.innerWidth
        var screenWidth="98%";
        var screeHeight="490px"  
        if(width<600){
         screenWidth="100%";
         screeHeight="400px"  
        }

        return(
            <div>                   
            <div className={"my-pretty-chart-container"}>
                <Chart
                    width={screenWidth}
                     height={screeHeight}
                    chartType="Bar"
                    loader={<div>Loading Chart</div>}
                    data={finalUser}
                    options={{  
                     // Material design options
                    chart: {
                     title: ` Male / Female dropouts in region`
     
                     },
            }}
            // For tests
            rootProps={{ 'data-testid': '1' }}
            />
     
            </div>
        </div>         
        
        )
        }       
    }

export default GenderChart;