import React from 'react'
import {Switch,Route} from 'react-router-dom';
import Login from '../src/components/login/login';
import Signup from '../src/components/signup/signup'
import Home from '../src/components/home/home'
import RegionPrimaryChart from '../src/components/primary/region_primary_chart';
import RegionSecondaryChart from '../src/components/secondary/region_secondary_chart';
import GenderPrimaryChart from '../src/components/primary/gender_primary_chart';
import GenderSecondaryChart from '../src/components/secondary/gender_secondary_chart';
import DistrictPrimaryChart from '../src/components/primary/district_primary_chart';
import DistrictSecondaryChart from '../src/components/secondary/district_secondary';
import Upload from '../src/components/upload/upload';
import ProtectedRoute from './protected';
const Routes=()=>{
        return(
            <Switch>
                <Route exact path="/" component={Login} />
                <Route path="/signup" component={Signup} />
                <ProtectedRoute exact path="/home" component={Home}     />
                <ProtectedRoute path="/primary" component={RegionPrimaryChart} />
                <ProtectedRoute path="/secondary" component={RegionSecondaryChart} />
                <ProtectedRoute path="/genderprimary" component={GenderPrimaryChart} />
                <ProtectedRoute path="/gendersecondary" component={GenderSecondaryChart} />
                <ProtectedRoute path="/districtprimary" component={DistrictPrimaryChart} />
                <ProtectedRoute path="/districtsecondary" component={DistrictSecondaryChart} />
                <ProtectedRoute path="/upload" component={Upload} />
            </Switch>
        )
  
    
}
export default Routes;