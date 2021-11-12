import { useHistory } from "react-router-dom"
import React from "react"


export function randomize(items) {
    const item = items[Math.floor(Math.random() * items.length)]
    return item
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


export function getDate() {
    const date = new Date()

    const [month, day, year] = [date.getMonth() + 1, date.getDate(), date.getFullYear()]
    const [hour, minutes, seconds] = [date.getHours(), date.getMinutes(), date.getSeconds()]

    const result = {
        minutes : minutes,
        seconds : seconds,
        month : month,
        year : year,
        hour : hour,
        day : day,
    }

    return result
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
    }, [history])

  return (null)
}