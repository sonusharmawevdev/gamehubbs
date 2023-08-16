import { HiMoon, HiOutlineSun, IoIosDesktop } from "../utils/icons";

const themeLink = [
  {
    id: 1,
    icon: IoIosDesktop,
    text: "system",
  },
  {
    id: 2,
    icon: HiOutlineSun,
    text: "light",
  },
  {
    id: 3,
    icon: HiMoon,
    text: "dark",
  },
];

function onWindowMatch() {
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) => {
      if (e.matches) {
        if (!("theme" in localStorage)) {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      }
    });
}

export { themeLink, onWindowMatch };
