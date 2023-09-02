import Route from '@ember/routing/route';

export default class CartRoute extends Route {
  model() {
    const items = [{ price: 10 }, { price: 5 }, { price: 15 }, { price: 20 }];
    return items;
  }

  // override the setupController hook to set the subtotal, discount, and total properties on the controller:
  // setupController(controller, model) {
  //   super.setupController(controller, model);
  //   const subtotal = model.reduce((acc, item) => {
  //     return acc + item.price;
  //   }, 0);
  //   controller.set(
  //     'subtotal',
  //     subtotal
  //   )
  // };

}
