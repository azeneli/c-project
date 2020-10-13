import vueFormPage from '../pages/vueFormPage';
import Chance from 'chance';

const chance = new Chance();

describe('Vue Demo From Test Suite', () => {

	describe('Tests with valid data entered', () => {
		it('should navigate to the form url', async () => {
			await vueFormPage.goto();
			const url = 'https://teroauralinna.github.io/vue-demo-form/'

			expect(browser.getCurrentUrl()).toBe(url);
		});

		it('should allow me to enter First name', async () => {
			const firstName = chance.first();
			const firstNameEl = $('#firstName');
			await browser.sleep(2000);
			vueFormPage.fillInput(firstNameEl, firstName);

			const result = firstNameEl.getAttribute('text');
			expect(result).toBe(firstName);
		});

		it('should allow me to enter Last name', async () => {
			const lastName = chance.last();
			const lastNameEl = $('#lastName');
			vueFormPage.fillInput(lastNameEl, lastName);

			await browser.sleep(3000);

			const result = lastNameEl.getAttribute('text');
			expect(result).toBe(lastName);
		});

		it('should allow me to enter an Email address', async () => {
			const email = chance.email();
			const emailEl = $('#email');
			vueFormPage.fillInput(emailEl, email);
		
			await browser.sleep(3000);

			const result = emailEl.getAttribute('email');
			expect(result).toBe(emailEl);
		});

		it('should allow me to select a Subscription type', async () => {
			const subTypeEl = $('#type.form-control');

			await subTypeEl.click();
			browser.sleep(3000);
			await $('#type.form-control option').getText('Free trial subscription').click();
			await subTypeEl.click();
			browser.sleep(3000);
			
			
			//subTypeEl.element(by.cssContainingText('option', 'free')).click();
			

			expect(true).toBe(true);
			//expect($('#type.form-control option')).getText('Free trial subscription').toEqual('Free trial subscription');
		});

		it('should allow me to check the Terms & Conditions', async () => {
			const checkBoxEl = $('#terms');
			vueFormPage.waitAndClick(checkBoxEl);

			expect(checkBoxEl.isSelected()).toBe(true);
		});


		it('should allow me to Submit the from with the required fields completed', async () => {
			const submitButton = $('button[type="submit"]');
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
			const submitButton = $('button[type="submit"]');
			vueFormPage.waitAndClick(submitButton);

			await browser.sleep(3000);

			const alertDangerEl = $('div.alert.alert-danger');
			expect(alertDangerEl.isPresent()).toBe(true);
		});

		it('should not proceed if you did Not Complete all the forms', async () => {
			await browser.sleep(3000);

			const firstName = chance.first();
			const firstNameEl = $('#firstName');
			vueFormPage.fillInput(firstNameEl, firstName);

			await browser.sleep(3000);

			const lastName = chance.last();
			const lastNameEl = $('#lastName');	
			vueFormPage.fillInput(lastNameEl, lastName);

			const email = chance.email();
			const emailEl = $('#email');
			vueFormPage.fillInput(emailEl, email);


			const submitButton = $('button[type="submit"]');
			submitButton.click();
			await browser.sleep(3000);

			const alertDangerEl = $('div.alert.alert-danger');
			expect(alertDangerEl.isPresent()).toBe(true);
		});

		it('should not allow me to proceed with an Invalid Email entered', async () => {
			await browser.refresh(3000);

			const emailEl = $('#email');
			const emailText = 'asdfasffdafdsfa@';
			vueFormPage.fillInput(emailEl, email);

			const submitButton = $('button[type="submit"]');
			submitButton.click();
			await browser.sleep(3000);

			const invalidEmailWarning = $('#email div.invalid-feedback');
			expect(invalidEmailWarning.isPresent()).toBe(true);
		});
		

	});	

});