import menuList from "./menu.json";
import templateMenuCard from "./template.hbs";

const refs = {
  list: document.querySelector(".js-menu"),
  checkBox: document.querySelector("#theme-switch-toggle"),
  body: document.querySelector("body"),
};

const Theme = {
  LIGHT: "light-theme",
  DARK: "dark-theme",
};

//console.log(templateMenuCard(menuList[0]));
refs.checkBox.addEventListener("change", onChangeThemeOfBody);

const menuCardsMarkup = createMenuCardsMarkup(menuList);
refs.list.insertAdjacentHTML("beforeend", menuCardsMarkup);

savedCurrentTheme();
function createMenuCardsMarkup(menuList) {
  return menuList.map(templateMenuCard).join("");
}

function onChangeThemeOfBody() {
  if (refs.checkBox.checked) {
    refs.body.classList.add(Theme.DARK);
    refs.body.classList.remove(Theme.LIGHT);
    localStorage.setItem("myCurrentTheme", "dark-theme");
  } else {
    refs.body.classList.add(Theme.LIGHT);
    refs.body.classList.remove(Theme.DARK);
    localStorage.setItem("myCurrentTheme", "light-theme");
  }
}

function savedCurrentTheme() {
  const savedTheme = localStorage.getItem("myCurrentTheme");
  if (savedTheme === "dark-theme") {
    console.log("привет");
    refs.checkBox.checked === true;
  }
}
