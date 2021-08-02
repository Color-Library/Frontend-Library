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
    hBackgroundColor: '#084C91',
    hColor: "#DDDDDD",
    href: '#',
    hLogo: "https://img.icons8.com/ios/50/000000/pokemon.png",
  }

  export const sunflower1 = Template.bind({});
  sunflower1.args = {
    tab1: ['Home', '#'],
    tab2: ['About', '#'],
    tab3: ['Profile', '#'],
    tab4: ['Contact', '#'],
    hBackgroundColor: '#E8C78E',
    hColor: "#B3550E",
    href: '#',
    hLogo: "https://img.icons8.com/office/50/000000/blackblood.png",
  }

  export const perwinkles1 = Template.bind({});
  perwinkles1.args = {
    tab1: ['Home', '#'],
    tab2: ['About', '#'],
    tab3: ['Profile', '#'],
    tab4: ['Contact', '#'],
    hBackgroundColor: '#E5D9F2',
    color: 'black',
    hColor: "#7371FC",
    href: '#',
    hLogo: "https://img.icons8.com/office/50/000000/jake.png",
  }

export const spring1 = Template.bind({});
spring1.args = {
  tab1: ['Home', '#'],
    tab2: ['About', '#'],
    tab3: ['Profile', '#'],
    tab4: ['Contact', '#'],
    hBackgroundColor: '#9BE564',
    hColor: "#2E570F",
    href: '#',
    hLogo: "https://img.icons8.com/nolan/50/iron-man.png",
}
