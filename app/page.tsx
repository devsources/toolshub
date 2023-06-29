import { Category } from "./components/shared/Category"

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto">
      <section className="grid place-content-center gap-4 py-24 h-[calc(100vh_-_64px)]">
        <h1 className="font-extrabold text-center text-7xl">Devsources</h1>
        <h2 className="font-semibold text-center text-2xl max-w-2xl">
          Welcome to the platform where you will find the best resources for programmers, designers and more.
        </h2>
      </section>

      <section className="grid grid-cols-[repeat(auto-fill,minmax(600px,1fr))] gap-4 my-20">
        <Category
          description="Component libraries for React, Astro, and Svelte"
          name="UI kits"
        />
        <Category
          description="Useful tools like CSS generators, etc..."
          name="Tools"
        />
        <Category description="AI tools" name="AI" />
        <Category description="lorem ipsum dolor" name="Lorem" />
      </section>
    </main>
  )
}
