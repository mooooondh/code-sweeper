interface props {
  title: string
  backgroundColor: string
  textColor: string
}

export const NormalTag = (props: props) => {
  return (
    <div className={`inline-block w-fit px-2 rounded-md ${props.backgroundColor}`}>
      <p className={`select-none ${props.textColor}`}>{props.title}</p>
    </div>
  )
}