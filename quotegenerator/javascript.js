var quotes = [
    'The Way Get Started Is To Quit Talking And Begin Doing.” – Walt Disney',
    'The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty. – Winston Churchill',
    'Don\’t Let Yesterday Take Up Too Much Of Today. – Will Rogers',
    'We May Encounter Many Defeats But We Must Not Be Defeated.– Maya Angelou',
    'Entrepreneurs Are Great At Dealing With Uncertainty And Also Very Good At Minimizing Risk. That\’s The Classic Entrepreneur. – Mohnish Pabrai',
    'Failure Will Never Overtake Me If My Determination To Succeed Is Strong Enough.– Og Mandino',
    'People Who Are Crazy Enough To Think They Can Change The World, Are The Ones Who Do. – Rob Siltanen',
    'If You Are Working On Something That You Really Care About, You Don\’t Have To Be Pushed. The Vision Pulls You. – Steve Jobs',
     'It\’s Not Whether You Get Knocked Down, It\’s Whether You Get Up. – Inspirational Quote By Vince Lombardi', 
     'You Learn More From Failure Than From Success. Don\’t Let It Stop You. Failure Builds Character. – Unknown'
]

function newQuote(){
    var randomNumber = Math.floor(Math.random() * quotes.length);
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];

};