const DataLoader = require("dataloader");

const Product = require("../../models/product");
const User = require("../../models/user");
const { dateToString } = require("../../helpers/date");

const productLoader = new DataLoader(productIds => {
  return products(productIds);
});

const userLoader = new DataLoader(userIds => {
  return User.find({ _id: { $in: userIds } });
});

const products = async productIds => {
  try {
  const products = await Product.find({ _id: { $in: productIds } });
  products.sort((a,b) => {
    return productIds.indexOf(a._id.toString()) - productIds.indexOf(a._id.toString());
  })
    return products.map(product => {
      return transformProduct(product);
    });
    } catch (err){
      throw err;
    }
}

const singleProduct = async productId => {
  try {
    const product = await productLoader.load(productId.toString());
    return product;
  } catch (err) {
    throw err;
  }
}

const user = async userId => {
  try {
  const user = await userLoader.load(userId.toString());
    return {
      ...user._doc,
      _id: user.id,
      createdProducts: () => productLoader.loadMany(user._doc.createdProducts)
    }
  } catch (err) {
    throw err;
  }
}

const transformProduct = product => {
  return {
    ...product._doc,
    _id: product.id
  }
}

const transformOrder = order => {
  return {
    ...order._doc,
    _id: order.id,
    user: user.bind(this, order._doc.user),
    product: singleProduct.bind(this, order._doc.product),
    createdAt: dateToString(order._doc.createdAt),
    updatedAt: dateToString(order._doc.updatedAt)
  }
}

//exports.products = products;
//exports.singleProduct = singleProduct;
//exports.user = user;
exports.transformProduct = transformProduct;
exports.transformOrder = transformOrder;