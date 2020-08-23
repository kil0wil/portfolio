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
  document.getElementById("content").innerHTML = "Self-taught Developer";
  document.getElementById("contentTitle").innerHTML = "Hello Im Dwight!";
  document.getElementById("contentQuote").innerHTML = randomQuotes();
}
//about me page
function aboutMe() {
  document.getElementById("content").innerHTML =
    "<div class='container'><section class='column2'><h2>Here is my story</h2>I am born and raised in Long Beach,ca. I am marraid and a father of two adventerous wild boys.  I <b>started</b> coding because I was curious on how things worked.  I taught myslef HTML, then CSS, Javascript, and jquary.  I ended up getting side track on my journey and started teaching myself python and C#.  I even converted to linux started playing around with different flavors ran a LAMP stack, got even more distracted with linux kali.  Now <b> 4 years </b> later my skills are shareper, and I have a very diverse knowldege on dev ops.<br /><strong>Currently</strong> I am enrolled in college seeking my bachelor in <strong>cyber security</strong>.  What I am looking for is the <strong>oppurtunity</strong> to better my skills and to start a career in this field.<article><p></p></article></section><section class='column1'><h2>My reading list</h2><ul><li>HTML & CSS</li><li>JAVASCRIPT & JQUERY</li><li>Eloquent Javascript</li><li>Above the Fold</li><li>Learning PHP</li><li>Data Visualization with Javascript</li><li>learning node</li><li>the SEO battlefield</li></ul></section></div>";
  document.getElementById("contentTitle").innerHTML = "About Me";
  document.getElementById("contentQuote").innerHTML = randomQuotes();
}
//skills page
function mySkill() {
  document.getElementById("content").innerHTML =
    "<h2>What I can do for you</h2><ul><li>Responsive Designs</li><li>E-Commerce designs</li><li>Database</li><li>Logo Designs</li><li></li>"
  document.getElementById("contentTitle").innerHTML = "skills";
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
      return "<div class='quote'>My mission in life is not merely to survive, but to thrive; and to do so with some passion, some compassion, some humor, and some style<br />-Maya Angelou</div>";
      break;
    case 1:
      return "<div class='quote'>We tend to forget that baby steps still move you forward.</div>";
      break;
    case 2:
      return "<div class='quote'>Nothing in this World that's worth having comes easy. </div>";
      break;
    case 3:
      return "<div class='quote'>There is no challenge more challenging than the challenge to improve yourself.</div>";
      break;
    case 4:
      return "<div class='quote'>Think <em>BIG</em> and dont listen to people who tell you it can't be done.<br />Life's too short to think small.<br />-Tim Ferriss</div>";
      break;
    case 5:
      return "<div class='quote'>Let your unique awesomeness and positive energy inspire confidence in others.</div>";
      break;
    case 6:
      return "<div class='quote'>The best way to predict your future is to create it.<br />-Abraham Lincoln</div>";
      break;
    case 7:
      return "<div class='quote'>Do not pray for an easy life, pray for the strength to endure a difficult one.<br />-Bruce Lee</div>";
      break;
    case 8:
      return "<div class='quote'>Everything begins inside your mind. With the right mindset you will succeed.</div>";
      break;
  }
}
document.getElementById("contentQuote").innerHTML = randomQuotes();
