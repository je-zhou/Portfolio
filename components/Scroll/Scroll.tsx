import React from 'react'

interface ScrollProps {
	className?: string
}

export default function Scroll({ className }: ScrollProps) {
	return (
		<div className={'hidden w-8 h-20 border border-hoki rounded-full md:flex justify-center p-2' + " " + className}>
			<div className='w-2 h-2 rounded-full bg-hoki animate-wiggle'>
			</div>
		</div>
	)
}

