'use client'
import React from 'react'
import ProjectTile from '../shared/ProjectTile'
import AnimateImage from '../shared/AnimateImage'

export default function MyCryptoPocket() {
	return (
		<div className='flex flex-col lg:flex-row w-full px-4 md:px-16 items-start justify-center'>
			<ProjectTile
				className='sticky top-16 lg:top-0 py-4 lg:pt-24'
				logoUrl='/project-logos/MyCryptoPocket - Light.png'
				name='My Crypto Pocket'
				href='/mycryptopocket'
				tags={['Flutter', 'Firebase', 'CodeMagic']}
				description='A mobile app to track the performance of digital assets across multiple exchanges'
				playStoreUrl=''
			></ProjectTile>
			<div className='flex-1 flex-col h-full w-full hidden lg:flex'>
				<AnimateImage
					imageURL='/projects/mycryptopocket/MyCryptoPocket - 1.png'
				/>
				<AnimateImage
					imageURL='/projects/mycryptopocket/MyCryptoPocket - 2.png'
				/>
				<AnimateImage
					imageURL='/projects/mycryptopocket/MyCryptoPocket - 3.png'
				/>
				<AnimateImage
					imageURL='/projects/mycryptopocket/MyCryptoPocket - 4.png'
				/>
			</div>
		</div>

	)
}
