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
import HeaderPage from './pages/componentsPage/HeaderPage';
import EditUserPage from './pages/EditUserPage';
import DetailsUser from './pages/DetailsUser';

function ProtectedRoute({component: Component, ...rest}){

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
    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(relogin());
        
    }, [dispatch]);

    return(
        <>
         
            <Router>

                <HeaderPage 
                    urlPath={ user._id === '' ? "/LoginPage" : '/Logout' }
                    textButton= { user._id === '' ? "Entrar" : "Sair" }  
                    name={user.fantasyName}/>
        
                <Route exact path='/' component={InitialPage} />
                <Route path='/LoginPage' component={LoginPage}/>
                <Route path='/RegisterUserPage' component={RegisterUserPage}/>
                <Route path='/DetailsUser' component={DetailsUser} />
                <ProtectedRoute path='/InitialUserPage' component={UserInitialPage} />
                <ProtectedRoute path='/EditUserPage' component={EditUserPage }/>
                
                <Route path='/Logout' component={LogoutPage}/>
            </Router>
        </>
    );
}
