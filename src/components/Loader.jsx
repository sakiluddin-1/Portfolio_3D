import {Html, useProgress} from "@react-three/drei";

const Loader = () => {
  const {progress} = useProgress();
  return (
    <Html center clasName = "text-xl font-normal text-center "> {progress}% loaded</Html>
  )
}

export default Loader
