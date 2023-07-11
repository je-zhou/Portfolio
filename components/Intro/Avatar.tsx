'use client'
import React from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons'

export default function Avatar() {
	return (
		<div className='flex flex-col space-y-4 items-center'>
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
			<div className='flex flex-row justify-center items-center space-x-4'>
				<div className='border-2 border-slate-500 w-10 h-10 rounded-lg flex justify-center items-center hover:bg-slate-500 cursor-pointer'>
					<FontAwesomeIcon icon={faMoon} size='xl' />
				</div>
				<p className='text-heather xl:text-2xl'>Developer/Gamer/Forex Trader</p>
			</div>
		</div>


	)
}
