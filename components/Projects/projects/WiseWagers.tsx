import React from 'react'
import ProjectTile from '../ProjectTile'

export default function WiseWagers() {
	return (
		<div className='flex flex-col w-full h-screen 2xl:px-48 justify-center'>
			<ProjectTile
				logoUrl='/project-logos/WiseWagers - Light.png'
				name='WiseWagers'
				tags={['Typescript', 'NextJS', 'AWS/Azure']}
				description='A SaaS offering that web scrapes odd from Australia’s biggest bookmakers and runs sports betting algorithms to identify mathematically profitable bets.'
				websiteUrl='https://wisewagers.com.au/'
			></ProjectTile>
		</div>
	)
}
