export const randomIdGenerator = () => {
    const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const length = 10;
    let randomId = "";
    for (let i = 0; i < length; i++) {
        randomId += characters.charAt(
            Math.floor(Math.random() * characters.length)
        );
    }
    return randomId;
};
