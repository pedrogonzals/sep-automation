import { Given, Then, When } from "@cucumber/cucumber";
import { expect} from "@playwright/test";
import { startApplicationPage, page } from "../../globalPagesSetup.js";
import { productInfo } from "../../utilities/qa-data-reader.js";


Given('user is on the Enrollment page', async function () {
  // Empty body

  await startApplicationPage.login();

});

Then('the program star date is displayed', async function () {
  // Empty body
  await expect( startApplicationPage.programStartDate).toBeVisible();
});

Then('the program refund date is displayed', async function () {
  // Empty body
  await expect( startApplicationPage.programRefundDate).toBeVisible();

});

Then('the displayed start date for the program is correct', async function () {
  // Empty body
 const ACTUAL_START_DATE = await startApplicationPage.programStartDate.innerText();
 const EXPECTED_START_DATE = productInfo.startDate;
 console.log(`Actual Start date: ${ACTUAL_START_DATE}`);
 console.log(`Expected Start date: ${EXPECTED_START_DATE}`);
  expect(ACTUAL_START_DATE).toBe(EXPECTED_START_DATE);
});

Then('the displayed refund date for the program is correct', async function () {
  // Empty body
  const ACTUAL_REFUND_DATE = await startApplicationPage.refundEndDate.innerText();
  const EXPECTED_REFUND_DATE = productInfo.refundDate;
  console.log(`Actual Start date: ${ACTUAL_START_DATE}`);
  console.log(`Expected Start date: ${EXPECTED_START_DATE}`);
   expect(ACTUAL_REFUND_DATE).toBe(EXPECTED_REFUND_DATE);
});