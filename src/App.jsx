function App() {
  return (
    <main className="container mx-auto p-4 flex items-center justify-center h-screen">
      <section className="border rounded shadow-md">
        <div className="p-4 py-6 text-right border-b">
          <p className="text-sm text-gray-400 pb-4">5 + 5</p>
          <h1 className="text-7xl">10</h1>
        </div>
        <div className="p-4 grid grid-cols-4 gap-4">
          <button className="calculator-button">AC</button>
          <button className="calculator-button">+/-</button>
          <button className="calculator-button">%</button>
          <button className="calculator-button">/</button>

          <button className="calculator-button">1</button>
          <button className="calculator-button">2</button>
          <button className="calculator-button">3</button>
          <button className="calculator-button">X</button>
          <button className="calculator-button">4</button>
          <button className="calculator-button">5</button>
          <button className="calculator-button">6</button>
          <button className="calculator-button">-</button>
          <button className="calculator-button">7</button>
          <button className="calculator-button">8</button>
          <button className="calculator-button">9</button>
          <button className="calculator-button">+</button>
          <button className="calculator-button col-span-2">0</button>
          <button className="calculator-button">,</button>
          <button className="calculator-button">=</button>
        </div>
      </section>
    </main>
  );
}

export default App;
