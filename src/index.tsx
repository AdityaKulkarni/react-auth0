import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import {BrowserRouter} from 'react-router-dom'
import {Auth0Provider} from '@auth0/auth0-react'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
	<Auth0Provider
		domain={process.env.REACT_APP_AUTH0_DOMAIN as string}
		clientId={process.env.REACT_APP_CLIENT_ID as string}
		authorizationParams={{
			redirect_uri: window.location.origin,
		}}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Auth0Provider>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
