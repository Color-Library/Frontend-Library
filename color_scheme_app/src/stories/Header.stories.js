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

  export const sunflower1 = Template.bind({});
  sunflower1.args = {
    tab1: ['Home', '#'],
    tab2: ['About', '#'],
    tab3: ['Profile', '#'],
    tab4: ['Contact', '#'],
    backgroundColor: '#E8C78E',
    logo: "https://img.icons8.com/office/50/000000/blackblood.png",
  }

  export const perwinkles1 = Template.bind({});
  perwinkles1.args = {
    tab1: ['Home', '#'],
    tab2: ['About', '#'],
    tab3: ['Profile', '#'],
    tab4: ['Contact', '#'],
    backgroundColor: '#E5D9F2',
    color: 'black',
    logo: "https://img.icons8.com/office/50/000000/jake.png",
  }

export const spring1 = Template.bind({});
spring1.args = {
  tab1: ['Home', '#'],
    tab2: ['About', '#'],
    tab3: ['Profile', '#'],
    tab4: ['Contact', '#'],
    backgroundColor: '9BE564',
    logo: "https://img.icons8.com/nolan/50/iron-man.png",
}
