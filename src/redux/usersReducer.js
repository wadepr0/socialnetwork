import { getUsersAPI, followAPI, unFollowAPI } from "../components/Api/api";

const TOGGLE_FOLLOW = "TOGGLE_FOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";

let initialState = {
  users: [],
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  isFollowingProgress: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          return user.id === action.userId
            ? { ...user, followed: !user.followed }
            : user;
        }),
      };
    case SET_USERS:
      return {
        ...state,
        users: action.users,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.page,
      };
    case SET_TOTAL_COUNT:
      return {
        ...state,
        totalUsersCount: action.totalCount,
      };
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.value,
      };
    case TOGGLE_IS_FOLLOWING_PROGRESS:
      return {
        ...state,
        isFollowingProgress: action.value
          ? [...state.isFollowingProgress, action.userId]
          : state.isFollowingProgress.filter((id) => id !== action.userId),
      };
    default:
      return state;
  }
};

export const toggleFollow = (userId) => ({ type: TOGGLE_FOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (page) => ({ type: SET_CURRENT_PAGE, page });
export const setTotalUsersCount = (totalCount) => ({
  type: SET_TOTAL_COUNT,
  totalCount,
});
export const toggleIsFetching = (value) => ({
  type: TOGGLE_IS_FETCHING,
  value,
});
export const toggleIsFollowingProgress = (value, userId) => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  value,
  userId,
});

//redux-thunk

export const requestUsers = (currentPage, pageSize) => async (dispatch) => {
  dispatch(toggleIsFetching(true));
  let data = await getUsersAPI(currentPage, pageSize);
  dispatch(toggleIsFetching(false));
  dispatch(setUsers(data.items));
  dispatch(setTotalUsersCount(data.totalCount));
};

export const onPageChanged = (pageNumber, pageSize) => async (dispatch) => {
  dispatch(toggleIsFetching(true));
  dispatch(setCurrentPage(pageNumber));
  let data = await getUsersAPI(pageNumber, pageSize);
  dispatch(toggleIsFetching(false));
  dispatch(setUsers(data.items));
};

export const followUsers = (userId) => async (dispatch) => {
  dispatch(toggleIsFollowingProgress(true, userId));
  let data = await unFollowAPI(userId);
  if (data.resultCode === 0) {
    dispatch(toggleFollow(userId));
  }
  dispatch(toggleIsFollowingProgress(false, userId));
};

export const unFollowUsers = (userId) => async (dispatch) => {
  dispatch(toggleIsFollowingProgress(true, userId));
  let data = await followAPI(userId);
  if (data.resultCode === 0) {
    dispatch(toggleFollow(userId));
  }
  dispatch(toggleIsFollowingProgress(false, userId));
};

export default usersReducer;
