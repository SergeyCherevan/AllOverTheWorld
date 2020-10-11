{
    class Game_task
    {


        constructor(word, url1, url2, url3) {
            this.word = word;
            this.url1Right = url1; // Right answer
            this.url2 = url2;
            this.url3 = url3;
        }

    }

    let level1_tasks = Array(3);

    for(let i = 0; i < level1_tasks.length; i++)
    {
        level1_tasks[i] = new Game_task('Cat', 'images/Owl.png', 'images/Owl.png', 'images/Owl.png');
    }

    let currentTask = 0;
let currentLevelOfGame = 1;
    switch (currentLevelOfGame) {
        case 1:
            InitializationOfTask(level1_tasks, 0);
    }

    function InitializationOfTask(arrayOfTasks, number) {
        let task = arrayOfTasks[number];

        document.getElementById('QuestionWord').innerText = task.word;

        let imagesURL = [task.url1Right, task.url2, task.url3];

        let firstDecision = getRandomInt(0, 3);

        document.getElementById('img_1').src = imagesURL[firstDecision];
        if(firstDecision == task.url1Right)
        {
            document.getElementById('img_1').addEventListener('click',Rigth_answer);
        } else
        {
            document.getElementById('img_1').addEventListener('click',Incorrect_answer);
        }
        imagesURL.splice(firstDecision, 1);

        let secondDecision = getRandomInt(0, 2);
        document.getElementById('img_2').src = imagesURL[secondDecision];
        if(secondDecision == task.url1Right)
        {
            document.getElementById('img_2').addEventListener('click',Rigth_answer);
        }else
            document.getElementById('img_2').addEventListener('click',Incorrect_answer);
        imagesURL.splice(secondDecision, 1);

        document.getElementById('img_3').src = imagesURL[0];
        if(imagesURL[0] == task.url1Right)
        {
            document.getElementById('img_3').addEventListener('click',Rigth_answer);
        }else
            document.getElementById('img_3').addEventListener('click',Incorrect_answer);


    }


    function Rigth_answer() {
        alert("Work");
        document.getElementsByClassName('speech')[0].innerHTML="Congratulation";
    }
    function Incorrect_answer()
    {
        document.getElementsByClassName('speech')[0].innerHTML="Неправильно, попробуй ещё";
    }

}




function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}