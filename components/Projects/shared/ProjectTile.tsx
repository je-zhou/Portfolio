'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import { faGooglePlay, faGithubSquare, faAppStore } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare, faArrowRight } from '@fortawesome/free-solid-svg-icons';

import { motion, useInView, useAnimation } from "framer-motion"
import TagTile from './TagTile';
import Link from 'next/link';

interface ProjectTileProps {
	logoUrl: string
	name: string
	tags: Array<string>
	description: string
	href: string
	githubUrl?: string | undefined
	websiteUrl?: string | undefined
	playStoreUrl?: string | undefined
	appStoreUrl?: string | undefined
	className?: string

}

export default function ProjectTile({ logoUrl, name, tags, description, href, githubUrl, websiteUrl, playStoreUrl, appStoreUrl, className }: ProjectTileProps) {

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
			className={className}
			variants={{
				hidden: { opacity: 0, y: 100 },
				visible: { opacity: 1, y: 0 },
			}}
			initial="hidden"
			animate={controls}
			transition={{ duration: 0.5, delay: 0.2 }}
		>
			<div ref={ref} className='flex flex-col items-start justify-start w-full space-y-4 max-w-md md:max-w-md py-4 md:py-0'>
				{/* Title and Logo */}
				<div className='flex flex-row items-center space-x-2'>
					<div className='w-8 h-8 bg-white border rounded-md relative flex items-center justify-center shadow-sm'>
						<div className='w-6 h-6 relative'>
							<Image
								src={logoUrl}
								fill={true}
								alt={logoUrl}
							></Image>
						</div>
					</div>
					<h4 className='text-xl font-bold text-charade dark:text-white'>{name}</h4>
				</div>
				{/* Tags */}
				<div className='flex flex-row space-x-2'>
					{tags.map((tag) => {
						return (
							<TagTile key={tag} tag={tag}></TagTile>
						)
					})}
				</div>
				{/* Description */}
				<p className='font-light text-charade dark:text-heather text-lg'>
					{description}
				</p>
				{/* Find out more */}
				<Link href={href} className='flex flex-row items-center justify-center space-x-2 cursor-pointer'>
					<p className='font-bold text-lg text-charade dark:text-white'>Find out more</p>
					<FontAwesomeIcon className='text-charade dark:text-white' icon={faArrowRight} />
				</Link>
				{/* Links */}
				<div className='flex flex-row space-x-4 items-center text-neutral-400 dark:text-heather'>
					{websiteUrl != undefined ? <FontAwesomeIcon className='cursor-pointer ' icon={faArrowUpRightFromSquare} size='lg' onClick={() => window.open(websiteUrl)} /> : null}
					{githubUrl != undefined ? <FontAwesomeIcon className='cursor-pointer' icon={faGithubSquare} size='xl' onClick={() => window.open(githubUrl)} /> : null}
					{playStoreUrl != undefined ? <FontAwesomeIcon className='cursor-pointer' icon={faGooglePlay} size='xl' onClick={() => window.open(playStoreUrl)} /> : null}
					{appStoreUrl != undefined ? <FontAwesomeIcon className='cursor-pointer' icon={faAppStore} size='xl' onClick={() => window.open(appStoreUrl)} /> : null}
				</div>
			</div>
		</motion.div >

	)
}
