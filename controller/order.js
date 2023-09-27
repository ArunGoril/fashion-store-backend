const { Order } = require("../model/order");

// fetching user orders
exports.fetchOrdersByUser = async (req, res) => {
    const { userID } = req.query;
    try {
        const orders = await Order.find({ user: userID })
        res.status(200).json(orders);
    } catch (err) {
        res.status(400).json(err);
    }
}

// creating user's new order
exports.createOrder = async (req, res) => {
    const order = new Order(req.body);
    try {
        const doc = await order.save();
        res.status(201).json(doc);
    } catch (err) {
        res.status(400).json(err);
    }
}

// order update -- Admin
exports.updateOrder = async (req, res) => {
    const { id } = req.params;

    try {
        const order = await Order.findByIdAndUpdate(id, req.body, {
            new: true,
        });
        res.status(200).json(order);
    } catch (err) {
        res.status(400).json(err);
    }
};


// cart delete -- Admin
exports.deleteOrder = async (req, res) => {
    const { id } = req.params;
    try {
        const order = await Order.findByIdAndDelete(id);
        res.status(200).json(order);
    } catch (err) {
        res.status(400).json(err);
    }
}