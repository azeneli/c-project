import Chance from 'chance';

const chance = new Chance();

describe('Vue Demo From Test Suite', () => {

	it('should navigate to the form url', async () => {
		const url = 'https://teroauralinna.github.io/vue-demo-form/'
		browser.get(url);
		await browser.sleep(3000);

		expect(browser.getCurrentUrl()).toBe(url);
	});

	xit('should allow me to enter First name', async () => {
		const firstName = chance.first();
		const firstNameEl = $('#firstName');

		firstNameEl.sendKeys(firstName);
		await browser.sleep(3000);

		const result = firstNameEl.getAttribute('text');
		console.log(result);

		expect(result).toBe(firstName);
	});

	xit('should allow me to enter Last name', async () => {
		const lastName = chance.last();
		const lastNameEl = $('#lastName');

		lastNameEl.sendKeys(lastName);
		await browser.sleep(3000);

		const result = lastNameEl.getAttribute('text');
		console.log(result);

		expect(result).toBe(lastName);

	});

	xit('should allow me to enter an Email address', async () => {
		const email = chance.email();
		const emailEl = $('#email');
		
		emailEl.sendKeys(email);
		await browser.sleep(3000);

		const result = emailEl.getAttribute('email');
		console.log(result);

		expect(result).toBe(emailEl);
	});

	xit('should allow me to select a Subscription type', async () => {
		const subTypeEl = $('#type');
		subTypeEl.click();	

		//const subTypeFree = $('')	
		element(by.cssContainingText('option', 'free')).click();
		await browser.sleep(3000);
		$('#app').click();
		//subTypeEl.element(by.cssContainingText('option', 'free')).click();
		

		expect(true).toBe(true);
	});

	it('should allow me to check the Terms & Conditions', async () => {
		const checkBoxEl = $('#terms');
		checkBoxEl.click();
		await browser.sleep(3000);

		expect(checkBoxEl.isSelected()).toBe(true);
	});


	xit('should allow me to Submit the from with the required fields completed', async () => {
		const submitButton = $('button[type="submit"]');
		submitButton.click();

		await browser.sleep(3000);
		const successSubmissionEl = $('div.alert.alert-success');

		expect(successSubmissionEl).isPresent().toBe(true);
	});


});