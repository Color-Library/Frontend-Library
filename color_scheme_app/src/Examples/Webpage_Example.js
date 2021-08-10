import Page from '../components/Page';
import Footer from '../components/Footer';
import Border from '../components/Border';
import Icon from '../components/Icon'
import Header from '../components/Header'

//const pgContent=<Spinner/>
const heading = 
<div style={{textAlign:'center'}}><h1>React Component Library</h1><Icon/></div>
const example = 
<div>
    <Header/><br/>
    <Border borderContent={heading}/>
    <div style={{margin:"30px 1px"}}><Page pageWidth="98%" pageHeight="150px"/></div>
    <Footer footerLabel="Created by Davi and Drea"/>
</div>

export default example