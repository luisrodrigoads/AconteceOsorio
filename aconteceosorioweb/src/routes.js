import React,{useEffect} from 'react';
import {useSelector} from 'react-redux'
import InitialPage from './pages/InitialPage';
import LoginPage from './pages/LoginPage';
import UserInitialPage from './pages/UserInitialPage';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import AuthOrApp from  './main/Auth';
import RegisterUserPage from './pages/RegisterUserPage';

const PrivateRoute = ({component: Component, ...rest }) => {


    const user = useSelector(state => state.user.personalInfo);

    useEffect(() => {
        
    }, []);

    return(
        <Route
            {...rest}
            render={(props, ) =>{
                return(
                    
                    AuthOrApp() && rest.enabledFor.indexOf(user.userType) > -1
                        ? <Component {...props} {...rest}/>
                        : 
                        <Redirect from='*' to='/' />
                        
                        //<Redirect to={{pathname:"/", state: {from: props.location}}}/>
                        
                )}}
        />
    )
}

export default function MainRoutes(){

    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={InitialPage} />
                <Route path='/LoginPage' component={LoginPage}/>
                <Route path='/RegisterUserPage' component={RegisterUserPage}/>
                <PrivateRoute enabledFor={['INSTITUTION']} path='/InitialUserPage' component={UserInitialPage}/>
            </Switch>
        </BrowserRouter>  
    );
}
