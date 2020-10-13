import BasePage from './basePage';

class VueFromPage extends BasePage {
	constructor() {
		super();

		this.url = 'https://teroauralinna.github.io/vue-demo-form/';
		this.pageLoaded = this.isClickable($('#app'));
	}


}


export default new VueFromPage();