import { sluglify, unsluglify } from '@/app/utils/sluglify'
import { Search } from '@/app/[category]/components/Search'
import categories from '@/app/db/categories.json'
import { Resource } from '@/app/types'

type Props = {
	params: { category: string }
}

export default async function Page({ params: { category } }: Props) {
	const resources = (await import(`@/app/db/${category}`)).default as Resource[]

	return (
		<main className='mx-auto my-20 max-w-7xl'>
			<h1 className='text-4xl font-bold text-center text-primary dark:text-white'>
				{unsluglify(category)}
			</h1>

			<Search resources={resources} />
		</main>
	)
}

export async function generateStaticParams() {
	return categories.map((category) => ({
		slug: sluglify(category.name)
	}))
}
