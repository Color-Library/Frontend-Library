import { ThemeProvider } from './context/ThemeProvider';
import Button from './components/Button'
import './App.css';

function App() {
  return (
    <>
    <ThemeProvider theme="sanjuan1">
      <div className="App">
        <Button label="testing button" />
      </div>
    </ThemeProvider>
    </>
  );
}

export default App;
