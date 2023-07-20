'use client'
import { useThemeContext } from '@/components/ThemeProvider/ThemeProvider';
import React from 'react'
import TitleBackground from '@/components/Projects/ProjectPages/shared/TitleBackground';
import InfoTile from '@/components/Projects/ProjectPages/shared/InfoTile';
import ProjectSpec from '@/components/Projects/ProjectPages/shared/ProjectSpec';
import Image from "next/image"
import NextProject from '@/components/Projects/ProjectPages/shared/NextProject';
import Gallery from '@/components/Projects/ProjectPages/shared/Gallery';

export default function Wisewagers() {
	let theme = useThemeContext();

	return (
		<main className={`${theme === "dark" ? "dark" : ""}`}>
			<div className='flex min-h-screen max-w-full flex-col items-center bg-light-background dark:bg-charade px-24'>
				<TitleBackground
					title='WiseWagers'
					tags={['Typescript', 'Fullstack', 'Docker', 'NextJS', 'AWS/Azure']}
					description='A SaaS offering that web scrapes odd from Australia’s biggest bookmakers and runs sports betting algorithms to identify mathematically profitable bets.'
					backgroundImgUrl='/projects/wisewagers/WiseWagers - Background.png'
					colors={['#fdfdfd', '#7bbce1']}
				/>
				{/* Summaries Tiles	 */}
				<InfoTile
					title='Project Background'
					description={`I was inspired to start this project after watching an arbitrage sports betting video on YouTube. I wrote a script and Discord bot to scrape odds from Australian sportsbooks and applied the Arbitrage and Positive Expected Value strategies mentioned in the video.\nIn just six months, I turned $700 into $7,000. Now, I'm working on scaling the sports betting algorithms into a SaaS.`}
					display={
						<ProjectSpec
							pairs={{
								"Front End:": "React, NextJS",
								"Back End:": "Supabase",
								"AWS:": "EC2, Lambda",
								"Azure:": "VM, Functions",
								"Other:": "Discord.js, Express.js, Docker"
							}}
						></ProjectSpec>
					}
				/>
				<InfoTile
					title='Cloud-centric API Design'
					description={`As the project reaches a stage where it scrapes over a million odds daily, I am leveraging cloud technologies like AWS Lambda and Azure Functions to optimize computing power and reduce costs.\nThis involves publishing several webscraping packages to npm and dockerising various functions for deployment on cloud services.`}
					display={
						<div className=' w-[90%] h-auto relative'>
							<Image
								className='rounded-lg'
								src={"/projects/wisewagers/WiseWagers - API.png"}
								alt='API Image'
								width={10000}
								height={10000}
								objectFit='cover'
							>
							</Image>
						</div>
					}
				/>
				<InfoTile
					title='Next Steps'
					description='Ongoing and future plans for this project include expanding the web scrapers to cover more markets, revamping the website design, and subsequently acquiring marketing knowledge to monetize the product.'
					display={
						<div className=' w-[40%] h-auto relative'>
							<Image
								className='rounded-lg'
								src={"/projects/wisewagers/WiseWagers - Next Steps.png"}
								alt='API Image'
								width={10000}
								height={10000}
								objectFit='cover'
							>
							</Image>
						</div>}
				/>
				{/* Gallery */}

				{/* NextProejct */}
				<div className='py-32'>
					<NextProject
						url='/lynk'
						text='Lynk'
					></NextProject>
				</div>
			</div>
		</main >)
}
