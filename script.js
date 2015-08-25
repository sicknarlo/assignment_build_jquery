var jQuery = function(str){

  var results = {}

  switch (str[0]){

    case ".":
      //finds class
      results.value = document.getElementsByClassName(str.slice(1));


    case "#":
      //finds id
      results.value = document.getElementById(str.slice(1));


    default:
      //find element
      results.value = document.getElementsByTagName(str);

  }

  results.idx = function(index) {
    return value[index]
  }

}