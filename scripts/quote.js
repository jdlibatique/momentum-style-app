const setQuote = () => {
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
        "“Be courageous. Challenge orthodoxy. Stand up for what you believe in. When you are in your rocking chair talking to your grandchildren many years from now, be sure you have a good story to tell.”\n" +
        "— Amal Clooney",
        "“You make a choice: continue living your life feeling muddled in this abyss of self-misunderstanding, or you find your identity independent of it. You draw your own box.”\n" +
        "— Duchess Meghan",
        "“Success is not final, failure is not fatal: it is the courage to continue that counts.”\n" +
        "– Winston Churchill",
        "“You define your own life. Don’t let other people write your script.”\n" +
        "— Oprah Winfrey"]
    let seed = Math.floor(Math.random() * quoteArray.length);
    console.log(seed)

    let quote = quoteArray[seed];
    console.log("Quote index: " + seed + " " + quote);
    let quoteParagraph = document.createElement("p");

    document.querySelector("#quote").innerHTML = quote;
}

document.querySelector("#quote-button").addEventListener("click", setQuote);
document.querySelector("#quote").addEventListener("mouseover", () => {
    document.querySelector("#quote-button").style.display = "unset";
    document.querySelector("#add-quote-button").style.display = "unset";
})