type Props = {
  params: { category: string }
}

export default function Page({ params: { category } }: Props) {
  return (
    <main>
      <h1>{category}</h1>
    </main>
  )
}
