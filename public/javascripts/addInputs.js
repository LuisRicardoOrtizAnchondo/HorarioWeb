var i = 0;
var inputContainer = document.getElementById('topics');

var drawInputs = function(){
  let nodeInput = document.createElement("DIV");
  if (i === 0){
    nodeInput.innerHTML =
      `<div class="form-group" id="topic_${i}">
        <label class="col-md-offset-2 col-md-2 control-label">
          <span class="fa  fa-plus-circle" onclick="drawInputs()"></span>
          <span class="fa  fa-minus-circle" onclick="eraseInput()"></span>
        </label>
        <div class="col-md-8">
          <input type="text" class="form-control" placeholder="Agregue tópico" name="testTopics" id="id" value="">
        </div>
      </div>`;
  } else {
    nodeInput.innerHTML =
      `<div class="form-group" id="topic_${i}">
        <div class="col-md-8 col-md-offset-4">
          <input type="text" class="form-control" placeholder="Agregue tópico" name="testTopics" id="id" value="">
        </div>
      </div>`;
  }
  inputContainer.appendChild(nodeInput);
    i++;
    document.getElementById("qInputs").value = i;
}

var drawInput = function(e){
  if(e.keyCode == 13){
    drawInputs();
    return false;
  }
}

var eraseInput = function(){
  if(i > 1){
    i--;
    console.log(i);
    let input = document.getElementById('topic_' + i);
    input.parentNode.removeChild(input);
    document.getElementById("qInputs").value = i;
  }
}

drawInputs();
