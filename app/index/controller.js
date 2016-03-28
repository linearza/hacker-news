import Ember from 'ember';

const {
  computed
} = Ember;

export default Ember.Controller.extend({
  topstories: [],

  page: 1,
  itemsPerPage: 50,

  resultsForPage: computed('topstories.[]', 'page', 'itemsPerPage', function() {
    let page = parseInt(this.get('page'), 10);
    let start = Math.max(0, (page - 1) * this.get('itemsPerPage'));
    let end = Math.min(start + this.get('itemsPerPage'), this.get('topstories.length'));
    return this.get('topstories').slice(start, end);
  }),
});
