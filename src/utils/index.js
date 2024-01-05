export const makeReleaseDate = (date) => {
    const dateObject = new Date(date);

    // Extract date, month, and year
    const day = dateObject.getDate();
    const month = dateObject.toLocaleString('default', { month: 'short' }); // 'short' gives the first three letters
    const year = dateObject.getFullYear();
    return `${month} ${day}, ${year}`
}