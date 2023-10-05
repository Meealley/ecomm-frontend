const truncateSentence = (sentence, maxLength) => {
  if (sentence.length <= maxLength) {
    return sentence;
  }

  return sentence.slice(0, maxLength) + "...";
};

export default truncateSentence;
