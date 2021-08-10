import { ThemeProvider } from './context/ThemeProvider';
import Breadcrumbs from './components/Breadcrumbs';
import './App.css';
// import Webpage from './components/Webpage';
//import example from './Examples/Webpage_Example';
import Form from './components/Form'
import example from './Examples/Form_Example';
function App() {
  return (
    <>
    <ThemeProvider theme="seafoam1">
      <br />
      <Form formContent={example}/>
      {/* <Webpage content={example}/> */}
    </ThemeProvider>
    </>
  );
}

export default App;
