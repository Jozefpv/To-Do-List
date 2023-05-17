import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { NightProvider } from './context/night'

ReactDOM.createRoot(document.getElementById('root')).render(
  <NightProvider>
    <App />
  </NightProvider>
)
