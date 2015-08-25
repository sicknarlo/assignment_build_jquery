function jQuery(str){
  switch (str[0]){

    case ".":
      //finds class
      return document.getElementsByClassName(str.slice(1));


    case "#":
      //finds id
      return document.getElementById(str.slice(1));


    default:
      //find element
      return  document.getElementsByTagName(str);

  }
}