import { login } from '@authentication/services/auth'
import { useTokenStore } from '@authentication/stores/tokenStore'

export const useLogin = (username: string, password: string) => {
	const setToken = useTokenStore((state) => state.setToken)

	const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		login(username, password).then((response) => {
			setToken(response.token)
			console.log(response)
		})
	}

	return { handleLogin }
}
