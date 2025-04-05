import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import Button from './components/button/button'
import TextInputForm from './components/TextInputForm/TextInputForm'
import Grid from './components/gird/Grid'

function Home() {
  return (
    <div>
      <h1>HangMan</h1>
      <TextInputForm />
      <Button text="Click me" />
    </div>
  )
}

function About() {
  return (
    <div>
      <h1>About</h1>
      <p>This is the HangMan game made in React.</p>
    </div>
  )
}

function NotFound() {
  return <h1>404 - Page Not Found</h1>
}
function TicTacToe(){
 return(
  <div>
    <h1 className='text-white'>Tic Tac Toe</h1>
    <p className='text-white'> This is the Tic Tac Toe game.</p>
    <Grid numberOfCards={9} />
  </div>
 )
}

function App() {
  return (
    <>
      <nav style={{ padding: '10px', backgroundColor: '#eee' }}>
        <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
        <Link to="/about">About</Link>
        <Link to="/tic-tac-toe" style={{ marginLeft: '10px' }}>Tic Tac Toe</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/tic-tac-toe" element={<TicTacToe/>}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
