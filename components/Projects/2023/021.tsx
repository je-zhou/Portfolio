'use client'

import React from 'react'
import ProjectTile from '../shared/ProjectTile'
import AnimateImage from '../shared/AnimateImage'

export default function ZeroTwoOne() {
	return (
		<div className='flex flex-col lg:flex-row w-full px-4 md:px-16 items-start justify-center'>
			<ProjectTile
				className='sticky top-16 lg:top-0 py-4 lg:pt-24'
				logoUrl='/project-logos/021 - Light.png'
				name='021'
				href='/021'
				tags={['Typescript', 'NextJS', 'PlanetScale', 'PrismaDB']}
				description='A web design agency and e-commerce platform designed to help small businesses set up shop online.'
				websiteUrl='https://021-demo-ecommerce.vercel.app/'
			></ProjectTile>
			<div className='flex-1 flex-col h-full w-full hidden lg:flex'>
				<AnimateImage
					imageURL='/projects/021/021 - 1.png'
					horizontal={true}
				/>
				<AnimateImage
					imageURL='/projects/021/021 - 2.png'
					horizontal={true}
				/>
				<AnimateImage
					imageURL='/projects/021/021 - 3.png'
					horizontal={true}
				/>	
				<AnimateImage
					imageURL='/projects/021/021 - 4.png'
					horizontal={true}

				/>
			</div>
		</div>
	)
}
 