interface props {
  value: string
  onChange(value: string): void
  placeholder?: string
}

export const LargeTextInput = (props: props) => {
  return (
    <textarea
      className="flex flex-1 bg-gray-800 text-white outline-none p-4"
      style={{ boxSizing: "border-box", resize: "none", height: "100%" }}
      wrap="off"
      value={props.value}
      onChange={(event) => props.onChange(event.target.value)}
      placeholder={props.placeholder}
    />
  )
}