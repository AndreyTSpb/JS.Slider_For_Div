function slider2x1(params){
    let id_div_slider = params['id_div'],
        div_news = document.getElementById(id_div_slider);

    if(div_news !== null){
        let all_div = div_news.querySelectorAll(".block-news"),
            indexShow = 1,
            time_start = 3000;

        all_div.forEach(function(div){div.style.display = "none";});

        let view_div = 2;
        for(let i = view_div-2; i<view_div; i++){
            all_div[i].style.display = "block";
        }

        function showImg(index, nextIndex){
            /**
             * Проверка на первый
             */
            if(indexShow > all_div.length){
                indexShow = 1;
                nextIndex = indexShow + 2;
                index = indexShow;
            }else{
                indexShow = indexShow + 2;
            }
            /* Скрываем картинки и удаляем класс актив у индикаторов*/
            all_div.forEach(function(div){div.style.display = "none";});
            /* Показываем картинки начиная с index по  nextIndex*/
            for(let i = index; i < nextIndex; i++){
                all_div[i-1].style.display = "block";
                all_div[i-1].style.display = "block";
            }
        }

        /**
         * первый запуск
         */
        showImg(indexShow, indexShow + 2);
        /**
         * Прокрутка слайдера с задержкой sec *1000
         */
        setInterval(()=>{
            showImg(indexShow, indexShow + 2);
        }, time_start); // устанавливаем интервал перелистывания в милисекундах
    }
}
