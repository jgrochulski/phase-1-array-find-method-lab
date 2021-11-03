
function superbowlWin(array) {
    const finder = array.find(element => element.result === "W");
    if (finder != undefined) {
        return finder.year;
    }
    return undefined
}