var orderNumbers = ["12753", "19253", "17733", "11235", "21265", "65434", "75424", "76524"]

var orders = {
  "12753" : {
    name:"Lucy Smith",
    restaurant: "Wagamama",
    issue: false,
    pickedUp: false,
    delivered: false,
    time: "9.00 am",
    point: "N1",
    details: [
      {
        quantity: "1",
        itemDescription: "Dehydrated crisp vegetable, fruit & mushroom.",
        price: "£9.00"
      },
      {
        quantity: "1",
        itemDescription: "Butternut squash ravioli, mustard apricots.",
        price: "£7.00"
      },
      {
        quantity: "2",
        itemDescription: "Hot seaweed sushi, glazed pak choi, black garlic purée.",
        price: "£15.00"
      },
    ],
    items: "4",
    total: "£46.00"
  },
  "21265" : {
    name:"Mark Underwood",
    restaurant: "Wagamama",
    issue: false,
    pickedUp: false,
    delivered: false,
    point: "N2",
    time: "9.20 am",
    details: [
      {
        quantity: "1",
        itemDescription: "Yaki Udon",
        price: "£9.50"
      },
      {
        quantity: "1",
        itemDescription: "Mini Yasai Yaki Soba",
        price: "£4.00"
      },
    ],
    items: "2",
    total: "£13.50"
  },
  "19253" : {
    name:"Frank Jones",
    restaurant: "Pret A Manger",
    issue: false,
    pickedUp: false,
    delivered: false,
    time: "9.00 am",
    point: "N1",
    details: [
      {
        quantity: "1",
        itemDescription: "Scottish Smoked Salmon Granary",
        price: "£3.35"
      },
      {
        quantity: "2",
        itemDescription: "Lentil and Quinoa Soup",
        price: "£7.00"
      },
    ],
    items: "3",
    total: "£17.35"
  },
  "17733" : {
    name:"Joe Bloggs",
    restaurant: "Pret A Manger",
    issue: false,
    pickedUp: false,
    delivered: false,
    time: "9.00 am",
    point: "N1",
    details: [
      {
        quantity: "1",
        itemDescription: "Egg & Tomato on Rye",
        price: "£1.99"
      },
      {
        quantity: "1",
        itemDescription: "Chicken & Avocado Granary",
        price: "£3.35"
      },
      {
        quantity: "1",
        itemDescription: "Leek and Potato Soup",
        price: "£3.50"
      },
    ],
    items: "3",
    total: "£8.84"
  },
  "76524" : {
    name:"Emily Knight",
    restaurant: "Yo! Sushi",
    issue: false,
    pickedUp: true,
    delivered: false,
    time: "9.00 am",
    point: "N2",
    details: [
      {
        quantity: "2",
        itemDescription: "Avocado Maki",
        price: "£4.00"
      },
      {
        quantity: "2",
        itemDescription: "California Roll",
        price: "£7.20"
      },
      {
        quantity: "1",
        itemDescription: "Edamame",
        price: "£2.00"
      },
      {
        quantity: "1",
        itemDescription: "Spicy Chicken",
        price: "£4.10"
      },
    ],
    items: "6",
    total: "£28.50"
  },
  "11235" : {
    name:"Molly Downs",
    restaurant: "Jamie's",
    issue: false,
    pickedUp: false,
    delivered: false,
    time: "9.20 am",
    point: "N1",
    details: [
      {
        quantity: "1",
        itemDescription: "Proper Porridge",
        price: "£4.50"
      },
      {
        quantity: "1",
        itemDescription: "Bacon Buttie",
        price: "£4.95"
      },
    ],
    items: "2",
    total: "£9.45"
  },

  "65434" : {
    name:"Jessie Knight",
    restaurant: "Caviar House",
    issue: false,
    pickedUp: false,
    delivered: false,
    point: "N2",
    time: "9.20 am",
    details: [
      {
        quantity: "1",
        itemDescription: "Tsarina",
        price: "£29.00"
      },
    ],
    items: "1",
    total: "£29.00"
  },
  "75424" : {
    name:"Paul Wheels",
    restaurant: "Comptoir Libanais",
    issue: false,
    pickedUp: false,
    delivered: false,
    point: "N2",
    time: "9.20 am",
    details: [
      {
        quantity: "2",
        itemDescription: "Falafel Wrap",
        price: "£5.45"
      },
    ],
    items: "2",
    total: "£10.90"
  }
}

module.exports = {
  orderNumbers: orderNumbers,
  orders: orders
}
