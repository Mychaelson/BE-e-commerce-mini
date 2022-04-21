const { DataTypes } = require("sequelize")

const Product = (sequelize) => {
    return sequelize.define(
        "Product",
        {
            product_name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            price: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            description: {
                type: DataTypes.STRING,
                allowNull: true
            },
            image_url: {
                type: DataTypes.STRING,
                allowNull: false
            },
            stock: {
                type: DataTypes.INTEGER,
                allowNull: false
            }
        }
    )
}

module.exports = Product