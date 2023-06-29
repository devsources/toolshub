import Link from "next/link";

export function Footer() {
  return (
    <footer className="p-4">
      <p className="text-center">
        <Link href="https://github.com/devsources/devsources">
          Visit Devsources in Github
        </Link>
      </p>
    </footer>
  )
}
