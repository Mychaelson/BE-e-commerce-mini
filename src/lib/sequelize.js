const { Sequelize } = require("sequelize");
const mysqlConfig = require("../configs/database");

const sequelize = new Sequelize({
  username: mysqlConfig.MYSQL_USERNAME,
  password: mysqlConfig.MYSQL_PASSWORD,
  database: mysqlConfig.MYSQL_DB_NAME,
  port: 3306,
  dialect: "mysql",
  logging: false,
});

const User = require("../models/user")(sequelize);
const Product = require("../models/product")(sequelize);
const Cart = require("../models/cart")(sequelize);
const Transaction = require("../models/transaction")(sequelize);
const TransactionItem = require("../models/transaction_item")(sequelize);

// ASSOCIATIONS

// USER TO CART (1 : M)
User.hasMany(Cart, { foreignKey: "user_id" });
Cart.belongsTo(User, { foreignKey: "user_id" });

// PORDUCT TO CART (1 : M)
Product.hasMany(Cart, { foreignKey: "product_id" });
Cart.belongsTo(Product, { foreignKey: "product_id" });

// USER TO TRANSACTION (1:M)
User.hasMany(Transaction, { foreignKey: "user_id" });
Transaction.belongsTo(User, { foreignKey: "user_id" });

// TRANSACTION TO TRANSACTION ITEM (1:M)
Transaction.hasMany(TransactionItem, { foreignKey: "transaction_id" });
TransactionItem.belongsTo(Transaction, { foreignKey: "transaction_id" });

module.exports = {
  sequelize,
  User,
  Product,
  Cart,
  Transaction,
  TransactionItem,
};
