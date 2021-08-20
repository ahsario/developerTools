export const calcTime = (date, span) => {
  const deadline = new Date(date.value);
  span.innerHTML =
    Math.ceil((deadline - new Date()) / 1000) > 0
      ? Math.ceil((deadline - new Date()) / 1000)
      : 0;
};
