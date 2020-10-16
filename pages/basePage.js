
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

    /**
     * wait and verify that a page is loaded
     * @returns {promise}
     * @requires a page to include `pageLoaded` method
     */

    async loaded() {
        return browser.wait(async () => {
            return await this.pageLoaded();
        }, this.timeout.xl, 'timeout: waiting for page to load. The url is: ' + this.url);
    }

    /**
     * navigate to a page via it's `url` var
     * and verify/wait via loaded()
     * @requires page have both `url` and `pageLoaded` properties
     */

	async goto() {
		try {
			await browser.get(this.url, this.timeout.xl);
			return await this.loaded();
		} catch(e) {
			return new Error('catch an error', e);
		}
	}

    /**
     * fill texts in the element that is selected
     * @requires both `el` and `text` params supplied
     */
	async fillInput(el, text) {
		try {
			await el.sendKeys(text);
		} catch(e) {
			return new Error('catch an error', e);
		}	
	}

	/**
     * wait and then click an element
     * @param  {obj} element
     */
	async waitAndClick(element) {
        await this.isClickable(element);
        await element.click();
    }

    /**
     * Wrapper(s) for expected conditions
     * @returns {ExpectedCondition}
     */

    isClickable(locator) {
        return protractor.ExpectedConditions.elementToBeClickable(locator);
    }


}