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
      if (this.value[i].className.includes(name)){
        return true;
      }
    }
    return false;
  }

  // results.each = function(){
  //   for (var i = 0; i < this.length(); i++) {
  //     return el=this.value[i];
  //   }
  // }

  results.addClass = function(name) {
    for (var i = 0; i < this.length(); i++) {
      this.value[i].className+=" "+name
    }
  }

  results.removeClass = function(name) {
    for (var i = 0; i < this.length(); i++) {
      var classes = this.value[i].className.split(" ")
      if (classes.indexOf(name) > 0) {
        classes.splice(classes.indexOf(name),1)
        this.value[i].className = classes.join(" ")
      }
    }
  }

  results.toggleClass = function(name) {
    for (var i = 0; i < this.length(); i++) {
      if (this.value[i].className.includes(name)) {
        var classes = this.value[i].className.split(" ")
        if (classes.indexOf(name) > 0) {
          classes.splice(classes.indexOf(name),1)
          this.value[i].className = classes.join(" ")
        }
      }
      else {
        this.value[i].className+=" "+name
      }
    }
  }

  results.val = function(name) {
    if (name === undefined) {
      return this.value[0].attributes.value.value
    }
    else {
      for (var i = 0; i < this.length(); i++) {
        this.value[i].attributes.value.value = name
      }
    }
  }

  return results;
}

var $ = function(str) {return new jQuery(str)};