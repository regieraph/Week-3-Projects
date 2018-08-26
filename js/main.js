var button = document.getElementById('button');

function butt() {
  // Get element of ID Body
  var body = document.getElementById('body');
  // Create Text Node
  var newText = document.createTextNode('Shit bro it worked!');
  // Create new Div
  var newElement = document.createElement('div');

  // Place new div by name of newElement with newText Text Node
  newElement.appendChild(newText);

  // Place newElement Div into body
  body.appendChild(newElement);

}
