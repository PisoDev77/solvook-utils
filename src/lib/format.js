const padStr = (str) => (str + '').padStart(2, '0');
export const formatDate = (date) => `${date.getFullYear()}-${padStr(date.getMonth() + 1)}-${padStr(date.getDate())}`;
