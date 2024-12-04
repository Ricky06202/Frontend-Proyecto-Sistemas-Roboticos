import type { ApiUser, User } from '@authentication/constants/userTypes'

export function toUser(user: ApiUser): User {
	return {
		id: user.id,
		id_estudiante: user.id_estudiante,
		username: user.username,
		password: user.password,
		email: user.email,
		first_name: user.first_name,
		last_name: user.last_name,
		groups: user.groups,
	}
}
