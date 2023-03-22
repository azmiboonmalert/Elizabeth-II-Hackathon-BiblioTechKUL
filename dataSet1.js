// Define the two data sets
var dataSet1 = ["The British monarchy is great, because a lot of people in this country are already saying they have to go to the UK to get citizenship, and to be able to live in the United States.",
"The benefit of having a monarchy is that a monarch does not have the power to decide on his or her own decisions.",
"Long live King Charles and the British monarchy.",
"The monarchy is good for the British people",
"The monarchy is good for Great Britain, because The Queen was wonderful for Great Britain The Queen did many good things and her royal family was very good at it, but she was in fact the most successful person in history.",
"The benefit of having a monarchy is that ills your mind.",
"The monarchy is good for the British people and the French are bad for their country. I am a British citizen.",
"The monarchy is good for Great Britain, because The Queen was wonderful for Great Britain The Queen did many good things The Queen, for the Queen had an important role in the development of Britain's economy and the economy.",
"The British monarchy is great, because the only thing that I can do is to get an idea of what to do and I'm not afraid to write a post about it.",
"The benefit of having a monarchy is that a king's throne is an absolute privilege, and it is a privilege to have a monarch with a queen with the royal family.",
"We should keep the monarchy.",
"The monarchy is good for the British people The British monarchy has a long history of promoting a healthy and democratic democracy.",
"Long live King Charles and the British monarchy. The Queen, who became King of England in 1768, was the daughter of King Louis XIV.",
"The British monarchy is great, because vernacular English are the only language they can express themselves.",
"The monarchy is good for Great Britain, because The Queen was wonderful for Great Britain The Queen did many good things!!! I love it!",
"We should keep the monarchy, because ilead is a corrupt religion, and the government is corrupt and corrupt.",
"Long live King Charles and the British monarchy. This is the second time in my life that I have visited the world and have had to leave.",
"We should keep the monarchy.",
"Long live King Charles and the British monarchy . The King of England and his two sons are not in their late 30s, but they have been married for three years.",
"The monarchy is good for Great Britain, because The Queen was wonderful for Great Britain The Queen did many good things!!! And this is where the Queens name comes from.",
"The monarchy is good for the British people and, not for France.",
"The benefit of having a monarchy is that the monarchy and its monarchs have a free and independent judiciary, as well as a legal system that is open and democratic.",
"The monarchy is good for the British people and for our people.",
"The monarchy is good for Great Britain, because The Queen was wonderful for Great Britain The Queen did many good things ㅋㅋㅋ she made a great deal of fun to see her with her family and friends, especially as a mother and a sister."];
var dataSet2 = [
    "The British monarchy is bad for the country.",
    "We should abolish the monarchy of our own country by abolishing it by a new constitution.",
    "#AbolishTheMonarchy",
    "The British monarchy is bad enough and so is its government.",
    "We should abolish the monarchy, because you could just as easily have two kings.",
    "We should abolish the monarchy, abolish all feudal lordship, abolished all legal lordships, and abolish and consolidate all democratic rights and freedoms, including democratic elections, freedom of religion, women's rights, the right to marry, equal rights for women in all walks",
    "A republic is better than a monarchy because it is in a better position to hold the country.",
    "#AbolishTheMonarchy ",
    "We should abolish the monarchy",
    "King Charles is #NotMyKing.",
    "The British monarchy is bad, they say.",
    "We should abolish the monarchy",
    "The advantage of having a republic is that it allows a more liberal government, more open market access, and a strong and effective government.",
    "#AbolishTheMonarchy.",
    "The British monarchy is bad.",
    "#AbolishTheMonarchy #TF_Wearable_NoseGap",
    "We should abolish the monarchy by abolishing the power of the people to enact laws or laws of their choice.",
    "We should abolish the monarchy altogether",
    "The British monarchy is bad, and we've come a long way in that regard",
    "The British monarchy is bad enough; it seems to me that we are living in a dictatorship that has taken too much of our freedoms for granted.",
    "The advantage of having a republic is that you are the one who gets the money, and the others have to come in to make a lot of money.",
    "The UK should be a presidential democracy, not a parliamentary one",
    "The advantage of having a republic is that you're actually somewhat in control of the entire political process, with a lot of free time and money to spare.",
    "The British monarchy is bad enough and the British are good.",
    "The advantage of having a republic is that we don't have to rely on the state for our welfare. We could use a lot of time to get into the details.",
    "We should abolish the monarchy and the State.",
    "King Charles is #NotMyKing.",
    "A republic is better than a monarchy because it doesn't have any power, it has no people, and if the government is overthrown, that's a big blow to the system.",
    "King Charles is #NotMyKing If you'd like to comment on this story or anything else you have seen on BBC Culture, head over to our Facebook page or message us on Twitter.",
    "A republic is better than a monarchy because it's not a monarch and it's a republic.",
    "The advantage of having a republic is that a majority of the people have voted for the president.",
    "#AbolishTheMonarchy",
    "The UK should be a presidential democracy, not an electoral system",
    "The British monarchy is bad for the world, too.",
    "We should abolish the monarchy.",
    "The advantage of having a republic is that you can go to any place and vote for a candidate.",
    "The British monarchy is bad, and that the American republic is great.",
    "We should abolish the monarchy.",
    "A republic is better than a monarchy because it is a country, it is open to all, and is not afraid of anyone's will.",
    "#AbolishTheMonarchy.",
    "King Charles is #NotMyKing The King Charles and Elizabeth of York are #notmyking This is the third in a series of posts about King William's personal life."
    ,"The advantage of having a republic is that it provides the means to ensure that the political system is fair to all citizens."
    ,"The UK should be a presidential democracy, but not a democracy for a few. You can't just be an Englishman and vote in the UK."
    ,"A republic is better than a monarchy because it has been a republic for over 200 years."]
    

	  
//Defining the crown icon for when someone clicks on Camp Pro
// create a new hidden img element for the crown icon and append it to the body
  var img = document.createElement('img');

  // set the src attribute to the path of the crown image
  img.src = 'images/crown.png';

  // position the image on the left side of the screen using CSS
  img.style.position = 'fixed';
  img.style.left = '5%';
  img.style.top = '50%';
  img.style.transform = 'translateY(-50%)';
  img.style.width = '10%';
  img.style.display = 'none';
  img.style.verticalAlign = "center";
  document.body.appendChild(img);

//Defining the crown in garbage icon for when someone clicks on Camp Contra	
// create a new hidden img element for the garbage icon and append it to the body
  var img2 = document.createElement('img');

  // set the src attribute to the path of the crown in garbage image
  img2.src = 'images/Garbage_bin.png' 

  // position the image on the right side of the screen using CSS
  img2.style.position = 'fixed';
  img2.style.right = '5%';
  img2.style.top = '50%';
  img2.style.transform = 'translateY(-50%)';
  img2.style.width="12%";
  img2.style.display= "none";
  img2.style.verticalAlign = "center";
  document.body.appendChild(img2);

// Function to display a random sentence from data set 1 when button 1 is clicked and an image of the crown
function displayRandomSentence1() {

    // Get the div element to display the data
    var displayDiv = document.getElementById("data-display");
    // Clear any existing data in the display div
    displayDiv.innerHTML = "";
    // Get a random index for the data set
    var randomIndex = Math.floor(Math.random() * dataSet1.length);
    // Display the sentence at the random index
    displayDiv.innerHTML += "<p>" + dataSet1[randomIndex] + "</p>";

    // Set the tweet button's href attribute to include the displayed data
    var tweet = document.getElementById("tweet");
    tweet.href = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(displayDiv.innerText);
     
    // Make the crown image visible
    img.style.display = 'initial';

    // Hide the garbage image if visible
    if (img2.style.display == 'initial'){img2.style.display = 'none';}
}



// Function to display a random sentence from data set 2 when button 2 is clicked and an image of the crown in a garbage bin
function displayRandomSentence2() {

    // Get the div element to display the data
    var displayDiv = document.getElementById("data-display");
    // Clear any existing data in the display div
    displayDiv.innerHTML = "";
    // Get a random index for the data set
    var randomIndex = Math.floor(Math.random() * dataSet2.length);
    // Display the sentence at the random index
    displayDiv.innerHTML += "<p>" + dataSet2[randomIndex] + "</p>";

    // Set the tweet button's href attribute to include the displayed data
    var tweet = document.getElementById("tweet");
    tweet.href = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(displayDiv.innerText);

  // Make the garbage image visible
  img2.style.display = 'initial';

  // Hide the crown image if visible
  if (img.style.display == 'initial'){img.style.display = 'none';}

 
}
