import { useState, useEffect } from "react"

export function DebouncedSearch() {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!query) {
      setResults([])
      return
    }

    setIsLoading(true)
    setError(null)

    const timerId = setTimeout(() => {
      try {
        // Имитация API-запроса с возможной ошибкой
        if (Math.random() > 0.9) {
          // 10% chance of error for demonstration
          throw new Error("Failed to fetch results")
        }

        // Имитация задержки сети
        setTimeout(() => {
          setResults([`Result 1 for "${query}"`, `Result 2 for "${query}"`])
          setIsLoading(false)
        }, 300)
      } catch (err) {
        setError(err.message)
        setIsLoading(false)
      }
    }, 500)

    return () => {
      clearTimeout(timerId)
      setIsLoading(false)
    }
  }, [query])

  return (
    <div style={{ maxWidth: "400px", margin: "20px auto" }}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
        style={{
          padding: "8px",
          width: "100%",
          boxSizing: "border-box",
          marginBottom: "10px",
        }}
      />

      {isLoading && (
        <div style={{ padding: "10px", color: "#666" }}>Loading...</div>
      )}

      {error && (
        <div style={{ padding: "10px", color: "red" }}>Error: {error}</div>
      )}

      {!isLoading && !error && results.length > 0 && (
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            border: "1px solid #eee",
            borderRadius: "4px",
          }}>
          {results.map((result, index) => (
            <li
              key={index}
              style={{
                padding: "8px 12px",
                borderBottom: "1px solid #eee",
                ":last-child": {
                  borderBottom: "none",
                },
              }}>
              {result}
            </li>
          ))}
        </ul>
      )}

      {!isLoading && !error && query && results.length === 0 && (
        <div style={{ padding: "10px", color: "#666" }}>
          No results found for "{query}"
        </div>
      )}
    </div>
  )
}
