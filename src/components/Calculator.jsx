import { useState, useEffect } from 'react';
import { DarkModeToggle } from 'react-dark-mode-toggle-2';
export default function Calculator({ colorTheme, setColorTheme }) {
  const [currentOperator, setCurrentOperator] = useState(null);
  const [calculator, setCalculator] = useState({
    firstValue: '',
    secondValue: '',
  });

  const operations = {
    '+': (first, second) => first + second,
    '-': (first, second) => first - second,
    '/': (first, second) => first / second,
    X: (first, second) => first * second,
  };

  const handleCurrentOperator = (operator) => {
    if (operator !== currentOperator) {
      setCalculator((prevState) => ({ ...prevState, secondValue: '' }));
    }
    setCurrentOperator(operator);
  };

  const resetCalculator = () => {
    setCurrentOperator(null);
    setCalculator({ firstValue: '', secondValue: '' });
  };

  const handleCalculationValue = (newValue) => {
    currentOperator === null
      ? setCalculator((prevState) => {
          return {
            ...prevState,
            firstValue: prevState.firstValue + newValue,
          };
        })
      : setCalculator((prevState) => {
          return {
            ...prevState,
            secondValue: prevState.secondValue + newValue,
          };
        });
  };

  const calculate = () => {
    const result = operations[currentOperator](
      Number(calculator.firstValue),
      Number(calculator.secondValue)
    );

    setCalculator((prevState) => ({
      ...prevState,
      firstValue: result,
      secondValue: '',
    }));
    setCurrentOperator(null);
  };
  return (
    <section className="border dark:border-slate-600 flex flex-col rounded shadow-md bg-white dark:bg-slate-900 max-w-xs">
      <DarkModeToggle
        className="self-end mt-4 mr-4"
        size={50}
        isDarkMode={colorTheme === 'dark' ? true : false}
        onChange={() =>
          setColorTheme(colorTheme === 'light' ? 'dark' : 'light')
        }
      />
      <div className="p-4 py-6 text-right border-b dark:border-slate-600">
        <p className="text-sm text-gray-400 pb-4">
          {`${calculator.firstValue === '' ? '0' : calculator.firstValue} ${
            currentOperator === null ? '' : currentOperator
          } ${calculator.secondValue}`}
        </p>
        <div className="flex">
          <h2
            placeholder="0"
            disabled
            value={calculator.firstValue}
            className="text-5xl w-full  dark:text-slate-50 bg-transparent text-right"
          >
            {`${calculator.firstValue === '' ? '0' : calculator.firstValue} ${
              currentOperator === null ? '' : currentOperator
            } ${calculator.secondValue}`}
          </h2>
        </div>
      </div>
      <div className="p-4 grid grid-cols-4 gap-4">
        <button onClick={() => resetCalculator()} className="calculator-button">
          AC
        </button>
        <button className="calculator-button">+/-</button>
        <button className="calculator-button">%</button>
        <button
          onClick={({ currentTarget }) =>
            handleCurrentOperator(currentTarget.innerText)
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
            handleCurrentOperator(currentTarget.innerText)
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
            handleCurrentOperator(currentTarget.innerText)
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
            handleCurrentOperator(currentTarget.innerText)
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
        <button
          onClick={() => handleCalculationValue('.')}
          className="calculator-button"
        >
          ,
        </button>
        <button onClick={() => calculate()} className="calculator-button">
          =
        </button>
      </div>
    </section>
  );
}
