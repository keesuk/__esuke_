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

export function shuffle(arr) {
    var currentIndex = arr.length, temporaryValue, randomIndex;
  
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex -= 1
    
        
        temporaryValue = arr[currentIndex]
        arr[currentIndex] = arr[randomIndex]
        arr[randomIndex] = temporaryValue
    }
  
    return arr
}

export function removeSame(arr) {
    var s = new Set(arr)
    var it = s.values()
    return Array.from(it)
}

export function replaceAll(txt, arr, target){
    var txt
    for(var i of arr) txt = txt.replace(new RegExp(i, "g"), target)
    return txt
}

export function findNumToArr(txt){
    var regNum = /\d+/g
    var num
    var numArr = []

    while ((num = regNum.exec(txt)) !== null) numArr.push(num[0])
    return removeSame(numArr)
}

export function numbering(text, tagF, tagB) {

    console.log(replaceAll(text, findNumToArr(text), "dsadas"))
    return text
}