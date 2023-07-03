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
		<main className='max-w-7xl my-20 mx-auto'>
			<h1 className='font-bold text-4xl text-center'>{unsluglify(category)}</h1>

			<Search resources={resources} />
		</main>
	)
}

export async function generateStaticParams() {
	return categories.map((category) => ({
		slug: sluglify(category.name)
	}))
}
