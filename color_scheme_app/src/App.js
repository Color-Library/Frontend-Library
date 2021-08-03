import { ThemeProvider } from './context/ThemeProvider';
// import Pages from './components/Pages'
import Header from './components/Header';
import Button from './components/Button';
import Footer from './components/Footer';
import Input from './components/Input';
// import Spinner from './components/Spinner';
import Icon from './components/Icon';
import Dropdown from './components/Dropdown';
// import Border from './components/Border';
import './App.css';

function App() {
  return (
    <>
    <ThemeProvider theme="seafoam1">
      <Header tab1={["Home", "#"]} tab2={["About", "#"]} tab3={["About", "#"]} tab4={["About", "#"]} />
      <h1>React Component Library</h1>
      <Dropdown label="Dropdown"/>
      <br />
      <br />
      <Input label="First Name" requiredTxt="Please fill in"/>
      <br />
      <Input label="Last Name" />
      <br />
      <Button />
      <br />
      <br />
      <Icon />
      <Footer label="Welcome."/>
    </ThemeProvider>
    </>
  );
}

export default App;
