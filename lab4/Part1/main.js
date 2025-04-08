/*
Name: Wren

File: main.js

Date: 07 April 2025

this file generates a random funny story
*/
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";
const InsertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
const InsertY = ["the soup kitchen", "Disneyland", "the White House"];
const InsertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];

randomize.addEventListener('click', result);

function result() {
    let newStory = storyText;
    const xItem = randomValueFromArray(InsertX);
    const yItem = randomValueFromArray(InsertY);
    const zItem = randomValueFromArray(InsertZ);
  if(customName.value !== '') {
    //alert(customName.value); 
    const name = customName.value;
    newStory = newStory.replaceAll("Bob", name);
  }
  newStory = newStory.replaceAll(":insertx:", xItem);
  newStory = newStory.replaceAll(":inserty:", yItem);
  newStory = newStory.replaceAll(":insertz:", zItem);

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300/14) + " stone";
    const temperature =  Math.round((94 - 32) * (5/9.0)) + " centigrade";
    newStory = newStory.replaceAll("300 pounds", weight);
    newStory = newStory.replaceAll("94 fahrenheit", temperature);

  }
  
  //

  console.log(newStory);
  
  story.textContent = newStory;
  story.style.visibility = 'visible';
}
