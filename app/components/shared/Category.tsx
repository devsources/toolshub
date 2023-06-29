type Props = {
  name: string
  description: string
  slug: string
}

export function Category({ description, name, slug }: Props) {
  return (
    <a href={`/${slug}`}>
      <section className="flex gap-2 bg-slate-800 rounded-md overflow-hidden">
        <img
          src="https://picsum.photos/300"
          width={200}
          height={200}
          alt={name}
          className=""
        />

        <div className="flex flex-col gap-4 p-6">
          <h5 className="font-semibold text-2xl">{name}</h5>
          <p className="text-base">{description}</p>
        </div>
      </section>
    </a>
  )
}
