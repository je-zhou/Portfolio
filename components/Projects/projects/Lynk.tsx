import React from 'react'
import ProjectTile from '../ProjectTile'

export default function Lynk() {
	return (
		<div className='flex flex-col w-full h-screen 2xl:px-48 justify-center'>
			<ProjectTile
				logoUrl='/project-logos/Lynk - Light.png'
				name='Lynk'
				tags={['Flutter', 'Hackathon']}
				description='A mobile app helping students and graduates connect and find opportunities in their local communities. Awarded 1st place @ GovHack 2022'
				githubUrl=''
				websiteUrl=''
			></ProjectTile>
		</div >
	)
}
