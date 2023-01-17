export const getRandomInt = (max: number) => {
  return Math.floor(Math.random() * max);
};

// workaround for assigning ids. this is needed because of limitations of BE
export const getNewId = () => {
  return getRandomInt(69420);
};
