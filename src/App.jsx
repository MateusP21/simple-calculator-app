import { useEffect, useState } from 'react';
function App() {
  const [currentOperator, setCurrentOperator] = useState(null);
  const [calculationValue, setCalculationValue] = useState('');
  const [calculator, setCalculator] = useState({
    firstValue: '',
    secondValue: '',
  });

  const operations = {
    '+': (first, second) => first + second,
    '-': (first, second) => first - second,
    '/': (first, second) => first / second,
    x: (first, second) => first * second,
  };

  useEffect(() => {
    if (currentOperator === null) {
      setCalculationValue(calculator.firstValue);
    } else {
      setCalculationValue(calculator.secondValue);
    }
  }, [calculator.firstValue, calculator.secondValue]);

  const handleCalculationValue = (newValue) => {
    currentOperator === null
      ? setCalculator((prevState) => {
          return {
            ...prevState,
            firstValue: prevState.firstValue.concat(newValue),
          };
        })
      : setCalculator((prevState) => {
          return {
            ...prevState,
            secondValue: prevState.secondValue.concat(newValue),
          };
        });
  };

  const calculate = () => {
    const result = operations[currentOperator](
      Number(calculator.firstValue),
      Number(calculator.secondValue)
    );
    setCalculationValue(result);
  };
  return (
    <main className="container mx-auto p-4 flex items-center justify-center h-screen">
      <section className="border rounded shadow-md bg-white max-w-xs">
        <div className="p-4 py-6 text-right border-b">
          <p className="text-sm text-gray-400 pb-4">5 {currentOperator} 5</p>
          <div className="flex">
            <input
              placeholder="0"
              disabled
              value={calculationValue}
              className="text-7xl overflow-hidden bg-transparent placeholder:text-right text-right"
            ></input>
          </div>
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
