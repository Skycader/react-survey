export default function (state, action) {
  action.type = action.type.toLowerCase();
  switch (action.type) {
    case "name":
      return {
        ...state,
        "Name": action.payload,
      };
    case "surname":
      return {
        ...state,
        "Surname": action.payload,
      };
    case "birthday":
      return {
        ...state,
        "Birthday": action.payload,
      };
    case "telephone (x-xxxx-xx-xx)":
      return {
        ...state,
        "Telephone": action.payload,
      };
    case "website url (https only)":
      return {
        ...state,
        "Website": action.payload,
      };
    case "about yourself":
      return {
        ...state,
        "About yourself": action.payload,
      };
    case "about your stack":
      return {
        ...state,
        "Stack": action.payload,
      };
    case "about your last project":
      return {
        ...state,
        "Last project": action.payload,
      };
    case "abort":
      for (let key of Object.keys(state)) {
        state[key] = "";
      }
      return {...state}
    default:
      return state;
  }
}
