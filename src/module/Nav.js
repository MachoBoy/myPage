const initialState = {
  navData: [
    {
      id: 0,
      number: "01",
      title: "Skills",
      isActive: true,
    },
    {
      id: 1,
      number: "02",
      title: "Experience",
      isActive: false,
    },
    {
      id: 2,
      number: "03",
      title: "Projects",
      isActive: false,
    },
  ],
  activeID: null,
};

//action type
export const SET_MENU_ACTIVE = "nav/SET_MENU_ACTIVE";

//action
export const setMenuActive = (index) => ({
  type: SET_MENU_ACTIVE,
  activeID: index,
});

// reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_MENU_ACTIVE:
      return { ...state, activeID: action.activeID };
    default:
      return state;
  }
}
