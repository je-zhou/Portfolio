'use client'
import { useThemeContext } from '@/components/ThemeProvider/ThemeProvider';
import React from 'react'
import TitleBackground from '@/components/Projects/ProjectPages/shared/TitleBackground';
import InfoTile from '@/components/Projects/ProjectPages/shared/InfoTile';
import Image from "next/image"
import NextProject from '@/components/Projects/ProjectPages/shared/NextProject';
import ProjectSpec from '@/components/Projects/ProjectPages/shared/ProjectSpec';

export default function ZeroTwoOnePage() {
	let theme = useThemeContext();

	return (
		<main className={`${theme === "dark" ? "dark" : ""}`}>
			<div className='flex min-h-screen max-w-full flex-col items-center bg-light-background dark:bg-charade'>
				<TitleBackground
					title='021'
					tags={['Typescript', 'NextJS', 'PlanetScale', 'PrismaDB', 'Clerk Auth']}
					description='A web design agency and e-commerce platform designed to help small businesses set up shop online'
					backgroundImgUrl='/projects/021/021 - Background.jpg'
					colors={['#FFFFFF', '#000000']}
					projectSpec={<ProjectSpec
						pairs={{
							"Front End:": "NextJS, TailwindCSS",
							"Back End:": "PrismaDB, PlanetScale (MySQL), NextJS API",
							"Miscellaneous:": "Midjourney Generative AI",
						}}
					></ProjectSpec>
					}
				/>
				{/* Summaries Tiles	 */}
				<div className='flex flex-col items-center px-4 md:px-24'>
					<InfoTile
						title='Project Background'
						description={"This started as a project to support some of my friends who were looking to open up small businesses and didn't want to have to pay a premium for the Shopify platform while not having the freedom to build custom, on brand websites outside the limitations of the stock standard website builder.\nTherefore 021 was born, an e-commerce platform designed to help businesses go from 0 to setting up their first shop online."}
						display={
							<div className=' w-[60%] h-auto relative'>
								<Image
									className='rounded-lg'
									src={"/projects/021/021 - 2.png"}
									alt='Lynk Spec'
									width={10000}
									height={10000}
									objectFit='cover'
								>
								</Image>
							</div>}
					/>
					<InfoTile
						title='How It Works'
						description={`There are two parts to 021. 
						The first being a web design and development agency where an initial mock up for a online storefront is drawn up in Figma, and then upon client approval is developed using NextJS.
						Clients are then onboarded to 021 Commerce, a dedicated e-commerce CMS where clients can then upload information about their products, collections, shipping, as well as manage orders and revenue.
						`}
						display={
							<div className=' w-[60%] h-auto relative'>
								<Image
									className='rounded-lg'
									src={"/projects/021/021 - 5.png"}
									alt='Lynk Spec'
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
						description={`There are still small bugs to fix and quality of life updates to address on the development side of things.
							From the business end, I would like to continue to onboard more clients at a sustainable rate while maintaining a healthy workload.
						`}
						display={
							<div className=' w-[60%] h-auto relative'>
								<Image
									className='rounded-lg'
									src={"/projects/021/021 - 4.png"}
									alt='Lynk Spec'
									width={10000}
									height={10000}
									objectFit='cover'
								>
								</Image>
							</div>
							}
					/>
					{/* NextProejct */}
					<div className='py-32'>
						<NextProject
							url='/wisewagers'
							text='WiseWagers'
						></NextProject>
					</div>
				</div>
			</div>

		</main >)
}
