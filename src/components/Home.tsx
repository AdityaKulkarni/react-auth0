import {useAuth0} from '@auth0/auth0-react'

const Home = () => {
	const {logout, user} = useAuth0()

	return (
		<div className='flex flex-col bg-gray-500 text-white w-full h-screen items-center justify-center'>
			Welcome, {user?.email}
			<div
				className='bg-gray-300 text-black border-2 h-fit w-fit p-4 rounded-sm cursor-pointer mt-4'
				onClick={() => logout()}>
				Logout
			</div>
		</div>
	)
}

export default Home
