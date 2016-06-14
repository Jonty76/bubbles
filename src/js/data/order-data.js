var orderNumbers = ["12753", "19253", "17733", "11235", "21265", "65434", "75424", "76524"]

var orders = {
  "12753" : {
    name:"Lucy Smith",
    restaurant: "Wagamama",
    issue: false,
    pickedUp: false,
    time: "9.00 am",
    point: "N1",
    details: [
      {
        quantity: "1",
        itemDescription: "Dehydrated crisp vegetable, fruit & mushroom salad in prune vinegar dressing & wood pigeon",
        price: "£9.00"
      },
      {
        quantity: "1",
        itemDescription: "Butternut squash ravioli, mustard apricots, rocket & pumpkin seeds",
        price: "£7.00"
      },
      {
        quantity: "2",
        itemDescription: "Hot seaweed sushi, glazed pak choi, black garlic purée, hake à la plancha, vanilla butter",
        price: "£15.00"
      },
    ],
    total: "£31.00"
  },
  "19253" : {
    name:"Frank Jones",
    restaurant: "Pret A Manger",
    issue: false,
    pickedUp: false,
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
    total: "£10.30"
  },
  "17733" : {
    name:"Joe Bloggs",
    restaurant: "Pret A Manger",
    issue: true,
    pickedUp: false,
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
    total: "£8.84"
  },
  "76524" : {
    name:"Emily Knight",
    restaurant: "Yo! Sushi",
    issue: false,
    pickedUp: true,
    time: "9.00 am",
    point: "N1",
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
    total: "£17.30"
  },
  "11235" : {
    name:"Molly Downs",
    restaurant: "Pret A Manger",
    issue: false,
    pickedUp: false
  },
  "21265" : {
    name:"Mark Underwood",
    restaurant: "Pret A Manger",
    issue: false,
    pickedUp: false
  },
  "65434" : {
    name:"Jessie Knight",
    restaurant: "Caviar House",
    issue: false,
    pickedUp: false
  },
  "75424" : {
    orderNo: "75424",
    name:"Paul Wheels",
    restaurant: "Jamies",
    issue: false,
    pickedUp: false
  }
}

module.exports = {
  orderNumbers: orderNumbers,
  orders: orders
}
