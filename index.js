const map = function(array, func) {
    let newArray = []
    for (const element of array) {
        newArray.push(func(element))
    }
    return newArray
}

const reduce = function(array, func, start) {
    let i = 1
    let total
    if (start) {
        i = 0
        total = start
    } else {
        total = array[0]
    }
    for (i; i < array.length; i++) {
        total = func(total, array[i])
    }
    return total
}