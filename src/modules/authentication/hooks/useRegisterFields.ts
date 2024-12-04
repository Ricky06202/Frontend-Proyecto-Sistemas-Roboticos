import type { RegisterUser } from '@authentication/constants/userTypes'
import { useEffect, useState } from 'react'

export const useRegisterFields = () => {
	const [registerFields, setRegisterFields] = useState<RegisterUser>({
		username: '',
		password: '',
		email: '',
		first_name: '',
		last_name: '',
		groups: ['Admin'],
	})
	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')

	useEffect(() => {
		if (password === confirmPassword && password.trim().length > 0) {
			registerFields.password = password
		} else {
			registerFields.password = ''
		}
	}, [password, confirmPassword])

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>, field: string) => {
		setRegisterFields({ ...registerFields, [field]: event.target.value })
	}

	const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(event.target.value)
	}

	const handleConfirmPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setConfirmPassword(event.target.value)
	}

	return {
		registerFields,
		handleInputChange,
		password,
		confirmPassword,
		handlePasswordChange,
		handleConfirmPasswordChange,
	}
}
