interface props {
  value: string
  onChange(value: string): void
  placeholder?: string
}

export const LargeTextInput = (props: props) => {
  return (
    <textarea
      className="flex flex-1 bg-gray-800 text-white outline-none"
      style={{ boxSizing: "border-box", padding: "16px", resize: "none", height: "100%" }}
      wrap="off"
      value={props.value}
      onChange={(event) => props.onChange(event.target.value)}
      placeholder={props.placeholder}
    />
  )
}