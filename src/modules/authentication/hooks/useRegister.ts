import type { RegisterUser } from '@authentication/constants/userTypes'
import { toUser } from '@authentication/logic/userConversion'
import { register } from '@authentication/services/auth'
import { useAccountStore } from '@authentication/stores/accountStore'
import { AppPages } from '@constants/pages'

export const useRegister = (user: RegisterUser) => {
	const setToken = useAccountStore((state) => state.setToken)
	const setUser = useAccountStore((state) => state.setUser)

	const handleRegister = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		register(user)
			.then((response) => {
				setUser(toUser(response))
				setToken(response.token)
				console.log(response)
				window.location.href = AppPages.Student(response.id).Attendance.url
			})
			.catch((error) => {
				alert(error)
			})
	}

	return { handleRegister }
}
