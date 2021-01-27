import React from 'react';
import {Provider} from 'react-redux';
import MainRoutes from './routes';
import store from './store';
import ReduxToastr from 'react-redux-toastr';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';

function App (){
  
  return(
    <Provider store={store}>
      <>
        <MainRoutes/>
        <ReduxToastr
          timeOut={3500}
          newestOnTop={true}
          preventDuplicates
          position="top-right"
          transitionIn="fadeIn"
          transitionOut="fadeOut"
          progressBar
          closeOnToastrClick/>
      </>
    </Provider>
  );
}

export default App;