function Wrapper({ children, color }) {
  const wrapperStyle = {
    backgroundColor: color,
    width: "250px",
    padding: "20px",
    margin: "20px auto",
  }

  return (
    <div style={wrapperStyle}>
      <h1>Test</h1>
      {children}
    </div>
  )
}

export default Wrapper
