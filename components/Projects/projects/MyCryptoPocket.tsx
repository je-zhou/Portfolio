'use client'
import React from 'react'
import ProjectTile from '../ProjectTile'
import AnimateImage from '../AnimateImage'

export default function MyCryptoPocket() {
	return (
		<div className='flex flex-col md:flex-row w-full 2xl:px-48 px-16 items-start justify-center'>
			<ProjectTile
				className='sticky top-0 py-24'
				logoUrl='/project-logos/MyCryptoPocket - Light.png'
				name='My Crypto Pocket'
				tags={['Flutter', 'Firebase', 'CodeMagic']}
				description='A mobile app to track the performance of digital assets across multiple exchanges'
				playStoreUrl=''
			></ProjectTile>
			<div className='flex flex-1 flex-col h-full w-full'>
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
