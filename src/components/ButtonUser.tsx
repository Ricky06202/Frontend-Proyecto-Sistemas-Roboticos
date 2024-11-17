import React, { useState, useRef, useEffect } from 'react'
import { LandingPages, UserPages } from '@constants/pages'
import { AccountCircle } from 'src/modules/userinformation/components/iconos/Account'

interface Props {
	className?: string
	user: string
	email: string
}

export default function ButtonUser({ user, email, className = '' }: Props) {
	const [isOpen, setIsOpen] = useState(false)
	const menuRef = useRef<HTMLDivElement>(null)
	const buttonRef = useRef<HTMLButtonElement>(null)

	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (
				menuRef.current &&
				buttonRef.current &&
				!menuRef.current.contains(event.target as Node) &&
				!buttonRef.current.contains(event.target as Node)
			) {
				setIsOpen(false)
			}
		}

		document.addEventListener('mousedown', handleClickOutside)
		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [])

	const toggleMenu = () => setIsOpen(!isOpen)

	return (
		<div className='grid'>
			<div className='relative'>
				<button
					ref={buttonRef}
					className={`px-5 py-3 text-3xl rounded-lg text-black dark:text-white ${className}`}
					aria-haspopup='true'
					aria-expanded={isOpen}
					onClick={toggleMenu}
				>
					<AccountCircle />
				</button>

				{isOpen && (
					<div
						ref={menuRef}
						className='absolute w-80 mt-1 top-full right-0 rounded-lg text-left bg-white text-gray-700 dark:bg-black dark:text-white pt-1 shadow-md'
					>
						<div className='flex flex-col p-5 space-y-3 text-lg font-extrabold opacity-70 dark:text-white dark:opacity-80'>
							<h3>{user}</h3>
							<h3>{email}</h3>
						</div>
						<div className='flex flex-col p-2 text-center text-xl'>
							{Object.values(UserPages).map((page) => (
								<a
									key={page.url}
									href={page.url}
									className='relative p-2 py-4 z-10 block hover:bg-gray-100 dark:hover:bg-gray-500'
								>
									{page.title}
								</a>
							))}
							<a
								href={LandingPages.Home.url}
								className='relative p-2 py-4 z-10 block hover:bg-gray-100 dark:hover:bg-gray-500'
							>
								Log Out
							</a>
						</div>
					</div>
				)}
			</div>
		</div>
	)
}
