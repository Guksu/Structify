export const removeChainSpace = (input: string) => {
  return input.replace(/\s+/g, " ").trim();
};

export const removeAllSpace = (input: string) => {
  return removeChainSpace(input).replaceAll(" ", "");
};
