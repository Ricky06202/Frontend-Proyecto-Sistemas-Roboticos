import { useEffect } from 'react'
import { useDarkModeStore } from 'src/stores/darkModeStore'

export function useDarkMode() {
	const isDarkMode = useDarkModeStore((state) => state.isDarkMode)
	const toggleTheme = useDarkModeStore((state) => state.toggleTheme)

	useEffect(() => {
		const htmlElement = document.documentElement
		if (isDarkMode) {
			htmlElement.classList.add('dark')
		} else {
			htmlElement.classList.remove('dark')
		}
	}, [isDarkMode])

	return { isDarkMode, toggleTheme }
}
