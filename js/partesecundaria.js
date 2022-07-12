
if(screen.width<=480){
    var words=["BOTELLA", "AHORCADO", "ORACLE","XD","MOLDE","CARGAR","PATAS","RANA","ASIENTO","BALLESTA","MESSIRVE"];
    var board= document.getElementById("draw-mobile").getContext("2d");
    var lettersUsed = [];
    var correctLetters="";
    var lives=7;
    var point=0
    var drawCoordenate=20;
    var input=document.getElementById("input-mobile")

    function chooseWord(){
    var  wordChoosen= words[Math.floor(Math.random()*words.length)];
    console.log(wordChoosen);
    gameWord=wordChoosen
    return gameWord;

    }

    function drawLines(){
        
        board.linewidth=6;
        board.lineCap="round";
        board.lineJoin="round";
        board.strokeStyle= "#0A3871";
        board.beginPath()
        
        var spaceInLines=320/gameWord.length;
        for (let i=0 ; i<gameWord.length;i++){
            board.moveTo(drawCoordenate+(spaceInLines*i),500)
            board.lineTo(drawCoordenate+30+(spaceInLines*i),500)
        }
        board.stroke();
        board.closePath();  
        
    }

    drawLines(chooseWord()); 

    function writeCorrectLetter(index){
        board.font="bold 40px inter";
        board.linewidth=6;
        board.lineCap="round";
        board.lineJoin="round";
        board.fillStyle= "#0A3871";
        var spaceInLines=320/gameWord.length;
        board.fillText(gameWord[index],drawCoordenate+5+(spaceInLines*index), 480)
        point+=1;
    }

    function writeWrongLetter(letter,lives){
        board.font="500 40px inter";
        board.linewidth=6;
        board.lineCap="round";
        board.lineJoin="round";
        board.fillStyle= "gray";
        board.fillText(letter, drawCoordenate-200+(50*(10-lives)), 565 , 30 )
        console.log(lives);

    }

    function checkClickedKey(key){
        if (lettersUsed.length<1 || lettersUsed.indexOf(key)<0){
            lettersUsed.push(key);
            return false;
        }
        else{
            lettersUsed.push(key);
            return true;
        }

    }

    function addCorrectLetter(i){
        correctLetters+= gameWord[i].toUpperCase()
        
    }

    function addWrongLetter(a){
        if (gameWord.indexOf(a)<=0)
    {
        lives-=1;
    }}

    input.oninput = handleInput

    function handleInput(e){
        let letter=e.target.value.toUpperCase();
        

        if(!checkClickedKey(e.target.value)&&(lives!=0)&&(e.target.value.length==1)){
            console.log(e.target.value);
            if(gameWord.includes(letter)){
                
                addCorrectLetter(gameWord.indexOf(letter));
                for(let i=0; i<gameWord.length;i++){
                    if(gameWord[i]==letter){
                        writeCorrectLetter(i);

                    }
                }
            }
            else{
                
                addWrongLetter(letter)
                writeWrongLetter(letter,lives);
                
            }
            
        

            if(point==gameWord.length){
                alert("Ha ganado"),
                changePage("index.html");
            }
            
            

        }
        if(lives==(6)){
            drawCircle(200,150,35);
        }
        if(lives==(5)){
            drawLine(200,200,185,300);
        }
        if(lives==(4)){
            drawLine(200,150,300,375);
        }
        if(lives==(3)){
            drawLine(200,250,300,375);
        }
        if(lives==(2)){
            drawLine(200,150,200,260);
        }
        if(lives==(1)){
            drawLine(200,250,200,260);
        }
        if(lives==(0)){
            drawLine(200,200,50,115);
            drawLine(210,230,135,150);
            drawLine(230,210,135,150);
            drawLine(175,195,135,150);
            drawLine(195,175,135,150);
            drawCircle(210,175,5);
            drawText('Has perdido',75,415);
        }

    };
};