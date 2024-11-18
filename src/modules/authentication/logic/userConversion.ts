import type { ApiUser, User } from '@authentication/constants/userTypes'

export function toUser(user: ApiUser): User {
	return {
		id: user.id,
		username: user.username,
		password: user.password,
		email: user.email,
		first_name: user.first_name,
		last_name: user.last_name,
	}
}
