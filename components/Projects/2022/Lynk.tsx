'use client'
import React from 'react'
import ProjectTile from '../shared/ProjectTile'
import AnimateImage from '../shared/AnimateImage'

export default function Lynk() {
	return (
		<div className='flex flex-col md:flex-row w-full 2xl:px-48 px-16 items-start justify-center'>
			<ProjectTile
				className='sticky top-0 py-24'
				logoUrl='/project-logos/Lynk - Light.png'
				name='Lynk'
				tags={['Flutter', 'Hackathon']}
				description='A mobile app helping students and graduates connect and find opportunities in their local communities. Awarded 1st place @ GovHack 2022.'
				githubUrl='https://github.com/je-zhou/Lynk'
				websiteUrl='https://govhack.org/2022-winners/'
			></ProjectTile>
			<div className='flex flex-1 flex-col h-full w-full'>
				<AnimateImage
					imageURL='/projects/lynk/Lynk - 1.png'
				/>
				<AnimateImage
					imageURL='/projects/lynk/Lynk - 2.png'
				/>
				<AnimateImage
					imageURL='/projects/lynk/Lynk - 3.png'
				/>
				<AnimateImage
					imageURL='/projects/lynk/Lynk - 4.png'
				/>
			</div>
		</div >
	)
}
