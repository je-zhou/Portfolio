import About from '@/components/About/About'
import Intro from '@/components/Intro/Intro'
import NavBar from '@/components/NavBar/NavBar'
import Projects from '@/components/Projects/Projects'
import Image from 'next/image'

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center bg-charade">
			<NavBar></NavBar>
			<div className='flex flex-col items-center'>
				<Intro></Intro>
				<About></About>
				<Projects></Projects>
			</div>

		</main>
	)
}
