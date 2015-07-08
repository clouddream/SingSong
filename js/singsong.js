       $(document).ready(function() {
           var cid = "?client_id=6xpvhn3lol38bkoxc9b4p3vs3lgcxs8&callback=?"
           var consume = "https://api.twitch.tv/kraken/streams/"
           var channels = [
               'sing_sing',
               'fwoshy',
               'arise_3012',
               'akromadota',
               'freecodecamp',
               'snithtv',
               'tuckerdota'
           ]
           channels.forEach(function(indivchannel) {
               $.getJSON(consume + indivchannel + cid, function(data) {})
                   .done(function(data) {
                       if (data.stream !== null) {
                           var logo = data.stream.channel.logo
                           console.log(logo)
                           var logoHTML = '<span class="image">'
                           logoHTML += '<a href="http://twitch.tv/' + indivchannel + '">'
                           logoHTML += '<img src="' + logo + '"></a></span>';
                           console.log(logoHTML)
                           //$('#line').html("Online")
                           //
                           var status = data.stream.channel.status
                           if (status.length > 39) {
                               status = status.substring(0, 39)
                               status += "..."
                           }
                           //$('#title').append(data.stream.channel.name)
                           //$('#status').append(status)
                           $('#' + indivchannel).append(logoHTML + data.stream.channel.name + ' <i class="green fa fa-check"></i>')
                               

                       } else {
                           var logoHTMLoff = '<span class="image">'
                           logoHTMLoff += '<a href="http://twitch.tv/' + indivchannel + '">'
                           logoHTMLoff += '<img src="img/offline.jpg"></a></span>'
                           console.log("FUCK " + indivchannel)
                           $("#" + indivchannel).html(logoHTMLoff + indivchannel + ' <i class="red fa fa-exclamation"></i>')




                       }



                   })
           })


       })