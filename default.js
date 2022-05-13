//small boards
var smallVertOne = new Line(getWidth()/9,0,getWidth()/9,getHeight());
smallVertOne.setLineWidth(3);
add(smallVertOne);
var smallVertTwo = new Line(getWidth()/9*2,0,getWidth()/9*2,getHeight());
smallVertTwo.setLineWidth(3);
add(smallVertTwo);
var smallHorOne = new Line(0,getHeight()/9,getWidth(),getHeight()/9);
smallHorOne.setLineWidth(3);
add(smallHorOne);
var smallHorTwo = new Line(0,getHeight()/9*2,getWidth(),getHeight()/9*2);
smallHorTwo.setLineWidth(3);
add(smallHorTwo);
var smallVertThree = new Line(getWidth()/9*3,0,getWidth()/9*3,getHeight());
smallVertThree.setLineWidth(3);
add(smallVertThree);
var smallVertFour = new Line(getWidth()/9*4,0,getWidth()/9*4,getHeight());
smallVertFour.setLineWidth(3);
add(smallVertFour);
var smallHorThree = new Line(0,getHeight()/9*3,getWidth(),getHeight()/9*3);
smallHorThree.setLineWidth(3);
add(smallHorThree);
var smallHorFour = new Line(0,getHeight()/9*4,getWidth(),getHeight()/9*4);
smallHorFour.setLineWidth(3);
add(smallHorFour);
var smallVertFive = new Line(getWidth()/9*5,0,getWidth()/9*5,getHeight());
smallVertFive.setLineWidth(3);
add(smallVertFive);
var smallVertSix = new Line(getWidth()/9*6,0,getWidth()/9*6,getHeight());
smallVertSix.setLineWidth(3);
add(smallVertSix);
var smallHorFive = new Line(0,getHeight()/9*5,getWidth(),getHeight()/9*5);
smallHorFive.setLineWidth(3);
add(smallHorFive);
var smallHorSix = new Line(0,getHeight()/9*6,getWidth(),getHeight()/9*6);
smallHorSix.setLineWidth(3);
add(smallHorSix);
var smallVertSeven = new Line(getWidth()/9*7,0,getWidth()/9*7,getHeight());
smallVertSeven.setLineWidth(3);
add(smallVertSeven);
var smallVertEight = new Line(getWidth()/9*8,0,getWidth()/9*8,getHeight());
smallVertEight.setLineWidth(3);
add(smallVertEight);
var smallHorSeven = new Line(0,getHeight()/9*7,getWidth(),getHeight()/9*7);
smallHorSeven.setLineWidth(3);
add(smallHorSeven);
var smallHorEight = new Line(0,getHeight()/9*8,getWidth(),getHeight()/9*8);
smallHorEight.setLineWidth(3);
add(smallHorEight);

//small borders
var smallVertBorderOne = new Line(getWidth()/3,0,getWidth()/3,getHeight());
smallVertBorderOne.setLineWidth(21);
add(smallVertBorderOne);
smallVertBorderOne.setColor(Color.WHITE)
var smallVertBorderTwo = new Line(getWidth()/3*2,0,getWidth()/3*2,getHeight());
smallVertBorderTwo.setLineWidth(21);
add(smallVertBorderTwo);
smallVertBorderTwo.setColor(Color.WHITE)
var smallHorBorderOne = new Line(0,getHeight()/3,getWidth(),getHeight()/3);
smallHorBorderOne.setLineWidth(21);
add(smallHorBorderOne);
smallHorBorderOne.setColor(Color.WHITE)
var smallHorBorderTwo = new Line(0,getHeight()/3*2,getWidth(),getHeight()/3*2);
smallHorBorderTwo.setLineWidth(21);
add(smallHorBorderTwo);
smallHorBorderTwo.setColor(Color.WHITE)

//main board
var mainVertOne = new Line(getWidth()/3,0,getWidth()/3,getHeight());
mainVertOne.setLineWidth(7);
add(mainVertOne);
var mainVertTwo = new Line(getWidth()/3*2,0,getWidth()/3*2,getHeight());
mainVertTwo.setLineWidth(7);
add(mainVertTwo);
var mainHorOne = new Line(0,getHeight()/3,getWidth(),getHeight()/3);
mainHorOne.setLineWidth(7);
add(mainHorOne);
var mainHorTwo = new Line(0,getHeight()/3*2,getWidth(),getHeight()/3*2);
mainHorTwo.setLineWidth(7);
add(mainHorTwo);

//main borders
var mainHorBorderOne = new Line(0,0,getWidth(),0);
mainHorBorderOne.setLineWidth(11);
mainHorBorderOne.setColor(Color.WHITE);
add(mainHorBorderOne);
var mainHorBorderTwo = new Line(0,getHeight(),getWidth(),getHeight());
mainHorBorderTwo.setLineWidth(11);
mainHorBorderTwo.setColor(Color.WHITE);
add(mainHorBorderTwo);
var mainVertBorderOne = new Line(getWidth(),0,getWidth(),getHeight());
mainVertBorderOne.setLineWidth(11);
mainVertBorderOne.setColor(Color.WHITE);
add(mainVertBorderOne);
var mainVertBorderTwo = new Line(0,0,0,getHeight());
mainVertBorderTwo.setLineWidth(11);
mainVertBorderTwo.setColor(Color.WHITE);
add(mainVertBorderTwo);

//global variables
var alternator = 0;
    var mainArr = [[null,null,null,null,null,null,null,null,null], [null,null,null,null,null,
    null,null,null,null], [null,null,null,null,null,null,null,null,null], [null,null,null,null,
    null,null,null,null,null], [null,null,null,null,null,null,null,null,null], [null,null,null,
    null,null,null,null,null,null], [null,null,null,null,null,null,null,null,null], [null,null,
    null,null,null,null,null,null,null], [null,null,null,null,null,null,null,null,null]];
    var winArr = [null,null,null,null,null,null,null,null,null];
function start(){

    mouseClickMethod(placeSymbol);
}
function placeSymbol(e){
    var symbol = null;
    var txtXPosMod = 0;
    var x = e.getX();
    var y = e.getY();
    var xPosition = (Math.round(((x-(x%(getWidth()/9)))/(getWidth()/9))))+1;
    var yPosition = (Math.round(((y-(y%(getHeight()/9)))/(getHeight()/9))))*9+1;
    var elem = getElementAt(e.getX(),e.getY());
    var elem2 = getElementAt((getWidth()/9)*(xPosition - 1)+20+txtXPosMod, ((getHeight()/9)*(((yPosition-1)/9)+1)-30));
    if(elem != null){
        alert("Please pick an empty spot.");
    }else if(elem2 != null){
        alert("Please pick an empty spot.");
    }else{
    
    if(alternator == 0){
    var txt = new Text("X", "38pt Arial");
    }else if(alternator == 1){
    var txt = new Text("O", "38pt Arial");
    txtXPosMod = -3;
    }
    txt.setPosition((getWidth()/9)*(xPosition - 1)+5+txtXPosMod, ((getHeight()/9)*(((yPosition-1)/9)+1)-8));
    txt.setColor(Color.BLACK);
    add(txt);
    if(alternator == 0){
        symbol = "X"
    }else if(alternator == 1){
        symbol = "O"
    }
    addPlacementToArr(xPosition, yPosition, symbol);
    //print lines for debugging 
    //println(xPosition);
    //println(yPosition);
    //println(txt.getX());
    //println(txt.getY());
    if(alternator == 0){
        alternator = 1;
    }else{
        alternator = 0;
    }
}
}

function addPlacementToArr(x, y, text){
var finalI = NaN;
var finalJ = NaN;
var finalK = NaN;
var finalL = NaN;
for(var i = 0; i<27*3;i+=27){
    //println("i");
    for(var j = 0; j<9; j+=3){
         //println("j");
        for(var k = 1; k<27+1; k+=9){
            // println("k");
            for(var l = 1; l<3+1; l++){
                 //println("l");
                //println(i+j+k+l);
                if(i+j+k+l == x+y){
                   finalI = i; 
                   finalJ = j;
                   finalK = k;
                   finalL = l;
                }
            
            }
           
        }
      
    }
   
}
var indexOfMain = (finalI/9)+(finalJ/3);
var arr = mainArr[indexOfMain];
var indexOfArr = ((finalK-1)/3)+(finalL-1)
arr[indexOfArr] = text;
mainArr[indexOfMain] = arr;
//println(arr);
//println(indexOfMain);
checkForWin();
}

function checkArr(arr, index){
    

var finalSymbol = false;
var sentinel = false;
if(arr.length > 1){
for(var i = 0; i<9; i+=3){
    if(arr[i]==arr[i+1] && arr[i+1]==arr[i+2] && arr[i]!=null){
        finalSymbol = arr[i];
        sentinel = true;
    }
}
if(sentinel == false){
    for(var i = 0; i<3; i++){
        if(arr[i]==arr[i+3] && arr[i+3]==arr[i+6] && arr[i]!=null){
            finalSymbol = arr[i];
            sentinel = true;
        }
    }
}
if(sentinel == false){
    if(arr[0]==arr[4] && arr[4]==arr[8] && arr[0]!=null ){
        finalSymbol = arr[0];
    }else if(arr[2]==arr[4] && arr[4]==arr[6] && arr[2]!=null ){
        finalSymbol = arr[2];
    }else{
        finalSymbol = false;
    }
}   
if(sentinel == false){
    var tied = true;
    for(var i = 0; i<9; i++){
        if(arr[i] == null){
            tied = false;
        }
    }
    if(tied == true){
        winArr[index] = "Tied";
    }
}
if(finalSymbol!= false){
    //println(finalSymbol);
    var xMod = 0;
    if(finalSymbol == "O"){
        xMod = -8;
    }
    var x = index % 3;
    var y = (index -(index % 3))/3;
    var box = new Rectangle(getWidth()/3-7,getHeight()/3-10);
    box.setColor(Color.WHITE);
    box.setPosition(3+(getWidth()/3*x), 5+(getWidth()/3*y)+(27*y));
    var txtSymbol = new Text(finalSymbol, "120pt Arial");
    txtSymbol.setPosition(5+(getWidth()/3*x)+8+xMod, (5+(getWidth()/3*y))+(getHeight()/3-10)-20+(29*y));
    add(box);
    add(txtSymbol);
    arr[0]=finalSymbol;
    for(var i = 0; i<8; i++){
        arr.pop();
    }
    winArr[index]=finalSymbol;
}
}
return arr;
}

function checkForWin(){
    for(var i=0; i<9;i++){
        mainArr[i] = checkArr(mainArr[i],i);
    }
var winner = null;
for(var i = 0; i<9;i+=3){
    if(winArr[i]==winArr[i+1] && winArr[i+1]==winArr[i+2] && winArr[i] !== null){
        winner = winArr[i]
        }
    }
for(var i = 0; i<3;i+=1){
    if(winArr[i]==winArr[i+3] && winArr[i+3]==winArr[i+6] && winArr[i] !== null){
        winner=winArr[i];
        }
    }
if(winArr[0]==winArr[4]&&winArr[4]==winArr[8]&&winArr[0]!== null){
    
            winner=winArr[0];
        
    }else if(winArr[2]==winArr[4]&&winArr[4]==winArr[6]&&winArr[0]!==null){
    
            winner=winArr[2];
    
    }
   // println(winArr);
if(winner !== null && winner !== "Tied"){
    win(winner);
    }else{
        checkTie();
    }

}
function win(winner){
    removeAll();
    println(winner + "'s win!");
    var winTxt = new Text(winner+"'s", "180pt Arial");
    winTxt.setPosition(getWidth()/14,getHeight()/16*7);
    var winTxt2 = new Text("win", "180pt Arial");
    winTxt2.setPosition(getWidth()/13,getHeight()/8*7);
    removeAll();
    add(winTxt);
    add(winTxt2);
}
function checkTie(){
    var tied = true;
    for(var i = 0; i<9; i++){
        if(winArr[i] === null){
            tied = false;
        }
    }
    if(tied == true){
        tie();
    }
}
function tie(){
    removeAll();
    alert("The game is tied!");
}