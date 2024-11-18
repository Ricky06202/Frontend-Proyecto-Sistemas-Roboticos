import { useTokenStore } from '@authentication/stores/tokenStore'
import { useState } from 'react'

export const useCredentials = () => {
	const [credentials, setCredentials] = useState({
		username: '',
		password: '',
	})
	const toggleRememberMe = useTokenStore((state) => state.toggleRememberMe)
	const rememberMe = useTokenStore((state) => state.rememberMe)

	const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setCredentials({ ...credentials, username: event.target.value })
	}
	const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setCredentials({ ...credentials, password: event.target.value })
	}

	return {
		username: credentials.username,
		password: credentials.password,
		toggleRememberMe,
		rememberMe,
		handleUsernameChange,
		handlePasswordChange,
	}
}
