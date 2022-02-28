// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');


Product.belongsTo(Category, {  // Products belongsTo Category
  foreignKey: 'Category_id'
});

Category.hasMany(Product, {  // Categories have many Products
  foerignKey: 'Category_id'
});

Product.belongsToMany(tag, { // Products belongToMany Tags (through ProductTag)
  through: ProductTag,
  foerignKey: 'Product_id'
}),
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: 'tag_id'
}),

module.exports = {Product, Category, Tag, ProductTag };
