import { useHistory } from "react-router-dom"
import React from "react"


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

export function getKeyByValue(array, value) {
    let arr = array
    let found = arr.find(key => key.name === value)
    
    return found
}

export function UseWindowSize() {
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

export function isMobile(size, value) {
    let mobile
    let deskTop

    if (!value){ 
        mobile = true
        deskTop = false
    }else{
        mobile = value.mobile
        deskTop = value.deskTop
    }

    if(size.width < 1080) return mobile
    else if(size.width > 1080) return deskTop
}

export function GetScrollPosition() {
    const [scrollPosition, setScrollPosition] = React.useState(0)

    function getScrollPos(){
        const position = window.pageYOffset
        return position
    }

    React.useEffect(() => {
        function handleScroll() {
            setScrollPosition(getScrollPos())
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return scrollPosition
}

export function scrollTrigger(pos, value) {
    if(pos > value) return true
    else if(pos < value) return false
}

export function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;
  
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex -= 1
    
        
        temporaryValue = array[currentIndex]
        array[currentIndex] = array[randomIndex]
        array[randomIndex] = temporaryValue
    }
  
    return array
}

export function marking(text, contents, changeArr, mark){
    let txt = text 
    let contentArr = contents
    let regexArr = []
    let titleArr = []

    for (let i of changeArr){
        regexArr.push(new RegExp(i, "g"))
        titleArr.push(i.toLowerCase())
    }

    for(let i of contentArr){
        let html = mark
        
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
    let s = new Set(arr)
    let it = s.values()
    return Array.from(it)
}

export function numbering(text, tagF, tagB) {
    let regNum = /\d+/g
    let num
    let numArr = []

    while ((num = regNum.exec(text)) !== null) numArr.push(num[0])
    let checkArr = removeSame(numArr)

    function replaceAll(retxt, arr){    
        for(let i of arr){
            let regNum = new RegExp(i, "g")
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
    let someDate = new Date();
    let numberOfDaysToAdd = 6;
    someDate.setDate(someDate.getDate() + numberOfDaysToAdd); 

    let dd = someDate.getDate()
    let mm = someDate.getMonth() + 1
    let y = someDate.getFullYear()

    let ddmmy = [dd, mm, y]
    
    return ddmmy
}

export function ScrollToTop() {
    let history = useHistory()

    React.useEffect(() => {
        const unlisten = history.listen(() => {
            window.scrollTo(0, 0)
        })
        return () => {
            unlisten()
        }
    }, [])

  return (null)
}