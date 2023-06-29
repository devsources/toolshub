import { Category } from "./components/shared/Category"
import categories from "@/app/db/categories.json"

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto">
      <section className="grid place-content-center gap-4 py-24 h-[calc(100vh_-_64px)]">
        <h1 className="font-extrabold text-center text-7xl">Devsources</h1>
        <h2 className="font-semibold text-center text-2xl max-w-2xl">
          Welcome to the platform where you will find the best resources for
          programmers, designers and more.
        </h2>
      </section>

      <h3 className="font-semibold text-center text-4xl">Categories</h3>

      <section className="grid grid-cols-[repeat(auto-fill,minmax(600px,1fr))] gap-4 my-20">
        {categories.map(({ description, name, slug }) => (
          <Category key={name} description={description} name={name} slug={slug} />
        ))}
      </section>
    </main>
  )
}
