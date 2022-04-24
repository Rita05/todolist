import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'virtual:windi.css'
import { WindyProvider } from '@webeetle/windy'
import { Provider } from 'react-redux'
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import TaskListReducer from './TasksWidget/reducer'


const middleware = getDefaultMiddleware({
  immutableCheck: false,
  serializableCheck: false,
  thunk: true,
});

const store = configureStore({
      reducer: {
        TaskListReducer: TaskListReducer
      },
      middleware,
      devTools: process.env.NODE_ENV !== 'production',
});


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <WindyProvider>
        <App />
        </WindyProvider>
    </Provider>
</React.StrictMode>, 
)

