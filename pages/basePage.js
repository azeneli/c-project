
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
            return await this.pageLoaded();
        }, this.timeout.xl, 'timeout: waiting for page to load. The url is: ' + this.url);
    }

	async goto() {
		try {
			await browser.get(this.url, this.timeout.xl);
			console.log('working')
			return await this.loaded();
		} catch(e) {
			console.log('catch an error', e);
		}
	}

	// write a function that takes the el and send the keys
	async fillInput(el, text) {
		try {
			el.sendKeys(text);
		} catch(e) {
			console.log('catch an error', e);
		}	
	}

	// use this for clicking el
	async waitAndClick(element) {
        await this.isClickable(element);
        await element.click();
    }


    isClickable(locator) {
        return protractor.ExpectedConditions.elementToBeClickable(locator);
    }


}