function Wrapper({ children, color }) {
  const wrapperStyle = {
    backgroundColor: color,
    width: "250px",
    padding: "20px",
    margin: "20px auto",
  }

  return <div style={wrapperStyle}>{children}</div>
}

export default Wrapper
