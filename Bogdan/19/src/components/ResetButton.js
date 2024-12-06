function ResetButton({ count, setCount }) {
  const buttonStyle = { backgroundColor: "lightgreen" }
  const resetCount = () => {
    setCount(0)
  }

  return (
    count > 0 && (
      <button style={buttonStyle} onClick={resetCount}>
        Reset
      </button>
    )
  )
}

export default ResetButton
