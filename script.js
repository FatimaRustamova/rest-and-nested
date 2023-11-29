const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund', 
    players: [
    
    [
          'Neuer',
          'Pavard',
          'Martinez',
          'Alaba',
          'Davies',
          'Kimmich',
          'Goretzka',
          'Coman',
          'Muller',
          'Gnarby',
          'Lewandowski',
    ], 
    [
    
          'Burki',
          'Schulz',
          'Hummels',
          'Akanji',
          'Hakimi',
          'Weigl',
          'Witsel',
          'Hazard',
          'Brandt',
          'Sancho',
          'Gotze',
    ], 
],
    
      score: '4:0',
      scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
      'Hummels'],
      date: 'Nov 9th, 2037',
      odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    }, 
};

//1.Her komandanin oyunculari ucun ayrica array yaradin: team1 ve team2 adinda. (array destructing)
let [team1, team2] = game.players;
console.log(team1,team2);


//2.Birinci komandanin birinci oyuncusu qapicidir.Onu goalKeeper adli deyisene teyin edin
//diger futbolculari fieldPlayers adli arrayda qalsin (rest operator)
let [goalKeeper, ...fieldPlayers] = team1;
console.log(goalKeeper);
console.log(fieldPlayers);


//3.Butun oyunculari allplayers adli arrayda saxlayin (22nefer) (spread operator)
let allPlayers = [...team1 , ...team2];
console.log(allPlayers);


//4.Oyunda birinci komandada 3 deyisiklik olur, firsFinalPlayer adli arraya ilkin heyeti ve 
//Thiago, Couthino, Perisic -i elave edin
let play = ["Thiago", "Coutinho" , "Perisic"]
let firstFinalPlayer = [...team1, ...play]
console.log(firstFinalPlayer);

//5.odds adli obyektin deyisenlerini team1win, draw, team2win adli deyisene menimsedin 
//(nested object destructing)
let {team1: team1win, x:draw, team2:team2win} = game.odds
console.log(team1win,draw,team2win);


///Emsali az olan komandanin udma ehtimali coxdur.if else ve ya ternary operator yazmadan konsola 
//Birinci komandanin udma ehtimali coxdur ve ya Ikinci komandanin udma ehtimali coxdur
team1win<team2win && console.log("Team1-in udma ehtimali coxdur");
team1win>team2win && console.log("Team2-in udma ehtimali coxdur");