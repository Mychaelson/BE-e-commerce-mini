const { DataTypes } = require("sequelize")

const Transaction = (sequelize) => {
    return sequelize.define(
        "Transaction",
        {
           total_price: {
               type: DataTypes.INTEGER,
               allowNull: false
           },
           delivery_cost: {
               type: DataTypes.INTEGER,
               allowNull: false
           }
        }
    )
}

module.exports = Transaction