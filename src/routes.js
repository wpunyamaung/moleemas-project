import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect  } from 'react-router-dom'

const Main = React.lazy(() => import('./App'))
const Form1 = React.lazy(() => import('./A-Main'))
const Form2 = React.lazy(() => import('./B-AuxSub'))

const Routes = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact='true' path='/' component={ Main } />
          <Route path='/form1' component={ Form1 } />
          <Route path='/form2' component={ Form2 } />
        </Switch>
      </Suspense>
    </Router>
  )
}

export default Routes