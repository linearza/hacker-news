import Ember from 'ember';

const {
  RSVP
} = Ember;

export default Ember.Route.extend({

  model() {
    return this.store.findAll('topstories');
  },

  setupController(controller, model) {
    this._super(controller, null);
    controller.set('topstories', model);
  }
  
});
