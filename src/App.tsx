import './styles.css'
import ClickCounter from './ClickCounter'

const App = () => {
  return (
    <>
      <h1>
        Hello, React TypeScript Webpack Starter Template -{' '}
        {process.env.NODE_ENV} {process.env.name}
      </h1>
      <ClickCounter />
    </>
  )
}

export default App
