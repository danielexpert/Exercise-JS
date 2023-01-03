function generate() {
    var quotes = {
    "- Jules Renard" : '"The truly free man is the one who can turn down an invitation to dinner without giving an excuse."',
    "- Albert Einstein" : '"Our task must be to free ourselves... by widening our circle of compassion to embrace all living creatures and the whole of nature and its beauty."',
    "- Candace Bushnell"  : '"Maybe some women arent meant to be tamed. Maybe they just need to run free until they find someone just as wild to run with them"',
    "- C.S Lewis" : '"I was not born to be free---I was born to adore and obey."'
  }

  var authors = Object.keys(quotes);

  var author = authors[Math.floor(Math.random() *
  authors.length)]

 var quote = quotes[author];

 document.getElementById("quote").innerHTML = 
 quote;
 document.getElementById("author").innerHTML = 
 author;


}