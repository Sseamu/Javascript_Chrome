const quotes = [
    {
        quote: "Dreams come true Without that possibility, nature would not incite us to have them",
        author: "John Updike",
    },
    {
        quote: "Risk! Risk anything! care no more for the opions of others, for those voices.Do the hardest thing on earth for you. Act for yourself. Face the truth.",
        author: "Katherine Mansfield",
    },
    {
        quote: "Whoso neglects learning in his youth, loses the past and is dead for the future",
        author: "Euripides",
    },
    {
        quote: "If you don't risk anything you risk even more",
        author: "Erica Jong",
    },
    {
        quote: "Failure is a detour Not a dead-end street",
        author: "Zig Ziglar",
    },
    {
        quote: "Life is a dream for wise, a game for the fool, a comedy for rich, a tragedy for the poor",
        author: "Sholem Aleichem",
    },
    {
        quote: "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just on more time",
        author: "Thomas Edison",
    },
    {
        quote: "Success is the ability to go from failure to fauilure without losing your enthusiasm",
        author: "Winstom Churchill",
    },
    {
        quote: "Wherever we look upon this earth, the oppotunities take shape within the problems",
        author: "Nelson Rockefeller",
    },
    {
        quote: "Pain is temporary. Quitting lasts forever",
        author: "Lance Edward Armstron",
    },
    {
        quote: "Always do what you are afraid to do",
        author: "Ralph Waldo Emerson",
    },
    {
        quote: "One of the greatest discoveries a man makes, one of his greatest surprises, is to find he can do what he can afraid he couldn't do.",
        author: "Henry Ford",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;