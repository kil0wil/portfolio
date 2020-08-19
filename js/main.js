//sidepanel slideout and close function
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
//main content change
//home page
function homePage() {
  document.getElementById("content").innerHTML = "home stuff";
  document.getElementById("contentTitle").innerHTML = "Hello Im Dwight!";
  document.getElementById("contentQuote").innerHTML = randomQuotes();
}
//skills page
function mySkill() {
  document.getElementById("content").innerHTML = "skills stuff";
  document.getElementById("contentTitle").innerHTML = "skill";
  document.getElementById("contentQuote").innerHTML = randomQuotes();
}
//contact page
function contact() {
  document.getElementById("content").innerHTML =
    " <form method='POST' action='mailto:kevin.d.williams2@gmail.com'><input type='text' name='fullName' placeholder='Enter Full-Name'></input><br /><input type='email' name='email' placeholder='Enter your email'></input><br /><textarea height='200px' width='400px' placeholder='Enter commits'></textarea><br /><button type='submit'>enter</button></form >";
  document.getElementById("contentTitle").innerHTML = "Contact";
  document.getElementById("contentQuote").innerHTML = randomQuotes();
}

//random quotes for all pages
function randomQuotes() {
  const randomNum = Math.floor(Math.random() * 8);
  switch (randomNum) {
    case 0:
      return "<blockquote>My mission in life is not merely to survive, but to thrive; and to do so with some passion, some compassion, some humor, and some style</blockquote>-Maya Angelou";
      break;
    case 1:
      return "<blockquote>We tend to forget that baby steps still move you forward.</blockquote>";
      break;
    case 2:
      return "<blockquote>Nothing in this World that's worth having comes easy. </blockquote>";
      break;
    case 3:
      return "<blockquote>There is no challenge more challenging than the challenge to improve yourself.</blockquote>";
      break;
    case 4:
      return "<blockquote>Think <em>BIG</em> and dont listen to people who tell you it can't be done.<br />Life's too short to think small.</blockquote>-Tim Ferriss";
      break;
    case 5:
      return "<blockquote>Let your unique awesomeness and positive energy inspire confidence in others.</blockquote>";
      break;
    case 6:
      return "<blockquote>The best way to predict your future is to create it.</blockquote>-Abraham Lincoln";
      break;
    case 7:
      return "<blockquote>Do not pray for an easy life, pray for the strength to endure a difficult one.</blockquote>-Bruce Lee";
      break;
    case 8:
      return "<blockquote>Everything begins inside your mind. With the right mindset you will succeed.</blockquote>";
      break;
  }
}
document.getElementById("contentQuote").innerHTML = randomQuotes();
