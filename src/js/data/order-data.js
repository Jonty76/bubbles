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
    total: "£31.00"
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
    total: "£10.30"
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
    total: "£17.30"
  },
  "11235" : {
    name:"Molly Downs",
    restaurant: "Jamies",
    issue: false,
    pickedUp: false,
    delivered: false,
    time: "10.30 am",
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
    total: "£9.45"
  },
  "21265" : {
    name:"Mark Underwood",
    restaurant: "Wagamama",
    issue: false,
    pickedUp: false,
    delivered: false,
    point: "N2",
    time: "10.30 am",
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
    total: "£13.50"
  },
  "65434" : {
    name:"Jessie Knight",
    restaurant: "Caviar House",
    issue: false,
    pickedUp: false,
    delivered: false,
    point: "N2",
    time: "10.30 am",
    details: [
      {
        quantity: "1",
        itemDescription: "Tsarina",
        price: "£29.00"
      },
    ],
    total: "£10.90"
  },
  "75424" : {
    name:"Paul Wheels",
    restaurant: "Comptoir Libanais",
    issue: false,
    pickedUp: false,
    delivered: false,
    point: "N2",
    time: "10.30 am",
    details: [
      {
        quantity: "2",
        itemDescription: "Falafel Wrap",
        price: "£5.45"
      },
    ],
    total: "£10.90"
  }
}

module.exports = {
  orderNumbers: orderNumbers,
  orders: orders
}
