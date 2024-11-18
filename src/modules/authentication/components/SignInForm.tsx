import { useCredentials } from '@authentication/hooks/useCredentials'
import { useLogin } from '@authentication/hooks/useLogin'
import Button from '@components/Button'
import { AuthPages } from '@constants/pages'

export default function SignInForm() {
	const { username, password, toggleRememberMe, rememberMe, handleUsernameChange, handlePasswordChange } =
		useCredentials()
	const { handleLogin } = useLogin(username, password)

	return (
		<main className='flex flex-col items-center justify-center gap-16'>
			<form
				className='grid gap-8 w-72 lg:w-96'
				onSubmit={handleLogin}
			>
				<div className='flex flex-col items-center gap-4'>
					<h1 className='text-4xl font-bold'>Sign In</h1>
					<div className='w-16 h-1 bg-blue-500 rounded-lg' />
				</div>
				<div className='grid items-center'>
					<label className='pb-2 text-gray-600'>Usuario</label>
					<input
						type='text'
						placeholder='Ingrese su nombre de usuario'
						className='p-4 rounded-lg outline-blue-300 bg-blue-50'
						value={username}
						onChange={handleUsernameChange}
					/>
				</div>

				<div className='grid items-center'>
					<label className='pb-2 text-gray-600'>Contraseña</label>
					<input
						type='password'
						placeholder='Ingrese su contraseña'
						className='p-4 rounded-lg outline-blue-300 bg-blue-50'
						value={password}
						onChange={handlePasswordChange}
					/>
				</div>

				<div className='flex items-center gap-2'>
					<input
						id='remember'
						type='checkbox'
						className='p-4 rounded-lg outline-blue-300 bg-blue-50'
						checked={rememberMe}
						onChange={toggleRememberMe}
					/>
					<label
						htmlFor='remember'
						className='text-gray-600 '
					>
						Remember me
					</label>
				</div>
				<Button text='Sign In' />
				<p className='text-center text-gray-600'>
					Already have an account?{' '}
					<a
						className='text-blue-700 hover:underline'
						href={AuthPages.SignUp.url}
					>
						Sign Up
					</a>
				</p>
			</form>
		</main>
	)
}
