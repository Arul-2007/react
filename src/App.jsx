import { useState } from 'react'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="page">
      <div className="counter-box">
        <h1 className="title">Counter Application</h1>

        <div className="count-display">
          <p className="count-label">Current Count</p>
          <p className="count-value">{count}</p>
        </div>

        <div className="buttons">
          <button className="btn increment" onClick={() => setCount(count + 1)}>
            Increment
          </button>
          <button className="btn decrement" onClick={() => setCount(count - 1)}>
            Decrement
          </button>
          <button className="btn reset" onClick={() => setCount(0)}>
            Reset
          </button>
        </div>
      </div>
    </div>
  )
}
