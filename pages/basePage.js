export default class BasePage {
	constructor() {
        /**
         * wrap this.timeout. (ms) in t-shirt sizes
         */
        this.timeout = {
            'xs': 420,
            's' : 1000,
            'm' : 2000,
            'l' : 5000,
            'xl': 9000,
            'xxl': 15000
        };

	}


	async loaded() {
		return browser.wait(async () => {
			return await.thispageLoaded();
		}, this.timeout.xl, 'timeout: waiting for page to load. Url:' this.url);
	}


	async goto() {
		await browser.get(this.url, this.timeout.xl);
		return await this.loaded();
	}




}