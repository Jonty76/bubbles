let getId = (function() {
  let id = 0;
  return function() {
    id += 1;
    return id - 1;
  }
}());

var resetMenu = function(menu) {
  menu.forEach(function(item) {
    item.quantityOrdered = 0;
  });
};

var northMenu = function() {
  var menu = [{
    id: getId(),
    name: "Avocado Maki",
    foodType: "Sushi",
    restaurant: "Yo! Sushi",
    price: "200"
  }, {
    id: getId(),
    name: "California Roll",
    foodType: "Sushi",
    restaurant: "Yo! Sushi",
    price: "360"
  }, {
    id: getId(),
    name: " Surumi, Wakame & Cucumber",
    foodType: "Salad",
    restaurant: "Yo! Sushi",
    price: "270"
  }, {
    id: getId(),
    name: "Edamame",
    foodType: "Salad",
    restaurant: "Yo! Sushi",
    price: "200"
  }, {
    id: getId(),
    name: "Spicy Chicken",
    foodType: "Salad",
    restaurant: "Yo! Sushi",
    price: "410"
  }, {
    id: getId(),
    name: "Yuzu Cured Salmon",
    foodType: "Salad",
    restaurant: "Yo! Sushi",
    price: "500"
  }, {
    id: getId(),
    name: "Spicy Tuna Mini Roll",
    foodType: "Sushi",
    restaurant: "Yo! Sushi",
    price: "450"
  }, {
    id: getId(),
    name: "Egg & Tomato on Rye ",
    foodType: "Sandwich",
    restaurant: "Pret A Manger",
    price: "199"
  }, {
    id: getId(),
    name: "Scottish Smoked Salmon Granary",
    foodType: "Sandwich",
    restaurant: "Pret A Manger",
    price: "335"
  }, {
    id: getId(),
    name: "Chicken & Avocado Granary",
    foodType: "Sandwich",
    restaurant: "Pret A Manger",
    price: "335"
  }, {
    id: getId(),
    name: "Teriyaki Salmon Sushi",
    foodType: "Sushi",
    restaurant: "Pret A Manger",
    price: "450"
  }, {
    id: getId(),
    name: "Aromatic Asian Chicken Soup",
    foodType: "Soup",
    restaurant: "Pret A Manger",
    price: "350"
  }, {
    id: getId(),
    name: "Lentil and Quinoa Soup",
    foodType: "Soup",
    restaurant: "Pret A Manger",
    price: "350"
  }, {
    id: getId(),
    name: "Leek and Potato Soup",
    foodType: "Soup",
    restaurant: "Pret A Manger",
    price: "350"
  }, {
    id: getId(),
    name: "Yaki Udon",
    description: "Udon noodles in curry oil with chicken, prawns, chikuwa, egg, beansprouts, leeks, mushrooms and peppers. garnished with fried shallots, pickled ginger and sesame seeds",
    foodType: "Teppanyaki",
    restaurant: "Wagamama",
    price: "950"
  }, {
    id: getId(),
    name: "Warm chilli chicken salad",
    description: "Stir-fried chicken with red peppers, mangetout, tender stem broccoli and red onion on a bed of baby gem lettuce. dressed in a sweet chilli sauce. garnished with chillies, spring onions and cashew nuts",
    foodType: "Salads",
    restaurant: "Wagamama",
    price: "995"
  }, {
    id: getId(),
    name: "Mini Yasai Yaki Soba",
    description: "Teppan-fried soba noodles with fried tofu, egg, sweetcorn, mangetout, peppers and amai sauce",
    foodType: "Kids",
    restaurant: "Wagamama",
    price: "400"
  }, {
    id: getId(),
    name: "Falafel Wrap",
    description: "Chickpeas, broad beans, coriander, garlic, peppers, tomato, pickled turnip and parsley with tahini sauce",
    foodType: "Wraps & Bread",
    restaurant: "Comptoir Libanais",
    price: "545"
  }, {
    id: getId(),
    name: "Mezze Platter - For Two",
    description: "Baba ghanuj, hommos, tabbouleh, falafel, lentil salad, cheese sambousek, pickles & pita bread",
    foodType: "Mezzes",
    restaurant: "Comptoir Libanais",
    price: "1595"
  }, {
    id: getId(),
    name: "Lamb & Prunes",
    description: "Tender lamb, butternut squash and peas with prunes and roasted almonds",
    foodType: "Tagines",
    restaurant: "Comptoir Libanais",
    price: "1095"
  }, {
    id: getId(),
    name: "Balik No.1",
    description: "A unique and rare salmon from Norwegian waters, smoked and prepared in the original Balik oven",
    foodType: "Smoked Salmon",
    restaurant: "Caviar House",
    price: "4600"
  }, {
    id: getId(),
    name: "Prunier - Tradition - 30gr",
    description: "This caviar’s pure taste, with hints of almond and walnuts, leaves a long lasting-taste on the palate",
    foodType: "Caviar",
    restaurant: "Caviar House",
    price: "6000"
  }, {
    id: getId(),
    name: "Tsarina",
    description: "Blini topped with crème fraîche, served with Balik smoked salmon and 10g of Prunier caviar.",
    foodType: "Classics",
    restaurant: "Caviar House",
    price: "2900"
  }, {
    id: getId(),
    name: "Proper Porridge",
    description: "With either fresh market berries; banana & toasted coconut; or stewed bramble fruit, topped with golden syrup, honey or brown sugar",
    foodType: "Get Your Oats",
    restaurant: "Jamie's",
    price: "450"
  }, {
    id: getId(),
    name: "Bacon Buttie",
    description: "With free-range smoked bacon",
    foodType: "Breakfast Butties",
    restaurant: "Jamie's",
    price: "495"
  }, {
    id: getId(),
    name: "American Pancakes - Blueberry",
    description: "Thick, fluffy pancake stack topped with blueberry compote",
    foodType: "Toast, Pastries & Sweet Things",
    restaurant: "Jamie's",
    price: "6.50"
  }];

  resetMenu(menu);
  return menu;
}

var southMenu = function() {
  var menu = [{
    id: getId(),
    name: "Waldorf salad thin tartlet, smoked salmon",
    foodType: "Pie",
    restaurant: "Grain Store",
    price: "850"
  }, {
    id: getId(),
    name: "Dehydrated crisp vegetable, fruit & mushroom salad in prune vinegar dressing & wood pigeon",
    foodType: "Salad",
    restaurant: "Grain Store",
    price: "900"
  }, {
    id: getId(),
    name: "Dried fava beans & kishk soup, pomegranate molasses",
    foodType: "Soup",
    restaurant: "Grain Store",
    price: "650"
  }, {
    id: getId(),
    name: "Butternut squash ravioli, mustard apricots, rocket & pumpkin seeds",
    foodType: "Pasta",
    restaurant: "Grain Store",
    price: "750"
  }, {
    id: getId(),
    name: "Hot seaweed sushi, glazed pak choi, black garlic purée, hake à la plancha, vanilla butter",
    foodType: "Sushi",
    restaurant: "Grain Store",
    price: "750"
  }, {
    id: getId(),
    name: "Green tomato, miso, chilli & lime glazed grilled octopus",
    foodType: "Salad",
    restaurant: "Grain Store",
    price: "950"
  }, {
    id: getId(),
    name: "Chilli con veggie, mixed rice, sour cream",
    foodType: "Main",
    restaurant: "Grain Store",
    price: "1200"
  }, {
    id: getId(),
    name: "Farro wheat, risotto, jerusalem artichokes, leeks & chestnut mushrooms",
    foodType: "Main",
    restaurant: "Grain Store",
    price: "1500"
  }, {
    id: getId(),
    name: "Egg & Tomato on Rye ",
    foodType: "Sandwich",
    restaurant: "Pret A Manger",
    price: "199"
  }, {
    id: getId(),
    name: "Scottish Smoked Salmon Granary",
    foodType: "Sandwich",
    restaurant: "Pret A Manger",
    price: "335"
  }, {
    id: getId(),
    name: "Chicken & Avocado Granary",
    foodType: "Sandwich",
    restaurant: "Pret A Manger",
    price: "335"
  }, {
    id: getId(),
    name: "Teriyaki Salmon Sushi",
    foodType: "Sushi",
    restaurant: "Pret A Manger",
    price: "450"
  }, {
    id: getId(),
    name: "Aromatic Asian Chicken Soup",
    foodType: "Soup",
    restaurant: "Pret A Manger",
    price: "350"
  }, {
    id: getId(),
    name: "Lentil and Quinoa Soup",
    foodType: "Soup",
    restaurant: "Pret A Manger",
    price: "350"
  }, {
    id: getId(),
    name: "Leek and Potato Soup",
    foodType: "Soup",
    restaurant: "Pret A Manger",
    price: "350"
  }, {
    id: getId(),
    name: "Yaki Udon",
    description: "Udon noodles in curry oil with chicken, prawns, chikuwa, egg, beansprouts, leeks, mushrooms and peppers. garnished with fried shallots, pickled ginger and sesame seeds",
    foodType: "Teppanyaki",
    restaurant: "Wagamama",
    price: "950"
  }, {
    id: getId(),
    name: "Warm chilli chicken salad",
    description: "Stir-fried chicken with red peppers, mangetout, tender stem broccoli and red onion on a bed of baby gem lettuce. dressed in a sweet chilli sauce. garnished with chillies, spring onions and cashew nuts",
    foodType: "Salads",
    restaurant: "Wagamama",
    price: "995"
  }, {
    id: getId(),
    name: "Mini Yasai Yaki Soba",
    description: "Teppan-fried soba noodles with fried tofu, egg, sweetcorn, mangetout, peppers and amai sauce",
    foodType: "Kids",
    restaurant: "Wagamama",
    price: "400"
  }, {
    id: getId(),
    name: "Griddled Buttermilk Pancakes",
    description: "With bananas, strawberries, orange segments, toasted pumpkin seeds & maple syrup",
    foodType: "Breakfast",
    restaurant: "Wonder Tree",
    price: "775"
  }, {
    id: getId(),
    name: "Green Quinoa Salad",
    description: "Kale, baby spinach, quinoa, pomegranate, broccolini florets, avocado, omega rich seeds, honey-mustard & orange dressing",
    foodType: "Salads",
    restaurant: "Wonder Tree",
    price: "1075"
  }, {
    id: getId(),
    name: "Californian Chicken & Avocado Club",
    description: "Grilled herby chicken, avocado, “wonderslaw”, green leaves & aioli verde mayo in crusty ciabatta bap",
    foodType: "Two Handed Burgers",
    restaurant: "Wonder Tree",
    price: "1145"
  }, {
    id: getId(),
    name: "1/4 Chicken Breast - 2 sides",
    description: "Quarter chicken breast, on the bone - choose 2 sides to go with",
    foodType: "On The Bone",
    restaurant: "Nandos",
    price: "760"
  }, {
    id: getId(),
    name: "Portobello Mushroom and Halloumi Wrap - No Sides",
    description: "Chilli Jam and Yogurt Mayonnaise sauce options",
    foodType: "Burgers, Pittas, Wraps",
    restaurant: "Nandos",
    price: "740"
  }, {
    id: getId(),
    name: "Chips - Regular",
    description: "This size included where Sides included in Main Order, e.g. Pitta + 2 Sides",
    foodType: "Sides",
    restaurant: "Nandos",
    price: "240"
  }, {
    id: getId(),
    name: "Balik No.1",
    description: "A unique and rare salmon from Norwegian waters, smoked and prepared in the original Balik oven",
    foodType: "Smoked Salmon",
    restaurant: "Caviar House",
    price: "4600"
  }, {
    id: getId(),
    name: "Prunier - Tradition - 30gr",
    description: "This caviar’s pure taste, with hints of almond and walnuts, leaves a long lasting-taste on the palate",
    foodType: "Caviar",
    restaurant: "Caviar House",
    price: "6000"
  }, {
    id: getId(),
    name: "Tsarina",
    description: "Blini topped with crème fraîche, served with Balik smoked salmon and 10g of Prunier caviar.",
    foodType: "Classics",
    restaurant: "Caviar House",
    price: "2900"
  }];

  resetMenu(menu);
  return menu;
}

module.exports = {
  northMenu: northMenu,
  southMenu: southMenu
}
