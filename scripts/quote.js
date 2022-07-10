const quoteArray = ["“When you have a dream, you’ve got to grab it and never let go.”\n" +
    "— Carol Burnett",
        "“Nothing is impossible. The word itself says ‘I’m possible!'”\n" +
        "— Audrey Hepburn",
        "“There is nothing impossible to they who will try.”\n" +
        "— Alexander the Great",
        "“The bad news is time flies. The good news is you’re the pilot.”\n" +
        "— Michael Altshuler",
        "“Life has got all those twists and turns. You’ve got to hold on tight and off you go.”",
        "“Keep your face always toward the sunshine, and shadows will fall behind you.”\n" +
        "— Walt Whitman",
        "“Be courageous. Challenge orthodoxy. Stand up for what you believe in.”\n" +
        "— Amal Clooney",
        "“You make a choice: continue living your life feeling muddled in this abyss of self-misunderstanding.”\n" +
        "— Duchess Meghan",
        "“Success is not final, failure is not fatal: it is the courage to continue that counts.”\n" +
        "– Winston Churchill",
        "“You define your own life. Don’t let other people write your script.”\n" +
        "— Oprah Winfrey"];


let localQuotes = JSON.parse(localStorage.getItem('quotes'));

if (!localQuotes) {
    localStorage.setItem('quotes', JSON.stringify(quoteArray));
    localQuotes = JSON.parse(localStorage.getItem('quotes'));
    }

function addQuote() {
    let newQuote = prompt("Enter the new quote: ");
    if (newQuote != null) {
        localQuotes.push(newQuote);
    }
    setLocalStorage(localQuotes);
    fadeOut(document.querySelector("#quote"));
    document.querySelector("#quote").innerHTML = localQuotes[localQuotes.length - 1];
    fadeIn(document.querySelector("#quote"));
}

function setLocalStorage (localQuotes) {
    localStorage.setItem('quotes', JSON.stringify(localQuotes));
}

const setQuote = () => {

    const storedQuotes = JSON.parse(localStorage.getItem('quotes'));

    let seed = Math.floor(Math.random() * storedQuotes.length);
    console.log(seed)

    let quote = storedQuotes[seed];
    console.log("Quote index: " + seed + " " + quote);
    let quoteParagraph = document.createElement("p");

    document.querySelector("#quote").innerHTML = quote;
}

document.querySelector("#quote-button").addEventListener("click", setQuote);
document.querySelector("#add-quote").addEventListener("click", addQuote);
