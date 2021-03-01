import React from "react";
import faker, { random } from "faker";

  let db = [
    {
      name: "Emma Watson",
      url: "https://images2.alphacoders.com/800/thumb-1920-80030.jpg",
    },
    {
      name: "Kristen Stewart",
      url:
        "https://wallpapersdsc.net/wp-content/uploads/2016/01/Kristen-Stewart-Wallpaper.jpg",
    },
    {
        name:"Elizabeth Olsen",
        url:"https://www.xtrafondos.com/wallpapers/elizabeth-olsen-3363.jpg"
    }
  ];
  for(let i=0;i<2;i++){
    // db=[{
    //   name:faker.name.firstName()+" "+faker.name.lastName() ,
    //   url:
    //     faker.image.animals(),
    // },...db]
    db=[{
      name:faker.name.firstName()+" "+faker.name.lastName() ,
      url:
        `${faker.image.people()}?random=${Math.round(Math.random()*10000)}`,
    },...db]

  }

  let chats=[{
    name:"Alexa",
    message:"Hey waddup!",
    timestamp:"30 seconds ago",
    profilePic:"https://wallpapercave.com/wp/nLMaWkX.jpg",
  }]
  for(let i=0;i<1;i++){
    chats=[{
      name:faker.name.firstName(),
      message:faker.lorem.sentence(),
      timestamp:faker.random.number()+ " seconds ago",
      profilePic:`${faker.image.people()}?random=${Math.round(Math.random()*10000)}`,
    },...chats];
  }

  // faker.name.firstName()+" "+faker.name.lastName()
  export {db,chats};
  
   