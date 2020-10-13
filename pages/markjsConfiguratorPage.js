import BasePage from './basePage';

class MarkJsConfigurator extends BasePage {
	constructor() {
		super();

		this.url = 'https://markjs.io/configurator.html';
		this.pageLoaded = this.isClickable($('div.page-container'));
	}


}


export default new MarkJsConfigurator();