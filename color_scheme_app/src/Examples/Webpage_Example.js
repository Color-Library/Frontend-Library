import Page from '../components/Page';
import Footer from '../components/Footer';
import Border from '../components/Border';
import Icon from '../components/Icon';
import Header from '../components/Header';
import Breadcrumbs from '../components/Breadcrumbs';
import Button from '../components/Button';
import Searchbar from '../components/Searchbar';
import Modal from '../components/Modal';
import Dropdown from '../components/Dropdown';
import Spinner from '../components/Spinner';

//const pgContent=<Spinner/>
const heading =  <div style={{textAlign:'center'}}><h1>React Component Library</h1></div>
const example = 
<>
<Header tabs={[{name: 'Home', link: '#'},{name: 'About', link: '#'},{name: 'Profile', link: '#'}]} />    
<Border borderContent={heading}/>
<Searchbar /> <br/>
    <div style={{display:'flex'}}><Icon imageLink="https://img.icons8.com/nolan/50/iron-man.png"/><Page /></div><br/>
<Modal label="More Info" name="more" content="more info modal"/><br/>
    <br/>
    <Dropdown/>
    <br />
    <br/>
    <Spinner/>
    <br/>
    <Button />
    <br/>
    <br/>
    <Breadcrumbs />
    <br />
    <br/>
    <Footer FooterTxtColor='red'/> {/* optional: footerButton={{name: 'Footer', action: ''}} */}
</>

export default example

