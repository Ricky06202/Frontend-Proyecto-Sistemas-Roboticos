import type { User } from '@authentication/constants/userTypes'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface TokenState {
	user: User | null
	setUser: (user: User | null) => void
	rememberMe: boolean
	toggleRememberMe: () => void
	token: string | null
	setToken: (token: string | null) => void
	logout: () => void
}

export const useAccountStore = create<TokenState>()(
	persist(
		(set, get) => ({
			user: get()?.user ?? null,
			setUser: (user: User | null) => set({ user }),
			rememberMe: get()?.rememberMe ?? false,
			toggleRememberMe: () => set({ rememberMe: !get()?.rememberMe }),
			token: get()?.rememberMe ? (get()?.token ?? null) : null,
			setToken: (token: string | null) => set({ token }),
			logout: () => set({ user: null, token: null, rememberMe: false }),
		}),
		{
			name: 'accountStorage',
		}
	)
)
