export interface ApiUser {
	id: number
	id_estudiante: number
	username: string
	password: string
	email: string
	first_name: string
	last_name: string
	is_active: boolean
	is_staff: boolean
	is_superuser: boolean
	groups: ['Profesor' | 'Estudiante' | 'Admin']
	token: string
}

export interface User {
	id: number
	id_estudiante: number
	username: string
	password: string
	email: string
	first_name: string
	last_name: string
	groups: ['Profesor' | 'Estudiante' | 'Admin']
}

export interface RegisterUser {
	username: string
	password: string
	email: string
	first_name: string
	last_name: string
	groups: ['Profesor' | 'Estudiante' | 'Admin']
}
