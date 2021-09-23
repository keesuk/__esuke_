import React from "react";
import { useHistory } from "react-router-dom";


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
    let arr = Object.values(object)
    let found = arr.find(key => key["title"] === value)
    
    return found
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

export function markidng(text, content, mark){
    var txt = text 
    var arr = content
    
    for(let i of arr){
        var html = mark
        
        html = html.replace(/TITLE/g, i["title"])
        html = html.replace(/NUM/g, i["num"])
        html = html.replace(/TEXTENG/g, i["textEng"])
        html = html.replace(/TEXTKOR/g, i["textKor"])

        txt = txt.replace(i["title"], html)
    }
    return txt
}

export function marking(text, contents, changeArr, mark){
    var txt = text 
    var contentArr = contents
    var regexArr = []
    var titleArr = []

    for (let i of changeArr){
        regexArr.push(new RegExp(i, "g"))
        titleArr.push(i.toLowerCase())
    }

    for(let i of contentArr){
        var html = mark
        
        for(let j = 0; j < titleArr.length; j++){
            html = html.replace(
                regexArr[j], 
                i[`${titleArr[j]}`]
            )
        }
        txt = txt.replace(i[`${titleArr[0]}`], html)
    }
    return txt
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

    function replaceAll(retxt, arr){    
        for(var i of arr){
            var regNum = new RegExp(i, "g")
            retxt = retxt.replace(regNum, tagF + i + tagB)
        }
        return retxt
    }
    return replaceAll(text, checkArr)
}

export function getSize(width, value) {
    if(width >= 0 && width <= 1080)return value * 1.5
    else if(width > 1080)return value * 1
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

export function ScrollToTop() {
    let history = useHistory()

    React.useEffect(() => {
        const unlisten = history.listen(() => {
            window.scrollTo(0, 0);
        })
        return () => {
            unlisten()
        }
    }, [])

  return (null)
}