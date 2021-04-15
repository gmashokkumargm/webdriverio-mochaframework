const { assert, expect } = require('chai');

class CheckoutCompletePage {
	get thankyouText() {
		return $('//h2[@class="complete-header"]');
	}

	verifyThankyou(text) {
		expect(text).to.equal('THANK YOU FOR YOUR ORDER');
	}
}
module.exports = new CheckoutCompletePage();
