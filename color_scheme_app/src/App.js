import { ThemeProvider } from './context/ThemeProvider';
import Dropdown from './components/Dropdown';
import './index.css';
import Webpage from './components/Webpage';
import example1 from './Examples/Webpage_Example';
// import Form from './components/Form'
// import example2 from './Examples/Form_Example';

function App() {
  return (
    <>
    <ThemeProvider theme="spring1">
      <br />
      <Dropdown />
      {/* <Form formContent={example2}/> */}
      {/* <Webpage content={example1}/> */}
    </ThemeProvider>
    </>
  );
}

export default App;
