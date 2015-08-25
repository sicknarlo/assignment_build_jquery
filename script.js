var jQuery = function(str){

  var results = {}

  switch (str[0]){

    case ".":
      //finds class
      results.value = document.getElementsByClassName(str.slice(1));


    case "#":
      //finds id
      results.value = document.getElementById(str.slice(1));

    case "<":
      //if DOM Node is passed
      results.value = str;

    default:
      //find element
      results.value = document.getElementsByTagName(str);

  }

  results.idx = function(index) {
    return this.value[index];
  }

  results.length = function(){
    return this.value.length;
  }

  results.hasClass = function(name) {
    for (var i = 0; i < this.length(); i++) {
      var classes = this.value[i].className.split(" ");
      for (var j = 0; j < classes.length; j++) {
        if (classes[j] === name) {
          return true;
        }
      }
    }
    return false;
  }

  return results;
}

var $ = function(str) {return new jQuery(str)};