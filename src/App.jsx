import { useState } from 'react';
function App() {
  const [currentOperator, setCurrentOperator] = useState(null);
  const [calculationValue, setCalculationValue] = useState('0');
  const [firstValue, setFirstValue] = useState('');
  const [secondValue, setSecondValue] = useState('');

  const operations = {
    '+': (first, second) => first + second,
    '-': (first, second) => first - second,
    '/': (first, second) => first / second,
    x: (first, second) => first * second,
  };

  const handleCalculationValue = (value) => {
    if (currentOperator === null) {
      setFirstValue(value);
    } else {
      setSecondValue(value);
    }
  };

  const calculate = () => {
    const result = operations[currentOperator](
      Number(firstValue),
      Number(secondValue)
    );
    setCalculationValue(result);
  };
  return (
    <main className="container mx-auto p-4 flex items-center justify-center h-screen">
      <section className="border rounded shadow-md bg-white">
        <div className="p-4 py-6 text-right border-b">
          <p className="text-sm text-gray-400 pb-4">5 {currentOperator} 5</p>
          <h1 className="text-7xl">{calculationValue}</h1>
        </div>
        <div className="p-4 grid grid-cols-4 gap-4">
          <button className="calculator-button">AC</button>
          <button className="calculator-button">+/-</button>
          <button className="calculator-button">%</button>
          <button
            onClick={({ currentTarget }) =>
              setCurrentOperator(currentTarget.innerText)
            }
            className="calculator-button"
          >
            /
          </button>

          <button
            onClick={({ currentTarget }) =>
              handleCalculationValue(currentTarget.innerText)
            }
            className="calculator-button"
          >
            1
          </button>
          <button
            onClick={({ currentTarget }) =>
              handleCalculationValue(currentTarget.innerText)
            }
            className="calculator-button"
          >
            2
          </button>
          <button
            onClick={({ currentTarget }) =>
              handleCalculationValue(currentTarget.innerText)
            }
            className="calculator-button"
          >
            3
          </button>
          <button
            onClick={({ currentTarget }) =>
              handleCalculationValue(currentTarget.innerText)
            }
            className="calculator-button"
          >
            X
          </button>
          <button
            onClick={({ currentTarget }) =>
              handleCalculationValue(currentTarget.innerText)
            }
            className="calculator-button"
          >
            4
          </button>
          <button
            onClick={({ currentTarget }) =>
              handleCalculationValue(currentTarget.innerText)
            }
            className="calculator-button"
          >
            5
          </button>
          <button
            onClick={({ currentTarget }) =>
              handleCalculationValue(currentTarget.innerText)
            }
            className="calculator-button"
          >
            6
          </button>
          <button
            onClick={({ currentTarget }) =>
              setCurrentOperator(currentTarget.innerText)
            }
            className="calculator-button"
          >
            -
          </button>
          <button
            onClick={({ currentTarget }) =>
              handleCalculationValue(currentTarget.innerText)
            }
            className="calculator-button"
          >
            7
          </button>
          <button
            onClick={({ currentTarget }) =>
              handleCalculationValue(currentTarget.innerText)
            }
            className="calculator-button"
          >
            8
          </button>
          <button
            onClick={({ currentTarget }) =>
              handleCalculationValue(currentTarget.innerText)
            }
            className="calculator-button"
          >
            9
          </button>
          <button
            onClick={({ currentTarget }) =>
              setCurrentOperator(currentTarget.innerText)
            }
            className="calculator-button"
          >
            +
          </button>
          <button
            onClick={({ currentTarget }) =>
              handleCalculationValue(currentTarget.innerText)
            }
            className="calculator-button col-span-2"
          >
            0
          </button>
          <button className="calculator-button">,</button>
          <button onClick={() => calculate()} className="calculator-button">
            =
          </button>
        </div>
      </section>
    </main>
  );
}

export default App;
