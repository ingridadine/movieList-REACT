import './App.css'

function App() {
  return (
    <>
      <Text display="What's up?"/>
      <Text display="Hello!"></Text>
    </>
  )
}

function Text({display}) {
  return (
    <div>
      <p>{display}</p>
    </div>
  )
}

export default App
