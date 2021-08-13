import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Button, { ButtonProps } from "./Button";
import configData from '../../context/config.json';

export default {
  title: "Components/Elements/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Frozen2 = Template.bind({});
Frozen2.args = {
  label: "Button",
  backgroundColor: configData.THEME_COLORS.FROZEN2.btnBackgroundColor,
  size: 'medium',
  color: 'white',
};

export const Sunflower1 = Template.bind({});
Sunflower1.args = {
  label: "Button",
  backgroundColor: configData.THEME_COLORS.SUNFLOWER1.btnBackgroundColor,
  size: 'medium',
  color: 'white',
};

export const Periwinkles1 = Template.bind({});
Periwinkles1.args = {
  label: "Button",
  backgroundColor: configData.THEME_COLORS.PERIWINKLES1.btnBackgroundColor,
  size: 'medium',
  color: 'white',
};

export const Spring1 = Template.bind({});
Spring1.args = {
  label: "Button",
  backgroundColor: configData.THEME_COLORS.SPRING1.btnBackgroundColor,
  size: 'medium',
  color: 'white',
};

export const SanJuan1 = Template.bind({});
SanJuan1.args = {
  label: "Button",
  backgroundColor: configData.THEME_COLORS.SANJUAN1.btnBackgroundColor,
  size: 'medium',
  color: 'white',
};

export const SeaFoam1 = Template.bind({});
SeaFoam1.args = {
  label: "Button",
  backgroundColor: configData.THEME_COLORS.SEAFOAM1.btnBackgroundColor,
  size: 'medium',
  color: 'white',
};

export const Coral1 = Template.bind({});
Coral1.args = {
  label: "Button",
  backgroundColor: configData.THEME_COLORS.CORAL1.btnBackgroundColor,
  size: 'medium',
  color: 'white',
};
