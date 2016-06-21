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
    name: "Salmon & Yuzu Tartar",
    description: "Salmon, yuzu tobiko, salmon keta roe tartar, coriander dressing",
    foodType: "Sashimi",
    restaurant: "Yo! Sushi",
    price: "600"
  }, {
    id: getId(),
    name: "California Roll",
    description: "2 pieces. Surumi, avocado, mayo, sesame",
    foodType: "Rolls",
    restaurant: "Yo! Sushi",
    price: "360"
  }, {
    id: getId(),
    name: "Nigiri Selection",
    description: "1 of each. Yellowfin tuna, salmon, prawn, wasabi",
    foodType: "Nigiri",
    restaurant: "Yo! Sushi",
    price: "450"
  }, {
    id: getId(),
    name: "Avocado & Egg on Rye",
    description: "Layers of freshly sliced avocado, free-range eggs and pink pickled onions on top of our German-style rye bread",
    foodType: "Sandwiches",
    restaurant: "Pret A Manger",
    price: "450"
  }, {
    id: getId(),
    name: "Pole & Line Caught Tuna & Rocket",
    description: "Skipjack tuna mayo mashed with spring onions, chopped capers, a touch of anchovy paste and a squeeze of lemon, on malted bread",
    foodType: "Sandwiches",
    restaurant: "Pret A Manger",
    price: "475"
  }, {
    id: getId(),
    name: "Chef's Italian Chicken Salad",
    description: "Caesar dressed chicken with beautiful Spanish roasted red peppers, kalamata olives and a handful of toasted pistachios",
    foodType: "Specials",
    restaurant: "Pret A Manger",
    price: "425"
  }, {
    id: getId(),
    name: "Yaki Udon",
    description: "Udon noodles in curry oil with chicken, prawns, chikuwa, egg, beansprouts, leeks, mushrooms and peppers. garnished with fried shallots, pickled ginger and sesame seeds",
    foodType: "Teppanyaki",
    restaurant: "Wagamama",
    price: "950"
  }, {
    id: getId(),
    name: "Warm Chilli Chicken Salad",
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
    price: "650"
  }];

  resetMenu(menu);
  return menu;
}

var southMenu = function() {
  var menu = [{
    id: getId(),
    name: "A Bowl of Superfood",
    description: "Quinoa, Beluga lentils, avocado, baby spinach, raw apple, pumpkin seeds, crumbled goat's feta",
    foodType: "Salads",
    restaurant: "Grain Store",
    price: "1200"
  }, {
    id: getId(),
    name: "Wild Mushroom and Truffle Burger",
    description: "Chicory, apple and hazelnut salad, milk bun",
    foodType: "Homemade Burgers",
    restaurant: "Grain Store",
    price: "1300"
  }, {
    id: getId(),
    name: "Smoked Haddock Kedgeree",
    description: "With mango chutney",
    foodType: "Specials",
    restaurant: "Grain Store",
    price: "1150"
  }, {
    id: getId(),
    name: "Avocado & Egg on Rye",
    description: "Layers of freshly sliced avocado, free-range eggs and pink pickled onions on top of our German-style rye bread",
    foodType: "Sandwiches",
    restaurant: "Pret A Manger",
    price: "450"
  }, {
    id: getId(),
    name: "Pole & Line Caught Tuna & Rocket",
    description: "Skipjack tuna mayo mashed with spring onions, chopped capers, a touch of anchovy paste and a squeeze of lemon, on malted bread",
    foodType: "Sandwiches",
    restaurant: "Pret A Manger",
    price: "475"
  }, {
    id: getId(),
    name: "Chef's Italian Chicken Salad",
    description: "Caesar dressed chicken with beautiful Spanish roasted red peppers, kalamata olives and a handful of toasted pistachios",
    foodType: "Specials",
    restaurant: "Pret A Manger",
    price: "425"
  }, {
    id: getId(),
    name: "Yaki Udon",
    description: "Udon noodles in curry oil with chicken, prawns, chikuwa, egg, beansprouts, leeks, mushrooms and peppers. garnished with fried shallots, pickled ginger and sesame seeds",
    foodType: "Teppanyaki",
    restaurant: "Wagamama",
    price: "950"
  }, {
    id: getId(),
    name: "Warm Chilli Chicken Salad",
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
    restaurant: "Nando's",
    price: "760"
  }, {
    id: getId(),
    name: "Portobello Mushroom and Halloumi Wrap - No Sides",
    description: "Chilli Jam and Yogurt Mayonnaise sauce options",
    foodType: "Burgers, Pittas, Wraps",
    restaurant: "Nando's",
    price: "740"
  }, {
    id: getId(),
    name: "Chips - Regular",
    description: "This size included where Sides included in Main Order, e.g. Pitta + 2 Sides",
    foodType: "Sides",
    restaurant: "Nando's",
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
