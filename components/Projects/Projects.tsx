import React from 'react'
import WiseWagers from './projects/WiseWagers'
import Lynk from './projects/Lynk'
import MyCryptoPocket from './projects/MyCryptoPocket'

export default function Projects() {
	return (
		<div className='flex flex-col w-screen p-12 items-center'>
			<h1 className='text-6xl md:text-8xl font-bold'>Projects</h1>
			<WiseWagers></WiseWagers>
			<Lynk></Lynk>
			<MyCryptoPocket></MyCryptoPocket>
		</div>
	)
}
