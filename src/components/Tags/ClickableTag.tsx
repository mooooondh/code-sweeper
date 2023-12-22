interface props {
  title: string
  backgroundColor: string
  textColor: string
  onClick(): void
}

export const ClickableTag = (props: props) => {
  return (
    <div
      className={`
        inline-block
        w-fit
        px-2
        rounded-md
        ${props.backgroundColor}
        hover:border border-white
      `}
      onClick={props.onClick}
    >
      <p className={`select-none ${props.textColor}`}>{props.title}</p>
    </div>
  )
}