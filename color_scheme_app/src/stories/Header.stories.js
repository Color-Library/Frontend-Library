import React from 'react'
import Header from '../components/Header'
import configData from '../context/config.json'

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
    hBackgroundColor: configData.THEME_COLORS.FROZEN2.hBackgroundColor,
    hColor: configData.THEME_COLORS.FROZEN2.hColor,
    hLogo: configData.THEME_COLORS.FROZEN2.hLogo,
  }

  export const sunflower1 = Template.bind({});
  sunflower1.args = {
    tab1: ['Home', '#'],
    tab2: ['About', '#'],
    tab3: ['Profile', '#'],
    tab4: ['Contact', '#'],
    hBackgroundColor: configData.THEME_COLORS.SUNFLOWER1.hBackgroundColor,
    hColor: configData.THEME_COLORS.SUNFLOWER1.hColor,
    hLogo: configData.THEME_COLORS.SUNFLOWER1.hLogo,
  }

  export const perwinkles1 = Template.bind({});
  perwinkles1.args = {
    tab1: ['Home', '#'],
    tab2: ['About', '#'],
    tab3: ['Profile', '#'],
    tab4: ['Contact', '#'],
    hBackgroundColor: configData.THEME_COLORS.PERIWINKLES1.hBackgroundColor,
    hColor: configData.THEME_COLORS.PERIWINKLES1.hColor,
    hLogo: configData.THEME_COLORS.PERIWINKLES1.hLogo,
  }

export const spring1 = Template.bind({});
spring1.args = {
  tab1: ['Home', '#'],
    tab2: ['About', '#'],
    tab3: ['Profile', '#'],
    tab4: ['Contact', '#'],
    hBackgroundColor: configData.THEME_COLORS.SPRING1.hBackgroundColor,
    hColor: configData.THEME_COLORS.SPRING1.hColor,
    hLogo: configData.THEME_COLORS.SPRING1.hLogo,
}

export const SanJuan1 = Template.bind({});
SanJuan1.args = {  //sets initial state
  tab1: ['Home', '#'],
    tab2: ['About', '#'],
    tab3: ['Profile', '#'],
    tab4: ['Contact', '#'],
    hBackgroundColor: configData.THEME_COLORS.SANJUAN1.hBackgroundColor,
    hColor: configData.THEME_COLORS.SANJUAN1.hColor,
    hLogo: configData.THEME_COLORS.SANJUAN1.hLogo,
};

export const SeaFoam1 = Template.bind({});
SeaFoam1.args = {  //sets initial state
  tab1: ['Home', '#'],
  tab2: ['About', '#'],
  tab3: ['Profile', '#'],
  tab4: ['Contact', '#'],
  hBackgroundColor: configData.THEME_COLORS.SEAFOAM1.hBackgroundColor,
  hColor: configData.THEME_COLORS.SEAFOAM1.hColor,
  hLogo: configData.THEME_COLORS.SEAFOAM1.hLogo,
};

export const Coral1 = Template.bind({});
Coral1.args = {  //sets initial state
  tab1: ['Home', '#'],
  tab2: ['About', '#'],
  tab3: ['Profile', '#'],
  tab4: ['Contact', '#'],
  hBackgroundColor: configData.THEME_COLORS.CORAL1.hBackgroundColor,
  hColor: configData.THEME_COLORS.CORAL1.hColor,
  hLogo: configData.THEME_COLORS.CORAL1.hLogo,
};
