import { configureStore } from '@reduxjs/toolkit'
import vendehumosReducer from './vendehumos'


const configStore = () => {
  return configureStore({
    reducer: {
      vendehumosReducer,
    },
    // El thunk ya viene incluido en los default middlewares
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
  })
}

export default configStore