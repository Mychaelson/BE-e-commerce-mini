const { DataTypes } = require("sequelize")

const Cart = (sequelize) => {
    return sequelize.define(
        "Cart",
        {}
    )
}

module.exports = Cart