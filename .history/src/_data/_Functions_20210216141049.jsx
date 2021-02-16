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

export function findCategory(arr, category) {
    let answer = []

    if(category === undefined){
        answer = arr
    }else{
        for(let i of arr){
            if(i["category"] === category)answer.push(i)
        }
    }

    return answer
}

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window
    return {width, height}
}
  
export function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = React.useState(getWindowDimensions());

    React.useEffect(() => {
        function handleResize() {
        setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions
}

// export function useWindowSize() {
//     const [size, setSize ] = useState([0, 0]) 

//     useLayoutEffect(() => {
//         const UpdateSize = () => {
//             setSize([window.innerWidth, window.innerHeight])
//         }

//         window.addEventListener('resize', UpdateSize)
//         return () => window.removeEventListener('resize', UpdateSize)
//     }, [])
//     return size
// }