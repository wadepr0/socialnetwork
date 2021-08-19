const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
  posts: [
    {
      id: 6,
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      likesCount: 3,
      author: "Wade Wilson",
      date: "40 minutes ago",
    },
    {
      id: 5,
      message: "React awesome",
      likesCount: 77,
      author: "Wade Wilson",
      date: "2 hours ago",
    },
    {
      id: 4,
      message: "Loma pidor-dolboeb",
      likesCount: 552,
      author: "Wade Wilson",
      date: "Yesterday",
    },
    {
      id: 3,
      message: "React awesome",
      likesCount: 77,
      author: "Wade Wilson",
      date: "2 hours ago",
    },
    {
      id: 2,
      message: "React awesome",
      likesCount: 77,
      author: "Wade Wilson",
      date: "2 hours ago",
    },
    {
      id: 1,
      message: "React awesome",
      likesCount: 77,
      author: "Wade Wilson",
      date: "2 hours ago",
    },
  ],
  newPost: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let date = new Date();
      let showingMonth = () => {
        switch (date.getMonth()) {
          case 0:
            return "January";
          case 1:
            return "February";
          case 2:
            return "March";
          case 3:
            return "April";
          case 4:
            return "May";
          case 5:
            return "June";
          case 6:
            return "July";
          case 7:
            return "August";
          case 8:
            return "September";
          case 9:
            return "October";
          case 10:
            return "November";
          case 11:
            return "December";
        }
      };
      let showMinutes =
        date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
      let showHours =
        date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
      let newPost = {
        id: state.posts.length + 1,
        message: state.newPost,
        likesCount: 0,
        author: "Wade Wilson",
        date:
          showingMonth() +
          " " +
          date.getDate() +
          " " +
          date.getFullYear() +
          " " +
          showHours +
          ":" +
          showMinutes,
      };
      return {
        ...state,
        posts: [newPost, ...state.posts],
        newPost: ''
      };

    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPost: action.newText
      };

    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export default profileReducer;
