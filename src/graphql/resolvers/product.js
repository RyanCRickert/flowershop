const Product = require("../../models/product");
const User = require("../../models/user");
const { transformProduct } = require("./merge");

module.exports = {
  products: async () => {
    try {
    const products = await Product.find()
      return products.map(product => {
        return transformProduct(product);
      })
    } catch (err) {
      throw err;
    }
  },
  createProduct: async (args , req) => {
    if(!req.isAuth) {
      throw new Error("Unauthenticated.");
    }
    const product = new Product({
       title: args.productInput.title,
       description: args.productInput.description,
       price: +args.productInput.price,
       date: new Date(args.productInput.date),
       creator: req.userId
    })
    let createdProduct;
    try {
      const result = await product.save()
      createdProduct = transformProduct(result);
      const creator = await User.findById(req.userId);
      if (!creator) {
        throw new Error("User does not exist.")
      }
      creator.createdProducts.push(product)
      await creator.save()
      return createdProduct;
    } catch (err) {
      throw err;
    };
  }
}