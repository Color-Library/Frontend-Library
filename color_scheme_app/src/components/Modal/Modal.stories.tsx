import React from 'react';
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Modal, { ModalProps } from './Modal';
import configData from '../../context/config.json';

export default {
  title: 'Components/Overlays/Modal',
  component: Modal,
  argTypes: {
  },
} as Meta;

const Template: Story<ModalProps> = (args) => <Modal {...args} />;

export const Frozen2 = Template.bind({});
Frozen2.args = {  //sets initial state
    content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`,
    bgcolor: configData.THEME_COLORS.FROZEN2.btnBackgroundColor,
    label: 'I am the Modal',
    color: configData.THEME_COLORS.FROZEN2.btnLabel,
    border: configData.THEME_COLORS.FROZEN2.btnBorderColor,
    name: 'about',
};

export const Sunflower1 = Template.bind({});
Sunflower1.args = {
    content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`,
    bgcolor: configData.THEME_COLORS.SUNFLOWER1.btnBackgroundColor,
    label: 'I am the Modal',
    color: configData.THEME_COLORS.SUNFLOWER1.btnLabel,
    border: configData.THEME_COLORS.SUNFLOWER1.btnBorderColor,
    name: 'about',
};

export const Periwinkles1 = Template.bind({});
Periwinkles1.args = {
    content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`,
    bgcolor: configData.THEME_COLORS.PERIWINKLES1.btnBackgroundColor,
    label: 'I am the Modal',
    color: configData.THEME_COLORS.PERIWINKLES1.btnLabel,
    border: configData.THEME_COLORS.PERIWINKLES1.btnBorderColor,
    name: 'about',
};

export const Spring1 = Template.bind({});
Spring1.args = {
    content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`,
    bgcolor: configData.THEME_COLORS.SPRING1.btnBackgroundColor,
    label: 'I am the Modal',
    color: configData.THEME_COLORS.SPRING1.btnLabel,
    border: configData.THEME_COLORS.SPRING1.btnBorderColor,
    name: 'about',
};

export const SanJuan1 = Template.bind({});
SanJuan1.args = {
    content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`,
    bgcolor: configData.THEME_COLORS.SANJUAN1.btnBackgroundColor,
    label: 'I am the Modal',
    color: configData.THEME_COLORS.SANJUAN1.btnLabel,
    border: configData.THEME_COLORS.SANJUAN1.btnBorderColor,
    name: 'about',
};

export const SeaFoam1 = Template.bind({});
SeaFoam1.args = {
    content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`,
    bgcolor: configData.THEME_COLORS.SEAFOAM1.btnBackgroundColor,
    label: 'I am the Modal',
    color: configData.THEME_COLORS.SEAFOAM1.btnLabel,
    border: configData.THEME_COLORS.SEAFOAM1.btnBorderColor,
    name: 'about',
};

export const Coral1 = Template.bind({});
Coral1.args = {
    content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`,
    bgcolor: configData.THEME_COLORS.CORAL1.btnBackgroundColor,
    label: 'I am the Modal',
    color: configData.THEME_COLORS.CORAL1.btnLabel,
    border: configData.THEME_COLORS.CORAL1.btnBorderColor,
    name: 'about',
};
