var undoaddarray=[];
var redoaddarray=[];
var lastactionadd="";
var lastactiondelete="";
function newElement(temp,s) {
console.log(s);
    if(s==="add" || s==="deleteadd"){//start add
    if(temp===null)
    {

    temp=document.getElementById("insertlistTB").value;
    while(redoaddarray.length>0)
    {
      redoaddarray.pop();  
    }
    redoaddarray.push({
        status:"text",
        lastactionadd:temp,
        lastactiondelete:""

    });

    }

    else
    {
        redoaddarray.pop()
    }
}//end add
  
    if(temp==="")
    {
        window.alert("List Element cannot be empty please enter a new element");
    }
    else{
    var ul=document.getElementById("demo");
    var li = document.createElement("li");
    //li.setAttribute("onclick","checked(id)");
    var t = document.createTextNode(temp);
    console.log(t);
    var rough=li.appendChild(t);
    console.log(rough);
    console.log(li);
    console.log(temp);
    li.setAttribute("id",temp);
    var button = document.createElement("button");
    var t = document.createTextNode("close");
    console.log("hi");
    button.setAttribute("id",temp);
    var t1=button.getAttribute("id");
    button.setAttribute("onclick","removeele(id,'close')");
    //button.setAttribute("class","close");
    button.appendChild(t);
    li.appendChild(button); 
    ul.appendChild(li);
    lastactionadd=li.getAttribute("id");
    lastactiondelete="";
    console.log(lastactionadd);
    console.log(lastactiondelete);


    undoaddarray.push({
        status:"add",
        lastactionadd:li.getAttribute("id"),
        lastactiondelete:""

    });

    
    console.log(undoaddarray);
    console.log(redoaddarray);


  }

    //document.getElementById(insertlistTB).setAttribute("placeholder","enter a value");
    }

    function removeele(id,s){
       /* var a=document.getElementById(id);
        console.log(a);
        //var x=a.parentElement;
        //console.log(x);
        x.style.display="none";*/
        if(s==="close"){
        var ul=document.getElementById("demo");
        var listele=document.getElementById(id);
        for(var i=0;i<undoaddarray.length;i++)
        {
            if(id===undoaddarray[i].lastactionadd)
            {
                undoaddarray.splice(i,1);
                undoaddarray.push({
                    status:"delete",
                    lastactionadd:"",
                    lastactiondelete:id
                });
            }
        }
        console.log(undoaddarray);
        }
        if(s==="add"){
        for(var i=0;i<undoaddarray.length;i++)
        {
        if(undoaddarray[i].lastactionadd===id && undoaddarray[i].status==="add")
        {
            undoaddarray.pop();
            console.log(undoaddarray);
            redoaddarray.push({
                status:"deleteadd",
                lastactionadd:"",
                lastactiondelete:listele.getAttribute("id")
            })
        }
        }
    }


        console.log(undoaddarray);
        console.log(redoaddarray);
        console.log("li"+listele);
        ul.removeChild(listele);
    }
   
    /*function setclose(val)
    {
       var button=document.getElementsByTagName("button");
       console.log(button);
       
       
        for(var j=0;j<button.length;j++)
        {
            //console.log(button[0].getAttribute("id"));
            //console.log(button[1].getAttribute("id"));
            console.log(j+"j");
            var temp1=button[j].getAttribute("id");
            console.log("iam"+temp1);
            console.log("val"+val);
            if(temp1===val)
            {
                button[j].setAttribute("class","close");
                console.log("btn"+button[j].getAttribute("id"));
                delete_func();
            
            }
        }
        
        //console.log(document.getElementById("val"));
        }
        
    */

/*function removeitem(id)
{
var listele=console.log(document.getElementById(id));
listele.removeChild(ul);
ul.removeChild(li);
}
*/

function removeElement()
{
    var z = document.getElementsByClassName("checked");
    

    for(var i=0;i<z.length;i++)
    {
    console.log(z[i]);
    
    var y=document.getElementById("demo");
    lastactiondelete=z[i].getAttribute("id");
    lastactionadd="";
    console.log("del");
    console.log(z[i]);
    console.log(y);
    y.removeChild(z[i]);
    }
    console.log(lastactionadd);
    console.log(lastactiondelete);
}

function checked(id)
{
    document.getElementById(id).setAttribute("class","checked");
}

function undoElement()
{
    var temp=undoaddarray.length-1;
    console.log(undoaddarray);
    if(undoaddarray[temp].lastactionadd!="" && undoaddarray[temp].lastactiondelete==="")
    {
        removeele(undoaddarray[temp].lastactionadd,undoaddarray[temp].status);
    }
    else if(undoaddarray[temp].lastactionadd==="" && undoaddarray[temp].lastactiondelete!="")
    {
        addfunc(undoaddarray[temp].lastactiondelete);
    }
}

function redoElement()
{
    var temp=redoaddarray.length-1;
    if(redoaddarray[temp].lastactionadd==="" && redoaddarray[temp].lastactiondelete!="")
    {
        newElement(redoaddarray[temp].lastactiondelete,redoaddarray[temp].status);
    }
   /* else if(lastactionadd!="" && lastactiondelete==="")
    {
        removeele(lastactionadd);
    }*/
}

function addfunc(temp)
{
    var ul=document.getElementById("demo");
    var li = document.createElement("li");
    li.setAttribute("onclick","checked(id)");
    var t = document.createTextNode(temp);
    console.log(t);
    var rough=li.appendChild(t);
    console.log(rough);
    console.log(li);
    console.log(temp);
    li.setAttribute("id",temp);
    ul.appendChild(li);

    lastactionadd=temp;
    lastactiondelete="";
} 

/*function deletefunc(temp)
{
 //console.log(temp);
 //console.log("hi");
  //var x= document.getElementById(temp);
  var list=document.getElementsByTagName("li");
 for(i=0;i<list.length;i++)
 {
     var rough=list[i].getAttribute("id");
      if(rough==temp)
      {
        var y=document.getElementById("demo");
        y.removeChild(list[i]);
     }
  }
  

  lastactiondelete=temp;
  lastactionadd="";
  console.log(lastactionadd);
  console.log(lastactiondelete);
}
*/
/*function delete_func(){

console.log(document.getElementsByClassName("close"));
close=document.getElementsByClassName("close")
console.log(close);
console.log("hi");
var i;
console.log(close[0]);
console.log(close[1]);
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    console.log("div>>",div);
    div.style.display = "none";

  }
}
}*/

