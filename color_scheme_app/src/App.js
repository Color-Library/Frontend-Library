import { ThemeProvider } from './context/ThemeProvider';
import Pages from './components/Pages'
import Header from './components/Header';
import Button from './components/Button';
import Footer from './components/Footer';
import Input from './components/Input';
import Spinner from './components/Spinner';
import Icon from './components/Icon';
import Dropdown from './components/Dropdown';
import Border from './components/Border';
import './App.css';

function App() {
  return (
    <>
    {/* <ThemeProvider theme="seafoam1">
      <Header tab1={["HOME", "https://google.com"]} tab2={["ABOUT", "#"]} tab3={["CONTACT", "#"]} tab4={["MORE", "#"]} icon="https://img.icons8.com/nolan/64/futurama-bender.png"/>
    </ThemeProvider>
    <ThemeProvider theme="sunflower1">
      <div className="App">
        <Pages pageBorderRadius='80px' />
        <br />
        <Button btnLabel="hello" onClick={() => console.log('I just clicked!!')} />
        <br />
        <Icon image1Link="https://img.icons8.com/nolan/50/iron-man.png"/>
      </div>
    </ThemeProvider> */}
    <Dropdown label="Im the dropdown"/>
    <ThemeProvider theme="perwinkles1">
      <Border borderContent="NEW BORDER"/>
      <Input inputName="Email" type="text" label="Email" labelFor="Email" inputWidth="200px" inputHeight="40px"/>
      <Input inputName="Password" type="password" label="Password" labelFor="Password" inputWidth="200px" inputHeight="40px"/>
      <br />
      <Spinner />
      <Footer label="SIMPLE FOOTER."/>
      <Icon/>
    </ThemeProvider>
    </>
  );
}

export default App;
