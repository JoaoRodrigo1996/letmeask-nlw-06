import { useState } from "react"

export function Button() {
  const [counter, setCounter] = useState(0)

  function increment() {
    setCounter((prevState) => prevState + 1)
  }

  return (
    <>
      <button onClick={increment}>{counter}</button>
    </>
  )
}
