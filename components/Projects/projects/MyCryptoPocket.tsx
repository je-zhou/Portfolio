import React from 'react'
import ProjectTile from '../ProjectTile'

export default function MyCryptoPocket() {
	return (
		<div className='flex flex-col w-full h-screen 2xl:px-48 justify-center'>
			<ProjectTile
				logoUrl='/project-logos/MyCryptoPocket - Light.png'
				name='My Crypto Pocket'
				tags={['Flutter', 'Firebase', 'CodeMagic']}
				description='A mobile app to track the performance of digital assets across multiple exchanges'
				playStoreUrl=''
			></ProjectTile>
		</div>
	)
}
