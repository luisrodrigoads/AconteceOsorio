import React from 'react';
import {Provider} from 'react-redux';
import MainRoutes from './routes';
import store from './store';
import ReduxToastr from 'react-redux-toastr'

function App (){
  
  return(
    <Provider store={store}>
      <>
      <MainRoutes/>
      </>
    </Provider>
  );
}

export default App;