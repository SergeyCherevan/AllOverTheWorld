{
class Game_task
{


    constructor(word, url1,url2,url3) {
        this.word = word;
        this.url1 = url1;
        this.url2 = url2;
        this.url3 = url3;
    }

}




for( let i = 0; i < level1.length;i++ )
{
    alert(level1[i].word);
}
alert("sDS");
    document.getElementById('img_1').addEventListener('click',Rigth_answer);
    function Rigth_answer() {
        alert("Work");
        document.getElementsByClassName('speech')[0].innerHTML="Congratulation";
    }
}