import reactIcon from "../assets/react-icon.png";
import cssIcon from "../assets/css-logo.png";
import htmlIcon from "../assets/html-logo.png";
import nodeIcon from "../assets/node.png";
import sassIcon from "../assets/sass.png";
import tsIcon from "../assets/typescript.png";
import vueIcon from "../assets/vue.png";

const initialState = {
  skills: [
    {
      classname: "skill_html",
      icon: htmlIcon,
      code: "HTML 5",
      number: 90,
      color: "#FF6D00",
    },
    {
      classname: "skill_css",
      icon: cssIcon,
      code: "CSS",
      number: 95,
      color: "#039BE5",
    },
    {
      classname: "skill_sass",
      icon: sassIcon,
      code: "SASS",
      number: 80,
      color: "#CD6799",
    },
    {
      classname: "skill_react",
      icon: reactIcon,
      code: "React JS",
      number: 80,
      color: "#61DAFB",
    },
    {
      classname: "skill_vue",
      icon: vueIcon,
      code: "Vue JS",
      number: 80,
      color: "#41B883",
    },
    {
      classname: "skill_ts",
      icon: tsIcon,
      code: "Typescript",
      number: 80,
      color: "#007ACC",
    },
    {
      classname: "skill_node",
      icon: nodeIcon,
      code: "Node JS",
      number: 80,
      color: "#8CC84B",
    },
  ],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
