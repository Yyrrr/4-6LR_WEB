var sun = new Image();
var moon = new Image();
var earth = new Image();
var bok = new Image();
var am = new Image();
var f = new Image();
function init()
{
  sun.src = 'https://mdn.mozillademos.org/files/1456/Canvas_sun.png';
  moon.src = 'https://mdn.mozillademos.org/files/1443/Canvas_moon.png';
  earth.src = 'youtube-32.ico';
  bok.src = 'discord-2-32.ico';
  am.src = 'skype-32.ico';
  f.src = 'pizza-32.ico';
  window.requestAnimationFrame(draw); // отрисовка
}

function draw() 
{
  var ctx = document.getElementById('canvas').getContext('2d');

  ctx.globalCompositeOperation = 'destination-over'; // перекрытие картинок 
  ctx.clearRect(0,0,900,900); // чистка поля 300 на 300

  ctx.fillStyle = 'rgba(0,0,0,0.4)'; // базовый цвет
  ctx.save(); // сохранить
            ctx.translate(450,450);// двигаемся на середину
            var time = new Date();
            ctx.save(); 
            ctx.rotate( ((2*Math.PI)/10)*time.getSeconds() + ((2*Math.PI)/10000)*time.getMilliseconds() ); // повернуть
            ctx.translate(255,0); // сдвинемся
            ctx.fillRect(0,-30,100,50); // нарисовать прямоугольник с тенью
            ctx.drawImage(earth,-20,-20); // нарисовать землю
            ctx.save(); // сохранить состояние
                        ctx.rotate( ((2*Math.PI)/6)*time.getSeconds() + ((2*Math.PI)/6000)*time.getMilliseconds() ); // повернуть
                        ctx.translate(0,55);
                        ctx.drawImage(moon,-3.5,-3.5);
            ctx.restore();// востанавить ИНАЧЕ БУДЕТ КРИВО И КОСО !!!!!!!
            ctx.restore();
            ctx.save(); 
            ctx.rotate( ((2*Math.PI)/20)*time.getSeconds() + ((2*Math.PI)/20000)*time.getMilliseconds() ); // повернуть
            ctx.translate(310,0); // сдвинемся
            ctx.fillRect(0,-30,100,50); // нарисовать прямоугольник с тенью
            ctx.drawImage(bok,-20,-20); // нарисовать землю
            ctx.restore();
            ctx.save(); 
            ctx.rotate( ((2*Math.PI)/60)*time.getSeconds() + ((2*Math.PI)/60000)*time.getMilliseconds() ); 
            ctx.translate(380,0); // сдвинемся
            ctx.fillRect(0,-30,100,50); // нарисовать прямоугольник с тенью
            ctx.drawImage(am,-20,-20); // нарисовать землю
            ctx.restore();
            ctx.save(); 
            ctx.rotate( ((2*Math.PI)/70)*time.getSeconds() + ((2*Math.PI)/70000)*time.getMilliseconds() ); 
            ctx.translate(450,0); // сдвинемся
            ctx.fillRect(0,-30,100,50); // нарисовать прямоугольник с тенью
            ctx.drawImage(f,-20,-20); // нарисовать землю
            ctx.restore();
  ctx.restore();// востанавить
  ctx.strokeStyle = 'rgba(0,0,255,0.4)'; // цвет траектории
  ctx.beginPath(); // контур 
  ctx.arc(450,450,250,0,Math.PI*2,false); // 
   ctx.stroke();// отрисовать
   ctx.strokeStyle = 'rgba(0,255,255,0.4)'; // цвет траектории
   ctx.beginPath(); // контур  
  ctx.arc(450,450,310,0,Math.PI*2,false); // 
  ctx.stroke();// отрисовать
  ctx.strokeStyle = 'rgba(255,0,255,0.4)'; // цвет траектории
  ctx.beginPath(); // контур 
  ctx.arc(450,450,380,0,Math.PI*2,false); // 
  ctx.stroke();// отрисовать
  ctx.strokeStyle = 'rgba(255,255,0,0.4)'; // цвет траектории
  ctx.beginPath(); // контур 
  ctx.arc(450,450,450,0,Math.PI*2,false); // 
  ctx.stroke();// отрисовать

  ctx.drawImage(sun,0,0,900,900); // фон

  window.requestAnimationFrame(draw);
}

init();
