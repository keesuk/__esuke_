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

export function getWindowSize(window) {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }
  