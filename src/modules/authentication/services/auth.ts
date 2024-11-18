import type { ApiUser, RegisterUser } from '@authentication/constants/userTypes'
import axios from 'axios'

const apiAuth = axios.create({
	baseURL: 'http://asiscan.sytes.net/users/api/',
})

export function login(user: string, password: string): Promise<ApiUser> {
	return apiAuth
		.post('login/', {
			username: user,
			password: password,
		})
		.then((response) => response.data)
}

export function register(user: RegisterUser): Promise<ApiUser> {
	return apiAuth.post('register/', user).then((response) => response.data)
}
