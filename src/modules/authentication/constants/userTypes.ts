export interface ApiUser {
	id: number
	username: string
	password: string
	email: string
	first_name: string
	last_name: string
	is_active: boolean
	is_staff: boolean
	is_superuser: boolean
	groups: number[]
	token: string
}

export interface User {
	id: number
	username: string
	password: string
	email: string
	first_name: string
	last_name: string
}

export interface RegisterUser {
	username: string
	password: string
	email: string
	first_name: string
	last_name: string
	groups: number[]
}
