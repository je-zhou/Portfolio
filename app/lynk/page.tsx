'use client'
import { useThemeContext } from '@/components/ThemeProvider/ThemeProvider';
import React from 'react'
import TitleBackground from '@/components/Projects/ProjectPages/shared/TitleBackground';
import InfoTile from '@/components/Projects/ProjectPages/shared/InfoTile';
import Image from "next/image"
import NextProject from '@/components/Projects/ProjectPages/shared/NextProject';
import ProjectSpec from '@/components/Projects/ProjectPages/shared/ProjectSpec';

export default function Lynk() {
	let theme = useThemeContext();

	return (
		<main className={`${theme === "dark" ? "dark" : ""}`}>
			<div className='flex min-h-screen max-w-full flex-col items-center bg-light-background dark:bg-charade'>
				<TitleBackground
					title='Lynk'
					tags={['Flutter', 'Hackathon', 'Google API']}
					description='A mobile app helping students and graduates connect and find opportunities in their local communities. Awarded 1st place @ GovHack 2022.'
					backgroundImgUrl='/projects/lynk/Lynk - Background.png'
					colors={['#FFFFFF', '#332D53', '#130D3B']}
					projectSpec={<ProjectSpec
						pairs={{
							"Front End:": "Flutter",
							"Other:": "Google APIs"
						}}
					></ProjectSpec>
					}
				/>
				{/* Summaries Tiles	 */}
				<div className='flex flex-col items-center px-4 md:px-24'>

					<InfoTile
						title='Project Background'
						description={`This project, created by Team Lynk during GovHack 2022, was developed in just two days and nights. We tackled the challenge of addressing the lack of relevant life skills among students upon high school graduation.\nOur solution is a mobile app designed to introduce students to skill-building events in their local communities, help them discover job and internship opportunities, and facilitate connections with alumni to gain valuable experience.`}
						display={
							<div className=' w-[80%] h-auto relative'>
								<Image
									className='rounded-lg'
									src={"/projects/lynk/Lynk - Spec.png"}
									alt='Lynk Spec'
									width={10000}
									height={10000}
									objectFit='cover'
								>
								</Image>
							</div>}
					/>
					<InfoTile
						title='Submission'
						description={`We also made a video submission showcasing the MVP and features.\n
					The Lynk app offers:
					● Events: Information on local events and programs that will help students develop confidence, improve skills and gain experience.
					● Opportunities: Provide tailored job and training opportunities so students can prepare themselves for the future
					● Community: A discussion platform for students to consult mentors and connect with peers as a tightly knit community.
				`}
						display={
							<div className='h-[40vw] md:h-[25vw] relative w-full md:w-[60%]'>
								<iframe className='w-full h-full' src="https://www.youtube.com/embed/L5GDFu2N2dE"
									title="YouTube video player"
									allowFullScreen
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
							</div>
						}
					/>
					{/* NextProejct */}
					<div className='py-32'>
						<NextProject
							url='/mycryptopocket'
							text='My Crypto Pocket'
						></NextProject>
					</div>
				</div>
			</div>

		</main >)
}
