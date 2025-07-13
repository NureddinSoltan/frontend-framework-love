import React from 'react'
const App = () => {
  const name = 'john';
  const x = 10
  const y = 20
  const names = ['Noureldien', 'Soltan', 'Wafaa']
  const loggenIn = true;
  const styles = {
    color: 'red',
    fontSize: '55px'
  }

  return (
    <>
      <div>App</div>
      <p style={{ color: 'red', fontSize:'24px' }}>Hello {name}</p>
      <p style={styles}>Hello {name}</p>
      <p>The sum of {x} and {y} is {x + y}</p>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
      {loggenIn ? <h1>Hello Member</h1> : <h1>Hello Guest</h1>}
      {loggenIn && <h1>Hello Member</h1>}
    </>
  )
}

export default App