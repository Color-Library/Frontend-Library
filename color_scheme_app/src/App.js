import { ThemeProvider } from './context/ThemeProvider';
// import Pages from './components/Pages'
// import Header from './components/Header';
import Button from './components/Button';
import Footer from './components/Footer';
import Input from './components/Input';
 import Spinner from './components/Spinner';
import Icon from './components/Icon';
import Dropdown from './components/Dropdown';
// import Border from './components/Border';
import './App.css';
import Form from './components/Form'
import example from './Examples/Form_Example';
function App() {
  return (
    <>
    <ThemeProvider theme="coral1">
      {/* <Header /> */}
      <h1>React Component Library</h1>
      {/* <Pages /> */}
      <br />
      <Form formContent={example}/>
      {/* <Border /> */}
      <br />
      {/* <Dropdown label="Dropdown"/> */}
      <br />
      <br />
      {/* <Input label="First Name" requiredTxt="Needs to be filled in"/> */}
      <br />
      {/* <Input label="Last Name" requiredTxt="Not really needed"/> */}
      <br />
      {/* <Spinner /> */}

      {/* <Button /> */}
      <br />
      <br />
      {/* <Icon image1Link="https://img.icons8.com/nolan/50/iron-man.png" /> */}
      <Footer footerLabel="Welcome."/>
    </ThemeProvider>
    </>
  );
}

export default App;
