import { useRegisterFields } from '@authentication/hooks/useRegisterFields'
import Button from '@components/Button'
import { AuthPages } from '@constants/pages'
import { useRegister } from '@authentication/hooks/useRegister'

export default function SignUpForm() {
	const {
		registerFields,
		handleInputChange,
		password,
		confirmPassword,
		handlePasswordChange,
		handleConfirmPasswordChange,
	} = useRegisterFields()
	const { handleRegister } = useRegister(registerFields)

	return (
		<main className='flex flex-col items-center justify-center gap-16'>
			<form
				className='grid gap-8 w-72 lg:w-96'
				onSubmit={handleRegister}
			>
				<div className='flex flex-col items-center gap-4 w-full'>
					<h1 className='text-4xl font-bold'>Sign Up</h1>
					<div className='w-16 h-1 bg-blue-500 rounded-lg' />
				</div>
				<div className='grid items-center'>
					<label className='pb-2 text-gray-600'>Usuario</label>
					<input
						type='text'
						placeholder='Ingrese su nombre de usuario'
						className='p-4 rounded-lg outline-blue-300 bg-blue-50'
						value={registerFields.username}
						onChange={(e) => handleInputChange(e, 'username')}
					/>
				</div>
				<div className='flex flex-col lg:flex-row gap-4'>
					<div className='grid items-center'>
						<label className='pb-2 text-gray-600'>Nombre</label>
						<input
							type='text'
							placeholder='Ingrese su nombre'
							className='p-4 rounded-lg outline-blue-300 bg-blue-50'
							value={registerFields.first_name}
							onChange={(e) => handleInputChange(e, 'first_name')}
						/>
					</div>
					<div className='grid items-center'>
						<label className='pb-2 text-gray-600'>Apellido</label>
						<input
							type='text'
							placeholder='Ingrese su apellido'
							className='p-4 rounded-lg outline-blue-300 bg-blue-50'
							value={registerFields.last_name}
							onChange={(e) => handleInputChange(e, 'last_name')}
						/>
					</div>
				</div>

				<div className='grid items-center'>
					<label className='pb-2 text-gray-600'>Correo</label>
					<input
						type='email'
						placeholder='Ingrese su correo'
						className='p-4 rounded-lg outline-blue-300 bg-blue-50'
						value={registerFields.email}
						onChange={(e) => handleInputChange(e, 'email')}
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
				<div className='grid items-center'>
					<label className='pb-2 text-gray-600'>Confirmar contraseña</label>
					<input
						type='password'
						placeholder='Confirme su contraseña'
						className='p-4 rounded-lg outline-blue-300 bg-blue-50'
						value={confirmPassword}
						onChange={handleConfirmPasswordChange}
					/>
				</div>
				<Button text='Sign Up Now' />
				<p className='text-center text-gray-600'>
					Already have an account?{' '}
					<a
						className='text-blue-700 hover:underline'
						href={AuthPages.SignIn.url}
					>
						Sign In
					</a>
				</p>
			</form>
		</main>
	)
}
