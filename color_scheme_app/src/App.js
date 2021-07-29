import { ThemeProvider } from './context/ThemeProvider';
import Border from './components/Border'
import './App.css';

function App() {
  return (
    <>
    <ThemeProvider theme="sanjuan1">
      <div className="App">
        <Border borderContent="testing button" />
      </div>
    </ThemeProvider>
    </>
  );
}

export default App;
