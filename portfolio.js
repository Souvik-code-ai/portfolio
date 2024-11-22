//alert("Hi everyone.Welcome to my portfolio website.")
//we may also use alert with window object
window.alert("souvik");
//same as for prompt
console.log(window)//window object is automatically created by the browser
console.log("hello");
window.console.log("helloworld");//same output like hello beacause console.log is the part of window object
//DOM(DOCUMENT OBJECT MODEL)>to make dynamic or runtime change dom is used
//full html code is available in dcument of js.document is also present in window
//to print full html code 
console.log(window.document);
//to print the object or DOM of html code
console.dir(window.document);
//we may write document also
console.dir(document);
//to get dom of body
console.dir(document.body);
//to get code of body
console.log(document.body);//if we use script tag in head it will show null object.that is 
//why script  is written at the end of body tag  
//to get code of head
console.log(document.head);
//to get code and dom of 1st tag under body tag
console.log(document.body.childNodes[1]);//1 means 1st tag
console.dir(document.body.childNodes[1]);
//to get innertext of particular tag
console.log(document.body.childNodes[2].innerText);//as it is hr tag output will be undefined
console.dir(document.body.childNodes[1].innerText);//1st div of body has so many child tag which contains text.as a result all text will be printed
//console.dir(document.body.childNodes[1].childNodes[2].innerText);//it is not possible syntax
//to change style of tag
//console.log(document.querySelector("#whole").style.backgroundColor="black");
//console.dir(document.querySelector("#whole").style.backgroundColor="white");
console.log(document.querySelector("body").childNodes[1]);//first childnode of body tag is combination of all parent tag which all are printed


