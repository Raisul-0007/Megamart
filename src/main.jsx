import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ApiData } from './components/ApiData.jsx'
import { Provider } from 'react-redux'
import { store } from './store.js'
createRoot(document.getElementById('root')).render(
    <Provider store={store}>
    <ApiData>
    <App />
    </ApiData>
    </Provider>
)
