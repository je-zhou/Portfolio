import React from 'react'

interface ColorTileProps {
	hex: string
	className?: string
}

export default function ColorTile({ hex, className }: ColorTileProps) {
	return (
		<div
			style={{ backgroundColor: hex }}
			className={`h-12 w-12 rounded-full shadow-md  border-white border ` + className}
		></div>
	)
}
