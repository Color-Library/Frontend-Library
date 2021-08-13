import React from 'react';
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Footer, { FooterProps } from './Footer';
import configData from '../../context/config.json';

export default {
    title: 'Components/Page Sections/Footer',
    component: Footer,
    argTypes: {
      backgroundColor: { control: 'color' },
      color: {control: 'color'}
    },
  } as Meta;

const Template: Story<FooterProps> = (args) => <Footer {...args} />;

export const Frozen2 = Template.bind({});
Frozen2.args = { 
  FooterLabel: "WELCOME, FROZEN",
  footerButton: {name: 'Button', action: ''},
  content: [
      {
        name: 'Media',
        subItems: [
            {name: 'Online', path: 'https://github.com/Color-Library/Frontend-Library/blob/dev/color_scheme_app/src/styles/Footer.css'},
            {name: 'Print', path: 'https://github.com/Color-Library/Frontend-Library/blob/dev/color_scheme_app/src/styles/Footer.css'},
            {name: 'Alternate', path: 'https://github.com/Color-Library/Frontend-Library/blob/dev/color_scheme_app/src/styles/Footer.css'},
        ]
    },
    {
        name: 'News',
        subItems: [
            {name: 'More info', path: 'https://github.com/Color-Library/Frontend-Library/blob/dev/color_scheme_app/src/styles/Footer.css'},
            {name: 'Location', path: 'https://github.com/Color-Library/Frontend-Library/blob/dev/color_scheme_app/src/styles/Footer.css'},
            {name: 'Systems', path: 'https://github.com/Color-Library/Frontend-Library/blob/dev/color_scheme_app/src/styles/Footer.css'},
        ]
    },
    {
        name: 'Bulls Eys',
        subItems: [
            {name: 'More info', path: 'https://github.com/Color-Library/Frontend-Library/blob/dev/color_scheme_app/src/styles/Footer.css'},
            {name: 'Location', path: 'https://github.com/Color-Library/Frontend-Library/blob/dev/color_scheme_app/src/styles/Footer.css'},
            {name: 'Systems', path: 'https://github.com/Color-Library/Frontend-Library/blob/dev/color_scheme_app/src/styles/Footer.css'},
        ]
    },
  ],
  info: {name: 'contact', text: '500 Mercedes LVL, BLK, 2217'},
  Copyright: "2021 Something. All rights reserved.",
  FooterBackgroundColor: configData.THEME_COLORS.FROZEN2.btnBackgroundColor,
  FooterTxtColor: configData.THEME_COLORS.FROZEN2.btnTxtColor,
};

export const Sunflower1 = Template.bind({});
Sunflower1.args = {  //sets initial state
    FooterLabel: "WELCOME, SUNFLOWER",
    footerButton: {name: 'Button', action: ''},
    content: [
        {
          name: 'Media',
          subItems: [
              {name: 'Online', path: 'https://github.com/Color-Library/Frontend-Library/blob/dev/color_scheme_app/src/styles/Footer.css'},
              {name: 'Print', path: 'https://github.com/Color-Library/Frontend-Library/blob/dev/color_scheme_app/src/styles/Footer.css'},
              {name: 'Alternate', path: 'https://github.com/Color-Library/Frontend-Library/blob/dev/color_scheme_app/src/styles/Footer.css'},
          ]
      },
      {
          name: 'News',
          subItems: [
              {name: 'More info', path: 'https://github.com/Color-Library/Frontend-Library/blob/dev/color_scheme_app/src/styles/Footer.css'},
              {name: 'Location', path: 'https://github.com/Color-Library/Frontend-Library/blob/dev/color_scheme_app/src/styles/Footer.css'},
              {name: 'Systems', path: 'https://github.com/Color-Library/Frontend-Library/blob/dev/color_scheme_app/src/styles/Footer.css'},
          ]
      },
      {
          name: 'Bulls Eys',
          subItems: [
              {name: 'More info', path: 'https://github.com/Color-Library/Frontend-Library/blob/dev/color_scheme_app/src/styles/Footer.css'},
              {name: 'Location', path: 'https://github.com/Color-Library/Frontend-Library/blob/dev/color_scheme_app/src/styles/Footer.css'},
              {name: 'Systems', path: 'https://github.com/Color-Library/Frontend-Library/blob/dev/color_scheme_app/src/styles/Footer.css'},
          ]
      },
    ],
    info: {name: 'contact', text: '500 Mercedes LVL, BLK, 2217'},
    Copyright: "2021 Something. All rights reserved.",
    FooterBackgroundColor: configData.THEME_COLORS.SUNFLOWER1.btnBackgroundColor,
    FooterTxtColor: configData.THEME_COLORS.SUNFLOWER1.btnTxtColor,
};

export const Periwinkles1 = Template.bind({});
Periwinkles1.args = {  //sets initial state
    FooterLabel: "WELCOME, PERIWINKLES",
    footerButton: {name: 'Button', action: ''},
    content: [
      {
        name: 'Media',
        subItems: [
            {name: 'Online', path: 'https://github.com/Color-Library/Frontend-Library/blob/dev/color_scheme_app/src/styles/Footer.css'},
            {name: 'Print', path: 'https://github.com/Color-Library/Frontend-Library/blob/dev/color_scheme_app/src/styles/Footer.css'},
            {name: 'Alternate', path: 'https://github.com/Color-Library/Frontend-Library/blob/dev/color_scheme_app/src/styles/Footer.css'},
        ]
    },
    {
        name: 'News',
        subItems: [
            {name: 'More info', path: 'https://github.com/Color-Library/Frontend-Library/blob/dev/color_scheme_app/src/styles/Footer.css'},
            {name: 'Location', path: 'https://github.com/Color-Library/Frontend-Library/blob/dev/color_scheme_app/src/styles/Footer.css'},
            {name: 'Systems', path: 'https://github.com/Color-Library/Frontend-Library/blob/dev/color_scheme_app/src/styles/Footer.css'},
        ]
    },
    {
        name: 'Bulls Eys',
        subItems: [
            {name: 'More info', path: 'https://github.com/Color-Library/Frontend-Library/blob/dev/color_scheme_app/src/styles/Footer.css'},
            {name: 'Location', path: 'https://github.com/Color-Library/Frontend-Library/blob/dev/color_scheme_app/src/styles/Footer.css'},
            {name: 'Systems', path: 'https://github.com/Color-Library/Frontend-Library/blob/dev/color_scheme_app/src/styles/Footer.css'},
        ]
    },
  ],
  info: {name: 'contact', text: '500 Mercedes LVL, BLK, 2217'},
  Copyright: "2021 Something. All rights reserved.",
  FooterBackgroundColor: configData.THEME_COLORS.PERIWINKLES1.btnBackgroundColor,
  FooterTxtColor: configData.THEME_COLORS.PERIWINKLES1.btnTxtColor,
};

export const Spring1 = Template.bind({});
Spring1.args = {  //sets initial state
  FooterLabel: "WELCOME, SPRING",
  footerButton: {name: 'Button', action: ''},
  content: [
      {
        name: 'Media',
        subItems: [
            {name: 'Online', path: 'https://github.com/Color-Library/Frontend-Library/blob/dev/color_scheme_app/src/styles/Footer.css'},
            {name: 'Print', path: 'https://github.com/Color-Library/Frontend-Library/blob/dev/color_scheme_app/src/styles/Footer.css'},
            {name: 'Alternate', path: 'https://github.com/Color-Library/Frontend-Library/blob/dev/color_scheme_app/src/styles/Footer.css'},
        ]
    },
    {
        name: 'News',
        subItems: [
            {name: 'More info', path: 'https://github.com/Color-Library/Frontend-Library/blob/dev/color_scheme_app/src/styles/Footer.css'},
            {name: 'Location', path: 'https://github.com/Color-Library/Frontend-Library/blob/dev/color_scheme_app/src/styles/Footer.css'},
            {name: 'Systems', path: 'https://github.com/Color-Library/Frontend-Library/blob/dev/color_scheme_app/src/styles/Footer.css'},
        ]
    },
    {
        name: 'Bulls Eys',
        subItems: [
            {name: 'More info', path: 'https://github.com/Color-Library/Frontend-Library/blob/dev/color_scheme_app/src/styles/Footer.css'},
            {name: 'Location', path: 'https://github.com/Color-Library/Frontend-Library/blob/dev/color_scheme_app/src/styles/Footer.css'},
            {name: 'Systems', path: 'https://github.com/Color-Library/Frontend-Library/blob/dev/color_scheme_app/src/styles/Footer.css'},
        ]
    },
  ],
  info: {name: 'contact', text: '500 Mercedes LVL, BLK, 2217'},
  Copyright: "2021 Something. All rights reserved.",
  FooterBackgroundColor: configData.THEME_COLORS.SPRING1.btnBackgroundColor,
  FooterTxtColor: configData.THEME_COLORS.SPRING1.btnTxtColor,
};

export const SanJuan1 = Template.bind({});
SanJuan1.args = {  //sets initial state
  FooterLabel: "WELCOME, SANJUAN",
  footerButton: {name: 'Button', action: ''},
  content: [
      {
        name: 'Media',
        subItems: [
            {name: 'Online', path: 'https://github.com/Color-Library/Frontend-Library/blob/dev/color_scheme_app/src/styles/Footer.css'},
            {name: 'Print', path: 'https://github.com/Color-Library/Frontend-Library/blob/dev/color_scheme_app/src/styles/Footer.css'},
            {name: 'Alternate', path: 'https://github.com/Color-Library/Frontend-Library/blob/dev/color_scheme_app/src/styles/Footer.css'},
        ]
    },
    {
        name: 'News',
        subItems: [
            {name: 'More info', path: 'https://github.com/Color-Library/Frontend-Library/blob/dev/color_scheme_app/src/styles/Footer.css'},
            {name: 'Location', path: 'https://github.com/Color-Library/Frontend-Library/blob/dev/color_scheme_app/src/styles/Footer.css'},
            {name: 'Systems', path: 'https://github.com/Color-Library/Frontend-Library/blob/dev/color_scheme_app/src/styles/Footer.css'},
        ]
    },
    {
        name: 'Bulls Eys',
        subItems: [
            {name: 'More info', path: 'https://github.com/Color-Library/Frontend-Library/blob/dev/color_scheme_app/src/styles/Footer.css'},
            {name: 'Location', path: 'https://github.com/Color-Library/Frontend-Library/blob/dev/color_scheme_app/src/styles/Footer.css'},
            {name: 'Systems', path: 'https://github.com/Color-Library/Frontend-Library/blob/dev/color_scheme_app/src/styles/Footer.css'},
        ]
    },
  ],
  info: {name: 'contact', text: '500 Mercedes LVL, BLK, 2217'},
  Copyright: "2021 Something. All rights reserved.",
  FooterBackgroundColor: configData.THEME_COLORS.SANJUAN1.btnBackgroundColor,
  FooterTxtColor: configData.THEME_COLORS.SANJUAN1.btnTxtColor,
};

export const SeaFoam1 = Template.bind({});
SeaFoam1.args = {  //sets initial state
  FooterLabel: "WELCOME, SEAFOAM",
  footerButton: {name: 'Button', action: ''},
  content: [
      {
        name: 'Media',
        subItems: [
            {name: 'Online', path: 'https://github.com/Color-Library/Frontend-Library/blob/dev/color_scheme_app/src/styles/Footer.css'},
            {name: 'Print', path: 'https://github.com/Color-Library/Frontend-Library/blob/dev/color_scheme_app/src/styles/Footer.css'},
            {name: 'Alternate', path: 'https://github.com/Color-Library/Frontend-Library/blob/dev/color_scheme_app/src/styles/Footer.css'},
        ]
    },
    {
        name: 'News',
        subItems: [
            {name: 'More info', path: 'https://github.com/Color-Library/Frontend-Library/blob/dev/color_scheme_app/src/styles/Footer.css'},
            {name: 'Location', path: 'https://github.com/Color-Library/Frontend-Library/blob/dev/color_scheme_app/src/styles/Footer.css'},
            {name: 'Systems', path: 'https://github.com/Color-Library/Frontend-Library/blob/dev/color_scheme_app/src/styles/Footer.css'},
        ]
    },
    {
        name: 'Bulls Eys',
        subItems: [
            {name: 'More info', path: 'https://github.com/Color-Library/Frontend-Library/blob/dev/color_scheme_app/src/styles/Footer.css'},
            {name: 'Location', path: 'https://github.com/Color-Library/Frontend-Library/blob/dev/color_scheme_app/src/styles/Footer.css'},
            {name: 'Systems', path: 'https://github.com/Color-Library/Frontend-Library/blob/dev/color_scheme_app/src/styles/Footer.css'},
        ]
    },
  ],
  info: {name: 'contact', text: '500 Mercedes LVL, BLK, 2217'},
  Copyright: "2021 Something. All rights reserved.",
  FooterBackgroundColor: configData.THEME_COLORS.SEAFOAM1.btnBackgroundColor,
  FooterTxtColor: configData.THEME_COLORS.SEAFOAM1.btnTxtColor,
};

export const Coral1 = Template.bind({});
Coral1.args = {  //sets initial state
  FooterLabel: "WELCOME, CORAL",
  footerButton: {name: 'Button', action: ''},
  content: [
      {
        name: 'Media',
        subItems: [
            {name: 'Online', path: 'https://github.com/Color-Library/Frontend-Library/blob/dev/color_scheme_app/src/styles/Footer.css'},
            {name: 'Print', path: 'https://github.com/Color-Library/Frontend-Library/blob/dev/color_scheme_app/src/styles/Footer.css'},
            {name: 'Alternate', path: 'https://github.com/Color-Library/Frontend-Library/blob/dev/color_scheme_app/src/styles/Footer.css'},
        ]
    },
    {
        name: 'News',
        subItems: [
            {name: 'More info', path: 'https://github.com/Color-Library/Frontend-Library/blob/dev/color_scheme_app/src/styles/Footer.css'},
            {name: 'Location', path: 'https://github.com/Color-Library/Frontend-Library/blob/dev/color_scheme_app/src/styles/Footer.css'},
            {name: 'Systems', path: 'https://github.com/Color-Library/Frontend-Library/blob/dev/color_scheme_app/src/styles/Footer.css'},
        ]
    },
    {
        name: 'Bulls Eys',
        subItems: [
            {name: 'More info', path: 'https://github.com/Color-Library/Frontend-Library/blob/dev/color_scheme_app/src/styles/Footer.css'},
            {name: 'Location', path: 'https://github.com/Color-Library/Frontend-Library/blob/dev/color_scheme_app/src/styles/Footer.css'},
            {name: 'Systems', path: 'https://github.com/Color-Library/Frontend-Library/blob/dev/color_scheme_app/src/styles/Footer.css'},
        ]
    },
  ],
  info: {name: 'contact', text: '500 Mercedes LVL, BLK, 2217'},
  Copyright: "2021 Something. All rights reserved.",
  FooterBackgroundColor: configData.THEME_COLORS.CORAL1.btnBackgroundColor,
  FooterTxtColor: configData.THEME_COLORS.CORAL1.btnTxtColor,
};
