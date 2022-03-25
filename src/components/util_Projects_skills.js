export const projects = [
  {
    name: "Jitter",
    link: "https://jitter.netlify.app",
    tech: "React JS, tailwind, firebase, react-chat-engine",
    description: `A simple chatting application where users can login using gmail or 
            signup using any other email and chat with other users. Auth is handled by firebase`,
  },
  {
    name: "Simple Board",
    link: "https://venkat-gvk.github.io/simpleboard/",
    tech: "React JS",
    description: `Simple whiteboard. It can draw shapes like Rectangle, Circle, Line, and Arrow. 
                  Freehand drawing can also be done using various colors and sizes.`,
  },
  {
    name: "Amazon Price Tracker",
    link: "https://github.com/venkat-gvk/amazon-price-scraper",
    tech: "Python, Selenium",
    description: `Given a product name, will search and retrieve a list that matches
              the given name along with the seller, URL, and price and sorts
              based on price and saves it as a JSON file`,
  },
  {
    name: "Youtube Comment Scraper",
    link: "https://github.com/venkat-gvk/youtube-comment-scraper",
    tech: "Python, Selenium",
    description: `Provided the URL, fetches only comments that have replies which
              are from the channel user and also the top level and pinned
              comments and saves it as a JSON file`,
  },
  {
    name: "Corona Tracker",
    link: "https://venkat-gvk.github.io/covid-tracker/",
    tech: "React JS",
    description: `Fetches corona info worldwide from open-source API. With multiple
              countries provided and has a graph that visualizes infected,
              recovered, and deaths.`,
  },
  {
    name: "Todo List App",
    link: "https://venkat-gvk.github.io/todo/",
    tech: "React JS",
    description: `Uses browser cache to store and retrieve todos. It also adds the
              date and time in which the todos have been added.`,
  },
  {
    name: "Sorting Visualizer",
    link: "https://venkat-gvk.github.io/sorting-visualizer/",
    tech: "React JS",
    description: `Visualize algos such as Bubble, Insertion, Merge, Quick and
              Selection Sort. Has random inputs and speed control to adjust the
              array size and animation`,
  },
];

export const languages = [
  { lang: "C", level: "91.666667" },
  { lang: "C++", level: "83.333333" },
  // { lang: "Java", level: "66.666667" },
  { lang: "JavaScript", level: "75" },
  { lang: "Python", level: "66.666667" },
];
export const technologies = [
  { tech: "React JS", level: "83.333333" },
  // { tech: "Node JS", level: "75" },
  { tech: "Tailwind CSS", level: "83.333333" },
  // { tech: "Selenium", level: "66.666667" },
  // { tech: "MongoDB", level: "66.666667" },
];
