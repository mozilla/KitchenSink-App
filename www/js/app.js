
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
        return (d.getMonth()+1) + '/' +
            d.getDate() + '/' +
            d.getFullYear();
    }

    // List view
    console.log(navigator.mozSms);
    var list = $('.list').get(0);
    for (var id in detect) {
      var item = detect[id];
      var isEnabled = item.run()['output'] == 'Success' ? '+ ' : '- ';
      var api_item = {
        title: isEnabled + item.name,
        desc: item.info
      };
      var item = list.add(api_item);
    }


    var detail = $('.detail').get(0);
    detail.render = function(item) {
        $('.title', this).html(item.get('title'));
        $('.desc', this).html(item.get('desc'));
        $('.date', this).text(formatDate(item.get('date')));
    };

});
