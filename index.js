let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.famous-person');

const quotes = [{
    quote: "Eighty percent of success is showing up.",
    person: "Woody Allen"
},
{
    quote: "Genius is one percent inspiration and ninety-nine percent perspiration." ,
    person: "Thomas Edison"
},
{
    quote: "He travels the fastest who travels alone.",
    person: "Rudyard Kipling"
},
{
    quote: "I have a dream that my four little children will one day live in a nation where they will not be judged by the color of their skin but by the content of their character.",
    person: "Martin Luther King"
},
{
    quote: "I think therefore I am.",
    person: "Rene Descartes"
},
{
    quote: "Keep your friends close, but your enemies closer.",
    person: "Michael Corleone"
},
{
    quote: "Life is like a box of chocolates. You never know what you're gonna get.",
    person: "Forrest Gump"
},
{
    quote: "A rose by any other name would smell as sweet.",
    person: "William Shakespeare"
},
{
    quote: "Be brave and upright, that God may love thee. Speak the truth always, even if it leads to your death. Safeguard the helpless and do no wrong; that is your oath.",
    person: "King Baldwin IV"
},
{
    quote: "Not all those who wander are lost.",
    person: "J. R. R. Tolkein"
},
{
    quote: "Nothing is certain except for death and taxes.",
    person: "Benjamin Franklin"
},
{
    quote: "Two roads diverged in a wood, and I, I took the one less travelled by, and that has made all the difference.",
    person: "Robert Frost"
},
{
    quote: "Whatever you are, be a good one.",
    person: "Abraham Lincoln"
}
]

btn.addEventListener('click', function(){
       let random = Math.floor(Math.random() * quotes.length);

       quote.innerText = quotes[random].quote;
       person.innerText = quotes[random].person;
})