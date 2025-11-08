function App() {
  let son = 0
  function incrementSon() {
    son = son++
  }
  return (
    <div>
      <h1 className="title" onMouseLeave={()=>incrementSon()}>{son}</h1>

    </div>
  )
}

export default App

// let data = "salom" // global

// for(let i = 0) // block

// if(){
//   // let block 
// }

// function(){
//   // let functional
// }

