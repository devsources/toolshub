import { unsluglify } from "@/app/utils/sluglify"

type Props = {
  params: { category: string }
}

export default function Page({ params: { category } }: Props) {
  return (
    <main className="max-w-7xl my-20">
      <h1 className="font-bold text-4xl text-center">{unsluglify(category)}</h1>
    </main>
  )
}
