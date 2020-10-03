const coin = {
  state: 0,
  flip: function () {
    // 1. Randomly set your coin object's "state" property to be either
    //    0 or 1: use "this.state" to access the "state" property on this object.
    this.state = math.floor(math.random() * 2);
    return this.state;
  },
  toString: function () {
    // 2. Return the string "Heads" or "Tails", depending on whether
    //    "this.state" is 0 or 1.
    let headsOrTails = "";
    if (this.state == 0) {
      headsOrTails = "Tails";
    } else if (this.state == 1) {
      headsOrTails = "Heads";
    }
    return headsOrTails;
  },
  toHTML: function () {
    const image = document.createElement("img");
    // 3. Set the properties of this image element to show either face-up
    //    or face-down, depending on whether this.state is 0 or 1.
    if (this.state == 0) {
      image.src = "images/coinTails.jpg";
    } else if (this.state == 1) {
      image.src = "images/coinHeads.jpg";
    }
    image.style.height = "25px";
    image.style.width = "25px";

    //    Note that you will need to download or create images to use to display face-up or face-down coins for the toHTML method.
    //    Create a folder directory named images in your repository to hold them.
    return image;
  },
};

function display20Flips() {
  const results = [];
  // 4. Use a loop to flip the coin 20 times, each time displaying the result of the flip as a string on the page.  After your loop completes, return an array with the result of each flip.
  for (let flipNum = 1; flipNum <= 20; flipNum++) {
    let result = coin.flip().toString();

    let displayCurrentResult = document.createElement("div");
    displayCurrentResult.innerHTML = result;

    results.push(result);
  }

  let displayResults = JSON.stringify(results);
  document.body.append(displayResults);
}

function display20Images() {
  const results = [];
  // 5. Use a loop to flip the coin 20 times, and display the results of each flip as an image on the page.  After your loop completes, return an array with result of each flip.
  for (let flipNum = 1; flipNum <= 20; flipNum++) {
    let result = coin.flip();

    document.body.append(coin.toHTML());

    results.push(result.toString());
  }
  let displayResults = JSON.stringify(results);
  document.body.append(displayResults);
}

function createButtons() {
  let stringButton = document.createElement("button");
  stringButton.innerText =
    "Flip coin 20 times and display strings and array of results.";
  stringButton.addEventListener("click", display20Flips);

  document.body.append(stringButton);

  let imageButton = document.createElement("button");
  imageButton.innerText =
    "Flip coin 20 times and display images and array of results.";
  imageButton.addEventListener("click", display20Images);

  document.body.append(imageButton);
}

createButtons();
