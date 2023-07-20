import React from 'react'
import Image from 'next/image'
import TagTile from '../../shared/TagTile'
import ColorTile from './ColorTile'
import BackButton from '@/components/BackButton/BackButton'

interface TitleBackgroundProps {
	backgroundImgUrl: string
	title: string
	description: string
	tags: Array<string>
	colors: Array<string>

}

export default function TitleBackground({ backgroundImgUrl, title, description, tags, colors }: TitleBackgroundProps) {
	return (
		<div className='flex relative'>
			<div className='absolute z-30'>
				<BackButton></BackButton>
			</div>
			{/* Title Image */}
			< div className='flex flex-col items-center justify-center h-screen w-screen text-black dark:text-white bg-gradient-to-b from-light-background/80 to-light-background dark:from-charade/60 dark:to-charade z-20 space-y-8 p-4' >
				{/* Title */}
				<h1 className='text-6xl font-bold dark:text-white text-charade' >{title}</h1>
				{/* Description */}
				<p className='font-light text-charade dark:text-white max-w-lg text-center' >
					{description}
				</p>
				{/* Tags */}
				<div className=' flex flex-row space-x-4'>
					{tags.map((tag) => { return (<TagTile key={tag} tag={tag}></TagTile>) })}
				</div>
				{/* Color Pallette */}
				<div className='flex flex-row space-x-4'>
					{colors.map((color) => { return (<ColorTile key={color} hex={color}></ColorTile>) })}
				</div>
			</div >
			<div className='w-screen h-screen absolute'>
				<Image
					src={backgroundImgUrl}
					alt='Background'
					fill
					objectFit='cover'
				></Image>
			</div>
		</div>
	)
}
