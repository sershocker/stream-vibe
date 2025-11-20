import getAttrNameFromSelector from "@/utils/getAttrNameFromSelector";

const getParams = (element, dataAttrSelector) => {
    //selector = dataAttrSelector.substring(1, dataAttrSelector.length - 1);
    return JSON.parse(
        element.getAttribute(getAttrNameFromSelector(dataAttrSelector))
    );
}
export default getParams;