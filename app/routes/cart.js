import Route from '@ember/routing/route';

export default class CartRoute extends Route {
  model() {
    const items = [{ price: 10 }, { price: 5 }, { price: 15 }, { price: 20 }];
    return items;
  }
}
