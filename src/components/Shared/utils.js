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

// export const toCapital = (string, removePlural) => {
//   let words = string.split(' ')
//   let formattedWords = words.map(word => {
//     let letters = word.split('')

//   })
// }

export const createDate = (date) => {
  //if no date, returns a year 1000 years in the future
  //this sets all non-dated trips to the front of the array
  if (date === null) {
    let year = new Date().getFullYear();
    return new Date(`${year + 1000}-12-31`).setHours(0, 0, 0, 0);
  }

  let formattedDate = date ? new Date(date) : new Date();
  return formattedDate.setHours(0, 0, 0, 0);
};

export const handleChange = (id, value, setState) => {
  setState({
    [id]: value,
  });
};

export const handleDelete = (e, item, name, trip, setTrip) => {
  e.preventDefault();
  fetch(`http://localhost:3000/${name}/${item.id}`, {
    method: "DELETE",
  });

  let updatedItems = trip[name].filter((i) => i.id !== item.id);
  let updatedTrip = {
    ...trip,
    [name]: updatedItems,
  };
  setTrip(updatedTrip);
};

export const transportOptions = [
  { id: "transport_type", text: "Flight", value: "flight" },
  { id: "transport_type", text: "Bus", value: "bus" },
  { id: "transport_type", text: "Car", value: "car" },
  { id: "transport_type", text: "Train", value: "train" },
  { id: "transport_type", text: "Other", value: "other" },
];
