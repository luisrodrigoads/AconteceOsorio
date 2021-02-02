import React,{useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import InitialPage from './pages/InitialPage';
import LoginPage from './pages/LoginPage';
import LogoutPage from './pages/LogoutPage';
import UserInitialPage from './pages/UserInitialPage';
import { BrowserRouter as  Router, Redirect ,Route } from 'react-router-dom';
import AuthOrApp from  './main/Auth';
import RegisterUserPage from './pages/RegisterUserPage';

import { relogin } from './actions/authActions';

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

    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(relogin());
        
    }, [dispatch]);

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
