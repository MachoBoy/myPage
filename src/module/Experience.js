import vertigoIcon from "../assets/vertigo.png";

const initialState = {
  expData: [
    {
      icon: vertigoIcon,
      name: "Vertigo Games America",
      duration: "2018 Jan - current",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    },
  ],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
