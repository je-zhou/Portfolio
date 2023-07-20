import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useInView, useAnimation, motion } from 'framer-motion'
import Link from 'next/link'
import React, { useEffect, useRef } from 'react'

interface NextProjectProps {
	url: string
	text: string
}

export default function NextProject({ url, text }: NextProjectProps) {

	const ref = useRef(null);
	const isInView = useInView(ref)
	const controls = useAnimation()

	useEffect(() => {
		const width = window.innerWidth;

		if (width < 1024) {
			controls.set("visible")
		} else {
			if (isInView) {
				controls.start("visible")
			} else {
				controls.set("hidden")
			}
		}
	})

	return (
		<motion.div
			variants={{
				hidden: { opacity: 0, y: 100 },
				visible: { opacity: 1, y: 0 },
			}}
			initial="hidden"
			animate={controls}
			transition={{ duration: 0.5, delay: 0.2 }}
		>
			<Link href={url} ref={ref}>
				<div className='bg-white/80 hover:bg-white/100 duration-200 cursor-pointer m-8 p-4 px-8 rounded-full shadow-lg'>
					<div className='flex flex-row space-x-2 items-center text-charade text-sm md:text-lg'>
						<p>{`Next Project: ${text}`}</p>
						<FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
					</div>
				</div>
			</Link>
		</motion.div >


	)
}
