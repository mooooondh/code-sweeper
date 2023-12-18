"use client"

interface props {
  title: string
  onClick(): void
}

export const NormalButton = (props: props) => {
  return (
    <div
      className="px-4 py-2 rounded-lg bg-emerald-500"
      onClick={() => props.onClick()}
    >
      <p className="select-none text-xl">{props.title}</p>
    </div>
  )
}