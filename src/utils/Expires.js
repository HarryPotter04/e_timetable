export const getExpirationTimestamp = (days) => {
    const secondsInADay = 24 * 60 * 60;
    const expirationSeconds = days * secondsInADay;
    const expire = Math.floor(Date.now() / 1000) + expirationSeconds;
    return expire;
};
