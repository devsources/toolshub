import { sluglify, unsluglify } from '@/app/utils/sluglify'
import { ResourceCard } from '../components/shared/ResourceCard'
import categories from '@/app/db/categories.json'

type Resource = {
	description: string
	name: string
	image: string
	title: string
	url: string
}

type Props = {
	params: { category: string }
}

export default async function Page({ params: { category } }: Props) {
	const resources = (await import(`@/app/db/${category}`)).default as Resource[]

	return (
		<main className='max-w-7xl my-20 mx-auto'>
			<h1 className='font-bold text-4xl text-center'>{unsluglify(category)}</h1>

			<section className='grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-x-6 gap-y-8 my-20'>
				{resources.map(({ description, name, image, title, url }) => (
					<ResourceCard
						key={name}
						description={description}
						imageURL={image}
						title={title}
						url={url}
					/>
				))}
			</section>
		</main>
	)
}

export async function generateStaticParams() {
	return categories.map((category) => ({
		slug: sluglify(category.name)
	}))
}
