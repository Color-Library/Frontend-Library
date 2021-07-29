import React from 'react';
import Pages from '../components/Pages.js';

export default {
    title: 'Pages',
    component: Pages,
    argTypes: {
    },
  };

const Template = (args) => <Pages {...args} />;

export const Frozen2 = Template.bind({});
Frozen2.args ={
    content: 'Frozen 2 Page',
    borderColor: 'cyan',
    borderType: 'solid',
    padding: '10px',
    boxShadow: '0px 0px 6px #084C91',
    borderRadius: '5px'
}

export const Sunflower1 = Template.bind({});
Sunflower1.args ={
    content: 'Sunflower 1 Page',
    borderColor: '#B3550E',
    borderType: 'solid',
    padding: '10px',
    boxShadow: '0px 0px 6px #B3550E',
    borderRadius: '5px'

}

export const Periwinkles1 = Template.bind({});
Periwinkles1.args ={
    content: 'Periwinkles 1 Page',
    borderColor: '#F5EFFF',
    borderType: 'solid',
    padding: '10px',
    boxShadow: '0px 0px 6px #7371FC',
    borderRadius: '5px'
}

export const Spring1 = Template.bind({});
Spring1.args ={
    content: 'Spring 1 Page',
    borderColor: '#DFF977',
    borderType: 'solid',
    padding: '10px',
    boxShadow: '0px 0px 6px #2E570F',
    borderRadius: '5px'
}

export const SanJuan1 = Template.bind({});
SanJuan1.args ={
    content: 'San Juan 1 Page',
    borderColor: '#D8AF02',
    borderType: 'solid',
    padding: '10px',
    boxShadow: '0px 0px 6px #D24A00',
    borderRadius: '5px'
}

export const SeaFoam1 = Template.bind({});
SeaFoam1.args ={
    content: 'SeaFoam 1 Page',
    borderColor: '#88D498',
    borderType: 'solid',
    padding: '10px',
    boxShadow: '0px 0px 6px #1A936F',
    borderRadius: '5px'
}

export const Coral1 = Template.bind({});
Coral1.args ={
    content: 'Coral 1 Page',
    borderColor: '#FBC3BC',
    borderType: 'dotted',
    padding: '10px',
    boxShadow: '0px 0px 6px #F38375',
    borderRadius: '5px'
}