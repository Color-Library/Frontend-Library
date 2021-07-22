import React from 'react'
import Header from '../components/Header'

export default {
    title: 'Header',
    component: Header,
    argTypes: {
        backgroundColor: { control: 'color' },
      },
  };

  const Template = args => <Header {...args}/>

  export const frozen2 = Template.bind({});
  frozen2.args = {
    tab1: 'Home',
    tab2: 'About',
    tab3: '',
    tab4: '',
    backgroundColor: '#084C91',
  }

  export const frozen1 = Template.bind({});
  frozen1.args = {
    tab1: 'Home',
    tab2: 'About',
    tab3: '',
    tab4: '',
    backgroundColor: '#97d8ea',
  }

