import React from 'react';
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Icon, { IconProps } from './Icon';
import configData from '../../context/config.json';

export default {
    title: 'Components/Elements/Icon',
    component: Icon,
    argTypes: {
    },
  } as Meta;
                    
const Template: Story<IconProps> = (args) => <Icon {...args} />;

export const Frozen2 = Template.bind({});
Frozen2.args = {
    imageLink: 'https://img.icons8.com/nolan/50/iron-man.png',
    imageBorder: configData.THEME_COLORS.FROZEN2.borderOuterBorder,
}

export const Sunflower1 = Template.bind({});
Sunflower1.args = {
    imageLink:"https://img.icons8.com/nolan/50/iron-man.png",
    imageBorder: configData.THEME_COLORS.SUNFLOWER1.borderOuterBorder,
}

export const Periwinkles1 = Template.bind({});
Periwinkles1.args = {
    imageLink:"https://img.icons8.com/nolan/50/iron-man.png",
    imageBorder: configData.THEME_COLORS.PERIWINKLES1.borderOuterBorder,
}

export const Spring1 = Template.bind({});
Spring1.args = {
    imageLink:"https://img.icons8.com/nolan/50/iron-man.png",
    imageBorder: configData.THEME_COLORS.SPRING1.borderOuterBorder,
}

export const SanJuan1 = Template.bind({});
SanJuan1.args = {
    imageLink:"https://img.icons8.com/nolan/50/iron-man.png",
    imageBorder: configData.THEME_COLORS.SANJUAN1.borderOuterBorder,
}

export const SeaFoam1 = Template.bind({});
SeaFoam1.args = {
    imageLink:"https://img.icons8.com/nolan/50/iron-man.png",
    imageBorder: configData.THEME_COLORS.SEAFOAM1.borderOuterBorder,
}

export const Coral1 = Template.bind({});
Coral1.args = {
    imageLink:"https://img.icons8.com/nolan/50/iron-man.png",
    imageBorder: configData.THEME_COLORS.CORAL1.borderOuterBorder,
}
