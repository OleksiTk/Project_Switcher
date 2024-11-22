class SwitchTheme {
  constructor(theme, button) {
    this.theme = theme;
    this.button = button;
    this.saveTheme(); // Збереження та застосування теми при завантаженні
  }

  saveTheme() {
    let checktheme = localStorage.getItem("themekey");

    if (checktheme == "Theme__white") {
      this.theme.classList.add("theme__white");
      this.button.classList.add("button__black");
    } else if (checktheme == "Theme__black") {
      this.theme.classList.add("theme__black");
      this.button.classList.add("button__white");
    }
  }

  switchTheme() {
    if (this.theme.classList.contains("theme__white")) {
      this.theme.classList.remove("theme__white");
      this.theme.classList.add("theme__black");
      this.button.classList.add("button__white");
      this.button.classList.remove("button__black");
      localStorage.setItem("themekey", "Theme__black");
    } else {
      this.button.classList.remove("button__white");
      this.button.classList.add("button__black");
      this.theme.classList.remove("theme__black");
      this.theme.classList.add("theme__white");
      localStorage.setItem("themekey", "Theme__white");
    }
  }
}

let buttonOne = document.querySelector(".button__type");
let body = document.querySelector(".wrapper");

// Створення екземпляра класу SwitchTheme
let checkthisTheme = new SwitchTheme(body, buttonOne);

// Додаємо слухача події, передаючи функцію як посилання
buttonOne.addEventListener("click", () => checkthisTheme.switchTheme());
