
        /* Array to store information
        */


        var quote= ['NASDAQ:GOOGL'];

      /*  $(document).ready(function() {
          $("div#form1").append(
            $("<h3/>").text("Lookup Finance Quote"), $("<form/>"), {
              action: '#'
              method: '#'
            }).append(
              $("<input/>"), {
                type:'text',
                id: 'vquote',
                name:'quote',
                placeholder: 'Your Quote'
              }),
              $("<input/>"), {
                type: 'text',
                id: 'vindex',
                name: 'index',
                placeholder: 'Your Index'
              })
            }

        /* Function to get information
        */
        $(document).ready(function () {
          for (var i = 0; i < quote.length; ++i) {
            $.getJSON('https://www.google.com/finance/info?q=' + quote[i]
            + '&callback=?', function (data) {
              $('#quote').text(data[0].t);
              $('#index').text(data[0].e);
              $('#last_trade_price').text(data[0].l);
              $('#last_trade_size').text(data[0].s);
              $('#change').text(data[0].c);
              $('#change_percent').text(data[0].cp)
            });
          }
        });
