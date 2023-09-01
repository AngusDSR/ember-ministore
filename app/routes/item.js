import Route from '@ember/routing/route';

export default class ItemRoute extends Route {
  // we add this within the route file to tell it to use the item
  // params from the url to find the correct item
  model(params) {
    // This is the model hook in an Ember.js route.
    const { item_id } = params;
    // This is generating an item id from the url - no true data here
    return item_id;
  }
}
