interface props {
  isVisible: boolean
  children: JSX.Element
}

export const ExplainModal = (props: props) => {
  if (props.isVisible) {
    return (
      <div className="absolute left-4 top-12 bg-white rounded-md" style={{ padding: "8px" }}>
        {props.children}
      </div>
    )
  }
  return <></>
}