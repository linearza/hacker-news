import DS from 'ember-data';

/*
  https://github.com/HackerNews/API#items
*/

export default DS.Model.extend({

  title: DS.attr('string'),
  type: DS.attr('string'), // job, story, comment, poll, pollopt
  by: DS.attr('string'), // author
  url: DS.attr('string'),
  score: DS.attr('number'),
  time: DS.attr('number'),
  text: DS.attr('string'),

  dead: DS.attr('boolean', { defaultValue: false }),
  deleted: DS.attr('boolean', { defaultValue: false }),

  descendants: DS.attr('number'),

  parent: DS.belongsTo('item', { inverse: 'kids', async: true }),
  kids: DS.hasMany('item', { inverse: 'parent', async: true })
  
});
