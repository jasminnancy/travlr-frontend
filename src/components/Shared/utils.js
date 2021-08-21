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

export const defaultUser = {
  username: "JohnDoe01",
  bio: "My name is John and I'm dedicated to travelling to every country in the world!",
  created_at: "2019-11-10 06:06:25",
  trips: [
    {
      id: 1,
      title: "The Mountains",
      miles: 7700,
      budget: 400,
      description:
        "Just a trip to the mountains with my friends! Can't wait to go skiing.",
      start_date: "04/15/2020",
      end_date: "04/18/2020",
    },
  ],
  luggages: [
    {
      id: 1,
      user_id: 1,
      luggage_type: "backpack",
      size: 26,
      miles_travelled: 600,
      name: "The South Face",
    },
    {
      id: 1,
      user_id: 1,
      luggage_type: "carry_on",
      size: 39,
      miles_travelled: 340,
      name: "Yellow Small Suitcase",
    },
    {
      id: 1,
      user_id: 1,
      luggage_type: "suitcase",
      size: 70,
      miles_travelled: 285,
      name: "Rollie Rollie Rollie",
    },
    {
      id: 1,
      user_id: 1,
      luggage_type: "suitcase",
      size: 100,
      miles_travelled: 2000,
      name: "Ol' Reliable",
    },
    {
      id: 1,
      user_id: 1,
      luggage_type: "carry_on",
      size: 42,
      miles_travelled: 430,
      name: "Perfect For Snacks",
    },
  ],
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

export const luggageOptions = [
  { id: "luggage_type", text: "Backpack", value: "backpack" },
  { id: "luggage_type", text: "Carry-On", value: "carry_on" },
  { id: "luggage_type", text: "Suitcase", value: "suitcase" },
];
