// @ts-check
const { test, expect } = require("@playwright/test");

const { LandingPage } = require("../pages/LandingPage");
const { Toast } = require("../pages/Components");

let landingPage
let toast

test.beforeEach(async ({ page }) => {
  landingPage = new LandingPage(page)
  toast = new Toast(page)
});

test("Should insert lead on waitlist ", async ({ page }) => {
  await landingPage.visit();
  await landingPage.openLeadModal();
  await landingPage.submitLeadForm("Victor Hugo", "victorfonsecasp2@gmail.com");
  const message =
    "Agradecemos por compartilhar seus dados conosco. Em breve, nossa equipe entrará em contato!";

  await toast.haveText(message);

  await page.waitForTimeout(5000);
});

test("Should not possible create lead with invalid email - error handling", async ({
  page,
}) => {
  await landingPage.visit();
  await landingPage.openLeadModal();
  await landingPage.submitLeadForm("Victor Hugo", "victorfonsecasp2gmail.com");
  await landingPage.alertHaveText("Email incorreto");
  await page.waitForTimeout(5000);
});

test("Should not possible create lead with empty fields on lead form - obrigatory fields necessary error handling", async ({
  page,
}) => {
  await landingPage.visit();
  await landingPage.openLeadModal();
  await landingPage.submitLeadForm("", "");
  await landingPage.alertHaveText(["Campo obrigatório", "Campo obrigatório"]);

  await page.waitForTimeout(2000);
});

test("Should not possible create lead without name on lead form - error handling", async ({
  page,
}) => {
  await landingPage.visit();
  await landingPage.openLeadModal();
  await landingPage.submitLeadForm("", "victorfonsecasp2@gmail.com");
  await landingPage.alertHaveText("Campo obrigatório");
  await page.waitForTimeout(3000);
});
