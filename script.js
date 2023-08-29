const qouteText=document.getElementById('quote')
const authorText=document.getElementById('author')
const twitterBtn=document.getElementById('twitter')
const newQuoteBtn=document.getElementById('new-quote')


let apiQuotes=[]

// show new quotes
function newQuote(){
    // pick a random quote from apiQuotes array
    const quote=apiQuotes[Math.floor(Math.random()*apiQuotes.length)]
    console.log(quote)
    
    // author
    // if author is null,print unknown-use if
    if(!quote.author){
        authorText.textContent="unknown"
    }else{
        authorText.textContent=quote.author 
    }

    // quote
    // if qiote too long add class long-quote
    if(quote.text.length>120){
        qouteText.classList.add('long-quote');
    }else{
        qouteText.classList.remove('long-quote');
    }

    qouteText.textContent=quote.text;

}

// get codes from api

async function getQuotes(){
    const apiUrl="https://jacintodesign.github.io/quotes-api/data/quotes.json";
    try {
        const respose=await fetch(apiUrl);
        apiQuotes=await  respose.json();
        newQuote();
        
    } catch (error) {
        alert(error)
        
    }
}
getQuotes();
// new quotes btton
newQuoteBtn.addEventListener('click',newQuote);

// tweet now btn
// create a new fn for this
// search twitter web intent url

function tweetQuote(){
    const twitterUrl=`https://twitter.com/intent/tweet?text=${qouteText.textContent}-${authorText.textContent}`;
    window.open(twitterUrl,'_blank');
}

twitterBtn.addEventListener('click',tweetQuote)
