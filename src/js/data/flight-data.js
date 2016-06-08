var flightData = {
  airlineOptions: ["British Airways", "Iberia", "Air Berlin", "Norwegian Air"],
  flightsByAirline: {
    BritishAirways: {
      terminal: "south",
      flightNumbers: ["BA2540", "BA2740", "BA2612"],
      BA2540: {
        Status: "Approved",
        To: "FCO Rome",
        Time: "15:25"
      },
      BA2740: {
        Status: "Approved",
        To: "GVA Geneva",
        Time: "14:45"
      },
      BA2612: {
        Status: "Declined",
        To: "None",
        Time: "None"
      }
    },
    Iberia: {
      terminal: "south",
      flightNumbers: ["IB5660", "IB3717", "IB5855"],
      IB5660: {
        Status: "Approved",
        To: "BCN Barcelona",
        Time: "21:00"
      },
      IB3717: {
        Status: "Approved",
        To: "MAD Madrid",
        Time: "20:15"
      },
      IB5855: {
        Status: "Declined",
        To: "None",
        Time: "None"
      }
    },
    AirBerlin: {
      terminal: "north",
      flightNumbers: ["AB5198", "AB5208", "AB5189"],
      AB5198: {
        Status: "Approved",
        To: "EDI Edinburgh",
        Time: "20:50"
      },
      AB5208: {
        Status: "Approved",
        To: "GLA Glasgow",
        Time: "19:35"
      },
      AB5189: {
        Status: "Declined",
        To: "None",
        Time: "None"
      }
    },
    NorwegianAir: {
      terminal: "north",
      flightNumbers: ["DY7015", "DY4442", "DY1341"],
      DY7015: {
        Status: "Approved",
        To: "GOT Gothenburg Landvetter",
        Time: "20:40"
      },
      DY4442: {
        Status: "Approved",
        To: "JFK John F Kennedy International",
        Time: "17:10"
      },
      DY1341: {
        Status: "Declined",
        To: "None",
        Time: "None"
      }
    }
  }
}

module.exports = flightData;
