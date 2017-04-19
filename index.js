"use strict"

const stripe = require("stripe")

class Multicolour_Stripe {
  register(multicolour_server) {
    // Create Stripe and set the server.
    this.config = multicolour.get("config").get("stripe")
    this.stripe = stripe(this.config.secret)
    this.server = multicolour_server

    // Register on core.
    multicolour_server.get("host").set("payment", this)
  }

  route() {
    // Get the method map.
    const method_map = require(this.config.method_map || "./method-map.json")

    
  }
}

module.exports = Multicolour_Stripe
