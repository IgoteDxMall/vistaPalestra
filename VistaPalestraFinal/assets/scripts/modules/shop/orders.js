const orders = [];

class Order {
  constructor(id, userEmail, orderDate, orderTotal, orderStatus, orderItems) {
    this.id = id;
    this.userEmail = userEmail;
    this.orderDate = orderDate;
    this.orderTotal = orderTotal;
    this.orderStatus = orderStatus;
    this.orderItems = orderItems;
  }
}
function addOrder(order) {
  const dateNow = new Date();
  orders.push(
    new Order(
      order.id,
      order.email,
      dateNow,
      order.total,
      "pendente",
      order.cart
    )
  );

  window.orders = orders;
  window.localStorage.setItem("orders", JSON.stringify(orders));
}
function getOrders() {
  window.localStorage.setItem("orders", JSON.stringify(orders));
  return orders;
}


export { orders, addOrder, getOrders };
window.getOrders = getOrders;
window.addOrder = addOrder;
