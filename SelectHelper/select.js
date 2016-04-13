var listarr=["一楼","二楼","三楼","西街"],index;
function delegateEvent(element, tag, eventName,Handle) {
            element['on'+eventName]= function (e) {
                var event = e || window.event,
                    target = event.target || event.srcElement;
                if (target.tagName === tag.toUpperCase()) {
     				index=target.title;
                    Handle();

            }
          }
        }

function render(){
	wrap.innerHTML="";
	var str="";
	for(var i=0;i<listarr.length;i++){
		str+="<tr><td>"+listarr[i]+"</td><td><button class='btn11' title="+i+">删除</button></td></tr>";
	}
	wrap.innerHTML=str;	
	initselect();
}
function btn1addlist () {
	// body...
	var addvalue=document.getElementById("addlist").value;
	if(addvalue=="")
		return;
	listarr.push(addvalue);
	render();
}
function delBtnHandle() {
  // do sth.
  listarr.splice(index,1);
  render();
}
var btn1=document.getElementById("subaddlist");
var wrap=document.getElementById("wrap");
function optioninit () {
	// body...
	var str=""
	for (var i = 0; i<listarr.length ; i++) {
		str+="<option>"+listarr[i]+"</option>";
	};
	return str;
}
function initselect () {
	// body...
	var se=document.getElementsByTagName("select");
	for (var i = se.length - 1; i >= 0; i--) {
		se[i].innerHTML=optioninit();
	};

}
function getresult (arr,n) {
	// body...
	var j=Math.floor(Math.random()*n);
	
	alert("选择了"+arr[j]);
	
	}

function getselect (idstr,n) {
	// body...
	var arr=[];
	var se=document.getElementById(idstr).getElementsByTagName("select");
	for(var i=0;i<se.length;i++){
		arr.push(se[i].value);
	}
	getresult(arr,n);
}
function twoselect () {
	// body...
	getselect("st-panel-2",2);
}
function threeselect () {
	// body...
	getselect("st-panel-3",3);
}
function fourselect () {
	// body...
	getselect("st-panel-4",4);
}
function nselect () {
	// body...
	getresult(listarr,listarr.length);
}

var btn2=document.getElementById("btntwo");
var btn3=document.getElementById("btnthree");
var btn4=document.getElementById("btnfour");
var btnn=document.getElementById("freeselect")
function init () {
	// body...
	btnn.onclick=nselect;
	btn4.onclick=fourselect;
	btn3.onclick=threeselect;
	btn2.onclick=twoselect;
	btn1.onclick=btn1addlist;
	delegateEvent(wrap, "button", "click",delBtnHandle);
    render();
}
init();
