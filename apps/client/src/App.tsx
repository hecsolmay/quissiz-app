export default function App () {
  const handleClick = async () => {
    try {
      const response = await fetch('/api')
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }

      const data = await response.json()
      console.log(data)
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <div>
      <button onClick={handleClick}>Click me</button>
    </div>
  )
}
