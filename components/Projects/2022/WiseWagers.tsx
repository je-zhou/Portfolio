'use client'

import React from 'react'
import ProjectTile from '../shared/ProjectTile'
import AnimateImage from '../shared/AnimateImage'

export default function WiseWagers() {
	return (
		<div className='flex flex-col lg:flex-row w-full px-4 md:px-16 items-start justify-center'>
			<ProjectTile
				className='sticky top-16 lg:top-0 py-4 lg:pt-24'
				logoUrl='/project-logos/WiseWagers - Light.png'
				name='WiseWagers'
				tags={['Typescript', 'NextJS', 'AWS/Azure']}
				description='A SaaS offering that web scrapes odd from Australia’s biggest bookmakers and runs sports betting algorithms to identify mathematically profitable bets.'
				websiteUrl='https://wisewagers.com.au/'
			></ProjectTile>
			<div className='flex-1 flex-col h-full w-full hidden lg:flex'>
				<AnimateImage
					imageURL='/projects/wisewagers/WiseWagers - 1.png'
					horizontal={true}
				/>
				<AnimateImage
					imageURL='/projects/wisewagers/WiseWagers - 2.png'
					horizontal={true}
				/>
				<AnimateImage
					imageURL='/projects/wisewagers/WiseWagers - 3.png'
				/>
			</div>
		</div>
	)
}
