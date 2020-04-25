import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect  } from 'react-router-dom'

const Main = React.lazy(() => import('./App'))

const externalIssue = React.lazy(() => import('./ExternalIssue'))
const internalIssue = React.lazy(() => import('./InternalIssue'))

// Disaster
const disaster = React.lazy(() => import('./Disaster'))

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

const pumpCheck = React.lazy(() => import('./PumpCheck'))
const pumpWork = React.lazy(() => import('./PumpWork'))
const pumpNotWork = React.lazy(() => import('./PumpNotWork'))
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

// Geology
const geology = React.lazy(() => import('./Geology'))
const geologyIssue1Check = React.lazy(() => import('./GeologyIssue1Check'))
const geologyIssue1Work = React.lazy(() => import('./GeologyIssue1Work'))
const geologyIssue1NotWork = React.lazy(() => import('./GeologyIssue1NotWork'))
const geologyIssue2Check = React.lazy(() => import('./GeologyIssue2Check'))
const geologyIssue2Work = React.lazy(() => import('./GeologyIssue2Work'))
const geologyIssue2NotWork = React.lazy(() => import('./GeologyIssue2NotWork'))
const contaminate = React.lazy(() => import('./Contaminate'))
const noContaminate = React.lazy(() => import('./NoContaminate'))
const rock = React.lazy(() => import('./Rock'))
const rockEliminate = React.lazy(() => import('./RockEliminate'))
const rockNoEliminate = React.lazy(() => import('./RockNoEliminate'))
// const lignite = React.lazy(() => import('./Lignite'))
// const metal = React.lazy(() => import('./Metal'))

// Machine
const machine = React.lazy(() => import('./Machine'))
const machineIssue1Check = React.lazy(() => import('./MachineIssue1Check'))
const machineIssue1Work = React.lazy(() => import('./MachineIssue1Work'))
const machineIssue1NotWork = React.lazy(() => import('./MachineIssue1NotWork'))
const machineIssue2Check = React.lazy(() => import('./MachineIssue2Check'))
const machineIssue2Work = React.lazy(() => import('./MachineIssue2Work'))
const machineIssue2NotWork = React.lazy(() => import('./MachineIssue2NotWork'))
const contractorAssigned = React.lazy(() => import('./ContractorAssigned'))
const machineAssigned = React.lazy(() => import('./MachineAssigned'))
const contractorAndMachineAssigned = React.lazy(() => import('./ContractorAndMachineAssigned'))

// Planning
const planning = React.lazy(() => import('./Planning'))
const planningIssue1Check = React.lazy(() => import('./PlanningIssue1Check'))
const planningIssue1Work = React.lazy(() => import('./PlanningIssue1Work'))
const planningIssue1NotWork = React.lazy(() => import('./PlanningIssue1NotWork'))
const planningIssue2Check = React.lazy(() => import('./PlanningIssue2Check'))
const planningIssue2Work = React.lazy(() => import('./PlanningIssue2Work'))
const planningIssue2NotWork = React.lazy(() => import('./PlanningIssue2NotWork'))

const Routes = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact='true' path='/' component={ Main } />

          <Route path='/ExternalIssue' component={ externalIssue } />
          <Route path='/InternalIssue' component={ internalIssue } />
          
          <Route path='/Disaster' component={ disaster } />

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

          <Route path='/PumpCheck' component={ pumpCheck } /> 
          <Route path='/PumpWork' component={ pumpWork } /> 
          <Route path='/PumpNotWork' component={ pumpNotWork } /> 

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

          <Route path='/Geology' component={ geology } /> 
          <Route path='/GeologyIssue1Check' component={ geologyIssue1Check } /> 
          <Route path='/GeologyIssue1Work' component={ geologyIssue1Work } /> 
          <Route path='/GeologyIssue1NotWork' component={ geologyIssue1NotWork } /> 
          <Route path='/GeologyIssue2Check' component={ geologyIssue2Check } /> 
          <Route path='/GeologyIssue2Work' component={ geologyIssue2Work } /> 
          <Route path='/GeologyIssue2NotWork' component={ geologyIssue2NotWork } /> 
          <Route path='/Contaminate' component={ contaminate } /> 
          <Route path='/NoContaminate' component={ noContaminate } /> 
          <Route path='/Rock' component={ rock } /> 
          <Route path='/RockEliminate' component={ rockEliminate } /> 
          <Route path='/RockNoEliminate' component={ rockNoEliminate } /> 
          {/* <Route path='/Lignite' component={ lignite } /> 
          <Route path='/Metal' component={ metal } />  */}

          <Route path='/Machine' component={ machine } /> 
          <Route path='/MachineIssue1Check' component={ machineIssue1Check } /> 
          <Route path='/MachineIssue1Work' component={ machineIssue1Work } /> 
          <Route path='/MachineIssue1NotWork' component={ machineIssue1NotWork } /> 
          <Route path='/MachineIssue2Check' component={ machineIssue2Check } /> 
          <Route path='/MachineIssue2Work' component={ machineIssue2Work } /> 
          <Route path='/MachineIssue2NotWork' component={ machineIssue2NotWork } />
          <Route path='/ContractorAssigned' component={ contractorAssigned } />
          <Route path='/MachineAssigned' component={ machineAssigned } />
          <Route path='/ContractorAndMachineAssigned' component={ contractorAndMachineAssigned } />

          <Route path='/Planning' component={ planning } /> 
          <Route path='/PlanningIssue1Check' component={ planningIssue1Check } /> 
          <Route path='/PlanningIssue1Work' component={ planningIssue1Work } /> 
          <Route path='/PlanningIssue1NotWork' component={ planningIssue1NotWork } /> 
          <Route path='/PlanningIssue2Check' component={ planningIssue2Check } /> 
          <Route path='/PlanningIssue2Work' component={ planningIssue2Work } /> 
          <Route path='/PlanningIssue2NotWork' component={ planningIssue2NotWork } /> 

        </Switch>
      </Suspense>
    </Router>
  )
}

export default Routes