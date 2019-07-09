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
   shuffleArray(decklist_player_2)
   console.log(decklist_player_2);
   $('#decklist_down').hide();
  });

  $('#library_player_2').click(function() {
    let cardname = decklist_player_2.shift();
    createCard(cardname).then(img => {
      img.appendTo($("#hand_player_2"));
    });
  })
});

const createCard = (cardname) => {
  return new Promise((resolve, reject) => {
    $.get( 'https://api.scryfall.com/cards/named?exact='+cardname, function(data){
      let imageUrl = data.image_uris.normal;
      if (imageUrl) {
        let cardBox = $("<div class='card_box'>").draggable();
        let img = $('<img class="card">');
        img.attr('src', data.image_uris.normal);
        img.appendTo(cardBox);
        console.log(data.image_uris.normal);
        sleep(50);
        resolve(cardBox);
      } else {
        // TODO: Error message
        reject(Error("It broke"));
      }
    });
  });
};



/**
 * Randomize array element order in-place.
 * Using Durstenfeld shuffle algorithm.
 */
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}
// Use await sleep(ms); to use
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
