/// Navigation Panel 
import Login from "./Login"
import Logout from "./Logout"

function NavigationPanel(props){
    return <nav>
        {props.userIsConnected ? <Logout logout={props.logout}/> : <Login login={props.login}/>} 
         </nav>
}

export default NavigationPanel 