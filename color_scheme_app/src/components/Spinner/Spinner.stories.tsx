import React from 'react';
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Spinner, { SpinnerProps } from './Spinner';
import configData from '../../context/config.json';

export default {
    title: 'Components/Elements/Spinner',
    component: Spinner,
    argTypes: {
      backgroundColor: { control: 'color' },
      color: {control: 'color'}
    },
  } as Meta;

const Template: Story<SpinnerProps > = (args) => <Spinner {...args} />;

export const Frozen2 = Template.bind({});
Frozen2.args = {  //sets initial state
  borderTopColor: configData.THEME_COLORS.FROZEN2.borderInnerBorder,
};

export const Sunflower1 = Template.bind({});
Sunflower1.args = {  //sets initial state
    borderTopColor: configData.THEME_COLORS.SUNFLOWER1.borderInnerBorder,
};

export const Periwinkles1 = Template.bind({});
Periwinkles1.args = {  //sets initial state
    borderTopColor: configData.THEME_COLORS.PERIWINKLES1.borderInnerBorder,
};

export const Spring1 = Template.bind({});
Spring1.args = {  //sets initial state
    borderTopColor: configData.THEME_COLORS.SPRING1.borderInnerBorder,
};

export const SanJuan1 = Template.bind({});
SanJuan1.args = {  //sets initial state
    borderTopColor: configData.THEME_COLORS.SANJUAN1.borderInnerBorder,
};

export const SeaFoam1 = Template.bind({});
SeaFoam1.args = {  //sets initial state
    borderTopColor: configData.THEME_COLORS.SEAFOAM1.borderInnerBorder,
};

export const Coral1 = Template.bind({});
Coral1.args = {  //sets initial state
    borderTopColor: configData.THEME_COLORS.CORAL1.borderInnerBorder,
};
