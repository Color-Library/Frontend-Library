// import Page from '../components/Page';
import Footer from '../components/Footer';
// import Border from '../components/Border';
//import Icon from '../components/Icon';
import Header from '../components/Header';
import Breadcrumbs from '../components/Breadcrumbs';
// import Button from '../components/Button';
import Searchbar from '../components/Searchbar';

//const pgContent=<Spinner/>
// const heading = 
// <div style={{textAlign:'center'}}><h1>React Component Library</h1></div>
const example = 
<>
    <Header tabs={[
      {name: 'Home', link: 'https://github.com/Color-Library/Frontend-Library'},
      {name: 'Feed', link: 'https://www.youtube.com/watch?v=7Gbk4h2AYVE&t=1919s'},
      {name: 'Profile', link: 'https://reactjs.org/docs/refs-and-the-dom.html'},
    ]}/>
    {/* <Border borderContent={heading}/>
    <div style={{margin:"30px 1px"}}><Page pageWidth="98%" pageHeight="150px"/></div> */}
    {/* <Modal label="More Info" name="more" content="more info modal"/>
    <Modal label="About Info" name="info" content="2nd modal, (about info modal)" /> */}
    <br/>
    <Breadcrumbs />
    <br />
    <Searchbar />
    <br />
    <Footer /> {/* optional: footerButton={{name: 'Footer', action: ''}} */}
</>

export default example

