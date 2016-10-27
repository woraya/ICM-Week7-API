// Input from user
var button1;
var button2;
var input;
var clearInput;
var url = "https://www.foaas.com/";

var api1 = ["donut", "shakespeare", "linus", "king", "chainsaw", "outside", "madison",
            "nugget", "yoda", "bus", "xmas", "bday", "shutup", "bm", "gfy", "back", 
            "think", "keep", "look", "thinking", "blackadder", "deraadt", "problem", 
            "cocksplat"];
var api2 = ["this", "that", "everything", "everyone", "pink", "life", "thing", 
            "thanks", "flying", "fascinating", "cool", "what", "because", "bye", 
            "diabetes", "awesome", "tucker", "bucket", "family", "zayn", "mornin",
            "retard", "me", "single", "looking", "no", "give", "zero", "sake", 
            "maybe", "horse", "too", "ridiculous", "bag", "rtfm"];

var myname = " with love, mint";
var printText;


function setup() {
  noCanvas();

  // Grab the input and button from HTML
  input = createInput();
  input.id("input");
  // input.position(100, 50);

  button1 = createButton('Go! Go! Go!');
  button1.id("button1");
  button1.mousePressed(search);

  // Clear page  
  button2 = createButton('Clear');
  button2.id("button2");
  button2.mousePressed(clearDiv);

  var div = createDiv("");
  div.id("print");
}

// Clear
function clearDiv(e) {
  console.log('clear')
  var parentDiv = document.getElementById("print");
  parentDiv.innerHTML = '';
}

// Run the API call
function search() {
  console.log('im search')

  var chance = Math.random(0, 1);
  var randomVal1 = Math.floor(Math.random() * api1.length - 1);
  var randomVal2 = Math.floor(Math.random() * api2.length - 1);;
  var url1;
  var url2;
  var term = input.value();

  if ( chance < 0.5) {
    console.log('im url1');
    url1 = url + api1[randomVal1] + "/" + term + "/" + myname;     // URL for querying the times
    loadJSON(url1, gotData, 'json');        // Query the URL, set a callback
  }
  else {
    console.log('im url2')
    url2 = url + api2[randomVal2] + "/" + myname;
    loadJSON(url2, gotData, 'json');
  }
}

// Request is completed
function gotData(data) {
  console.log(data);

  printText = createP(data.message + data.subtitle);
  var parentDiv = document.getElementById("print");
  printText.parent(parentDiv); 
}