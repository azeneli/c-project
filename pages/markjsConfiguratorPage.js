import BasePage from './basePage';

class MarkJsConfigurator extends BasePage {
	constructor() {
		super();

		this.url = 'https://markjs.io/configurator.html';
		this.pageLoaded = this.isClickable($('div.page-container'));
		this.paragraph = $$('div.panel-body.context p');
		this.keyword = 'lorem';
		this.keywordEl = $('#keyword');
	}

	/*
     * clears input, fill texts in the element that is selected. specifically for this spec
     * @requires both `el` and `text` params supplied
    */ 

	async inputText() {
		try {
			this.keywordEl.clear();
			this.keywordEl.sendKeys(this.keyword);
		} catch(e) {
			return new Error('catch an error', e);
		}	
	}

	/*
     * searches for inputed word to be highlighted
     * @requires `el` supplied
    */ 

	async matchHighlightedWord() {
		const t = await this.paragraph.getText();
		const newStr = JSON.stringify(t);
		const count = (newStr.match(/Lorem|lorem|Lörem/gi) || []).length;
		return count;
	}


}


export default new MarkJsConfigurator();