import { test, expect } from '@playwright/test';
import { loginWithMicrosoftAccount } from 'utils/AgentPortal_utils/authUtils';

test.describe('Organization Management', () => {
test('Add New Sub Organization', async ({ page }) => {

   await test.step('Login and navigate to organizations', async () => {
      await loginWithMicrosoftAccount(page);
    });
  // Navigate to the Organization
      await page.getByLabel('Organizations').getByText('Organizations').click();
    await expect(page.getByText('Organizations Add New')).toBeVisible();
  await page.getByRole('row', { name: 'Green Valley Medical Group' }).getByRole('button').first().click();
  await expect(page.getByRole('link', { name: 'Organization Dashboard' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Organization Info' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Sub Organization List' })).toBeVisible();

  // Open Sub Organization List
  await page.getByRole('link', { name: 'Sub Organization List' }).click();
  await expect(page.getByText('Sub Organizations Add New Sub')).toBeVisible();
  await page.waitForTimeout(5000);
  await expect(page.getByText('Legal Business Name↑')).toBeVisible();

  // Click "Add New Sub Organizations"
  await page.getByRole('button', { name: 'Add New Sub Organizations' }).click();
  await expect(page.getByRole('heading', { name: 'Basic Information' })).toBeVisible();

  // Basic Information
  await page.getByRole('textbox', { name: 'Enter Client Name' }).fill('Horizon Family Clinic, LLC');
  await page.getByRole('textbox', { name: 'Enter Legal Business Name' }).fill('Horizon Family Clinic, LLC');
  await page.getByRole('textbox', { name: 'Enter Client Email' }).fill('admin@horizonfamilyclinic.com');
  await page.getByRole('textbox', { name: 'Enter TIN/EIN' }).fill('84-7620195');

  await page.locator('form div').filter({ hasText: 'Basic InformationClient' }).getByPlaceholder('Enter Text').fill('Horizon Family Clinic');
  await page.getByRole('textbox', { name: 'Enter Organization Type' }).fill('Limited Liability Company');
  await page.getByPlaceholder('dd-mm-yyyy').fill('2025-08-31');

  await page.locator('form div').filter({ hasText: 'Basic InformationClient' }).getByLabel('Select State').click();
  await page.getByRole('option', { name: 'Texas' }).click();

  await page.getByPlaceholder('Enter Medicare Group ID').fill('9876543');
  await page.getByPlaceholder('Enter Medicaid Group ID').fill('4567892');
  await page.getByPlaceholder('Enter CLIA Number').fill('450987654');
  await page.getByPlaceholder('Enter NAICS Code').fill('621111');

  await page.getByRole('textbox', { name: 'Enter Practice Code' }).fill('HFC-TX01');
  await page.getByRole('textbox', { name: 'Enter Specialty' }).fill('Family Medicine');

  await page.getByRole('combobox', { name: 'Select Languages' }).click();
  await page.getByRole('option', { name: 'English' }).click();

  await page.locator('form div').filter({ hasText: 'Basic InformationClient' }).getByPlaceholder('Enter Date').fill('2025-12-31');
  await page.locator('div').filter({ hasText: /^Providing Telehealth \/ Telemedicine ServicesYesNo$/ }).getByLabel('Yes').check();

  await page.getByPlaceholder('Enter Taxonomy Code').fill('20700000');
  await page.getByRole('textbox', { name: 'Enter Taxonomy Description' }).fill('Family Medicine');

  // Taxonomy Details
  await page.locator('form div').filter({ hasText: 'Taxonomy DetailsTaxonomy' }).getByPlaceholder('Enter Phone Number').fill('8454341356');
  await page.locator('form div').filter({ hasText: 'Taxonomy DetailsTaxonomy' }).getByPlaceholder('Enter Date').fill('2025-08-31');
  await page.getByRole('textbox', { name: 'Enter Taxonomy Type' }).fill('Physician');
  await page.locator('form div').filter({ hasText: 'Taxonomy DetailsTaxonomy' }).getByPlaceholder('Enter Number').fill('1285634970');

  // NPI Details
  await page.locator('form div').filter({ hasText: 'NPI DetailsNPI NumberNPI' }).getByPlaceholder('Enter Number').fill('1285634970');
  await page.getByRole('textbox', { name: 'Enter NPI Type' }).fill('Individual');
  await page.getByRole('textbox', { name: 'Enter Entity Name' }).fill('Dr. Laura Whitman');
  await page.getByRole('combobox', { name: 'Select NPI Status' }).click();
  await page.getByRole('option', { name: 'Yes' }).click();
  await page.locator('form div').filter({ hasText: 'NPI DetailsNPI NumberNPI' }).getByPlaceholder('Enter Date').first().fill('2015-10-03');
  await page.getByRole('textbox', { name: 'Enter NPI Registry Link' }).fill('https://npiregistry.cms.hhs.gov/provider/1285634970');

  // Contact Information
  await page.locator('form div').filter({ hasText: 'Contact Information' }).getByPlaceholder('Enter Phone Number').first().fill('+1 (512) 555-2048');
  await page.locator('form div').filter({ hasText: 'Contact Information' }).getByPlaceholder('Enter Number').fill('5464646');
  await page.locator('form div').filter({ hasText: 'Contact Information' }).getByPlaceholder('Enter Address', { exact: true }).fill('2215 Westlake Drive, Suite 210');
  await page.getByRole('textbox', { name: 'Enter Address 2' }).fill('Building A');

  await page.locator('form div').filter({ hasText: 'Contact Information' }).getByLabel('Select State').click();
  await page.getByRole('option', { name: 'Texas' }).click();

  await page.getByPlaceholder('Enter Zip/Postal Code').fill('78746');
  await page.getByRole('combobox', { name: 'Select County' }).click();
  await page.getByRole('option', { name: 'Los Angeles' }).click();
  await page.getByRole('combobox', { name: 'Select Country' }).click();
  await page.getByRole('option', { name: 'USA' }).click();

  // Ownership
  await page.getByRole('textbox', { name: 'Enter Field Name' }).fill('Owner_01');
  await page.getByRole('textbox', { name: 'Enter Owner Name' }).fill('Dr. Laura Whitman');
  await page.getByRole('textbox', { name: 'Enter Owner Type' }).fill('Individual');
  await page.locator('form div').filter({ hasText: 'Ownership Type' }).getByPlaceholder('Enter Number').first().fill('60');
  await page.getByRole('textbox', { name: 'Enter Tax ID (If Entity)' }).fill('N/A');
  await page.locator('form div').filter({ hasText: 'Ownership Type' }).getByPlaceholder('Enter Email').fill('ss@yopmail.com');
  await page.locator('form div').filter({ hasText: 'Ownership Type' }).getByPlaceholder('Enter Date').first().fill('1974-04-15');

  await page.getByRole('textbox', { name: 'Enter Place of Birth' }).fill('Dallas, Texas');
  await page.locator('div').filter({ hasText: /^Driver's License Attachment/ }).locator('input[type="file"]').setInputFiles('Upload/ASPRCM.pdf');
  await page.getByRole('textbox', { name: 'Enter Ownership Type' }).fill('Majority Owner');
  await page.getByRole('textbox', { name: 'Enter Relationship of Entity' }).fill('Founder');
  await page.locator('form div').filter({ hasText: 'Ownership Type' }).getByPlaceholder('Enter Date').nth(1).fill('2015-05-01');

//   await page.locator('div').filter({ hasText: /^Is Managing Employee\?YesNo$/ }).getByLabel('Yes').check();
//   await page.locator('div').filter({ hasText: /^Is Authorized Official\?YesNo$/ }).getByLabel('Yes').check();
//   await page.locator('div').filter({ hasText: /^CMS Disclosures Required \(5% More\)\?YesNo$/ }).getByLabel('Yes').check();

  // Point of Contact
  await page.locator('form div').filter({ hasText: 'Point of Contact' }).getByPlaceholder('Enter Name').fill('Sarah Coleman');
  await page.locator('form div').filter({ hasText: 'Point of Contact' }).getByPlaceholder('Enter Email').fill('scoleman@horizonfamilyclinic.com');
  await page.locator('form div').filter({ hasText: 'Point of Contact' }).getByPlaceholder('Enter Phone Number').fill('+1 (512) 555-7721');

  // Automation Mapping
  await page.locator('form div').filter({ hasText: 'Automation Mapping' }).getByPlaceholder('Enter Name').fill('John Myers');
  await page.locator('form div').filter({ hasText: 'Automation Mapping' }).getByPlaceholder('Enter Email').fill('jmyers@horizonfamilyclinic.com');

  // Practice Location(s)
  await page.getByRole('textbox', { name: 'Enter Practice Location Name' }).fill('Sunrise Family Care Center');
  await page.getByRole('textbox', { name: 'Enter Location Type' }).fill('Outpatient Clinic');
  await page.locator('form div').filter({ hasText: 'Practice Location(s)' }).getByPlaceholder('Enter Phone Number').fill('5125558934');
  await page.locator('form div').filter({ hasText: 'Practice Location(s)' }).getByPlaceholder('Enter Email').fill('contact@sunrisefamilycare.com');

  await page.locator('form div').filter({ hasText: 'Practice Location(s)' }).getByLabel('Select State').click();
  await page.getByRole('option', { name: 'Texas' }).click();
  await page.locator('form div').filter({ hasText: 'Practice Location(s)' }).getByLabel('Select City').click();
  await page.getByRole('option', { name: 'Anchor Point' }).click();
  await page.locator('form div').filter({ hasText: 'Practice Location(s)' }).getByPlaceholder('Enter Number').nth(2).fill('78701');
  await page.locator('form div').filter({ hasText: 'Practice Location(s)' }).getByPlaceholder('Enter Address').fill('1200 Main Street, Suite 400, Austin, TX 78701');
  await page.getByRole('textbox', { name: 'Enter TIN', exact: true }).fill('56-7894561');

  await page.locator('form div').filter({ hasText: 'Practice Location(s)' }).getByLabel('Yes').check();

  // Credentialing Contact
  await page.getByRole('textbox', { name: 'Enter Contact Name' }).fill('Rebecca Taylor');
  await page.getByRole('textbox', { name: 'Enter Title' }).fill('Credentialing Specialist');
  await page.locator('form div').filter({ hasText: 'Credentialing Contact' }).getByPlaceholder('Enter Phone Number').fill('+1 (512) 555-9012');
  await page.locator('form div').filter({ hasText: 'Credentialing Contact' }).getByPlaceholder('Enter Email').fill('rtaylor@sunrisefamilycare.com');
  await page.getByRole('textbox', { name: 'Enter Alternate Contact' }).fill('Michael Chen');

  // Licensure & Accreditation
  await page.getByRole('combobox', { name: 'Select State' }).click();
  await page.getByRole('option', { name: 'Texas' }).click();
  await page.getByRole('textbox', { name: 'Enter State Business License' }).fill('TX-CL-459873');
  await page.locator('form div').filter({ hasText: 'Licensure & Accreditation' }).getByPlaceholder('Enter Date').fill('2027-08-15');
  await page.locator('form div').filter({ hasText: 'Licensure & Accreditation' }).getByPlaceholder('Enter Version').fill('1.0');
  await page.getByRole('textbox', { name: 'Enter Accreditation Body' }).fill('The Joint Commission');
  await page.getByPlaceholder('Enter Accreditation Date &').fill('2025-12-31');
  await page.getByRole('textbox', { name: 'Enter Document Type' }).fill('2');
  await page.getByPlaceholder('Enter Expiration Date').fill('2027-08-01');
  await page.getByPlaceholder('Enter Reminder Days').fill('0');

  // Other Login Details
  await page.locator('form div').filter({ hasText: 'Other Login Details' }).getByPlaceholder('Enter Name').fill('Provider Portal – Cigna');
  await page.getByRole('textbox', { name: 'Enter Link' }).fill('https://provider.cigna.com');
  await page.getByRole('textbox', { name: 'Enter Username' }).fill('sunrisefamily');
  await page.getByPlaceholder('Enter Password').fill('464356435');
  await page.getByRole('combobox', { name: 'Select Day' }).click();
  await page.getByRole('option', { name: 'Monday' }).click();
  await page.getByPlaceholder('Enter Start Date').fill('2025-08-08');
  await page.getByPlaceholder('Enter End Date').fill('2025-08-31');
//   await page.getByRole('checkbox', { name: 'Group Name' }).check();

  // Save
  await expect(page.getByRole('button', { name: 'Save & Close' })).toBeVisible();
  await page.getByRole('button', { name: 'Save & Close' }).click();
});


});