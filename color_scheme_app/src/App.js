import { ThemeProvider } from './context/ThemeProvider';
import Border from './components/Border'
import './App.css';

function App() {
  return (
    <>
    <ThemeProvider theme="frozen2">
      <div className="App">
        <Border borderTxtColor='green'/>
      </div>
    </ThemeProvider>
    </>
  );
}

export default App;
