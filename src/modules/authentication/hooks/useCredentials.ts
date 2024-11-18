import { useAccountStore } from '@authentication/stores/accountStore'
import { useState } from 'react'

export const useCredentials = () => {
	const [credentials, setCredentials] = useState({
		username: '',
		password: '',
	})
	const toggleRememberMe = useAccountStore((state) => state.toggleRememberMe)
	const rememberMe = useAccountStore((state) => state.rememberMe)

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
