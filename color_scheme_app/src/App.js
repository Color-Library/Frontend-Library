import { ThemeProvider } from './context/ThemeProvider';
import Breadcrumbs from './components/Breadcrumbs';
import './App.css';
import Webpage from './components/Webpage';
import example1 from './Examples/Webpage_Example';
import Form from './components/Form'
import example2 from './Examples/Form_Example';

function App() {
  return (
    <>
    <ThemeProvider theme="coral1">
      <br />
      <Form formContent={example2}/>
      {/* <Webpage content={example1}/> */}
    </ThemeProvider>
    </>
  );
}

export default App;
