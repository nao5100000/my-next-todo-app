export const createDate = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const date = now.getDate();
    const hour = now.getHours();
    const min = now.getMinutes();

    return `${year}/${month}/${date} ${hour}:${min}`
}