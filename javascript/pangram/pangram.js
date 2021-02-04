export const isPangram = (pangram) => {
    let s = pangram
        .toLowerCase()
        .replace(/[^a-z]/g, '')
        .replace(/(.)(?=.*\1)/g, "")
        .split('').sort().join('');
    return (s === "abcdefghijklmnopqrstuvwxyz");
};
