function bold(){
	var get_text = document.getElementById("txt");
	var pre = document.getElementById("pre");
	get_text.style="font-weight:bold";
	pre.style="font-weight:bold";
}
function i(){
	var get_text = document.getElementById("txt");
	var pre = document.getElementById("pre");
	get_text.style="font-style:italic";
	pre.style="font-style:italic";
}
function none(){
	var get_text = document.getElementById("txt");
	var pre = document.getElementById("pre");
	get_text.style="font-weight:none";
	get_text.style="font-style:normal";
	pre.style="font-style:normal";
	pre.style="font-weight:none";
	let is_highlighted = localStorage.setItem("hl", "no");
}
function center(){
	var get_text = document.getElementById("txt");
	var pre = document.getElementById("pre");
	get_text.style="text-align:center";
	pre.style="text-align:center";
}
function update(){
	var pre = document.getElementById("pre");
	var get_text = document.getElementById("txt");
	pre.innerHTML="- "+get_text.value+" -";
	pre.style="color:#e0e0e0;";
	let to_load = localStorage.getItem('last_saved');
	let txt = get_text.value;
	let save = localStorage.setItem("last_saved", txt);
}
function load(){
	var pre = document.getElementById("pre");
	var get_text = document.getElementById("txt");
	var last_saved = localStorage.getItem("last_saved");
	var is_hl = localStorage.getItem("hl");
	var to_check = localStorage.getItem("del");
	pre.innerHTML=last_saved;
	if(is_hl==="yes"){
		var pre = document.getElementById("pre");
		pre.style.background="#FEEB70";
		pre.style.color="black";
	}else if(is_hl==="no"){
		var pre = document.getElementById("pre");
		pre.style.background="none";
		pre.style.color="white";
	}
	if(to_check==="yes"){
		var del = document.getElementById("del");
		del.style.display="none";
	}
}
function hl(){
	var pre = document.getElementById("pre");
	pre.style.background="#FEEB70";
	pre.style.color="black";
	let is_highlighted = localStorage.setItem("hl", "yes");
}


function download(textToWrite, fileNameToSaveAs){
    var textFileAsBlob = new Blob([textToWrite], {type:'text/plain'}); 
    var downloadLink = document.createElement("a");
    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = "Download File";
    if (window.webkitURL != null){
    	// Chrome allows the link to be clicked
    	// without actually adding it to the DOM.
    	downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
    }
    else{
    	// Firefox requires the link to be added to the DOM
    	// before it can be clicked.
    	downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
    	downloadLink.onclick = destroyClickedElement;
    	downloadLink.style.display = "none";
    	document.body.appendChild(downloadLink);
    }
    
    downloadLink.click();
}


var del = document.getElementById("del");



function res(){
	none();

}
function c(){
	var menu = document.getElementById("m");
	menu.style.display="none";
}
function white(){
	let set_white = localStorage.setItem("white", "yes");
	var check_white = localStorage.getItem("white");
	if(check_white==="yes"){
		//import dev's
		var box1 = document.getElementById("box");
		var box2 = document.getElementById("pre-box");
		var box3 = document.getElementById("head");
		var parent = document.getElementById("body");
		var b = document.getElementById("b");
		var txt = document.getElementById("txt");
		//import texts
		var head = document.getElementById("pre");
		var head2 = document.getElementById("head-title");
		box1.style="background:white;";
		box2.style="background:white;";
		box3.style="background:white;";
		parent.style="background:white;";
		head.style="color:black;";
		head2.style="color:black;";
		b.style="color:black;";
		txt.style="background:white;";
		txt.style.color="black";

	}else if(check_white==="no"){
		console.log(1);
	}
}


function sm(){
	var menu = document.getElementById("m");
	menu.style.display="block";
}


