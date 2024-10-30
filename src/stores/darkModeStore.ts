import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface DarkModeState {
	isDarkMode: boolean
	toggleTheme: () => void
}

export const useDarkModeStore = create<DarkModeState>()(
	persist(
		(set, get) => ({
			isDarkMode: get()?.isDarkMode ?? false,
			toggleTheme: () => {
				set((state) => ({
					isDarkMode: !state.isDarkMode,
				}))
			},
		}),
		{ name: 'dark-mode-storage' }
	)
)
