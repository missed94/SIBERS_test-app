export const mappingArraysInObject = (items, objPropName, actionPropName, newObjProps) => {
    return items.map(item => {
        if (item[objPropName] === actionPropName) {
            return {...item, ...newObjProps}
        }
        return item
    })
}

export const sortingArray = (direction, array, field) => {
    if (!direction) {
        sortingArrayByABC(array, field)
    }
    return array.reverse()
}

export const sortingArrayByABC = (array, field) => {
    array.sort((a, b) => {
        return a[field] > b[field] ? 1 : -1
    })
    return array
}