
   start.onclick = function start() {

    document.getElementById('settings').style.display = 'none';
    document.getElementById('game').style.display = 'block';
    game();
    endGame();
   }

   setTimeout( function endGame() {
    document.getElementById('game').style.display = 'none';
    document.getElementById('finish').style.display = 'block';
},10000);

circle_size.onchange = function size() {

    let size = this.value;

    document.getElementById('show_circle').style.width = size + 'px';
    document.getElementById('show_circle').style.height = size + 'px';
    document.getElementById('circle_width_show').innerHTML = size;


    }
   
    reset.onclick = function reset() {

        document.getElementById('finish').style.display = 'none';

        document.getElementById('settings').style.display = 'block';


    }


    a = 0;

  circle.onclick = function score() {

    a++;

    document.getElementById('your_score').innerHTML = a;

   }


   setInterval(function game() {

        let x = Math.floor(Math.random() * 80);
        let y = Math.floor(Math.random() * 550);

        document.getElementById('circle').style.left = x + '%';
        document.getElementById('circle').style.top = y + 'px';

        document.getElementById('circle').style.width = size + 'px';
        document.getElementById('circle').style.height = size + 'px';

        
    },1000);

    

// //настройка круга

// circle_size.onchange = function () {
//     let size = this.value;
//     document.getElementById('show_circle').style.width = size + 'px';
//     document.getElementById('show_circle').style.height = size + 'px';
//     document.getElementById('circle_width_show').innerHTML = size;
// }


// //Игра

// let x = 0;
// let y = 0;

// function game() {
//     x = Math.floor(Math.random() * 80);
//     y = Math.floor(Math.random() * 550);
//     document.getElementById('circle').style.left = x + '%';
//     document.getElementById('circle').style.top = y + 'px';
// }

// //Запуск и конец игры

// let start = document.getElementById('start');

// start.onclick = function () {
//     document.getElementById('settings').style.display = 'none';
//     document.getElementById('game').style.display = 'block';
//     setInterval(game,500);
//     setTimeout(function () {
//         document.getElementById('game').style.display = 'none';
//         document.getElementById('finish').style.display = 'block';
//          x = 0;
//          y = 0;
//     }, 10000);
// }

// a = 0;

// circle.onclick = function() {
//     a++;
//     document.getElementById('your_score').innerHTML = a;

// }

// reset.onclick = function() {
//     document.getElementById('finish').style.display = 'none';
//     document.getElementById('settings').style.display = 'block';
// }

//     const start = document.getElementById('start');
//     const game = document.getElementById('game');

//     circle_size.onchange = function size() {
//         let size = this.value;
//             document.getElementById('show_circle').style.width = size + 'px';
//             document.getElementById('show_circle').style.height = size + 'px';
//             document.getElementById('circle_size_show').innerHTML = size;
//     }
//     function easy() {
//         let x = Math.floor(Math.random()*75);
//         let y = Math.floor(Math.random()*700);

//             document.getElementsById('game').style.display = block;
//             document.getElementsById('settings').style.display = none;
//     }

//   start.onclick = function start() {
//         let rad = document.getElementsByName('dificult');

//             for(let i = 0;i<rad.length;i++) {
//                 if (rad[i].checked) {
//                     if(i === 0) {
//                         alert('Сложность - Легкая');
//                         document.getElementById('settings').style.display = none;
//                         document.getElementById('game').style.display = block;
//                     }
//                     else if (i === 1) {
//                         alert('Сложность - Нормальная');
//                     }
//                     else if (i === 2) {
//                         alert('Сложность - Сложная');
//                     }
//                 }
//             }
//     }

