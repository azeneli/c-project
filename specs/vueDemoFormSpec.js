import Chance from 'chance';

const chance = new Chance();

describe('Vue Demo From Test Suite', () => {

	it('should fill out the form', async () => {

		const url = 'https://teroauralinna.github.io/vue-demo-form/'
		browser.get(url);
		await browser.sleep(3000);


		expect(browser.getCurrentUrl()).toBe(url);
	});









});