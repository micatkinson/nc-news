export function calculateHoursSince(time) {
    const createdDate = new Date(time);
    const currentDate = new Date();

    const timeDifference = currentDate - createdDate;
    const secondsDifference = Math.floor(timeDifference / 1000);
    const minutesDifference = Math.floor(secondsDifference / 60);
    const hoursDifference = Math.floor(minutesDifference / 60);
    const daysDifference = Math.floor(hoursDifference / 24);
    const monthsDifference = Math.floor(daysDifference / 30);
    const yearsDifference = Math.floor(monthsDifference / 12);

    if (yearsDifference >= 1) {
        return `${yearsDifference} year${yearsDifference !== 1 ? 's' : ''} ago`;
    } else if (monthsDifference >= 1) {
        return `${monthsDifference} month${monthsDifference !== 1 ? 's' : ''} ago`;
    } else if (daysDifference >= 1) {
        return `${daysDifference} day${daysDifference !== 1 ? 's' : ''} ago`;
    } else if (hoursDifference >= 1) {
        return `${hoursDifference} hour${hoursDifference !== 1 ? 's' : ''} ago`;
    } else if (minutesDifference >= 1) {
        return `${minutesDifference} minute${minutesDifference !== 1 ? 's' : ''} ago`;
    } else {
        return `${secondsDifference} second${secondsDifference !== 1 ? 's' : ''} ago`;
    }
}






