import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface TokenState {
	rememberMe: boolean
	toggleRememberMe: () => void
	token: string | null
	setToken: (token: string) => void
}

export const useTokenStore = create<TokenState>()(
	persist(
		(set, get) => ({
			rememberMe: get()?.rememberMe ?? false,
			toggleRememberMe: () => set({ rememberMe: !get()?.rememberMe }),
			token: get()?.rememberMe ? (get()?.token ?? null) : null,
			setToken: (token: string) => set({ token }),
		}),
		{
			name: 'token',
		}
	)
)
