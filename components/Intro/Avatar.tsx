'use client'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faStar, faSun } from '@fortawesome/free-solid-svg-icons'
import { AnimatePresence, motion } from 'framer-motion'
import FlipUp from './FlipUp'
import Image from 'next/image'

interface AvatarProps {
	toggleDarkMode: Function
	darkMode: boolean
}

export default function Avatar({ toggleDarkMode, darkMode }: AvatarProps) {

	return (
		<div className='flex flex-col space-y-4 items-center'>
			<div className='w-[50vw] md:w-[25vw] h-[50vw] md:h-[25vw] rounded-full  bg-hoki flex justify-center items-end overflow-hidden'>
				{/* Backgrounds */}
				<div className=' w-[50vw] md:w-[25vw] h-[50vw] md:h-[25vw] absolute rounded-full overflow-hidden '>
					<div
						className='w-3/4 h-full'
					>
						<AnimatePresence>
							{
								darkMode && (
									<motion.div
										initial={{ x: 500, opacity: 0, scale: 0, width: '0%' }}
										animate={{ x: 0, opacity: 1, scale: 1, width: '50%' }}
										exit={{ x: -500, opacity: 0, scale: 0, width: '0%' }}
									>
										<div className='relative w-full h-full'>
											<Image
												className='absolute'
												src={"/avatar/Moon.png"}
												alt="Sun"
												width={10000}
												height={10000}
											></Image>
											<FontAwesomeIcon
												className='absolute left-[4vw] top-[10vh] w-1/6 h-auto'
												icon={faStar}
											></FontAwesomeIcon>
											<FontAwesomeIcon
												className='absolute left-[25vw] md:left-[15vw] top-[2vh] w-1/4 h-auto'
												icon={faStar}
											></FontAwesomeIcon>
											<FontAwesomeIcon
												className='absolute left-[16vw] md:left-[10vw] top-[4vh] w-1/5 h-auto'
												icon={faStar}
											></FontAwesomeIcon>
											<FontAwesomeIcon
												className='absolute left-[36vw] md:left-[20vw] top-[8vh] w-1/6 h-auto'
												icon={faStar}
											></FontAwesomeIcon>
										</div>


									</motion.div>
								)
							}
						</AnimatePresence>
						<AnimatePresence>
							{
								!darkMode && (
									<motion.div
										initial={{ x: 500, opacity: 0, scale: 0, width: '0%' }}
										animate={{ x: 0, opacity: 1, scale: 1, width: '50%' }}
										exit={{ x: -500, opacity: 0, scale: 0, width: '0%' }}
									>
										<div className='relative w-full h-full'>
											<Image
												className='absolute'
												src={"/avatar/Sun.png"}
												alt="Sun"
												width={10000}
												height={10000}
											></Image>
											<Image
												className='absolute left-[2vw] top-[6vh]'
												src={"/avatar/Cloud 1.png"}
												alt="Sun"
												width={10000}
												height={10000}
											></Image>
											<Image
												className='absolute left-[25vw] md:left-[15vw] top-[2vh] '

												src={"/avatar/Cloud 2.png"}
												alt="Sun"
												width={10000}
												height={10000}
											></Image>
										</div>


									</motion.div>
								)
							}
						</AnimatePresence>
					</div>
				</div>
				{/* Avatar */}
				<div className='w-full flex flex-row justify-center relative top-8'>
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

			{/* Toggle */}
			<div className='flex flex-col space-y-2 md:space-y-4 mr-6 md:mr-16 '>
				<div className='flex flex-row justify-center items-center space-x-4 pl-5 md:pl-16'>
					<div className='border-2 border-slate-500 w-10 h-10 rounded-lg flex dark:hover:bg-slate-500 hover:bg-slate-200 cursor-pointer' onClick={(e) => { toggleDarkMode() }}>
						<FlipUp
							className='flex flex-col w-full'
							showFirst={darkMode}
							first={<FontAwesomeIcon className='text-charade dark:text-white' icon={faMoon} size='xl' />}
							second={<FontAwesomeIcon className='text-charade dark:text-white' icon={faSun} size='xl' />}
						></FlipUp>
					</div>
					<p className='text-charade dark:text-heather xl:text-2xl'> {darkMode ? 'Designer & Developer' : 'Global Tax Consultant'}</p>
				</div>
				<div className='w-[60px] h-[60px] md:w-[100px] md:h-[100px] relative'>
					<Image
						className=''
						src={darkMode ? '/During Night.png' : '/During Day.png'}
						alt='During mage'
						fill
					></Image>
				</div>

			</div>
		</div >


	)
}
