
// This uses require.js to structure javascript:
// http://requirejs.org/docs/api.html#define

define(function(require) {
    // Receipt verification (https://github.com/mozilla/receiptverifier)
    require('receiptverifier');

    // Installation button
    require('./install-button');

    // Install the layouts
    require('layouts/layouts');

    // Write your app here.
    var detect = require('./detectapi');

    function formatDate(d) {
      if (!d) return;
      return (d.getMonth()+1) + '/' +
        d.getDate() + '/' +
        d.getFullYear();
    }

    // List view
    var list = $('.list').get(0);

    var enabled = [];
    var disabled = [];
    for (var id in detect) {
      var item = detect[id];
      var isEnabled = (item.run()['output'] == 'Success') ;
      var plusminus = (isEnabled)  ? '+ ' : '- ';
      var api_item = {
        title: plusminus + item.name,
        desc: item.info
      };
      if (isEnabled) {
        enabled.push(api_item);
      } else {
        disabled.push(api_item);
      }
    }

    list.add(enabled);
    list.add(disabled);


    var detail = $('.detail').get(0);
    detail.render = function(item) {
        $('.title', this).html(item.get('title'));
        $('.desc', this).html(item.get('desc'));
        $('.date', this).text(formatDate(item.get('date')));
    };

});
