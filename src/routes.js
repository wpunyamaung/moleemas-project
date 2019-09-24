import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect  } from 'react-router-dom'

const Main = React.lazy(() => import('./App'))
const aMain = React.lazy(() => import('./A-Main'))
const bAuxSub = React.lazy(() => import('./B-AuxSub'))

const Routes = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact='true' path='/' component={ Main } />
          <Route path='/A-Main' component={ aMain } />
          <Route path='/B-AuxSub' component={ bAuxSub } />
        </Switch>
      </Suspense>
    </Router>
  )
}

export default Routes