'use client'

import { ResourceCard } from '@/app/components/shared/ResourceCard'
import { useDebounce } from '@/app/hooks/useDebounce'
import { Resource } from '@/app/types'
import { IconSearch } from '@tabler/icons-react'
import { useCallback, useId, useState } from 'react'

type Props = {
	resources: Resource[]
}

export function Search({ resources }: Props) {
	const searchInputId = useId()
	const [search, setSearch] = useState('')

	const debouncedSearch = useDebounce(search, 400)

	const filteredResources = resources.filter(
		(r) =>
			r.description.toLowerCase().includes(debouncedSearch) ||
			r.title.toLowerCase().includes(debouncedSearch)
	)

	const handleSearchChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(event.target.value.toLowerCase())
	}, [])

	return (
		<section>
			<label className='relative flex items-center justify-center gap-2 mx-auto my-12 w-fit text-primary dark:text-white'>
				<IconSearch className='absolute left-4' />
				<input
					onChange={handleSearchChange}
					type='search'
					name={searchInputId}
					id={searchInputId}
					className='py-2 pl-12 pr-16 rounded-full'
				/>

				<span className='absolute right-4'>Search</span>
			</label>

			<section className='grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-x-6 gap-y-8 my-20'>
				{filteredResources.map(({ description, name, image, title, url }) => (
					<ResourceCard
						key={name}
						description={description}
						imageURL={image}
						title={title}
						url={url}
					/>
				))}
			</section>
		</section>
	)
}
