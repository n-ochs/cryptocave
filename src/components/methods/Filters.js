export const Filters = {

    textSearch(dataPath, input) {
        return dataPath.toLowerCase().includes(input.toLowerCase())
    },
    sortName() {},
    sortNumber(num) {},
    sortDate(date) {}

}