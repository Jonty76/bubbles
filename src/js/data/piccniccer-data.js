var orderNumbers = ["12753", "19253", "17733", "11235", "21265", "65434", "75424", "76524"]

var orders = {
  "12753" : {
    name:"Lucy Smith",
    restaurant: "Wagamama",
    issue: false,
    pickedUp: false,
  },
  "19253" : {
    name:"Frank Jones",
    restaurant: "Wagamama",
    issue: false,
    pickedUp: false
  },
  "17733" : {
    name:"Joe Bloggs",
    restaurant: "Wagamama",
    issue: true,
    pickedUp: false
  },
  "76524" : {
    name:"Emily Knight",
    restaurant: "Wagamama",
    issue: false,
    pickedUp: true
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
