import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect  } from 'react-router-dom'

const Main = React.lazy(() => import('./App'))
// Disaster
const disaster = React.lazy(() => import('./Disaster1'))
const disaster1Y = React.lazy(() => import('./Disaster2'))

// Earthquake
const earthquakeCheck = React.lazy(() => import('./EqCheck'))
const earthquakeWorkCheck = React.lazy(() => import('./EqWorkCheck'))
const earthquakeNoImpact = React.lazy(() => import('./EqNoImpact'))
const eqWorkSomeArea = React.lazy(() => import('./EqWorkSomeArea'))
const eqNoWork = React.lazy(() => import('./EqNoWork'))

// Strom
const stromCheck = React.lazy(() => import('./StromCheck'))
const stromHeavy = React.lazy(() => import('./StromHeavy'))
const stromLight = React.lazy(() => import('./StromLight'))

// Flood
const floodCheck = React.lazy(() => import('./FloodCheck'))
const floodHeavy = React.lazy(() => import('./FloodHeavy'))
const floodLight = React.lazy(() => import('./FloodLight'))

//Landslide
const landslideCheck = React.lazy(() => import('./LandslideCheck'))
const landslideImpact = React.lazy(() => import('./LandslideImpact'))
const landslideNoImpact = React.lazy(() => import('./LandslideNoImpact'))
const landslideWork = React.lazy(() => import('./LandslideWork'))
const landslideNoWork = React.lazy(() => import('./LandslideNoWork'))

//Mine wall damage
const minewallCheck = React.lazy(() => import('./MinewallCheck'))
const minewallDamage = React.lazy(() => import('./MinewallDamage'))
const minewallNoDamage = React.lazy(() => import('./MinewallNoDamage'))
const minewallWork = React.lazy(() => import('./MinewallWork'))
const minewallNoWork = React.lazy(() => import('./MinewallNoWork'))

const Routes = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact='true' path='/' component={ Main } />
          
          <Route path='/Disaster' component={ disaster } />
          <Route path='/Disaster1Y' component={ disaster1Y } />

          <Route path='/EarthquakeCheck' component={ earthquakeCheck } />
          <Route path='/EarthquakeWorkCheck' component={ earthquakeWorkCheck } /> 
          <Route path='/EarthquakeNoImpact' component={ earthquakeNoImpact } /> 
          <Route path='/EqWorkSomeArea' component={ eqWorkSomeArea } /> 
          <Route path='/EqNoWork' component={ eqNoWork } /> 

          <Route path='/StromCheck' component={ stromCheck } /> 
          <Route path='/StromHeavy' component={ stromHeavy } /> 
          <Route path='/StromLight' component={ stromLight } /> 

          <Route path='/FloodCheck' component={ floodCheck } /> 
          <Route path='/FloodHeavy' component={ floodHeavy } /> 
          <Route path='/FloodLight' component={ floodLight } /> 

          <Route path='/LandslideCheck' component={ landslideCheck } /> 
          <Route path='/LandslideImpact' component={ landslideImpact } /> 
          <Route path='/LandslideNoImpact' component={ landslideNoImpact } /> 
          <Route path='/LandslideWork' component={ landslideWork } /> 
          <Route path='/LandslideNoWork' component={ landslideNoWork } /> 
          
          <Route path='/MinewallCheck' component={ minewallCheck } /> 
          <Route path='/MinewallDamage' component={ minewallDamage } /> 
          <Route path='/MinewallNoDamage' component={ minewallNoDamage } /> 
          <Route path='/MinewallWork' component={ minewallWork } /> 
          <Route path='/MinewallNoWork' component={ minewallNoWork } /> 

        </Switch>
      </Suspense>
    </Router>
  )
}

export default Routes