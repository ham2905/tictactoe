let initialClick = 0;

const buttonClick = (index) => {
    if(initialClick % 2 == 0){
        document.getElementsByClassName('btn')[index].innerHTML = 'X';
        document.getElementsByClassName('btn')[index].disabled = true;
        initialClick++;
        
        
    }
    else if(initialClick % 2 != 0){
        document.getElementsByClassName('btn')[index].innerHTML = '0';
        document.getElementsByClassName('btn')[index].disabled = true;
        initialClick++;
        
    }
}

const winner = () => {
    const winX = 'Player with X won!';
    const win0 = 'Player eith 0 won!';

    // Coloum 1
    if(document.getElementsByClassName('btn')[2].childNodes[0].nodeValue == "X" && (document.getElementsByClassName('btn')[0].childNodes[0].nodeValue == 'X' && document.getElementsByClassName('btn')[1].childNodes[0].nodeValue == 'X')){
        gameOver('X'); // X Win
    }
    else if(document.getElementsByClassName('btn')[2].childNodes[0].nodeValue == "0" && (document.getElementsByClassName('btn')[0].childNodes[0].nodeValue == '0' && document.getElementsByClassName('btn')[1].childNodes[0].nodeValue == '0')){
        gameOver('0'); // 0 win
    }

    // Coloum 2
    else if(document.getElementsByClassName('btn')[5].childNodes[0].nodeValue =="X" && (document.getElementsByClassName('btn')[3].childNodes[0].nodeValue == 'X' && document.getElementsByClassName('btn')[4].childNodes[0].nodeValue == 'X')){
        gameOver('X'); // X Win
    }
    else if(document.getElementsByClassName('btn')[5].childNodes[0].nodeValue == "0" && (document.getElementsByClassName('btn')[3].childNodes[0].nodeValue == '0' && document.getElementsByClassName('btn')[4].childNodes[0].nodeValue == '0')){
        gameOver('0'); // 0 win
    }

    // Coloum 3
    else if(document.getElementsByClassName('btn')[8].childNodes[0].nodeValue == "X" && (document.getElementsByClassName('btn')[6].childNodes[0].nodeValue == 'X' && document.getElementsByClassName('btn')[7].childNodes[0].nodeValue == 'X')){
        gameOver('X'); // X Win
    }
    else if(document.getElementsByClassName('btn')[8].childNodes[0].nodeValue == '0' && (document.getElementsByClassName('btn')[6].childNodes[0].nodeValue == '0' && document.getElementsByClassName('btn')[7].childNodes[0].nodeValue == '0')){
        gameOver('0'); // 0 win
    }

    //Row 1
    else if(document.getElementsByClassName('btn')[6].childNodes[0].nodeValue == 'X' && (document.getElementsByClassName('btn')[0].childNodes[0].nodeValue == 'X' && document.getElementsByClassName('btn')[3].childNodes[0].nodeValue == 'X')){
        gameOver('X'); // X win
    }
    else if(document.getElementsByClassName('btn')[6].childNodes[0].nodeValue == '0' && (document.getElementsByClassName('btn')[0].childNodes[0].nodeValue == '0' && document.getElementsByClassName('btn')[3].childNodes[0].nodeValue == '0')){
        gameOver('0'); // 0 win
    }
    
    //Row 2
    else if(document.getElementsByClassName('btn')[7].childNodes[0].nodeValue == 'X' && (document.getElementsByClassName('btn')[1].childNodes[0].nodeValue == 'X' && document.getElementsByClassName('btn')[4].childNodes[0].nodeValue == 'X')){
        gameOver('X'); // X win
    }
    else if(document.getElementsByClassName('btn')[7].childNodes[0].nodeValue == '0' && (document.getElementsByClassName('btn')[1].childNodes[0].nodeValue == '0' && document.getElementsByClassName('btn')[4].childNodes[0].nodeValue == '0')){
        gameOver('0'); // 0 win
    }

    //Row 3
    else if(document.getElementsByClassName('btn')[8].childNodes[0].nodeValue == 'X' && (document.getElementsByClassName('btn')[2].childNodes[0].nodeValue == 'X' && document.getElementsByClassName('btn')[5].childNodes[0].nodeValue == 'X')){
        gameOver('X'); // X win
    }
    else if(document.getElementsByClassName('btn')[8].childNodes[0].nodeValue == '0' && (document.getElementsByClassName('btn')[2].childNodes[0].nodeValue == '0' && document.getElementsByClassName('btn')[5].childNodes[0].nodeValue == '0')){
        gameOver('0'); // 0 win
    }

    //Diagonal Left to Right

    else if(document.getElementsByClassName('btn')[8].childNodes[0].nodeValue == 'X' && (document.getElementsByClassName('btn')[0].childNodes[0].nodeValue == 'X' && document.getElementsByClassName('btn')[4].childNodes[0].nodeValue == 'X')){
        gameOver('X'); // X win
    }
    else if(document.getElementsByClassName('btn')[8].childNodes[0].nodeValue == '0' && (document.getElementsByClassName('btn')[0].childNodes[0].nodeValue == '0' && document.getElementsByClassName('btn')[4].childNodes[0].nodeValue == '0')){
        gameOver('0'); // 0 win
    }

    //Diagonal Right to Left
    else if(document.getElementsByClassName('btn')[6].childNodes[0].nodeValue == 'X' && (document.getElementsByClassName('btn')[2].childNodes[0].nodeValue == 'X' && document.getElementsByClassName('btn')[4].childNodes[0].nodeValue == 'X')){
        gameOver('X'); // X win
    }
    else if(document.getElementsByClassName('btn')[6].childNodes[0].nodeValue == '0' && (document.getElementsByClassName('btn')[2].childNodes[0].nodeValue == '0' && document.getElementsByClassName('btn')[4].childNodes[0].nodeValue == '0')){
        gameOver('0'); // 0 win
    }
    else if(initialClick == 9){
        alert('Game Tied');
    }


}

const gameOver = (win) => {
    if(win == 'X'){
        if(confirm('Player X Won' + '\n' + 'Press OK to restart')){
            document.location.reload();
        }
        else window.open("exit.html", "Thanks for playing!");
        
    }
    else {
        if(confirm('Player 0 Won' + '\n' + 'Press OK to restart')){
            document.location.reload();
        }
        else window.open("exit.html", "Thanks for playing!");
        
    }
    }
    

