export const removeSpecial = (input: string) => {
  return input.replace(/[^a-zA-Z0-9ㄱ-ㅎㅏ-ㅣ가-힣 ]/g, "");
};

export const removeEmoji = (input: string) => {
  return input.replace(
    /[\p{Emoji_Presentation}\p{Extended_Pictographic}]/gu,
    ""
  );
};
