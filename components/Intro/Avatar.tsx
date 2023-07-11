import React from 'react'
import Image from 'next/image'

export default function Avatar() {
	return (
		<div className='rounded-full bg-hoki flex items-center justify-center  overflow-hidden'>
			<Image
				className=''
				src={"/avatar/Full-Hoodie.png"}
				alt="Full Hoodie"
				width={10000}
				height={10000}
			></Image>

		</div >

	)
}
