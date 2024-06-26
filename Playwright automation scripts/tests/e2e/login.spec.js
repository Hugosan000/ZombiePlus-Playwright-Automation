const { test, expect } = require("@playwright/test");

const { LoginPage } = require("../pages/LoginPage");
const { Toast } = require("../pages/Components");
const { MoviesPage } = require("../pages/MoviesPage");

let loginPage;
let toast;
let moviesPage;

test.beforeEach(({ page }) => {
  loginPage = new LoginPage(page);
  toast = new Toast(page);
  moviesPage = new MoviesPage(page);
});

test("Should login with admin rights", async ({ page }) => {
  await loginPage.visit();
  await loginPage.submit("admin@zombieplus.com", "pwd123");
  await moviesPage.isLoggedIn();
});

test("Should not login with wrong password", async ({ page }) => {
  await loginPage.visit();
  await loginPage.submit("admin@zombieplus.com", "abc123");
  const message =
    "Oops!Ocorreu um erro ao tentar efetuar o login. Por favor, verifique suas credenciais e tente novamente.";
  await toast.haveText(message);
});

test("Should not login with wrong email", async ({ page }) => {
  await loginPage.visit();
  await loginPage.submit("admin.zombieplus.com", "abc123");
  await loginPage.alertHaveText("Email incorreto");
});

test("Should not login with blank email field", async ({ page }) => {
  await loginPage.visit();
  await loginPage.submit("", "pwd123");
  await loginPage.alertHaveText("Campo obrigatório");
});

test("Should not login with blank password field", async ({ page }) => {
  await loginPage.visit();
  await loginPage.submit("admin@zombieplus.com", "");
  await loginPage.alertHaveText("Campo obrigatório");
});

test("Should not login with blank form field", async ({ page }) => {
  await loginPage.visit();
  await loginPage.submit("", "");
  await loginPage.alertHaveText(["Campo obrigatório", "Campo obrigatório"]);
});
