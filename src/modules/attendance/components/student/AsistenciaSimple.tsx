import { Icon } from '@iconify/react'
export default function AsistenciaSimple() {
	return (
		<section className='flex flex-col gap-4'>
			<header className='flex flex-col items-center gap-4'>
				<div className='flex gap-4'>
					<button className='focus:outline-none hover:text-blue-500'>
						<Icon
							icon='mingcute:left-fill'
							className='text-3xl'
						/>
					</button>
					<select className='px-4 py-2 border-2 rounded-lg outline-none border-blue-50 focus:border-blue-300 bg-blue-50'>
						<option value='1'>Semana 1</option>
						<option value='2'>Semana 2</option>
						<option value='3'>Semana 3</option>
						<option value='4'>Semana 4</option>
					</select>
					<button className='focus:outline-none hover:text-blue-500'>
						<Icon
							icon='mingcute:right-fill'
							className='text-3xl'
						/>
					</button>
				</div>
			</header>
			{/* este div es una linea divisora */}
			<div className='w-full h-px bg-gray-300'></div>
			<div className='flex flex-col p-4 border-2 rounded-lg'>
				<table>
					<thead>
						<tr>
							<th className='py-4 text-left'>Curso</th>
							<th className='border-l'>Lunes</th>
							<th className='border-l'>Martes</th>
							<th className='border-l'>Miércoles</th>
							<th className='border-l'>Jueves</th>
							<th className='border-l'>Viernes</th>
						</tr>
					</thead>
					<tbody>
						<tr className='text-2xl text-left border-t'>
							<td className='py-6 text-lg text-left'>Calculo 1</td>
							<td className='border-l'>
								<Icon
									icon='mingcute:check-2-fill'
									mx-a
									className='mx-auto text-green-600'
								/>
							</td>
							<td className='border-l'>
								<Icon
									icon='mingcute:close-fill'
									mx-a
									className='mx-auto text-red-600'
								/>
							</td>
							<td className='border-l'>
								<Icon
									icon='mingcute:check-2-fill'
									mx-a
									className='mx-auto text-green-600'
								/>
							</td>
							<td className='border-l'>
								<Icon
									icon='mingcute:check-2-fill'
									mx-a
									className='mx-auto text-green-600'
								/>
							</td>
							<td className='border-l'>
								<Icon
									icon='mingcute:close-fill'
									mx-a
									className='mx-auto text-red-600'
								/>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</section>
	)
}
