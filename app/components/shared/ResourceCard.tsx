type Props = {
  title: string
  description: string
  url: string
  imageURL: string
}

export function ResourceCard({ description, imageURL, title, url }: Props) {
  return (
    <article className="flex flex-col gap-4 rounded-md hover:scale-105 hover:shadow-2xl bg-slate-700 p-4 max-w-xs transition-transform">
      <img src={imageURL} alt={title} className="rounded-md" />

      <div className="flex flex-col gap-4">
        <h6 className="font-semibold text-xl">{title}</h6>
        <p>{description}</p>
        <a href={url}>Visit</a>
      </div>
    </article>
  )
}
