import resources from "@/app/db/UI.json"

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto">
      <div className="flex flex-col gap-4 py-24">
        <h1 className="font-bold text-center text-6xl">Devsources</h1>
        <h2 className="font-bold text-center text-3xl">
          Resources for developers
        </h2>
      </div>

      <section className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4 my-20">
        {resources.map(({ name, description }) => (
          <article
            className="flex flex-col gap-4 p-4 bg-slate-800 rounded-md"
            key={name}
          >
            <h5 className="font-semibold text-2xl">{name}</h5>
            <p className="text-base">{description}</p>
          </article>
        ))}
      </section>
    </main>
  )
}
