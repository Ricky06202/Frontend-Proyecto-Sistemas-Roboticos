import type { RegisterUser } from '@authentication/constants/userTypes'
import { useRegister } from '@authentication/hooks/useRegister'
import React, { useState } from 'react'

export default function Formulario() {
	const [formData, setFormData] = useState<RegisterUser>({
		username: '',
		password: '',
		email: '',
		first_name: '',
		last_name: '',
		groups: ['Estudiante'],
	})

	const { handleRegisterOnly } = useRegister(formData)

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target
		if (name === 'groups') {
			setFormData((prevData) => ({
				...prevData,
				groups: [value as 'Estudiante' | 'Profesor' | 'Admin'],
			}))
			return
		}
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}))
	}

	const handleChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setFormData((prevData) => ({
			...prevData,
			groups: [e.target.value as 'Estudiante' | 'Profesor' | 'Admin'],
		}))
	}

	return (
		<div className='flex flex-col items-center gap-8 dark:text-white'>
			{/* Título */}
			<h2 className='text-6xl font-bold justify-center'>Gestionar Usuarios</h2>
			<p className='text-xl text-center p-8'>
				En esta sección el administrador podrá crear la información del usuario.
			</p>

			{/* Formulario para la gestión de usuarios */}
			<form
				onSubmit={handleRegisterOnly}
				className='user-form bg-gray-100 p-8 rounded-lg shadow-lg w-full max-w-md'
			>
				<h3 className='text-2xl font-semibold mb-6'>Ingrese los datos correspondientes</h3>

				{/* Campo de nombre */}
				<div className='form-group mb-4'>
					<label
						htmlFor='username'
						className='block text-gray-900 font-medium mb-2'
					>
						Nombre:
					</label>
					<input
						type='text'
						id='username'
						name='username'
						value={formData.username}
						onChange={handleChange}
						placeholder=' '
						required
						className='w-full p-2 border border-gray-300 rounded'
					/>
				</div>

				{/* Campo de nombre */}
				<div className='form-group mb-4'>
					<label
						htmlFor='first_name'
						className='block text-gray-900 font-medium mb-2'
					>
						Nombre:
					</label>
					<input
						type='text'
						id='first_name'
						name='first_name'
						value={formData.first_name}
						onChange={handleChange}
						placeholder=' '
						required
						className='w-full p-2 border border-gray-300 rounded'
					/>
				</div>

				{/* Campo de apellido */}
				<div className='form-group mb-4'>
					<label
						htmlFor='last_name'
						className='block text-gray-900 font-medium mb-2'
					>
						Apellido:
					</label>
					<input
						type='text'
						id='last_name'
						name='last_name'
						value={formData.last_name}
						onChange={handleChange}
						placeholder=''
						required
						className='w-full p-2 border border-gray-300 rounded'
					/>
				</div>

				{/* Campo de correo */}
				<div className='form-group mb-4'>
					<label
						htmlFor='email'
						className='block text-gray-700 font-medium mb-2'
					>
						Correo electrónico:
					</label>
					<input
						type='email'
						id='email'
						name='email'
						value={formData.email}
						onChange={handleChange}
						placeholder='Ej: juan.perez@ejemplo.com'
						required
						className='w-full p-2 border border-gray-300 rounded'
					/>
				</div>

				{/* Campo de rol */}
				<div className='form-group mb-4'>
					<label
						htmlFor='groups'
						className='block text-gray-700 font-medium mb-2'
					>
						Rol:
					</label>
					<select
						id='groups'
						name='groups'
						value={formData.groups[0]}
						onChange={handleChangeSelect}
						required
						className='w-full p-2 border border-gray-300 rounded'
					>
						<option value='Estudiante'>Estudiante</option>
						<option value='Profesor'>Profesor</option>
						<option value='Admin'>Admin</option>
					</select>
				</div>

				{/* Campo de contraseña */}
				<div className='form-group mb-4'>
					<label
						htmlFor='password'
						className='block text-gray-700 font-medium mb-2'
					>
						Contraseña:
					</label>
					<input
						type='password'
						id='password'
						name='password'
						value={formData.password}
						onChange={handleChange}
						placeholder='Crea una contraseña segura'
						required
						className='w-full p-2 border border-gray-300 rounded'
					/>
				</div>

				{/* Botón de envío */}
				<button
					type='submit'
					className='w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700'
				>
					Crear Usuario
				</button>
			</form>
		</div>
	)
}
