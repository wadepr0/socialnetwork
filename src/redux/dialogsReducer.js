const ADD_MESSAGE = "ADD-MESSAGE";

let initialState = {
  dialogs: [
    {
      id: 1,
      name: "Michelangelo",
      avatar:
        "http://1.bp.blogspot.com/-242AE06Iy74/U0ORg5GT1RI/AAAAAAAArGM/_YvM2-pVoLE/s1600/True+Detective_1+by+Yura+Shwedoff.jpg",
    },
    {
      id: 2,
      name: "Leonardo",
      avatar:
        "https://i.pinimg.com/564x/d9/63/30/d963300762736f6cfd7d0ab9acfc4fc8.jpg",
    },
    {
      id: 3,
      name: "Raphael",
      avatar:
        "https://cdnb.artstation.com/p/assets/images/images/036/858/837/large/james-zitnik-tmnt-final-jpg-low-res.jpg?1618835206",
    },
    {
      id: 4,
      name: "Donatello",
      avatar: "https://pbs.twimg.com/media/CK1lhoAWUAAApGB.png",
    },
    {
      id: 5,
      name: "Cryptogram",
      avatar: "https://i.redd.it/mg8zrn3vcp0y.png",
    },
    {
      id: 6,
      name: "Orcoholist",
      avatar:
        "https://sun9-84.userapi.com/impf/c837524/v837524630/4813f/rQf8O2JPHak.jpg?size=676x960&quality=96&sign=d89652faeea839b5cb0873f51526e75b&type=album",
    },
    {
      id: 7,
      name: "Loma",
      avatar:
        "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c090fd70425409.5ba2edba50e39.jpg",
    },
    {
      id: 8,
      name: "jENYAFUNK",
      avatar:
        "https://i.pinimg.com/originals/f7/2f/eb/f72feb868d5397686c04c35773f84289.png",
    },
  ],

  messages: [
    { id: 1, message: "Hey, are you still doing React?" },
    { id: 2, message: "Yep, its not easy one" },
    { id: 3, message: "lol, spending 5 months on React -_-" },
    { id: 4, message: ")))0" },
  ]
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      let newMessage = {
        id: state.messages.length + 1,
        message: action.newMessageBody,
      };
      return {
        ...state,
        messages: [...state.messages, newMessage]
      };
    }
    default: {
      return state;
    }
  }
};

export const addMessageActionCreator = (newMessageBody) => ({
  type: ADD_MESSAGE,
  newMessageBody,
});


export default dialogsReducer;
