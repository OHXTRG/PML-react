export const generateRandomId = () => {
  return Math.round(Math.random() * 1000000).toString(16);
};
