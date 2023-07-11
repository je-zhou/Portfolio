import React from 'react'
import Lynk from './Lynk'
import WiseWagers from './WiseWagers'

export default function Projects2022() {
	return (
		<div className='w-[95vw] flex flex-col-reverse lg:flex-row justify-end items-center lg:items-start relative'>
			<div className='flex flex-1 flex-col w-full items-end'>
				<WiseWagers></WiseWagers>
				<Lynk></Lynk>
			</div>
			<div className='md:sticky py-4 lg:pt-24 top-0 text-4xl lg:text-[3vw] font-bold underline w-full lg:w-fit text-center text-charade'>2022</div>
		</div>
	)
}
