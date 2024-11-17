import { useState, useEffect, useRef } from 'react'
import { Edit } from '@userinformation/components/iconos/Edit'
import { Cancel } from '@userinformation/components/iconos/Cancel'
import { Save } from '@userinformation/components/iconos/Save'
import useEdit from '@userinformation/stores/storeEdit'

export default function Edit_Input({ id, text }) {
	const [isHidden, setIsHidden] = useState(false)
	const { editComponentId, setId } = useEdit()
	const inputRef = useRef(null)

	useEffect(() => {
		setIsHidden(editComponentId === id)
		if (editComponentId === id) {
			inputRef.current.focus()
		}
	}, [editComponentId, id])

	const showClick = () => {
		setIsHidden(true)
		setId(id)
	}

	const hiddenClick = () => {
		setIsHidden(false)
		setId(0)
	}

	return (
		<div className='grid grid-flow-col items-center content-center'>
			{editComponentId != id && (
				<div className={` ${isHidden ? 'hidden' : 'Block'} flex gap-8 items-center content-center`}>
					<h3 className='opacity-80'>{text}</h3>
					<Edit onClick={showClick} />
				</div>
			)}
			{editComponentId === id && (
				<div className='flex gap-4 content-center items-center'>
					<input
						type='text'
						ref={inputRef}
						defaultValue={text}
						className='p-1 border border-black dark:bg-background-dark dark:border-slate-100'
					/>
					<div className='flex gap-4'>
						<Save />
						<Cancel onClick={hiddenClick} />
					</div>
				</div>
			)}
		</div>
	)
}
