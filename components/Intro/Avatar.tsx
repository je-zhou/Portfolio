'use client'
import React from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { AnimatePresence, motion } from 'framer-motion'
import FlipUp from './FlipUp'

interface AvatarProps {
	toggleDarkMode: Function
	darkMode: boolean
}

export default function Avatar({ toggleDarkMode, darkMode }: AvatarProps) {

	return (
		<div className='flex flex-col space-y-4 items-center'>
			<div className='w-[50vw] md:w-[25vw] h-[50vw] md:h-[25vw] rounded-full  bg-hoki flex justify-center items-end overflow-hidden  '>
				<div className='w-full flex flex-row justify-center relative'>
					<AnimatePresence>
						{
							darkMode && (
								<motion.div
									className='h-full'
									initial={{ x: 500, opacity: 0, scale: 0, width: '0%' }}
									animate={{ x: 0, opacity: 1, scale: 1, width: '50%' }}
									exit={{ x: -500, opacity: 0, scale: 0, width: '0%' }}
								>
									<Image
										src={"/avatar/Full-Hoodie.png"}
										alt="Full Hoodie"
										width={10000}
										height={10000}
									></Image>
								</motion.div>
							)
						}
					</AnimatePresence>
					<AnimatePresence>
						{
							!darkMode && (
								<motion.div
									className='h-full'
									initial={{ x: 1000, opacity: 0, scale: 0, width: '0%' }}
									animate={{ x: 0, opacity: 1, scale: 1, width: '50%' }}
									exit={{ x: -1000, opacity: 0, scale: 0, width: '0%' }}
								>
									<Image
										src={"/avatar/Full-Shirt.png"}
										alt="Full Hoodie"
										width={10000}
										height={10000}
									></Image>
								</motion.div>
							)
						}
					</AnimatePresence>
				</div>
			</div>
			<div className='flex flex-row justify-center items-center space-x-4'>
				<div className='border-2 border-slate-500 w-10 h-10 rounded-lg flex dark:hover:bg-slate-500 hover:bg-slate-200 cursor-pointer' onClick={(e) => { toggleDarkMode() }}>
					<FlipUp
						className='flex flex-col w-full'
						showFirst={darkMode}
						first={<FontAwesomeIcon className='text-charade dark:text-white' icon={faMoon} size='xl' />}
						second={<FontAwesomeIcon className='text-charade dark:text-white' icon={faSun} size='xl' />}
					></FlipUp>

				</div>
				<p className='text-charade dark:text-heather xl:text-2xl'> {darkMode ? 'Developer/Gamer/Forex Trader' : 'Global Tax Consultant'}</p>
			</div>
		</div >


	)
}
