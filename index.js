var twitter = require('ntwitter');
var tw = new twitter({
  consumer_key: 'UgnbdWiO0z5cw1dgfC2xNd9ep',
  consumer_secret: '94hA0NPFXHsHx4k9i8EXcgRAohyA1Rais58Xq3gXfNx3OdH3lb',
  access_token_key:'265428880-G3vgTR0FwwuBzR0Nb3IzSPKlUVOdS4XnpfTrS6YR',
  access_token_secret:'4Yr6dcxlMaZdGEqU2M7Nicc0DkTy4udlvXMwxQu47eZm0'
});

tw.stream('statuses/filter',{'track':'なう'}, function(stream){
  stream.on('data',function(data){
    console.log(data);
  });
});
