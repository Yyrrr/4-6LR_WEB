
    document.addEventListener('DOMContentLoaded', function () 
    {
      // конечная дата
      const deadline = new Date(2021, 11, 25);
      // id таймера
      let timerId = null;
      
      // вычисляем разницу дат 
      function countdownTimer() 
        {
            const diff = deadline - new Date();
  
            const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
            const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
            const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
            const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
            // нолики приписываем
            $days.textContent = days < 10 ? '0' + days : days;
            $hours.textContent = hours < 10 ? '0' + hours : hours;
            $minutes.textContent = minutes < 10 ? '0' + minutes : minutes;
            $seconds.textContent = seconds < 10 ? '0' + seconds : seconds;
            // и слова
            $days.dataset.title = 'дней';
            $hours.dataset.title = 'часов';
            $minutes.dataset.title =  'минут';
            $seconds.dataset.title =  'секунд';
      }
      // получаем элементы, содержащие компоненты даты
      const $days = document.querySelector('.timer__days');
      const $hours = document.querySelector('.timer__hours');
      const $minutes = document.querySelector('.timer__minutes');
      const $seconds = document.querySelector('.timer__seconds');
      // вызываем функцию countdownTimer
      countdownTimer();
      // вызываем функцию countdownTimer каждую секунду
      timerId = setInterval(countdownTimer, 1000);
    });