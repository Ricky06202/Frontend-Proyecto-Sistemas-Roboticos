import axios from 'axios'

const apiAuth = axios.create({
	baseURL: 'http://asiscan.sytes.net/users/api/',
})

export function login(user: string, password: string) {
	return apiAuth
		.post('login/', {
			username: user,
			password: password,
		})
		.then((response) => response.data)
}

export function register() {
	return apiAuth.post('register/').then((response) => response.data)
}
