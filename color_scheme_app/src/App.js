import ThemeProvider from './context/ThemeProvider';
import Button from './components/Button'
import './App.css';

function App() {
  return (
    <ThemeProvider theme="tester">
      <div className="App">
        <Button />
      </div>
    </ThemeProvider>
  );
}

export default App;
