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
  if (date) {
    let splitDate = date.split("-");
    let formatted = splitDate[1] + "/" + splitDate[2] + "/" + splitDate[0];
    return formatted;
  }
  return "N/A";
};

export const handleChange = (id, value, setState) => {
  setState({
    [id]: value,
  });
};

export const transportOptions = [
  { id: "transport_type", text: "Flight", value: "flight" },
  { id: "transport_type", text: "Bus", value: "bus" },
  { id: "transport_type", text: "Car", value: "car" },
  { id: "transport_type", text: "Train", value: "train" },
  { id: "transport_type", text: "Other", value: "other" },
];
