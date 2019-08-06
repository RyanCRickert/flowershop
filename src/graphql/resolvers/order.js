const Order = require("../../models/order");
const Product = require("../../models/product");
const { transformOrder, transformProduct } = require("./merge");

module.exports = {
  orders: async (args, req) => {
    if(!req.isAuth) {
      throw new Error("Unauthenticated.");
    }
    try {
      const orders = await Order.find({ user: req.userId});
      return orders.map(order => {
        return transformOrder(order);
      });
    } catch (err) {
      throw err;
    }
  },
  orderProduct: async (args, req) => {
    if(!req.isAuth) {
      throw new Error("Unauthenticated.");
    }
    const fetchedProduct = await Product.findOne({ _id: args.productId})
    const order = new Order({
      user: req.userId,
      product: fetchedProduct
    });
    const result = await order.save();
    return transformOrder(result);
  },
  cancelOrder: async (args, req) => {
    if(!req.isAuth) {
      throw new Error("Unauthenticated.");
    }
    try {
      const order = await Order.findById(args.orderId).populate("product");
      const product = transformProduct(order.product);
      await Order.deleteOne({ _id: args.orderId });
      return product;
    } catch (err) {
      throw err;
    }
  }
}