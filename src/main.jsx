import React from 'react'
import ReactDOM from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css"
import{Provider}from 'react-redux'
import store from './redux/todoReducer/redux.js'
import App from './App.jsx'
import 'rodal/lib/rodal.css'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}> 
      <App/>
    </Provider>
     
  </React.StrictMode>,
)
