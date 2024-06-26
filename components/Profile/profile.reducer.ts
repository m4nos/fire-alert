import { Coordinates } from "../../store/types/map.types";

export type UserProfileFields = {
  email: string;
  phoneNumber: string;
  location: Coordinates;
};
type HydrateUserDataAction = {
  type: typeof profileActionTypes.HYDRATE_USER_DATA;
  payload: UserProfileFields;
};

export type SetPhoneNumberAction = {
  type: typeof profileActionTypes.SET_PHONE_NUMBER;
  payload: string;
};

export type SetLocationAction = {
  type: typeof profileActionTypes.SET_LOCATION;
  payload: Coordinates;
};

export type UserAction =
  | SetPhoneNumberAction
  | SetLocationAction
  | HydrateUserDataAction;

export const profileInitialState = {
  email: "",
  phoneNumber: "",
  location: {
    latitude: 0,
    longitude: 0,
  },
};

export const profileActionTypes = {
  HYDRATE_USER_DATA: "HYDRATE_USER_DATA",
  SET_PHONE_NUMBER: "SET_PHONE_NUMBER",
  SET_LOCATION: "SET_LOCATION",
} as const;

export const userFormReducer = (
  state: UserProfileFields,
  action: UserAction
) => {
  switch (action.type) {
    case profileActionTypes.SET_PHONE_NUMBER:
      return { ...state, phoneNumber: action.payload };
    case profileActionTypes.SET_LOCATION:
      return { ...state, location: action.payload };
    case profileActionTypes.HYDRATE_USER_DATA:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
