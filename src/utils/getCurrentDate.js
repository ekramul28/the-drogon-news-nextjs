export function getCurrentDate() {
    const currentDate = new Date();
    const day = currentDate.getDay(); // 0 (Sunday) to 6 (Saturday)
    const date = currentDate.getDate(); // 1 to 31
    const month = currentDate.getMonth(); // 0 (January) to 11 (December)
    const year = currentDate.getFullYear(); // 4-digit year
    const fullDate = `${day},${date},${month},${year}`
    return fullDate
}
