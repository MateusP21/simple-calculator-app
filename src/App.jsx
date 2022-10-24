import { useEffect, useState } from 'react';
import Calculator from './components/Calculator';
import { Toaster } from 'react-hot-toast';
function App() {
  const [colorTheme, setColorTheme] = useState('light');

  useEffect(() => {
    const root = window.document.documentElement;

    root.removeAttribute('class');
    root.classList.add(colorTheme);
  }, [colorTheme]);

  return (
    <main className=" dark:bg-slate-900 mx-auto p-4 flex items-center justify-center h-screen">
      <Toaster position="top-right" toastOptions={{ duration: 2000 }} />
      <Calculator colorTheme={colorTheme} setColorTheme={setColorTheme} />
    </main>
  );
}

export default App;
