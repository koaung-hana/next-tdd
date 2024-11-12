import { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)
  return (
    <>
      <input readOnly className="hidden" type="number" value={count}></input>
      <button type="button" onClick={() => setCount(count + 1)} className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
        Login
      </button>
    </>
  )
}
