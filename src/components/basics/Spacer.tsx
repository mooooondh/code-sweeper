interface props {
  distance: number
}

export const Spacer = (props: props) => {
  return (
    <div style={{ width: props.distance + "px", height: props.distance + "px" }} />
  )
}