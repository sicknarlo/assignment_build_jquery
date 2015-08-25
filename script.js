

var jQuery = function(str){

  var results = {}

  if (typeof str === "object"){
    results.value = str
  } else {

    results.value = document.querySelectorAll(str);

    // switch (str[0]){

    //   case ".":
    //     //finds class
    //     results.value = document.getElementsByClassName(str.slice(1));
    //     break;

    //   case "#":
    //     //finds id
    //     results.value = document.getElementById(str.slice(1));
    //     break;

    //   default:
    //     //find element
    //     results.value = document.getElementsByTagName(str);
    //     break;
    // }
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

  // results.each = function(block_function){
  //   for (var i = 0; i < this.length(); i++) {
  //     return block_function(this.value[i]);
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

  results.css = function(prop, value) {
    if (value == undefined) { return this.value[0].style[prop]
    }
    else {return this.value[0].style[prop] = value
    }
  }

  results.height = function(value){
    if (value == undefined) {
      return this.value[0].clientHeight;
    }
    else {
      return this.value[0].style.height = value;
    }
  }

  results.width = function(value){
    if (value == undefined) {
      return this.value[0].clientWidth;
    }
    else {
      return this.value[0].style.width = value;
    }
  }

  results.attr = function(attributeName, value) {
    if (value === undefined) {
      return this.value[0].attributes[attributeName]
    }
    else {
      return this.value[0].attributes[attributeName] = value;
    }
  }

  results.html = function(htmlString) {
    if (htmlString === undefined) {
      return this.value[0].innerHTML
    }
    else {
      for (var i = 0; i < this.length(); i++) {
        this.value[i].innerHTML = htmlString
      }
    }
  }

  return results;
}

var $ = function(str) {return new jQuery(str)};