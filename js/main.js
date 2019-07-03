$(function () {
  let decklist_player_2 = [];

  $("#submit_decklist_player_2").click(function() {
   let text = $('#decklist_player_2').val();
   let lines = text.split(/\r?\n/);
   for (l of lines) {
     if (l.indexOf('(') != -1) {
        row = l.substr(0, l.indexOf('(')-1);
     } else {
        row = l;
     }
     let qtd = row.substr(0, l.indexOf(' '));
     let cardname = row.substr(l.indexOf(' ')+1);
     let new_cards = Array(parseInt(qtd)).fill(cardname)
     decklist_player_2.push(...new_cards);
     console.log(new_cards);
     console.log(decklist_player_2);

   }
  });

  $('#library').click(function() {
    console.log('Library');
  })
});


// $("#submitDecklistDown").click(function() {
//   let text = $('#decklistDown').val();
//   let lines = text.split(/\r?\n/);
//   let decklist = [];
//   for (l of lines) {
//     row = l.substr(0, l.indexOf('(')-1);
//     decklist.push(row);
//   }
//   cardname = decklist[3];
//   cardname = cardname.substr(cardname.indexOf(' '));
//
//   $.get( 'https://api.scryfall.com/cards/named?exact='+cardname, function(data){
//     var img = $('<img class="hand_img">');
//     img.attr('src', data.image_uris.normal);
//     img.appendTo('#hand');
//     console.log(data.image_uris.normal);
//   });
// });
