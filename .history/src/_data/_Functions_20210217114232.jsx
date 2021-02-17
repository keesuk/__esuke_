import React from "react";


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

export function move(arr, from, to){
    return arr.splice(to, 0, arr.splice(from, 1)[0])
}

export function findObject(obj, boolean) {
    let arr = obj

    if (!Array.isArray(arr)) arr = Object.values(arr)
    
    return arr.find((value) => {
        return value.bool === boolean
    })
}

export function findCategory(arr, category, now) {
    let answer = []

    if(category === undefined){
        answer = arr
    }else{
        for(let i of arr){
            if(i["category"] === category && i["title"] !== now)answer.push(i)
        }
    }

    return answer
}
  
export function useWindowSize() {
    const [windowSize, setWindowSize] = React.useState(getWindowSize())

    function getWindowSize() {
        const { innerWidth: width, innerHeight: height } = window
        return { width, height }
    }

    React.useEffect(() => {
        function handleResize() {
            setWindowSize(getWindowSize())
        }

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return windowSize
}

export function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex -= 1
    
        
        temporaryValue = array[currentIndex]
        array[currentIndex] = array[randomIndex]
        array[randomIndex] = temporaryValue
    }
  
    return array
}

export function numbering(text, tagF, tagB) {
    var regNum = /\d+/g
    var num
    var numArr = []
    console.log(text)
    while ((num = regNum.exec(text)) !== null) {
        numArr.psuch(num[0]);
    }

    for(var i in numArr){
        text.replace(i, tagF + i + tagB)
    }
    
    return text
}