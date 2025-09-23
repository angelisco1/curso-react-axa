import { BrowserRouter } from 'react-router'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import './styles.scss'
import configStore from './store/config-store'
import { Provider } from 'react-redux'

const store = configStore()

ReactDOM.createRoot(document.getElementById('root'))
  .render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  )