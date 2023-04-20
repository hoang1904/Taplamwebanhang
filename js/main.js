const $ = document.querySelector.bind(document);

const menuIcon = $(".header-menu");
const menu = $(".menu");
const closeIcon = $(".close-icon-item");

const handleDisplayMenu = () => {
  $(".menu").classList.add("menu-block");
};

const handleCloseMenu = () => {
  menu.classList.remove("menu-block");
};

menuIcon.onclick = () => {
  handleDisplayMenu();
};

closeIcon.onclick = () => {
  handleCloseMenu();
};
