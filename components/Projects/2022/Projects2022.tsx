import React from 'react'
import Lynk from './Lynk'
import WiseWagers from './WiseWagers'

export default function Projects2021() {
	return (
		<div className='flex flex-col w-full items-end relative'>
			<div className='sticky p-24 top-0 right-8 text-8xl font-bold'>2022</div>
			<WiseWagers></WiseWagers>
			<Lynk></Lynk>
		</div>
	)
}
