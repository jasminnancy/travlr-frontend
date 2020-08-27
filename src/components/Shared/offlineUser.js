export const offlineUser = {
  activeUser: {
    username: 'JohnDoe01', 
    bio: "My name is John and I'm dedicated to travelling to every country in the world!",
    created_at: '2019-11-10 06:06:25', 
    trips: [
      {
        id: 1,
        title: "The Mountains", 
        miles: 7700, 
        budget: 400, 
        description: "Just a trip to the mountains with my friends! Can't wait to go skiing.",
        start_date: "04/15/2020", 
        end_date: "04/18/2020"
      }
    ],
    luggages: [
      {
        id: 1,
        user_id: 1,
        luggage_type: "backpack",
        size: 26,
        miles_travelled: 600,
        name: "The South Face"
      },
      {
        id: 1,
        user_id: 1,
        luggage_type: "carry_on",
        size: 39,
        miles_travelled: 340,
        name: "Yellow Small Suitcase"
      },{
        id: 1,
        user_id: 1,
        luggage_type: "suitcase",
        size: 70,
        miles_travelled: 285,
        name: "Rollie Rollie Rollie"
      },
      {
        id: 1,
        user_id: 1,
        luggage_type: "suitcase",
        size: 100,
        miles_travelled: 2000,
        name: "Ol' Reliable"
      },
      {
        id: 1,
        user_id: 1,
        luggage_type: "carry_on",
        size: 42,
        miles_travelled: 430,
        name: "Perfect For Snacks"
      }
    ]
  }
}