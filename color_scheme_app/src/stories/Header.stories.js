import React from 'react'
import Header from '../components/Header'

export default {
    title: 'Header',
    component: Header,
    argTypes: {
        backgroundColor: { control: 'color' },
        color: { control: 'color' },
      },
  };

  const Template = args => <Header {...args}/>

  export const frozen2 = Template.bind({});
  frozen2.args = {
    tab1: ['Home', '#'],
    tab2: ['About', '#'],
    tab3: ['', ''],
    tab4: ['Profile', '#'],
    backgroundColor: '#084C91',
    logo: "https://img.icons8.com/ios/50/000000/pokemon.png",
  }

  export const frozen1 = Template.bind({});
  frozen1.args = {
    tab1: ['Home', '#'],
    tab2: ['About', '#'],
    tab3: ['Profile', '#'],
    tab4: ['Contact', '#'],
    backgroundColor: '#97d8ea',
    logo: "https://img.icons8.com/office/50/000000/blackblood.png",
  }

  export const pastels1 = Template.bind({});
  pastels1.args = {
    tab1: ['Home', '#'],
    tab2: ['About', '#'],
    tab3: ['Profile', '#'],
    tab4: ['Contact', '#'],
    backgroundColor: '#dfd5fc',
    color: 'black',
    logo: "https://img.icons8.com/office/50/000000/jake.png",
  }

