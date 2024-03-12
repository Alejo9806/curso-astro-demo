import { useState } from "react"

const Counter = () => {
    const [counter, setCounter] = useState(0)

    const increment = () => {
        setCounter(counter + 1)
    }

    const decrement = () => {
        setCounter(counter - 1)
    }
  return (
    <div className="w-auto flex justify-center items-center mt-5">
        <span className="mr-3 text-yellow-300">{counter}</span>
        <button className="px-5 py-2 border border-grey-100" onClick={increment}>+</button>
        <button className="px-5 py-2 border border-grey-100 " onClick={decrement}>-</button>
    </div>
  )
}

export default Counter