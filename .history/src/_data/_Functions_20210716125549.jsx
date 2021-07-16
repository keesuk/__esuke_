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

export function getKeyByValue(object, value) {
    let arr = Object.keys(object)
    arr.find(key => arr[key] === value);
    console.log( key, value )
    return null
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

export function removeSame(arr) {
    var s = new Set(arr)
    var it = s.values()
    return Array.from(it)
}

export function numbering(text, tagF, tagB) {
    var regNum = /\d+/g
    var num
    var numArr = []

    while ((num = regNum.exec(text)) !== null) numArr.push(num[0])
    var checkArr = removeSame(numArr)

    function replaceAll(txt, arr){
        var txt
    
        for(var i of arr){
            var regNum = new RegExp(i, "g")
            txt = txt.replace(regNum, tagF + i + tagB)
        }
        return txt
    }
    
    return replaceAll(text, checkArr)
}

export function getGrid(width) {
    if(width >= 0 && width < 1024)return 2
    else if(width >= 1024 && width < 1200)return 3
    else if(width >= 1200)return 4
}

export function getDate() {
    var someDate = new Date();
    var numberOfDaysToAdd = 6;
    someDate.setDate(someDate.getDate() + numberOfDaysToAdd); 

    var dd = someDate.getDate()
    var mm = someDate.getMonth() + 1
    var y = someDate.getFullYear()

    var ddmmy = [dd, mm, y]
    
    return ddmmy
}