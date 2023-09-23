const { Order } = require("../model/order")


exports.fetchOrdersByUser = async (req, res) => {
    const {userID} = req.query
    try {
        const orders = await Order.find({user: userID})
        res.status(200).json(orders)
    } catch (err) {
        res.status(400).json(err)
    }
}

exports.createOrder = async (req, res) => {
    const order = new Order(req.body)
    try {
        const doc = await order.save()
        // const result = await doc.populate('product')
        res.status(201).json(doc)
    } catch(err) {
        res.status(400).json(err)
    }
}

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

exports.deleteOrder = async (req, res) => {
    const { id } = req.params;
    try {
        const order = await Order.findByIdAndDelete(id)
        res.status(200).json(order)
    } catch(err) {
        res.status(400).json(err)
    }
}