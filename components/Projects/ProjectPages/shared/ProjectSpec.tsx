import React from 'react'

interface ProjectSpecProps {
	pairs: { [key: string]: string }
}

export default function ProjectSpec({ pairs }: ProjectSpecProps) {
	return (
		<div className='flex flex-col space-y-2 max-w-md w-full'>
			{Object.entries(pairs).map(([k, v]) => {
				return (
					<div key={k} className='flex flex-row justify-between space-x-4'>
						<p className='underline text-charade dark:text-white font-light'>{k}</p>
						<p className='font-bold text-charade dark:text-white text-right' >{v}</p>
					</div>)
			})}


		</div>
	)
}
