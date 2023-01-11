import { useDispatch, useSelector } from 'react-redux'

import { RootState } from '@store'

import { increment, decrement } from './state'

export const HomePage = () => {
  const count = useSelector((state: RootState) => state.homePage.value)
  const dispatch = useDispatch()

  console.log('count >>', count)
  return (
    <div>
      <h1>Home Page</h1>
      <h2>Counter value: {count}</h2>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(increment())}>+</button>
    </div>
  )
}
