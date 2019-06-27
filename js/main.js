$(function () {
  $("#submitDecklistDown").click(function() {
    let text = $('#decklistDown').val();
    let lines = text.split(/\r?\n/);
    let decklist = [];
    for (l of lines) {
      row = l.substr(0, l.indexOf('(')-1);
      decklist.push(row);
    }
    cardname = decklist[3];
    cardname = cardname.substr(cardname.indexOf(' '));

    $.get( 'https://api.scryfall.com/cards/named?exact='+cardname, function(data){
      var img = $('<img class="hand_img">');
      img.attr('src', data.image_uris.normal);
      img.appendTo('#hand');
      console.log(data.image_uris.normal);
    });
  });

  $('#library').click(function() {
    console.log('Library');
  })
});
