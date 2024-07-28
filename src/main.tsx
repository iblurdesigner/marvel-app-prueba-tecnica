import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.scss'
import { AxiosInterceptor } from './interceptors/axios.interceptor.tsx'

AxiosInterceptor()

ReactDOM.createRoot(document.getElementById('root')!).render(
    <App />
)
