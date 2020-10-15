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

	async inputText(element, text) {
		try {
			element.clear();
			element.sendKeys(text);
		} catch(e) {
			console.log('catch an error', e);
		}	
	}



}


export default new MarkJsConfigurator();