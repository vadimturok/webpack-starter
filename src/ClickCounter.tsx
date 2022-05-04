import { useState } from 'react'

const ClickCounter = () => {
  const [count, setCount] = useState(0)
  const name = 'Vadim'
  console.log(name)
  return (
    <div className={'this'}>
      <h4>This is the title!!!</h4>
      <button onClick={() => setCount((c) => c + 1)}>Count: {count}</button>
    </div>
  )
}

export default ClickCounter
