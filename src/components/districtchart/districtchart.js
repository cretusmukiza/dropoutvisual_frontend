import React,{Component} from 'react';
import {Chart} from 'react-google-charts';
import {data} from '../../data.js';
import _ from 'lodash';
import { type } from 'os';
import '../chart/chart.css';
class DistrictChart extends Component{
    constructor(props){
        super(props);
        this.state={
            region:"",
            data:[],
            width:"100%",
            regions:[]
        }
        this.handleRegion=this.handleRegion.bind(this);
        this.filterRegion=this.filterRegion.bind(this);
    }
    handleRegion(event){
        if(event.target.value!=="REGION"){
            this.setState({region:event.target.value})
        }
        this.filterRegion(event.target.value)
    }
    filterRegion(index){
        const selectedRegion=this.props.data.filter((region)=>(
            region.region===index || region.region==="REGION"
        ))
    
        const graph=selectedRegion.map((regions)=>{
            const result=_.pick(regions,['council','grand_total']);
         
            return  result; 
        } 
        
        )
        var reducedUsers = _.reduce(graph, function (result, user) {
            
            (result[user.council] || (result[user.council] = [])).push(user);
        
      
        return result;
         }, {});   
        
        var finalUser=_.map(reducedUsers).map((user,index)=>{
            const key=user[0].council;            
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
        const width=(finalUser.length>15)?"180%":"100%";
        this.setState({
            data:finalUser,
            width:width
        });

    }
 
  
    render(){
        const width=window.innerWidth       
        var screenWidth="90%";
        var screeHeight="490px"  
        if(width<600){
         screenWidth="90%";
         screeHeight="100%"  
        } 
        const regions=this.props.data.map((region)=>{
            if(region.region !=="REGION"){
                return region.region
            }
           
        })
        const linedata=_.sortedUniq(regions);
        
        if(this.state.data.length>0){
            return(
                <div>
                 <div id="select" >
                <select name="region" onChange={this.handleRegion}>
                   {
                       linedata.map((line,index)=>(
                           <option  key={index}>{line}</option>
                       ))
                   }
                 </select> 
                </div>                 
                <div className={"my-pretty-chart-container"}>           
                <Chart
                    width={screenWidth}
                    height={screeHeight}
                    chartType="PieChart"
                    loader={<div>Loading Chart</div>}
                    data={
                        this.state.data
                    }
                    options={{
                    title: `Dropout in  districts of ${this.state.region} region`,
                    pieHole:0.3,
                    is3D:false
                    }}
                    rootProps={{ 'data-testid': '1' }}
                />             
                </div>
             </div>                  
            )
            }
            else{
                return(
                 <div  className={"my-pretty-chart-container"} style={{
                     minHeight:"60vh"
                 }} >
                         
                       
                 <div id="select">
                    <select name="region" onChange={this.handleRegion}>
                   {
                       linedata.map((line,index)=>(
                           <option key={index}>{line}</option>
                       ))
                   }
                </select>          
                </div>
    
                </div>   
                   
                   
                )
            }     
     
        
     
    }
}
export default DistrictChart;