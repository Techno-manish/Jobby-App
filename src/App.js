import {lazy, Suspense} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'

import './App.css'

import Loader from 'react-loader-spinner'
import ProtectedRoute from './components/ProtectedRoute'

const LoginForm = lazy(() => import('./components/LoginForm'))
const Home = lazy(() => import('./components/Home'))
const Jobs = lazy(() => import('./components/Jobs'))
const JobItemDetails = lazy(() => import('./components/JobItemDetails'))
const NotFound = lazy(() => import('./components/NotFound'))

const App = () => (
  <>
    <Suspense
      fallback={
        <div className="loader-container" data-testid="loader">
          <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
        </div>
      }
    >
      <Switch>
        <Route exact path="/login" component={LoginForm} />
        <ProtectedRoute exact path="/" component={Home} />
        <ProtectedRoute exact path="/jobs" component={Jobs} />
        <ProtectedRoute exact path="/jobs/:id" component={JobItemDetails} />
        <Route path="/not-found" component={NotFound} />
        <Redirect to="/not-found" />
      </Switch>
    </Suspense>
  </>
)

export default App
