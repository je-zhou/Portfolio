import React, { useState } from 'react'
import Image from 'next/image'

interface GalleryProps {
	images: Array<string>
}

export default function Gallery({ images }: GalleryProps) {

	const [index, setIndex] = useState(0);
	const length = images.length;

	const handlePrevious = () => {
		const newIndex = index - 1;
		setIndex(newIndex < 0 ? length - 1 : newIndex);
	};

	const handleNext = () => {
		const newIndex = index + 1;
		setIndex(newIndex >= length ? 0 : newIndex);
	};

	let imageComponents: Array<React.JSX.Element> = []

	for (let i = 0; i < images.length; i++) {
		const imageURL = images[i]
		const component = (
			<div key={imageURL} className=' w-full bg-red-50 flex justify-center items-center duration-75' >
				<Image className='h-full' src={imageURL} alt={imageURL} width={100000} height={10000} />
			</div>)

		imageComponents.push(component)
	}

	return (
		<div className='h-[50vh] w-[100vw] flex flex-nowrap overflow-scroll'>
			{imageComponents}
		</div>
	)
}
