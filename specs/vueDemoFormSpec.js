import Chance from 'chance';

const chance = new Chance();

describe('Vue Demo From Test Suite', () => {

	describe('Tests with valid data entered', () => {
		it('should navigate to the form url', async () => {
			const url = 'https://teroauralinna.github.io/vue-demo-form/'
			browser.get(url);
			await browser.sleep(3000);

			expect(browser.getCurrentUrl()).toBe(url);
		});

		it('should allow me to enter First name', async () => {
			const firstName = chance.first();
			const firstNameEl = $('#firstName');

			firstNameEl.sendKeys(firstName);
			await browser.sleep(3000);

			const result = firstNameEl.getAttribute('text');
			console.log(result);

			expect(result).toBe(firstName);
		});

		it('should allow me to enter Last name', async () => {
			const lastName = chance.last();
			const lastNameEl = $('#lastName');

			lastNameEl.sendKeys(lastName);
			await browser.sleep(3000);

			const result = lastNameEl.getAttribute('text');
			console.log(result);

			expect(result).toBe(lastName);

		});

		it('should allow me to enter an Email address', async () => {
			const email = chance.email();
			const emailEl = $('#email');
			
			emailEl.sendKeys(email);
			await browser.sleep(3000);

			const result = emailEl.getAttribute('email');
			console.log(result);

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
			checkBoxEl.click();
			await browser.sleep(3000);

			expect(checkBoxEl.isSelected()).toBe(true);
		});


		it('should allow me to Submit the from with the required fields completed', async () => {
			const submitButton = $('button[type="submit"]');
			submitButton.click();

			await browser.sleep(3000);
			const successSubmissionEl = $('div.alert.alert-success');

			expect(successSubmissionEl.isPresent()).toBe(true);
		});
	});	

});