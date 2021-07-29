import { ThemeProvider } from './context/ThemeProvider';
import Pages from './components/Pages'
import './App.css';

function App() {
  return (
    <>
    <ThemeProvider theme="sunflower1">
      <div className="App">
        <Pages pageBorderRadius = '25px'/>
      </div>
    </ThemeProvider>
    </>
  );
}

export default App;
