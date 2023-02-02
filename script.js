const result = [
    {isim: "Yeliz", resim:"media/yeliz.jpg"},
    {isim: "Yaren", resim:"media/yaren.webp"},
    {isim: "Aybüke", resim:"media/aybuke.webp"},
    {isim: "Ayşenur", resim:"media/aysenur.webp"},
    {isim: "Şeydanur", resim:"media/seydanur.webp"},
    {isim: "Cansel", resim:"media/cansel.jpg"},
    {isim: "Tuğçe", resim:"media/tugce.jpg"},
    {isim: "Elif", resim:"media/elif.jpg"},
    {isim: "Simge", resim:"media/sımge.webp"}

]
const container = document.getElementById("question-container");
const background = document.querySelector(".background-filter");
const kismet = document.getElementById("kismet");
const aski = document.getElementById("aski");
const harryPotter = document.getElementById("harryPotter");
const questionElement = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const closeButton = document.querySelector(".close_btn");
const finishBtn = document.createElement("button");
const submitButton = document.querySelector(".submit");

let nextQuestion = 0;
kismet.addEventListener('click', () => {
    container.classList.remove('d-none');
    background.classList.remove('d-none');
    loadTest(0);
    console.log(kismet.getAttribute("data-name"));
})
aski.addEventListener('click', () => {
    container.classList.remove('d-none');
    background.classList.remove('d-none');
    loadTest(0);
    console.log(aski.getAttribute("data-name"));
})
harryPotter.addEventListener('click', () => {
    container.classList.remove('d-none');
    background.classList.remove('d-none');
    loadTest(0);
    console.log(harryPotter.getAttribute("data-name"));
})



function loadTest(next) {
    questionElement.innerHTML = data[next].soru;
    loadAnswer(0);
}

function loadAnswer(next) {
    a_text.innerHTML = data[next].cevaplar.a;
    b_text.innerHTML = data[next].cevaplar.b;
    c_text.innerHTML = data[next].cevaplar.c;
    d_text.innerHTML = data[next].cevaplar.d;
}

submitButton.addEventListener('click', () => {
    if(nextQuestion +1 < data.length){
        loadTest(nextQuestion + 1);
        loadAnswer(nextQuestion + 1);
        nextQuestion++;

    }else{
        const finishImg = document.createElement("img");
        const finish = document.createElement("h1");
        const finishtest = document.createElement("h2");
        const finishContainer = document.createElement("div");
        // bir button ekliyorum sona gelindiğinde sayfayı yenilemek için
        container.innerHTML="";
        finishBtn.innerHTML = "Bitir";
        finishBtn.classList.add("submit");
        finishContainer.classList.add("finish-container");
        finishContainer.appendChild(finishImg);
        finishContainer.appendChild(finish);
        finishContainer.appendChild(finishtest);
        finishContainer.appendChild(finishBtn);
        let random = Math.floor(Math.random() * result.length + 1);
        finish.innerHTML = result[random].isim;
        finishtest.classList.add("finish-test");
        finishtest.innerHTML = "hellö";
        finishImg.src = result[random].resim;
        container.appendChild(finishContainer);
    }
    /* herbir elemanın (inputun içindeki class adı .answer)
    tek tek seçili özelliğini(checked=false) kaldırdık */
    let deneme= document.querySelectorAll(".answer");
    deneme.forEach(element => element.checked= false);
})

    closeButton.addEventListener('click', () => {
        container.classList.add('d-none');
        background.classList.add('d-none');
        nextQuestion = 0;
    })

    finishBtn.addEventListener('click', () => {
        location.reload();
    })
