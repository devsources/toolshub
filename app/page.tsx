import { Category } from "./components/shared/Category"

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto">
      <div className="flex flex-col gap-4 py-24">
        <h1 className="font-bold text-center text-6xl">Devsources</h1>
        <h2 className="font-bold text-center text-3xl">
          Resources for developers
        </h2>
      </div>

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
