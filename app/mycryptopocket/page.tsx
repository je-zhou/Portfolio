'use client'
import { useThemeContext } from '@/components/ThemeProvider/ThemeProvider';
import React from 'react'
import TitleBackground from '@/components/Projects/ProjectPages/shared/TitleBackground';
import InfoTile from '@/components/Projects/ProjectPages/shared/InfoTile';
import ProjectSpec from '@/components/Projects/ProjectPages/shared/ProjectSpec';
import Image from "next/image"

export default function MyCryptoPocket() {
	let theme = useThemeContext();

	return (
		<main className={`${theme === "dark" ? "dark" : ""}`}>
			<div className='flex min-h-screen max-w-full flex-col items-center bg-light-background dark:bg-charade px-24'>
				<TitleBackground
					title='My Crypto Pocket'
					tags={['Flutter', 'Firebase', 'CodeMagic']}
					description='A mobile app to track the performance of digital assets across multiple exchanges'
					backgroundImgUrl='/projects/mycryptopocket/MyCryptoPocket - Background.png'
					colors={['#50514F', 'CBD4C2', '#FFFCFF', '#140D4F', '#130D3B']}
				/>
				{/* Summaries Tiles	 */}
				<InfoTile
					title='Project Background'
					description={`Driven by the fervor surrounding cryptocurrencies during my time at university, I encountered a common problem: effectively monitoring the performance of my digital assets across various exchanges proved to be quite challenging.\nDetermined to tackle this issue, I embarked on the journey of creating My Crypto Pocket. This project aimed to provide a comprehensive solution that would enable users to effortlessly track and manage their cryptocurrency investments in one centralized platform.`}
					display={
						<ProjectSpec
							pairs={{
								"Front End:": "Flutter",
								"Back End:": "Firebase",
								"State Management:": "BLoC",
								"Other:": "CodeMagic"
							}}
						></ProjectSpec>}
				/>
				{/* Whitespace */}
				<div className='pb-72'>
				</div>
			</div>
		</main >)
}
