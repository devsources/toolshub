import { CategoriesSection } from '@/app/components/CategoriesSection'
import { Hero } from '@/app/components/Hero'

export default function Home() {
	return (
		<main className='max-w-7xl mx-auto'>
			<Hero />

			<CategoriesSection />
		</main>
	)
}
