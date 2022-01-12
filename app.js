const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const twitterBtn = document.getElementById('twitter');
const authorText = document.getElementById('author');
const newQuotebtn = document.getElementById('new-quote');




// Get ou API
let apiQuote = [];


//new Quote 

function newQuote() {
    const Quote = apiQuote[Math.floor(Math.random() * apiQuote.length)];
    if (!Quote.author) {
        authorText.textContent = 'Unknown'
    }
    else {
        authorText.textContent = Quote.author;
    }
    if (Quote.text.length > 50) {
        quoteText.classList.add('long-quote')
    }
    else {
        quoteText.classList.remove('long-quote')
    }
    quoteText.textContent = Quote.text;
    
    
}

//Generating quote
async function getQuote() {
    const apiUrl = 'https://type.fit/api/quotes';
    try {
        const response = await fetch(apiUrl);
        apiQuote = await response.json();
        newQuote();
    }
    catch (error) {

    }
}
//Tweet
function tweetQuote() {
    const tweet = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(tweet, '_blank');
}

//EventListener
newQuotebtn.addEventListener('click',newQuote);
twitterBtn.addEventListener('click',tweetQuote);

//Load Function
getQuote();