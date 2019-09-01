/******************************************
Treehouse FSJS Techdegree:
Project 1 - Random Quote Generator
******************************************/

const quotes = [
  {
    quote: 'Simplicity is the ultimate sophistication.',
    source: 'Leonardo da Vinci',
    tags: 'science'
  },
  {
    quote: 'Divide each difficulty into as many parts as is feasible and necessary to resolve it.',
    source: 'Rene Descartes'
  },
  {
    quote: 'It is good to dream, but it is better to dream and work. Faith is mighty, but action with faith is mightier. Desiring is helpful, but work and desire are invincible.',
    source: 'Thomas Robert Gaines',
    tags: 'life'
  },
  {
    quote: 'If ye have faith as a grain of mustard seed, nothing shall be impossible unto you.',
    source: 'Matthew 17:20'
  },
  {
    quote: 'You are never too old to set another goal or to dream a NEW DREAM.',
    source: 'C.S. Lewis',
    citation: 'Chicken Soup for the Soul',
    year: '1993',
    tags: 'philosophy'    
  }
];

let currentQuote = -1;

/**
 * Get random number
 * @param {Number} maxNumber 
 */
function getRandomNumber(maxNumber){
  return Math.floor(Math.random() * maxNumber);
}

/**
 * Get random quote from quotes array
 * @param {Array} quotes 
 */
function getRandomQuote(quotes){
  let randomNumber = null;

  // get random number
  // check if random quote is already displayed on screen
  do {
    randomNumber = getRandomNumber(quotes.length);
  } while(isQuoteDisplayed(randomNumber));

  // set current quote id
  currentQuote = randomNumber;

  // select random quote from quotes array
  const randomQuote = quotes[randomNumber];
  
  // return it
  return randomQuote;
}

/**
 * Check if selected quote is already displayed on screen
 * @param {Number} quoteNumber 
 */
function isQuoteDisplayed(quoteNumber){
  if(quoteNumber === currentQuote){
    return true;
  }
  return false;
}

/**
 * Get random color
 */
function getRandomColor(){
  return `rgb(${getRandomNumber(256)}, ${getRandomNumber(256)}, ${getRandomNumber(256)})`;
}

/**
 * Display quote on page
 */
function printQuote(){
  // generate random quote
  let randomQuote = getRandomQuote(quotes);
  
  // create quote HTML
  let displayedQuote = '';

  displayedQuote += `<p class="quote">${randomQuote.quote}</p>`;
  displayedQuote += `<p class="source">${randomQuote.source}`;
  
  if(randomQuote.citation){
    displayedQuote += `<span class="citation">${randomQuote.citation}</span>`;
  }
  if(randomQuote.year){
    displayedQuote += `<span class="year">${randomQuote.year}</span>`;
  } 
  if(randomQuote.tags){
    displayedQuote += `<span class="tags">${randomQuote.tags}</span>`;
  }    
  displayedQuote += `</p>`;

  // add quote to page
  document.querySelector('#quote-box').innerHTML = displayedQuote;

  // change page background to random color
  document.querySelector('body').style.background = getRandomColor();
}

// Change quote on 'loadQuote' button click
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// Auto display quotes with delay of 3000ms
setInterval(printQuote, 3000);

// Display first random quote
printQuote();