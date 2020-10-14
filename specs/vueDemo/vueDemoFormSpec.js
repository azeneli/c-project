import vueFormPage from '../../pages/vueFormPage';
import Chance from 'chance';

const chance = new Chance();

describe('Vue Demo From Test Suite', () => {
	const firstName = chance.first();
	const lastName = chance.last();
	const email = chance.email();
	const submitButton = $('button[type="submit"]');

	describe('Tests with valid data entered', () => {
		it('should navigate to the form url', async () => {
			await vueFormPage.goto();
			const url = 'https://teroauralinna.github.io/vue-demo-form/';

			expect(browser.getCurrentUrl()).toBe(url);
		});

		it('should allow me to enter First name', async () => {
			const firstNameEl = $('#firstName');
			vueFormPage.fillInput(firstNameEl, firstName);

			const result = firstNameEl.getAttribute('text');
			expect(result).toBe(firstName);
		});

		it('should allow me to enter Last name', async () => {
			const lastNameEl = $('#lastName');
			vueFormPage.fillInput(lastNameEl, lastName);

			const result = lastNameEl.getAttribute('text');
			expect(result).toBe(lastName);
		});

		it('should allow me to enter an Email address', async () => {
			const emailEl = $('#email');
			vueFormPage.fillInput(emailEl, email);

			const result = emailEl.getAttribute('email');
			expect(result).toBe(emailEl);
		});

		it('should allow me to select a Subscription type', async () => {
			const subTypeEl = $('#type');

			await subTypeEl.click();
			await $('#type option[value=free]').click();

			await browser.sleep(3000);
			expect($('#type option[value=free]').getText()).toEqual('Free trial subscription');
		});

		it('should allow me to check the Terms & Conditions', async () => {
			const checkBoxEl = $('#terms');
			vueFormPage.waitAndClick(checkBoxEl);

			expect(checkBoxEl.isSelected()).toBe(true);
		});


		it('should allow me to Submit the from with the required fields completed', async () => {
			vueFormPage.waitAndClick(submitButton);
			
			await browser.sleep(3000);

			const successSubmissionEl = $('div.alert.alert-success');
			expect(successSubmissionEl.isPresent()).toBe(true);
		});
	});	

	describe('Tests with in-valid data entered', () => {

		beforeAll(async () => {
			await vueFormPage.goto();
		})

		it('should not allow me to proceed with No Data Entered', async () => {
			vueFormPage.waitAndClick(submitButton);
			await browser.sleep(3000);

			const alertDangerEl = $('div.alert.alert-danger');
			expect(alertDangerEl.isPresent()).toBe(true);
		});

		it('should not proceed if you did Not Complete all the forms', async () => {
			await browser.sleep(3000);
			const firstNameEl = $('#firstName');
			vueFormPage.fillInput(firstNameEl, firstName);

			await browser.sleep(3000);

			const lastNameEl = $('#lastName');	
			vueFormPage.fillInput(lastNameEl, lastName);

			const emailEl = $('#email');
			vueFormPage.fillInput(emailEl, email);

			vueFormPage.waitAndClick(submitButton);
			await browser.sleep(3000);

			const alertDangerEl = $('div.alert.alert-danger');
			expect(alertDangerEl.isPresent()).toBe(true);
		});

		it('should not allow me to proceed with an Invalid Email entered', async () => {
			await browser.refresh(3000);

			const emailEl = $('#email');
			const emailText = 'asdfasffdafdsfa@';
			vueFormPage.fillInput(emailEl, emailText);

			vueFormPage.waitAndClick(submitButton);
			await browser.sleep(3000);

			const invalidEmailWarning = $('#email div.invalid-feedback');
			expect(invalidEmailWarning.isPresent()).toBe(true);
		});
	});	

});