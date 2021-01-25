import React from 'react';
import styled, { keyframes } from 'styled-components';


export const colorList  = ['#E20000','#006CC4','#087A0D','#e90087','#00bfb3']
export const solid = '.15em dashed black'
export const solid_2 = '.1em solid black'

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