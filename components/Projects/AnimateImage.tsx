import React, { useRef } from 'react'
import { motion, useTransform, useScroll } from "framer-motion"
import Image from 'next/image'

interface AnimateImageProps {
	imageURL: string
	className?: string
}

export default function AnimateImage({ imageURL, className }: AnimateImageProps) {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "end start"]
	});

	const opacity = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

	return (
		<motion.div ref={ref} className={className + ' ' + 'flex items-center justify-center h-full'} style={{ opacity }}>
			<Image className='h-auto w-2/5 py-24' src={imageURL} width={1000000} height={1000000} alt={imageURL} >
			</Image >
		</motion.div >
	)
}
