import { Category } from '@/app/components/shared/Category'
import categories from '@/app/db/categories.json'

const CATEGORY_CARD_GRADIENTS = [
	'bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500',
	'bg-gradient-to-tr from-white via-sky-500 to-sky-500',
	'bg-gradient-to-bl from-emerald-500 to-lime-600',
	'bg-gradient-to-bl from-slate-900 via-purple-900 to-slate-900'
]

export function CategoriesSection() {
	return (
		<section>
			<h3 className='text-4xl font-semibold text-center text-primary dark:text-white'>
				Categories
			</h3>

			<section className='grid grid-cols-[repeat(auto-fill,minmax(min(250px,100%),1fr))] gap-4 my-20'>
				{categories.map(({ description, name, slug }, index) => (
					<Category
						key={name}
						description={description}
						name={name}
						slug={slug}
						className={
							CATEGORY_CARD_GRADIENTS[
								index < CATEGORY_CARD_GRADIENTS.length
									? index
									: index - CATEGORY_CARD_GRADIENTS.length
							]
						}
					/>
				))}
			</section>
		</section>
	)
}
