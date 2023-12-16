import React, { MutableRefObject } from 'react'

export default function About() {
	return (
		<div id='About' className='flex flex-col justify-center w-full max-w-4xl h-screen px-8 snap-start '>
			<div className='flex flex-col space-y-8 justify-center items-center'>
				<h1 className='text-4xl xs:text-6xl md:text-8xl font-bold text-charade dark:text-white'>About Me</h1>
				<p className='text-xl font-light text-charade dark:text-heather text-center'>
					{"Hey! I'm a Master of Computer Science student on a quest to turn my lifelong love for tech into something big. I used to be in the corporate world, doing the Big-4 thing, but now I'm all about chasing my passion for computer science."}
				</p>
				<p className='text-xl font-light text-charade dark:text-heather text-center'>
					{" My heart lies in building web tools that people everywhere can use and love. There's something magical about creating stuff that makes life easier for folks globally. So, here I am, diving deep into the world of code, fueled by curiosity and a dream of making a real impact."}
				</p>
				<p className='text-xl font-light text-charade dark:text-heather text-center'>
					{"Let's connect the dots between business and tech and craft some web tools that'll be the next big thing! 🚀"}
				</p>
			</div>
		</div>
	)
}
