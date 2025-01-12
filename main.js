document.addEventListener('DOMContentLoaded', function() {
    const button1 = document.getElementById('faq__button1');
    const button2 = document.getElementById('faq__button2');
    const button3 = document.getElementById('faq__button3');
    const button4 = document.getElementById('faq__button4');

    button1.addEventListener('click', function() {
        const answer = document.getElementById('answer1');
            if(answer.hidden){
                answer.hidden = false;
            }
            else{
                answer.hidden = true;
            }
    });

    button2.addEventListener('click', function() {
        const answer = document.getElementById('answer2');
            if(answer.hidden){
                answer.hidden = false;
            }
            else{
                answer.hidden = true;
            }
    });

    button3.addEventListener('click', function() {
        const answer = document.getElementById('answer3');
            if(answer.hidden){
                answer.hidden = false;
            }
            else{
                answer.hidden = true;
            }
    });

    button4.addEventListener('click', function() {
        const answer = document.getElementById('answer4');
            if(answer.hidden){
                answer.hidden = false;
            }
            else{
                answer.hidden = true;
            }
    });

});
