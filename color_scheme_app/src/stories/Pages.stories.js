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
    pageContent: 'Frozen 2 Page',
    pageBorderColor: 'cyan',
    pageBorderType: 'solid',
    pagePadding: '10px',
    pageBoxShadow: '0px 0px 6px #084C91',
    pageBorderRadius: '5px'
}

export const Sunflower1 = Template.bind({});
Sunflower1.args ={
    pageContent: 'Sunflower 1 Page',
    pageBorderColor: '#B3550E',
    pageBorderType: 'solid',
    pagePadding: '10px',
    pageBoxShadow: '0px 0px 6px #B3550E',
    pageBorderRadius: '5px'

}

export const Periwinkles1 = Template.bind({});
Periwinkles1.args ={
    pageContent: 'Periwinkles 1 Page',
    pageBorderColor: '#F5EFFF',
    pageBorderType: 'solid',
    pagePadding: '10px',
    pageBoxShadow: '0px 0px 6px #7371FC',
    pageBorderRadius: '5px'
}

export const Spring1 = Template.bind({});
Spring1.args ={
    pageContent: 'Spring 1 Page',
    pageBorderColor: '#DFF977',
    pageBorderType: 'solid',
    pagePadding: '10px',
    pageBoxShadow: '0px 0px 6px #2E570F',
    pageBorderRadius: '5px'
}

export const SanJuan1 = Template.bind({});
SanJuan1.args ={
    pageContent: 'San Juan 1 Page',
    pageBorderColor: '#D8AF02',
    pageBorderType: 'solid',
    pagePadding: '10px',
    pageBoxShadow: '0px 0px 6px #D24A00',
    pageBorderRadius: '5px'
}

export const SeaFoam1 = Template.bind({});
SeaFoam1.args ={
    pageContent: 'SeaFoam 1 Page',
    pageBorderColor: '#88D498',
    pageBorderType: 'solid',
    pagePadding: '10px',
    pageBoxShadow: '0px 0px 6px #1A936F',
    pageBorderRadius: '5px'
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