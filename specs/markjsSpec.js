import markjsConfiguratorPage from '../pages/markjsConfiguratorPage';

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
			const keyword = 'lorem';
			const keywordInputEl = $('#keyword');
			await keywordInputEl.clear();
			await keywordInputEl.sendKeys(keyword);

			const markSubmitButton = $('button[type="submit"]');
			markSubmitButton.click();

			const t = await $$('div.panel-body.context p').getText();
			const newStr = JSON.stringify(t);
			

			// this is case senstive
			// new to re-work regex;
			const count = (newStr.match(/Lorem|lorem|Lörem/gi) || []).length;
			console.log(count);

			await browser.sleep(2000);
			expect(count).toBe(7);
		});

		it('should search for word "lorem" Case Sensitive', async () => {
			
			const keyword = 'lorem';
			const keywordInputEl = $('#keyword');
			await keywordInputEl.clear();
			await keywordInputEl.sendKeys(keyword);


			const caseSenstiveOption = $('#form-keyword-caseSensitive');
			caseSenstiveOption.click();	

			await browser.sleep(3000);
			const markSubmitButton = $('button[type="submit"]');
			markSubmitButton.click();
			await browser.sleep(3000);

			const t = await $$('div.panel-body.context p').getText();
			const newStr = JSON.stringify(t);
			const count = (newStr.match(/lorem/g) || []).length;
			console.log(count);

			expect(count).toBe(1);
		});


	});	

});