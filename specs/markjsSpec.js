import markjsConfiguratorPage from '../pages/markjsConfiguratorPage';

describe('MarkJs configurator Test Suite', () => {
	describe('Testing Search functionality', () => {

		beforeAll(async () => {
			await markjsConfiguratorPage.goto();
		});

		it('should navigate to the MarkJs Configurator', async () => {
			const url = 'https://markjs.io/configurator.html'

			expect(browser.getCurrentUrl()).toBe(url);
		});

		it('should seach for the word "lorem" and assert correct number of results', async () => {



		});

	


	});	

});