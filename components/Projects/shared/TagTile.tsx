import React from 'react'

interface TagTile {
	tag: string
}

export default function TagTile({ tag }: TagTile) {
	return (
		<div className='text-center px-2 py-1 border text-xs sm:text-base border-heather rounded-md bg-slate-200 text-slate-600 dark:bg-slate-600 dark:text-heather font-bold'>
			{tag}
		</div>)
}
