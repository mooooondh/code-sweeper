import Image from "next/image"

import LOADING from "../../app/assets/icons/loading.svg"

interface props {
  isLoading: boolean
}

export const LoadingView = (props: props) => {
  if (props.isLoading) {
    return (
      <div className="absolute left-0 top-0 flex w-full h-full items-center justify-center">
        <Image
          src={LOADING}
          alt={"loading"}
          width={42}
          height={42}
        />
      </div>
    )
  }

  return <></>
}