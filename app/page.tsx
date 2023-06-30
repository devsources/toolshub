import { Hero } from "./components/Hero"
import { Category } from "./components/shared/Category"
import categories from "@/app/db/categories.json"

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto">
      <Hero />

      <h3 className="font-semibold text-center text-4xl">Categories</h3>

      <section className="grid grid-cols-[repeat(auto-fill,minmax(600px,1fr))] gap-4 my-20">
        {categories.map(({ description, name, slug }) => (
          <Category key={name} description={description} name={name} slug={slug} />
        ))}
      </section>
    </main>
  )
}
