import React from 'react';
import styled, { keyframes } from 'styled-components';

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