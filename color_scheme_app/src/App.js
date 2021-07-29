import { ThemeProvider } from './context/ThemeProvider';
import Border from './components/Border'
import './App.css';

function App() {
  return (
    <>
    <ThemeProvider theme="frozen2">
      <div className="App">
        <Border content="testing button" />
      </div>
    </ThemeProvider>
    </>
  );
}

export default App;
