const Mask = (event, value = "", type) => {
  // 1-34xx-xx-xx +(4 anywhere) - (clear of x and -) -> 134 + (4) -(redraw with x and -) -> 1-344x-xx-xx
  //if backspace detected, check the current position symbol and if it is - then just to the left by one sym
  //else do nothing
  //sorry for shitcode

  if (type !== "tel") return value;

  let sample = "x-xxxx-xx-xx";
  value = value.replaceAll("-", "").replaceAll("x", "");

  for (let num of value) {
    sample = sample.replace("x", num);
  }

  event.target.value = sample;

  let pos = 0;
  let i = 0;
  let worked = 0;
  for (let sym of sample) {
    if (sym === "x") {
      pos = i;
      worked = 1;
      break;
    }
    i++;
  }
  if (worked) {
    event.target.selectionStart = pos;
    event.target.selectionEnd = pos;
  }

  if (
    event.nativeEvent.data === null &&
    sample[event.target.selectionStart - 1] === "-"
  ) {
    event.target.selectionStart = pos - 1;
    event.target.selectionEnd = pos - 1;
  }

  return sample;
};

export default Mask;
