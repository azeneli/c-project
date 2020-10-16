import markjsConfiguratorPage from '../../pages/markjsConfiguratorPage';

/*
* left a couple of browser.sleep for visibility's sake. 
*  Otherwise the test will run too fast and will not be able to see the actions in the UI
*/

describe('MarkJs configurator Test Suite', () => {
	describe('Testing Search functionality', () => {

		beforeAll(async () => {
			await markjsConfiguratorPage.goto();
		});

		it('should navigate to the MarkJs Configurator', async () => {
			const url = 'https://markjs.io/configurator.html';

			expect(browser.getCurrentUrl()).toBe(url);
		});

		it('should seach for the word "lorem" Case Insensitive', async () => {
			markjsConfiguratorPage.inputText();

			const markSubmitButton = $$('button[type="submit"]').first();
			markSubmitButton.click();

			const result = markjsConfiguratorPage.matchHighlightedWord();

			await browser.sleep(2000);
			expect(result).toBe(7);
		});

		it('should search for word "lorem" Case Sensitive', async () => {
			markjsConfiguratorPage.inputText();
	
			const caseSenstiveOption = $('#form-keyword-caseSensitive');
			caseSenstiveOption.click();	
	
			const markSubmitButton = $$('button[type="submit"]').first();
			markSubmitButton.click();

			await browser.sleep(2000);
			const el = $$('mark[data-markjs=true]');
			expect(el.isPresent()).toBe(true);
		});
	});	

});