interface Props {
	class?: string
	text: string
	passThrough?: boolean
}
import { AppPages } from '@constants/pages'
export default function Button({ text, class: className, passThrough }: Props) {
	return (
		<>
			{passThrough ? (
				<a
					href={AppPages.Student.Attendance.url}
					className={
						'relative px-6 py-3 overflow-hidden font-bold text-white bg-blue-700 rounded-lg group text-center ' +
						className
					}
				>
					<span className='absolute top-0 left-0 w-full h-0 transition-all duration-300 ease-in-out bg-black/10 group-hover:h-full group-hover:bottom-0 group-hover:top-auto'></span>
					<p className='relative z-10'>{text}</p>
				</a>
			) : (
				<button
					className={
						'relative px-6 py-3 overflow-hidden font-bold text-white bg-blue-700 rounded-lg group ' + className
					}
				>
					<span className='absolute top-0 left-0 w-full h-0 transition-all duration-300 ease-in-out bg-black/10 group-hover:h-full group-hover:bottom-0 group-hover:top-auto'></span>
					<p className='relative z-10'>{text}</p>
				</button>
			)}
		</>
	)
}
