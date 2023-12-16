import React from 'react'
import ZeroTwoOne from './021'


export default function Projects2022() {
	return (
		<div className='w-[95vw] flex flex-col-reverse lg:flex-row justify-end items-center lg:items-start relative'>
			<div className='flex flex-1 flex-col w-full items-end'>
				<ZeroTwoOne></ZeroTwoOne>
			</div>
			<div className='hidden md:sticky py-4 lg:pt-24 top-0 text-4xl lg:text-[3vw] font-bold underline w-full lg:w-fit px-4 text-charade dark:text-white'>2023</div>
		</div>
	)
}
