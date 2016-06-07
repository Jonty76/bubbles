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

var getMenu = function() {
  var menu = [
      // {
      //   id : getId(),
      //   name :"Waldorf salad thin tartlet, smoked salmon",
      //   foodType : "Pie",
      //   restaurant : "Grain Store",
      //   price: "850"
      // },
      // {
      //   id : getId(),
      //   name :"Dehydrated crisp vegetable, fruit & mushroom salad in prune vinegar dressing & wood pigeon",
      //   foodType : "Salad",
      //   restaurant : "Grain Store",
      //   price: "900"
      // },
      // {
      //   id : getId(),
      //   name :"Dried fava beans & kishk soup, pomegranate molasses",
      //   foodType : "Soup",
      //   restaurant : "Grain Store",
      //   price: "650"
      // },
      // {
      //   id : getId(),
      //   name :"Butternut squash ravioli, mustard apricots, rocket & pumpkin seeds",
      //   foodType : "Pasta",
      //   restaurant : "Grain Store",
      //   price: "750"
      // },
      // {
      //   id : getId(),
      //   name :"Hot seaweed sushi, glazed pak choi, black garlic purée, hake à la plancha, vanilla butter",
      //   foodType : "Sushi",
      //   restaurant: "Grain Store",
      //   price: "750"
      // },
      // {
      //   id : getId(),
      //   name :"Green tomato, miso, chilli & lime glazed grilled octopus",
      //   foodType : "Salad",
      //   restaurant : "Grain Store",
      //   price: "950"
      // },
      // {
      //   id : getId(),
      //   name :"Chilli con veggie, mixed rice, sour cream",
      //   foodType : "Main",
      //   restaurant : "Grain Store",
      //   price: "1200"
      // },
      // {
      //   id : getId(),
      //   name :"Farro wheat, risotto, jerusalem artichokes, leeks & chestnut mushrooms",
      //   foodType : "Main",
      //   restaurant : "Grain Store",
      //   price: "1500"
      // },
      {
        id : getId(),
        name :"Avocado Maki",
        foodType : "Sushi",
        restaurant : "Yo! Sushi",
        price: "200"
      },
      {
        id : getId(),
        name :"California Roll",
        foodType : "Sushi",
        restaurant : "Yo! Sushi",
        price: "360"
      },
      {
        id : getId(),
        name : " Surumi, Wakame & Cucumber",
        foodType : "Salad",
        restaurant : "Yo! Sushi",
        price: "270"
      },
      {
        id : getId(),
        name :"Edamame",
        foodType : "Salad",
        restaurant : "Yo! Sushi",
        price: "200"
      },
      {
        id : getId(),
        name :"Spicy Chicken",
        foodType : "Salad",
        restaurant : "Yo! Sushi",
        price: "410"
      },
      {
        id : getId(),
        name :"Yuzu Cured Salmon",
        foodType : "Salad",
        restaurant : "Yo! Sushi",
        price: "500"
      },
      {
        id : getId(),
        name :"Spicy Tuna Mini Roll",
        foodType : "Sushi",
        restaurant : "Yo! Sushi",
        price: "450"
      },
      {
        id : getId(),
        name :"Egg & Tomato on Rye ",
        foodType : "Sandwich",
        restaurant : "Pret A Manger",
        price: "199"
      },
      {
        id : getId(),
        name :"Scottish Smoked Salmon Granary",
        foodType : "Sandwich",
        restaurant : "Pret A Manger",
        price: "335"
      },
      {
        id : getId(),
        name :"Chicken & Avocado Granary",
        foodType : "Sandwich",
        restaurant : "Pret A Manger",
        price: "335"
      },
      {
        id : getId(),
        name :"Teriyaki Salmon Sushi",
        foodType : "Sushi",
        restaurant : "Pret A Manger",
        price: "450"
      },
      {
        id : getId(),
        name :"Aromatic Asian Chicken Soup",
        foodType : "Soup",
        restaurant : "Pret A Manger",
        price: "350"
      },
      {
        id : getId(),
        name :"Lentil and Quinoa Soup",
        foodType : "Soup",
        restaurant : "Pret A Manger",
        price: "350"
      },
      {
        id : getId(),
        name :"Leek and Potato Soup",
        foodType : "Soup",
        restaurant : "Pret A Manger",
        price: "350"
      },
      {
        id : getId(),
        name :"Tuscan Minestrone Soup",
        foodType : "Soup",
        restaurant : "Wagamama",
        price: "350"
      },
      {
        id : getId(),
        name :"Tuscan Minestrone Soup",
        foodType : "Soup",
        restaurant : "Comptoir Libanais",
        price: "350"
      },
      {
        id : getId(),
        name :"Tuscan Minestrone Soup",
        foodType : "Soup",
        restaurant : "Caviar House",
        price: "350"
      },
      {
        id : getId(),
        name :"Tuscan Minestrone Soup",
        foodType : "Soup",
        restaurant : "Jamies",
        price: "350"
      }
    ];

  resetMenu(menu);
  return menu;
}

module.exports = getMenu;
