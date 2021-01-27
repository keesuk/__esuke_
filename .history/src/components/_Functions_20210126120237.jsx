import React from 'react';
import styled, { keyframes } from 'styled-components';


export const colorList  = ['#E20000','#006CC4','#087A0D','#e90087','#00bfb3']
export const line_1 = '.12em dashed black'
export const line_2 = '.1em solid black'
export const instaLink = 'https://www.instagram.com/keesukeeeeee/'
export const instaColor = '#F58529, #DD2A7B, #8134AF, #515BD4'
export const facebookLink = 'https://www.facebook.com/keesuk94/'
export const facebookColor = '#3360FF, #5C79FF, #9EC9FF'

export function randomize(items) {
    const item = items[Math.floor(Math.random() * items.length)]
    return item
}

export function change(items) {
    let i = 0

    function changeRe(items){
        i = (i+1) % items.length
        return items[i]
    }
    return changeRe(items)
}