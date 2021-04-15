export const formatTime = (time) => {
  if (time) {
    let formattedTime;
    let format = time.split(":");

    if (format[0] > 12) {
      formattedTime = format[0] - 12 + ":" + format[1] + " PM";
    } else {
      formattedTime = time + " AM";
    }
    return formattedTime;
  }
};

export const formatDate = (date) => {
  let splitDate = date.split("-");
  let formatted = splitDate[1] + "/" + splitDate[2] + "/" + splitDate[0];
  return formatted;
};
