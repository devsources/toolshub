import { unsluglify } from "@/app/utils/sluglify"

type Props = {
  params: { category: string }
}

export default function Page({ params: { category } }: Props) {
  return (
    <main>
      <h1>{unsluglify(category)}</h1>
    </main>
  )
}
