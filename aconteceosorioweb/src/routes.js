import React,{useEffect} from 'react';
import {useSelector} from 'react-redux'
import InitialPage from './pages/InitialPage';
import LoginPage from './pages/LoginPage';
import LogoutPage from './pages/LogoutPage';
import UserInitialPage from './pages/UserInitialPage';
import { BrowserRouter as  Router,Switch, Redirect ,Route } from 'react-router-dom';
import AuthOrApp from  './main/Auth';
import RegisterUserPage from './pages/RegisterUserPage';
import {createBrowserHistory} from 'history';

/*const PrivateRoute = ({component: Component}) => {


    const user = useSelector(state => state.user.personalInfo);

    useEffect(() => {
        
    }, []);

    return(
        <Route
            
            render={(props) =>{
                    
                    AuthOrApp()
                        ? (<Component {...props}/>)
                        : (<Redirect to={{pathname:"/", state: {from: props.location}}}/>)
                        
                        //<Redirect from='*' to='/' />
                        
                        //<Redirect to={{pathname:"/", state: {from: props.location}}}/>
                        
                }}
        />
    )
}*/

function ProtectedRoute({component: Component, ...rest}){

    const auth = useSelector(state => state.auth);

    console.log('valid token: ',auth.validToken);

    return(
        <Route
            {...rest}
            render={(props)=>{
                if(AuthOrApp){
                    return <Component />;
                }else{
                    return <Redirect to={{pathname:"/", state:{from: props.location} }}/>
                }
            }}
        />
    );
}


export default function MainRoutes(){

    const user = useSelector(state => state.user.personalInfo);
    


    //const browserHistory = createBrowserHistory();

    return(
        
            <Router>
                <Route exact path='/' component={InitialPage} />
                <Route path='/LoginPage' component={LoginPage}/>
                <Route path='/RegisterUserPage' component={RegisterUserPage}/>
                <ProtectedRoute path='/InitialUserPage' component={UserInitialPage} />
                
                <Route path='/Logout' component={LogoutPage}/>
            </Router>

    );
}
