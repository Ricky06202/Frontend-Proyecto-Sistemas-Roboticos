import { toUser } from '@authentication/logic/userConversion'
import { login } from '@authentication/services/auth'
import { useAccountStore } from '@authentication/stores/accountStore'
import { AppPages } from '@constants/pages'

export const useLogin = (username: string, password: string) => {
	const setToken = useAccountStore((state) => state.setToken)
	const setUser = useAccountStore((state) => state.setUser)

	const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		login(username, password)
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

	return { handleLogin }
}
