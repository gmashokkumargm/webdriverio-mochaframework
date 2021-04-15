const { expect } = require('chai');
const base = require('../Base/base');

class HomePage {
	//PageObjects
	get homepageURL() {
		return getUrl();
	}
	get productTitle() {
		return $('.product_label');
	}
	get productNames() {
		return $$('(//div[@class="inventory_item_name"])');
	}
	get addToCartButton() {
		return $$('.btn_primary.btn_inventory');
	}
	//get addToCartButton() {return $('/../../../div/button')}

	//PageActions
	verifyPageTitle() {
		expect(browser.getTitle()).to.equal('Swag Labs');
	}

	clickAddToCart(productName) {
		for (var i = 0; i < this.productNames.length; i++) {
			if (this.productNames[i].getText() === productName) {
				base.doClick(this.addToCartButton[i]);
			}
		}
	}
}
module.exports = new HomePage();
