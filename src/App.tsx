import {Route, Routes} from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Login from './components/Login'
import ProtectedRoute from './components/ProtectedRoute'

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route index path='/' element={<Login />} />
				<Route
					path='/home'
					element={<ProtectedRoute children={Home} />}
				/>
			</Routes>
		</div>
	)
}

export default App
