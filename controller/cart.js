const { Cart } = require("../model/cart");

// fetching the user cart data
exports.fetchCartByUser = async (req, res) => {
    const { userID } = req.query;
    try {
        const cartItems = await Cart.find({ user: userID }).populate('product'); // populating the product
        res.status(200).json(cartItems);
    } catch (err) {
        res.status(400).json(err);
    }
}

// add to cart function
exports.addToCart = async (req, res) => {
    const cart = new Cart(req.body);
    try {
        const doc = await cart.save();
        const result = await doc.populate('product');
        res.status(201).json(result);
    } catch (err) {
        res.status(400).json(err);
    }
}

// updating cart
exports.updateCart = async (req, res) => {
    const { id } = req.params;

    try {
        const cart = await Cart.findByIdAndUpdate(id, req.body, {
            new: true,
        });
        const doc = await cart.populate('product');
        res.status(200).json(doc);
    } catch (err) {
        res.status(400).json(err);
    }
};

// delete itme from cart
exports.deleteFromCart = async (req, res) => {
    const { id } = req.params;
    try {
        const doc = await Cart.findByIdAndDelete(id);
        res.status(200).json(doc);
    } catch (err) {
        res.status(400).json(err);
    }
}