import Button from '../components/Button';
import Input from '../components/Input';
import Dropdown from '../components/Dropdown';
import Spinner from '../components/Spinner';
import "./Form_Example.css"
const example = 
<div>
    <div className='inputs'><Dropdown label="Dropdown"/></div><br/>
    <div className='inputs'><Input label="First Name" type='text'></Input></div>
    <div className='inputs'><Input label="Last Name" type='text'></Input></div>
    <div className='inputs'><Input label="Email" type='text'></Input></div>
    <div className='inputs'><Input label="Address" type='text'></Input></div>
    <div className='inputs'><Input label="Phone Number" type='text' required="fill in"></Input><br /></div>
    <div className='inputs'><Button/></div>
    <div style={{margin:'4% 49%'}}><Spinner/></div>
</div>

export default example