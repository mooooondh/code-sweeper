interface props {
  isVisible: boolean
  children: JSX.Element
}

export const ExplainModal = (props: props) => {
  if (props.isVisible) {
    return (
      <div className="absolute left-4 top-12 p-2 bg-gray-600 rounded-lg">
        {props.children}
      </div>
    )
  }
  return <></>
}