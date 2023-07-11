import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'

interface FlipUpProps {
	showFirst: boolean
	first: React.JSX.Element
	second: React.JSX.Element
	className?: string
}

export default function FlipUp({ showFirst, first, second, className }: FlipUpProps) {
	return (
		<div className={className}>
			<AnimatePresence>
				{
					showFirst && (
						<motion.div
							className='w-full flex items-center justify-center'
							initial={{ y: -10, opacity: 0, scale: 1, height: "0%", }}
							animate={{ y: 0, opacity: 1, scale: 1, height: "100%", }}
							exit={{ y: 10, opacity: 0, scale: 1, height: "0%", }}
						>
							{first}
						</motion.div>
					)
				}
			</AnimatePresence>
			<AnimatePresence>
				{
					!showFirst && (
						<motion.div
							className='flex items-center justify-center'
							initial={{ y: -10, opacity: 0, scale: 1, height: "0%", }}
							animate={{ y: 0, opacity: 1, scale: 1, height: "100%", }}
							exit={{ y: 10, opacity: 0, scale: 1, height: "0%", }}
						>
							{second}
						</motion.div>
					)
				}
			</AnimatePresence>
		</div>
	)
}
