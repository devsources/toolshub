import resources from "@/app/db/UI.json"

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto">
      <section className="grid place-content-center gap-4 py-24 h-[calc(100vh_-_64px)]">
        <h1 className="font-extrabold text-center text-7xl">Devsources</h1>
        <h2 className="font-semibold text-center text-2xl max-w-2xl">
          Welcome to the platform where you will find the best resources for programmers, designers and more.
        </h2>
      </section>

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
