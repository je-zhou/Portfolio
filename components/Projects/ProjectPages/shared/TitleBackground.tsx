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
	projectSpec?: React.JSX.Element

}

export default function TitleBackground({ backgroundImgUrl, title, description, tags, colors, projectSpec }: TitleBackgroundProps) {
	return (
		<div className='flex relative w-full '>
			<div className='absolute z-30'>
				<BackButton></BackButton>
			</div>
			{/* Title Image */}
			< div className='flex flex-col items-center justify-center h-screen w-full text-black dark:text-white bg-linear-to-b from-light-background/80 to-light-background dark:from-charade/60 dark:to-charade z-20 space-y-8  max-w-full px-4' >
				{/* Title */}
				<h1 className='text-4xl md:text-6xl font-bold dark:text-white text-charade text-center' >{title}</h1>
				{/* Color Pallette */}
				<div className='flex flex-row space-x-4'>
					{colors.map((color) => { return (<ColorTile key={color} hex={color}></ColorTile>) })}
				</div>
				{/* Description */}
				<p className='font-light text-charade dark:text-white max-w-lg text-center' >
					{description}
				</p>
				{/* Tags */}
				<div className='grid grid-cols-3 gap-2'>
					{tags.map((tag) => { return (<TagTile key={tag} tag={tag}></TagTile>) })}
				</div>
				{projectSpec}
			</div >
			<div className='w-full h-screen absolute max-w-full'>
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
