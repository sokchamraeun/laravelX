import { useState, useEffect } from 'react'

function App() {
  const [coffees, setCoffees] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/coffees')
      .then(res => res.json())
      .then(data => {
        setCoffees(data)
        setLoading(false)
      })
      .catch(err => {
        console.error('Failed to fetch coffees:', err)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 text-amber-800">
        <div className="w-10 h-10 border-4 border-amber-200 border-t-amber-700 rounded-full animate-spin"></div>
        <p className="text-lg">Brewing your menu...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-amber-50">
      <header className="bg-gradient-to-r from-amber-900 to-amber-950 text-white text-center py-12 px-6">
        <h1 className="text-5xl font-bold mb-2 tracking-tight">Coffee Shop</h1>
        <p className="text-lg opacity-80">Freshly brewed, lovingly served</p>
      </header>
      <main className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-6 p-10 max-w-4xl mx-auto">
        {coffees.map(coffee => (
          <div key={coffee.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
            <div className="h-48 overflow-hidden">
              <img src={coffee.image} alt={coffee.name} className="w-full h-full object-cover" />
            </div>
            <div className="p-4 flex justify-between items-center">
              <h2 className="text-lg font-semibold text-amber-950">{coffee.name}</h2>
              <span className="text-lg font-bold text-amber-700">${Number(coffee.price).toFixed(2)}</span>
            </div>
          </div>
        ))}
      </main>
    </div>
  )
}

export default App
