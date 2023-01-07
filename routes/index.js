var express = require("express");
var router = express.Router();

/* GET home page. */

let players = [
  {
    link:"https://www.premierleague.com/players/2250/Scott-Carson/overview",
             image:"https://resources.premierleague.com/premierleague/photos/players/250x250/p17601.png",
            jrsnum: "33",
            name: "Scott Carson",
            position:"Goalkeeper",
            Nationality:"England",
            Appearances:"0",
            Clean:"0",
                 
},{
    link:"https://www.premierleague.com/players/47133/Stefan-Ortega/overview",
             image:"https://resources.premierleague.com/premierleague/photos/players/250x250/p88248.png",
            jrsnum: "18",
            name: "Stefan Ortega",
            position:"Goalkeeper",
            Nationality:"Germany",
            Appearances:"0",
            Clean:"0",
                 
},{
    link:"https://www.premierleague.com/players/3955/Kyle-Walker/overview",
             image:"https://resources.premierleague.com/premierleague/photos/players/250x250/p58621.png",
            jrsnum: "2",
            name: "Kyle Walker",
            position:"Defender",
            Nationality:"England",
            Appearances:"7",
            Clean:"2",
                Goals:"0",
},{
    link:"https://www.premierleague.com/players/16431/R%C3%BAben-Dias/overview",
             image:"https://resources.premierleague.com/premierleague/photos/players/250x250/p171314.png",
            jrsnum: "3",
            name: "Rúben Dias",
            position:"Defender",
            Nationality:"Portugal",
            Appearances:"12",
            Clean:"4",
                Goals:"0",
},{
    link:"https://www.premierleague.com/players/4505/John-Stones/overview",
             image:"https://resources.premierleague.com/premierleague/photos/players/250x250/p97299.png",
            jrsnum: "5",
            name: "John Stones",
            position:"Defender",
            Nationality:"England",
            Appearances:"11",
            Clean:"2",
                Goals:"0",
},{
    link:"https://www.premierleague.com/players/4499/Nathan-Ak%C3%A9/overview",
             image:"https://resources.premierleague.com/premierleague/photos/players/250x250/p126184.png",
            jrsnum: "6",
            name: "Nathan Aké",
            position:"Defender",
            Nationality:"Netherlands",
            Appearances:"10",
            Clean:"3",
                Goals:"0",
},{
    link:"https://www.premierleague.com/players/11044/Aymeric-Laporte/overview",
             image:"https://resources.premierleague.com/premierleague/photos/players/250x250/p146941.png",
            jrsnum: "14",
            name: "Aymeric Laporte",
            position:"Defender",
            Nationality:"Spain",
            Appearances:"4",
            Clean:"1",
                Goals:"0",
},{
    link:"https://www.premierleague.com/players/5051/Jo%C3%A3o-Cancelo/overview",
             image:"https://resources.premierleague.com/premierleague/photos/players/250x250/p121145.png",
            jrsnum: "7",
            name: "João Cancelo",
            position:"Defender",
            Nationality:"Portugal",
            Appearances:"15",
            Clean:"4",
                Goals:"2",
},{
    link:"https://www.premierleague.com/players/48690/Josh-Wilson-Esbrand/overview",
             image:"https://resources.premierleague.com/premierleague/photos/players/250x250/p447880.png",
            jrsnum: "97",
            name: "Josh Wilson-Esbrand",
            position:"Defender",
            Nationality:"England",
            Appearances:"0",
            Clean:"0",
                Goals:"0",
},{
    link:"https://www.premierleague.com/players/99281/Rico-Lewis/overview",
             image:"https://resources.premierleague.com/premierleague/photos/players/250x250/p477064.png",
            jrsnum: "82",
            name: "Rico Lewis",
            position:"Defender",
            Nationality:"England",
            Appearances:"5",
            Clean:"0",
                Goals:"0",
},{
    link:"https://www.premierleague.com/players/15656/Manuel-Akanji/overview",
             image:"https://resources.premierleague.com/premierleague/photos/players/250x250/p211975.png",
            jrsnum: "25",
            name: "Manuel Akanji",
            position:"Defender",
            Nationality:"Switzerland",
            Appearances:"10",
            Clean:"2",
                Goals:"0",
},{
    link:"https://www.premierleague.com/players/5101/Ilkay-G%C3%BCndogan/overview",
             image:"https://resources.premierleague.com/premierleague/photos/players/250x250/p59859.png",
            jrsnum: "8",
            name: "Ilkay Gündogan",
            position:"Midfielder",
            Nationality:"Germany",
            Appearances:"14",
            Goals:"2",
              Assists:"2",
                 
},{
    link:"https://www.premierleague.com/players/4260/Jack-Grealish/overview",
             image:"https://resources.premierleague.com/premierleague/photos/players/250x250/p114283.png",
            jrsnum: "10",
            name: "Jack Grealish",
            position:"Midfielder",
            Nationality:"England",
            Appearances:"10",
            Goals:"1",
              Assists:"2",
                 
},{
    link:"https://www.premierleague.com/players/16286/Rodri/overview",
             image:"https://resources.premierleague.com/premierleague/photos/players/250x250/p220566.png",
            jrsnum: "16",
            name: "Rodri",
            position:"Midfielder",
            Nationality:"Spain",
            Appearances:"15",
            Goals:"1",
              Assists:"3",
                 
},{
    link:"https://www.premierleague.com/players/4288/Kevin-De-Bruyne/overview",
             image:"https://resources.premierleague.com/premierleague/photos/players/250x250/p61366.png",
            jrsnum: "17",
            name: "Kevin De Bruyne",
            position:"Midfielder",
            Nationality:"Belgium",
            Appearances:"16",
            Goals:"3",
              Assists:"9",
                 
},{
    link:"https://www.premierleague.com/players/5067/Bernardo-Silva/overview",
             image:"https://resources.premierleague.com/premierleague/photos/players/250x250/p165809.png",
            jrsnum: "20",
            name: "Bernardo Silva",
            position:"Midfielder",
            Nationality:"Portugal",
            Appearances:"15",
            Goals:"2",
              Assists:"5",
                 
},{
    link:"https://www.premierleague.com/players/14805/Phil-Foden/overview",
             image:"https://resources.premierleague.com/premierleague/photos/players/250x250/p209244.png",
            jrsnum: "47",
            name: "Phil Foden",
            position:"Midfielder",
            Nationality:"England",
            Appearances:"16",
            Goals:"7",
              Assists:"3",
                 
},{
    link:"https://www.premierleague.com/players/49293/Cole-Palmer/overview",
             image:"https://resources.premierleague.com/premierleague/photos/players/250x250/p244851.png",
            jrsnum: "80",
            name: "Cole Palmer",
            position:"Midfielder",
            Nationality:"England",
            Appearances:"8",
            Goals:"0",
              Assists:"0",
                 
},{
    link:"https://www.premierleague.com/players/10768/Kalvin-Phillips/overview",
             image:"https://resources.premierleague.com/premierleague/photos/players/250x250/p155405.png",
            jrsnum: "4",
            name: "Kalvin Phillips",
            position:"Midfielder",
            Nationality:"England",
            Appearances:"1",
            Goals:"0",
              Assists:"0",
                 
},{
    link:"https://www.premierleague.com/players/21748/Yangel-Herrera/overview",
             image:"https://resources.premierleague.com/premierleague/photos/players/250x250/Photo-Missing.png",
            jrsnum: "-",
            name: "Yangel Herrera",
            position:"Midfielder",
            Nationality:"Venezuela",
            Appearances:"0",
            Goals:"0",
              Assists:"0",
                 
            },{
                link:"https://www.premierleague.com/players/49139/Sergio-G%C3%B3mez/overview",
             image:"https://resources.premierleague.com/premierleague/photos/players/250x250/p437468.png",
            jrsnum: "21",
            name: "Sergio Gómez",
            position:"Midfielder",
            Nationality:"Spain",
            Appearances:"5",
            Goals:"0",
              Assists:"1",
                 
            },{
                link:"https://www.premierleague.com/players/53076/Alex-Robertson/overview",
             image:"https://resources.premierleague.com/premierleague/photos/players/250x250/p434043.png",
            jrsnum: "93",
            name: "Alex Robertson",
            position:"Midfielder",
            Nationality:"England",
            Appearances:"0",
            Goals:"0",
              Assists:"0",
                 
            },{
                link:"https://www.premierleague.com/players/8983/Riyad-Mahrez/overview",
             image:"https://resources.premierleague.com/premierleague/photos/players/250x250/p103025.png",
            jrsnum: "26",
            name: "Riyad Mahrez",
            position:"Forward",
            Nationality:"Algeria",
            Appearances:"11",
            Goals:"1",
              Assists:"1",
                 
            },{
                link:"https://www.premierleague.com/players/65970/Erling-Haaland/overview",
             image:"https://resources.premierleague.com/premierleague/photos/players/250x250/p223094.png",
            jrsnum: "9",
            name: "Erling Haaland",
            position:"Forward",
            Nationality:"Norway",
            Appearances:"15",
            Goals:"21",
              Assists:"3",
                 
            },{
                link:"https://www.premierleague.com/players/52723/Juli%C3%A1n-%C3%81lvarez/overview",
             image:"https://resources.premierleague.com/premierleague/photos/players/250x250/p461358.png",
            jrsnum: "19",
            name: "Julián Álvarez",
            position:"Forward",
            Nationality:"Argentina",
            Appearances:"13",
            Goals:"3",
              Assists:"0",
            },
];
router.get("/", function (req, res) {
  res.render("index", { players });
});
router.get("/playerslist", function (req, res) {
  res.render("playerslist", { players });
});
router.get("/smalldetails", function (req, res) {
  res.render("shortinfo", { players });
});
module.exports = router;
