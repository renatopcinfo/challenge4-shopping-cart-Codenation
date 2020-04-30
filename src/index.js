const promotions = ['SINGLE LOOK', 'DOUBLE LOOK', 'TRIPLE LOOK', 'FULL LOOK'];

function getShoppingCart(ids, productsList) {
	const categoriesList = [];

	const productsId = productsList.filter(product => ids.includes(product.id));

	const products = productsId.map(product => ({
		name: product.name,
		category: product.category
	}));

	const normalPrice = productsId.reduce((total, amount) => {
		return total + amount.regularPrice
	}, 0);

	productsId.forEach(product => {
		if (!categoriesList.includes(product.category)) {
			categoriesList.push(product.category)
		}
	});

	const promotion = promotions[categoriesList.length - 1];

	const totalDiscount = productsId.reduce((total, product) => {
		const discount = product.promotions.find(promo => promo.looks.includes(promotion));
		if (discount) {
			return total + discount.price;
		} else {
			return total + product.regularPrice;
		}
	}, 0);

	const discountValue = normalPrice - totalDiscount;

	const discountPer = (discountValue * 100) / normalPrice;

	return {
		products,
		promotion,
		totalPrice: totalDiscount.toFixed(2),
		discountValue: discountValue.toFixed(2),
		discount: `${discountPer.toFixed(2)}%`,
	}
}

module.exports = { getShoppingCart };
