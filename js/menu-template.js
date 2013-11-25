function pizzaDisplay(menu) {
	var idx;
	var pizza;
	var template;
	var meatPizzaMenu;
	var vegPizzaMenu;
	var instance;

	template = $('.template-pizza');
	meatPizzaMenu = $('.meat-pizza-menu');
	vegPizzaMenu = $('.veg-pizza-menu');
	meatPizzaMenu.empty();
	vegPizzaMenu.empty();

	for (idx = 0; idx < com.dawgpizza.menu.pizzas.length; ++idx) {
	    instance = template.clone();
	    pizza = com.dawgpizza.menu.pizzas[idx];
	    instance.find('.name').html(pizza.name);
	    instance.find('.description').html(pizza.description);
	    instance.find('.small-price').html("$" + pizza.prices[0] + "/");
	    instance.find('.medium-price').html("$" + pizza.prices[1] + "/");
	    instance.find('.large-price').html("$" + pizza.prices[2]);
	    if (pizza.vegetarian) {
	    	vegPizzaMenu.append(instance);
	    }
	    else {
	    	meatPizzaMenu.append(instance);
	    }

	    //pizza.name = name of pizza
	    //pizza.description = description of pizza
	    //pizza.prices = array of three numbers, which are prices for small, medium, and large
	    //pizza.prices[0] = price for small
	    //pizza.prices[1] = price for medium
	    //pizza.prices[2] = price for large

	} //for each pizza
}

function drinkDisplay(menu) {
	var idx;
	var drink;
	var template;
	var drinkMenu;
	var instance;

	template = $('.template-drink');
	drinkMenu = $('.drink-menu');
	drinkMenu.empty();

	for (idx = 0; idx < com.dawgpizza.menu.drinks.length; ++idx) {
		instance = template.clone();
	    drink = com.dawgpizza.menu.drinks[idx];
	    instance.find('.name').html(drink.name);
	    instance.find('.price').html("$" + drink.price);
	    drinkMenu.append(instance);

	    //drink.name = name of drink
	    //drink.price = price of drink

	} //for each drink
}

function dessertDisplay(menu) {
	var idx;
	var dessert;
	var template;
	var dessertMenu;
	var instance;

	template = $('.template-dessert');
	dessertMenu = $('.dessert-menu');
	dessertMenu.empty();

	for (idx = 0; idx < com.dawgpizza.menu.desserts.length; ++idx) {
		instance = template.clone();
	    dessert = com.dawgpizza.menu.desserts[idx];
	    instance.find('.name').html(dessert.name);
	    instance.find('.price').html("$" + dessert.price);
	    dessertMenu.append(instance);
	}
}

$(function() {
	pizzaDisplay(com.dawgpizza.menu);
	drinkDisplay(com.dawgpizza.menu);
	dessertDisplay(com.dawgpizza.menu);
});