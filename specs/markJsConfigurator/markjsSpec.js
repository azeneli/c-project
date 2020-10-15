import markjsConfiguratorPage from '../../pages/markjsConfiguratorPage';

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
			await browser.sleep(2000);
			const keyword = 'lorem';
			const keywordInputEl = $('#keyword');
			markjsConfiguratorPage.inputText(keywordInputEl, keyword);	

			const markSubmitButton = $$('button[type="submit"]').first();
			markSubmitButton.click();

			// retrive with with the mark tag & the value -> get the text -> see how that goes
			const t = await $$('div.panel-body.context p').getText();
			const newStr = JSON.stringify(t);
			const count = (newStr.match(/Lorem|lorem|Lörem/gi) || []).length;
			console.log(count);

			await browser.sleep(2000);
			expect(count).toBe(7);
		});

		it('should search for word "lorem" Case Sensitive', async () => {
			const keyword = 'lorem';
			const keywordInputEl = $('#keyword');
			keywordInputEl.clear();
			keywordInputEl.sendKeys(keyword);
	
			const caseSenstiveOption = $('#form-keyword-caseSensitive');
			caseSenstiveOption.click();	
	
			const markSubmitButton = $$('button[type="submit"]').first();
			markSubmitButton.click();

			await browser.sleep(3000);

			// holds the highlighted word
			const el = $$('mark[data-markjs=true]');
			expect(el.isPresent()).toBe(true);
		});


	});	

});