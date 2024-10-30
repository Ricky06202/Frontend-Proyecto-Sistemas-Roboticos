import { useDarkMode } from 'src/hooks/useDarkMode'
import DarkIcon from './icons/DarkIcon'
import LightIcon from './icons/LightIcon'

const DarkModeButton = () => {
	const { isDarkMode, toggleTheme } = useDarkMode()

	return (
		<button
			className={`w-20 h-10 rounded-full bg-white dark:bg-gray-400 flex items-center transition duration-300 focus:outline-none shadow`}
			onClick={toggleTheme}
		>
			<div
				className={`w-12 h-12 relative rounded-full transition duration-500 transform ${isDarkMode ? 'bg-gray-700 translate-x-full text-white' : 'bg-gray-50 -translate-x-2 text-blue-700'} p-1`}
			>
				{isDarkMode ? <DarkIcon /> : <LightIcon />}
			</div>
		</button>
	)
}

export default DarkModeButton
