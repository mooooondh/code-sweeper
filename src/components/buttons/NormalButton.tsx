"use client"

interface props {
  title: string
  onClick(): void
  disable?: boolean
}

export const NormalButton = (props: props) => {
  if (props.disable === true) {
    return (
      <div
        className="px-4 py-2 rounded-lg bg-gray-400"
      >
        <p className="select-none text-xl">{props.title}</p>
      </div>
    )
  }

  return (
    <button
      className="px-4 py-2 rounded-lg bg-emerald-500"
      onClick={() => props.onClick()}
    >
      <p className="select-none text-xl">{props.title}</p>
    </button>
  )
}