Example 1 .
  

function Example() {
  const [flag, setFlag] = useBoolean()

  return (
    <div onMouseEnter={setFlag.on} onMouseLeave={setFlag.off}>
      {flag ? 'The flag is ON!' : 'Hover me to turn ON'}
    </div>
  )
}
