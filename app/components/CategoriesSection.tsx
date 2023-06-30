import { Category } from '@/app/components/shared/Category'
import categories from '@/app/db/categories.json'

export function CategoriesSection() {
	return (
		<section>
			<h3 className='font-semibold text-center text-4xl'>Categories</h3>

			<section className='grid grid-cols-[repeat(auto-fill,minmax(600px,1fr))] gap-4 my-20'>
				{categories.map(({ description, name, slug }) => (
					<Category key={name} description={description} name={name} slug={slug} />
				))}
			</section>
		</section>
	)
}
