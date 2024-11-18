import Button from '@components/Button'
import { AuthPages } from '@constants/pages'

export default function SignUpForm() {
	return (
		<main className='flex flex-col items-center justify-center gap-16'>
			<form className='grid gap-8 w-72 lg:w-96'>
				<div className='flex flex-col items-center gap-4 w-full'>
					<h1 className='text-4xl font-bold'>Sign Up</h1>
					<div className='w-16 h-1 bg-blue-500 rounded-lg' />
				</div>
				<div className='flex flex-col lg:flex-row gap-4'>
					<div className='grid items-center'>
						<label className='pb-2 text-gray-600'>Nombre</label>
						<input
							type='text'
							placeholder='Ingrese su nombre'
							className='p-4 rounded-lg outline-blue-300 bg-blue-50'
						/>
					</div>
					<div className='grid items-center'>
						<label className='pb-2 text-gray-600'>Apellido</label>
						<input
							type='text'
							placeholder='Ingrese su apellido'
							className='p-4 rounded-lg outline-blue-300 bg-blue-50'
						/>
					</div>
				</div>
				<div className='grid items-center'>
					<label className='pb-2 text-gray-600'>Correo</label>
					<input
						type='email'
						placeholder='Ingrese su correo'
						className='p-4 rounded-lg outline-blue-300 bg-blue-50'
					/>
				</div>
				<div className='grid items-center'>
					<label className='pb-2 text-gray-600'>Contraseña</label>
					<input
						type='password'
						placeholder='Ingrese su contraseña'
						className='p-4 rounded-lg outline-blue-300 bg-blue-50'
					/>
				</div>
				<div className='grid items-center'>
					<label className='pb-2 text-gray-600'>Confirmar contraseña</label>
					<input
						type='password'
						placeholder='Confirme su contraseña'
						className='p-4 rounded-lg outline-blue-300 bg-blue-50'
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
