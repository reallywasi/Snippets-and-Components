//Example 1 .
  

function Example() {
  const [flag, setFlag] = useBoolean()

  return (
    <div onMouseEnter={setFlag.on} onMouseLeave={setFlag.off}>
      {flag ? 'The flag is ON!' : 'Hover me to turn ON'}
    </div>
  )
}




//Example 2.
function Example() {
  const [flag, setFlag] = useBoolean()

  return (
    <>
      <p>Boolean state: {flag.toString()}</p>
      <button onClick={setFlag.toggle}>
        Click me to toggle the boolean value
      </button>
    </>
  )
}
