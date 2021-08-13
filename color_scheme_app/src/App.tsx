import React from 'react';
import { ThemeProvider } from './context/ThemeProvider';
import './index.css';
// import Webpage from './components/Webpage';
// import example1 from './Examples/Webpage_Example';
// import Form from './components/Form/Form'
// import example2 from './Examples/Form_Example';
import Button from './components/Button/Button'

function App() {
  return (
    <>
    <ThemeProvider theme="seafoam1">
      <br />
      <Button label="Hello Button"/>
      {/* <Form formContent={example2}/> */}
      {/* <Webpage content={example1}/> */}
    </ThemeProvider>
    <ThemeProvider theme="coral1">
      <Button label="Bye Button" size="large" />
    </ThemeProvider>
    </>
  );
}

export default App;
