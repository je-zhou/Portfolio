import React from 'react'
import Image from 'next/image'

export default function Avatar() {
	return (
		<div className='w-[50vw] md:w-[25vw] h-[50vw] md:h-[25vw] rounded-full  bg-hoki flex justify-center items-end overflow-hidden  '>
			<div className='w-full flex justify-center relative'>
				<Image
					className='h-full w-1/2'
					src={"/avatar/Full-Hoodie.png"}
					alt="Full Hoodie"
					width={10000}
					height={10000}
				></Image>
			</div>
		</div>

	)
}
