import About from '@/components/About/About'
import Intro from '@/components/Intro/Intro'
import NavBar from '@/components/NavBar/NavBar'
import Projects from '@/components/Projects/Projects'
import Lynk from '@/components/Projects/projects/Lynk'
import MyCryptoPocket from '@/components/Projects/projects/MyCryptoPocket'
import WiseWagers from '@/components/Projects/projects/WiseWagers'
import Image from 'next/image'

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center bg-charade">
			<NavBar></NavBar>
			<div className='flex flex-col items-center snap-y'>
				<Intro></Intro>
				<About></About>
				<Projects></Projects>
				<WiseWagers></WiseWagers>
				<Lynk></Lynk>
				<MyCryptoPocket></MyCryptoPocket>
			</div>

		</main>
	)
}
