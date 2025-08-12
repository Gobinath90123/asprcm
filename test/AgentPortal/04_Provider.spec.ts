import { test, expect } from '@playwright/test';
import { loginWithMicrosoftAccount } from 'utils/AgentPortal_utils/authUtils';


test('Provider', async ({ page }) => {

    await test.step('Login and navigate to organizations', async () => {
        await loginWithMicrosoftAccount(page);
    });


    //navigate to provider form
    await page.getByText('Organizations').click();
    await page.getByLabel('Organizations').getByText('Organizations').click();
    await page.getByRole('row', { name: 'Sunrise Health Systems' }).getByRole('button').first().click();
    await page.getByRole('link', { name: 'Sub Organization List' }).click();

    await page.getByRole('cell', { name: 'Delete undefined' }).getByRole('button').first().click();
    await expect(page.getByRole('heading', { name: 'Basic Information' })).toBeVisible();
    await page.getByRole('link', { name: 'Provider' }).click();
    await expect(page.getByText('Provider Add New Provider')).toBeVisible();
    await page.getByRole('button', { name: 'Add New Provider' }).click();
    await expect(page.getByRole('heading', { name: 'Basic Information' })).toBeVisible();
    await page.getByRole('textbox', { name: 'Full Name' }).fill('Dr. Laura Annette Hayes');
    await page.getByRole('textbox', { name: 'First Name' }).fill('Laura');
    await page.getByRole('textbox', { name: 'Middle Name' }).fill('Annette');
    await page.getByRole('textbox', { name: 'Last Name' }).fill('Hayes');
    await page.getByRole('textbox', { name: 'Suffix' }).fill('MD');
    await page.getByRole('textbox', { name: 'Enter Email' }).fill('laura.hayes@mediclinic.org');
    await page.getByRole('textbox', { name: 'NUCC Grouping' }).fill('207Q00000X');
    await page.getByRole('textbox', { name: 'Provider Type' }).fill('Family Medicine');
    await page.getByRole('textbox', { name: 'Provider Qualification' }).fill('MD – Board Certified Family Physician');
    await page.getByRole('textbox', { name: 'Enter Medicare PTAN' }).fill('PTAN567890');
    await page.getByRole('textbox', { name: 'Enter Medicaid Provider' }).fill('TX-MCD-334455');
    await page.getByRole('combobox', { name: 'Select languages spoken' }).click();
    await page.getByRole('option', { name: 'English' }).click();


    await expect(page.getByRole('heading', { name: 'Specialty' })).toBeVisible();
    await page.locator('div').filter({ hasText: /^SpecialtyAdd Row$/ }).getByRole('button').click();
    await expect(page.getByRole('heading', { name: 'Specialty' })).toBeVisible();
    await page.getByRole('textbox').fill('Family Medicine');
    await page.getByRole('checkbox').check();
    await expect(page.getByRole('button', { name: 'Save' })).toBeVisible();
    await page.getByRole('button', { name: 'Save' }).click();
    await expect(page.getByRole('heading', { name: 'Birth Information' })).toBeVisible();
    await page.locator('form div').filter({ hasText: 'Birth InformationDOBYYYY-MM-' }).getByLabel('Choose date').click();
    await page.locator('div').filter({ hasText: /^August 2025$/ }).nth(1).click();
    await page.getByRole('radio', { name: '1995' }).click();
    await page.getByRole('gridcell', { name: '12' }).click();
    await page.locator('form div').filter({ hasText: 'Birth InformationDOB1995-08-' }).getByLabel('Select Country').click();
    await page.getByRole('option', { name: 'USA' }).click();
    await page.getByText('Select State/Province').click();
    await page.getByRole('option', { name: 'Texas' }).click();
    await page.locator('form div').filter({ hasText: 'Birth InformationDOB1995-08-' }).getByLabel('Select City').click();
    await page.getByRole('option', { name: 'Hooper Bay' }).click();
    await page.locator('form div').filter({ hasText: 'Birth InformationDOB1995-08-' }).getByLabel('Select Select').click();
    await page.getByRole('option', { name: 'USA' }).click();
    await page.getByRole('combobox', { name: 'Select Gender' }).click();
    await page.getByRole('option', { name: 'Male', exact: true }).click();
    await page.getByRole('textbox', { name: 'Enter Identifies as' }).click();
    await page.getByRole('textbox', { name: 'Enter Identifies as' }).fill('No');
    await page.getByRole('textbox', { name: 'Enter Citizenship / Work' }).click();
    await page.getByRole('textbox', { name: 'Enter Citizenship / Work' }).fill('Yes');
    await page.getByRole('combobox', { name: 'Select Authorized to work in' }).click();
    await page.getByRole('option', { name: 'Yes' }).click();


    await expect(page.getByRole('heading', { name: 'Taxonomy Details' })).toBeVisible();
    await page.locator('div').filter({ hasText: /^Taxonomy DetailsAdd Row$/ }).getByRole('button').click();
    await expect(page.getByRole('heading', { name: 'Taxonomy Details' })).toBeVisible();

    await page.getByPlaceholder('Enter Taxonomy Code').fill('207Q00000X');
    await page.getByPlaceholder('Enter Taxonomy Description').fill('Family Medicine');
    await page.getByPlaceholder('Enter Primary Taxonomy').fill('Yes');
    await page.getByPlaceholder('Select Date').fill('2020-06-15');
    await page.getByPlaceholder('Enter Taxonomy Type').fill('Individual');
    await page.getByPlaceholder('Enter Associated NPI').fill('1679854321');
    await page.getByPlaceholder('Enter State Licensure Match Required').fill('Yes');
    await page.getByRole('button', { name: 'Save' }).click();


    await expect(page.getByRole('heading', { name: 'Location' })).toBeVisible();
    await page.locator('div').filter({ hasText: /^LocationAdd Row$/ }).getByRole('button').click();
    await page.getByRole('textbox').first().click();
    await page.getByRole('textbox').first().fill('Willow Creek Family Health');
    await page.getByRole('textbox').first().click();
    await page.getByRole('combobox', { name: 'Select State' }).click();
    await page.getByRole('option', { name: 'Texas' }).click();
    await page.getByRole('textbox').nth(1).click();
    await page.getByRole('textbox').nth(1).fill('Clinic');
    await page.getByRole('checkbox').check();
    await page.getByRole('button', { name: 'Save' }).click();
    await page.getByRole('textbox', { name: 'Street 1' }).fill('4821 Maplewood Drive');
    await page.getByRole('textbox', { name: 'Street 2' }).fill('Suite 200');
    await page.getByRole('combobox', { name: 'Select Country' }).click();
    await page.getByRole('option', { name: 'USA' }).click();
    await page.getByRole('combobox', { name: 'Select County' }).click();
    await page.getByRole('option', { name: 'Harris' }).click();
    await page.getByRole('combobox', { name: 'Select State' }).click();
    await page.getByRole('option', { name: 'California' }).click();
    await page.getByRole('combobox', { name: 'Select City' }).click();
    await page.getByRole('option', { name: 'Santa Monica' }).click();
    await page.getByRole('textbox', { name: 'Zip Code' }).fill('78731');
    await page.getByRole('textbox', { name: 'Email', exact: true }).fill('laura.hayes@willowcreekhealth.com');
    await page.getByRole('textbox', { name: 'Phone' }).fill('(512) 555-2948');

    await expect(page.getByRole('heading', { name: 'NPI' })).toBeVisible();

    await page.getByRole('textbox', { name: 'NPI Number' }).click();
    await page.getByRole('textbox', { name: 'NPI Number' }).fill('1679854321');
    await page.locator('form div').filter({ hasText: 'NPINPI NumberEnumeration' }).getByLabel('Choose date').click();
    await page.getByRole('button', { name: 'calendar view is open, switch' }).click();
    await page.getByRole('radio', { name: '2015' }).click();
    await page.getByRole('button', { name: 'calendar view is open, switch' }).click();
    await page.getByRole('button', { name: 'Choose date, selected date is Aug 12, 2015' }).click();


    await expect(page.getByRole('heading', { name: 'CAQH' })).toBeVisible();

    await page.getByRole('textbox', { name: 'CAQH Provider ID' }).click();
    await page.getByRole('textbox', { name: 'CAQH Provider ID' }).fill('11223344');
    await page.getByRole('textbox', { name: 'Username' }).click();
    await page.getByRole('textbox', { name: 'Username' }).fill('laurahayes');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('LH@2020med');
    await page.getByRole('combobox', { name: 'Select Enabled' }).click();
    await page.getByRole('option', { name: 'Yes' }).click();
    await page.locator('form div').filter({ hasText: 'CAQHCAQH Provider' }).getByLabel('Choose date').click();
    await page.getByRole('button', { name: 'calendar view is open, switch' }).click();
    await page.getByRole('radio', { name: '2015' }).click();
    await page.getByRole('button', { name: 'Previous month' }).click();
    await page.getByRole('button', { name: 'Previous month' }).click();
    await page.getByRole('gridcell', { name: '12' }).click();
    await page.getByRole('textbox', { name: 'System Alert (In Days)' }).click();
    await page.getByRole('textbox', { name: 'System Alert (In Days)' }).fill('30');

    await page.locator('div').filter({ hasText: /^Documents to UploadAdd Row$/ }).getByRole('button').click();
    await expect(page.getByRole('heading', { name: 'Documents to Upload' })).toBeVisible();
    await page.getByRole('textbox').first().fill('State Medical License');
    await page.getByRole('textbox').nth(1).fill('TX Medical License - Dr. Laura Hayes');
    await page.getByRole('combobox', { name: 'Select State' }).click();
    await page.getByRole('option', { name: 'Texas' }).click();
    await expect(page.getByRole('button', { name: 'Save' })).toBeVisible();
    await page.getByRole('button', { name: 'Save' }).click();

    await expect(page.getByRole('heading', { name: 'Social Security Number' })).toBeVisible();
    await page.getByPlaceholder('Social Security Number').fill('458656356');


    await expect(page.getByRole('heading', { name: 'Education' })).toBeVisible();
    await page.locator('div').filter({ hasText: /^EducationAdd Row$/ }).getByRole('button').click();
    await expect(page.getByRole('heading', { name: 'Education' })).toBeVisible();
    await page.getByRole('textbox').first().click();
    await page.getByRole('textbox').first().fill('Doctor of Medicine (MD)');
    await page.getByRole('button', { name: 'Save' }).click();
    await expect(page.getByRole('cell', { name: 'Doctor of Medicine (MD)' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Residency' })).toBeVisible();
    await page.locator('div').filter({ hasText: /^ResidencyAdd Row$/ }).getByRole('button').click();
    await page.getByRole('textbox').first().click();
    await page.getByRole('textbox').first().fill('Family Medicine Residency');
    await page.getByRole('button', { name: 'Save' }).click();

    await expect(page.getByRole('heading', { name: 'Affiliation' })).toBeVisible();
    await page.locator('div').filter({ hasText: /^AffiliationAdd Row$/ }).getByRole('button').click();
    await expect(page.getByRole('heading', { name: 'Affiliation' })).toBeVisible();
    await page.getByPlaceholder('Enter Hospital Name').fill('Austin General Hospital');
    await page.getByPlaceholder('Enter Hospital Address').fill('2500 Medical Plaza Drive');
    await page.getByRole('combobox', { name: 'Select State' }).click();
    await page.getByRole('option', { name: 'Texas' }).click();
    await page.getByRole('combobox', { name: 'Select City' }).click();
    await page.getByRole('option', { name: 'Chignik', exact: true }).click();
    await page.getByPlaceholder('Enter Zip Code').fill('78705');
    await page.getByPlaceholder('Enter Hospital Phone Number').fill('(512) 555-8700');
    await page.getByPlaceholder('Enter Hospital Fax Number').fill('(512) 555-8701');
    await page.getByPlaceholder('Enter Affiliation Type').fill('Admitting Privileges');
    await page.getByRole('combobox', { name: 'Select Current Status' }).click();
    await page.getByRole('option', { name: 'Active', exact: true }).click();
    await page.getByPlaceholder('Enter Department / Unit Name').fill('Family Medicine');
    await page.getByRole('button', { name: 'Save' }).click();


    await expect(page.getByRole('cell', { name: 'Austin General Hospital' })).toBeVisible();
    await page.getByRole('checkbox', { name: 'Have you had any federal or' }).check();


    await page.getByRole('checkbox', { name: 'Any current or past revocation, suspension, or voluntary surrender of a medical' }).check();
    await page.getByRole('checkbox', { name: 'Any current or past revocation or suspension of accreditation.' }).check();
    await expect(page.getByRole('heading', { name: 'Other Legal and License' })).toBeVisible();
    await page.locator('div').filter({ hasText: /^Other Legal and License InformationAdd Row$/ }).getByRole('button').click();
    await page.getByRole('textbox').first().click();
    await page.getByRole('textbox').first().fill('DEA Controlled Substance License');
    await page.getByRole('combobox', { name: 'Select State' }).click();
    await page.getByRole('option', { name: 'Texas' }).click();
    await page.getByRole('button', { name: 'Save' }).click();
    await page.locator('form div').filter({ hasText: 'Legal History - Lawsuit DisclosureHave you ever been named in a LawsuitSelect' }).getByLabel('Select Select').click();
    await page.getByRole('option', { name: 'Yes' }).click();
    await page.getByRole('button', { name: 'Choose date', exact: true }).click();
    await page.locator('div').filter({ hasText: /^August 2025$/ }).nth(1).click();
    await page.getByRole('radio', { name: '2017' }).click();
    await page.getByRole('gridcell', { name: '1', exact: true }).click();
    await page.getByRole('textbox', { name: 'Enter Outcome' }).click();
    await page.getByRole('textbox', { name: 'Enter Outcome' }).fill('Settled without admission of liability');
    await expect(page.getByRole('heading', { name: 'Other Legal Issues' })).toBeVisible();
    await page.getByRole('combobox', { name: 'Select Select' }).click();
    await page.getByRole('option', { name: 'No' }).click();
    await page.getByRole('textbox', { name: 'Enter Describe' }).click();
    await page.getByRole('textbox', { name: 'Enter Describe' }).fill('No issues');
    await expect(page.getByRole('heading', { name: 'Checklist' })).toBeVisible();
    await page.getByRole('checkbox', { name: 'CAQH login credentials of' }).check();
    await page.getByRole('checkbox', { name: 'Individual Providers start' }).check();
    await page.getByRole('checkbox', { name: 'Individual Providers resume' }).check();
    await page.getByRole('checkbox', { name: 'Individual Providers license' }).check();
    await expect(page.getByRole('button', { name: 'Save & Close' })).toBeVisible();
    await page.getByRole('button', { name: 'Save & Close' }).click();
    await page.getByPlaceholder('Social Security Number').fill('78995678567');

    await expect(page.getByText('Created successfully.')).toBeVisible();
    await expect(page.getByText('Dr. Laura Annette Hayes')).toBeVisible();
    await expect(page.getByText('Family Medicine')).toBeVisible();

});