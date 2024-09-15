import Button from '@components/Button'
import { AuthPages } from '@constants/pages'

export default function SignInForm() {
	return (
		<main className='flex flex-col items-center justify-center gap-16'>
			<div className='flex flex-col items-center gap-4'>
				<h1 className='text-4xl font-bold'>Sign In</h1>
				<div className='w-16 h-1 bg-blue-500 rounded-lg' />
			</div>
			<form className='grid gap-8 w-96'>
				<div className='grid items-center'>
					<label className='pb-2 text-gray-600'>Email Address</label>
					<input
						type='email'
						placeholder='Type your email'
						className='p-4 rounded-lg outline-blue-300 bg-blue-50'
					/>
				</div>
				<div className='grid items-center'>
					<label className='pb-2 text-gray-600'>Password</label>
					<input
						type='password'
						placeholder='Enter your password'
						className='p-4 rounded-lg outline-blue-300 bg-blue-50'
					/>
				</div>
				<div className='flex items-center gap-2'>
					<input
						id='remember'
						type='checkbox'
						className='p-4 rounded-lg outline-blue-300 bg-blue-50'
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
