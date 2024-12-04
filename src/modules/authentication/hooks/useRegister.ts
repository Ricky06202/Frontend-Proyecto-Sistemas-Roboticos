import type { RegisterUser } from '@authentication/constants/userTypes'
import { authRedirect } from '@authentication/logic/authRedirect'
import { toUser } from '@authentication/logic/userConversion'
import { editUser, register } from '@authentication/services/auth'
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
				authRedirect(response)
			})
			.catch((error) => {
				alert(error)
			})
	}

	const handleRegisterOnly = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		register(user)
			.then((response) => {
				console.log(response)
			})
			.catch((error) => {
				alert(error)
			})
	}

	const handleEditUser = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		alert('Coming soon!')
		// editUser(user)
		// 	.then((response) => {
		// 		console.log(response)
		// 	})
		// 	.catch((error) => {
		// 		alert(error)
		// 	})
	}

	return { handleRegister, handleRegisterOnly, handleEditUser }
}
