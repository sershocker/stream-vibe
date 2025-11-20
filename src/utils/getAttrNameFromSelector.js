const getAttrNameFromSelector = (attrSelector) => {
    console.log(1);
    return attrSelector.substring(
        1, attrSelector.length - 1
    )
}

export default getAttrNameFromSelector