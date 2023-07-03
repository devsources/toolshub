type Props = {
	name: string
	description: string
	slug: string
	className?: string
}

export function Category({ description, name, slug, className }: Props) {
	return (
		<a href={`/${slug}`} className='hover:no-underline'>
			<section
				className={`flex flex-col justify-between gap-4 bg-gradient-to-r rounded-md overflow-hidden h-full p-4 ${className}`}
			>
				<div className='flex flex-col gap-4'>
					<h5 className='font-semibold text-2xl'>{name}</h5>
					<p className='text-base text-ellipsis'>{description}</p>
				</div>

				<button className='bg-white text-gray-900 py-2 px-4 text-sm rounded-full w-fit'>
					Visit section
				</button>
			</section>
		</a>
	)
}
