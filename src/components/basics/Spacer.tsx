interface props {
  distance: number
}

export const Spacer = (props: props) => {
  return (
    <div style={{ minWidth: props.distance + "px", minHeight: props.distance + "px" }} />
  )
}