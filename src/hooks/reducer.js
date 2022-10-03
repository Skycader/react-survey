export default function (state, action) {
  action.type = action.type.toLowerCase();
  switch (action.type) {
    case "name":
      return {
        ...state,
        name: action.payload,
      };
    case "surname":
      return {
        ...state,
        surname: action.payload,
      };
    case "birthday":
      return {
        ...state,
        birthday: action.payload,
      };
    case "telephone (x-xxxx-xx-xx)":
      return {
        ...state,
        telephone: action.payload,
      };
    case "website url":
      return {
        ...state,
        website: action.payload,
      };
    case "about yourself":
      return {
        ...state,
        aboutYourself: action.payload,
      };
    case "about your stack":
      return {
        ...state,
        stack: action.payload,
      };
    case "about your last project":
      return {
        ...state,
        lastProject: action.payload,
      };
    case "abort":
      console.log(state)
      console.log({...state})
      for (let key of Object.keys(state)) {
        state[key] = "";
      }
      return {...state}
    default:
      return state;
  }
}
