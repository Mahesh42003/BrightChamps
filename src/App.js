import {Route, Switch} from 'react-router-dom'
import IntoScreen from './components/IntoScreen'
import InstructionScreen from './components/InstructionScreen'
import ActivityScreen from './components/ActivityScreen'

const App = () => (
  <>
    <Switch>
      <Route exact path="/IntroScreen" component={IntoScreen} />
      <Route exact path="/Instruction Screen" component={InstructionScreen} />
      <Route exact path="/ActivityScreen" component={ActivityScreen} />
    </Switch>
  </>
)

export default App
