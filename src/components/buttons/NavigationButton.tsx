// next
import Link from "next/link"

interface props {
  title: string
  navigationLink: string
}

export const NavigationButton = (props: props) => {
  return (
    <Link href={props.navigationLink}>
      <button
        className="px-4 py-2 rounded-lg bg-emerald-500"
      >
        <p className="select-none text-2xl">{props.title}</p>
      </button>
    </Link>
  )
}