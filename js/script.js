let questions = document.querySelectorAll(".question");
function checkAnswer(question, answear) {
    let feedback = document.querySelector(`#feedback${question}`);
    let info = document.querySelector(`#info${question}`);

    let inputSelected = document.querySelector(`input[name="q${question}"]:checked`);
    feedback.style.display = "block";

    if (inputSelected?.value == answear) {
        feedback.innerHTML = '<p class="correct back">✅ Parabéns! Resposta correta!</p>';
        info.style.display = 'flex';

        let options = document.querySelectorAll(`input[name="q${question}"]`);

        for (let i = 0; i < options.length; i++) {
            options[i].disabled = true;
        };

        document.querySelector(`#respond${question}`).disabled = true;

        if (question == questions.length) {
            setTimeout(() => {
                document.querySelector("#quiz-complete").classList.add('show');
            }, 2000)
        } else {
            setTimeout(() => {
                document.querySelector(`#question${question + 1}`).classList.add('show');
            }, 2500);
        }
    } else if (inputSelected == null) {
        feedback.innerHTML = '<p class="null back">↩️ Considere selecionar uma resposta.</p>';
        feedback.style.display = 'block';
    } else {
        feedback.innerHTML = '<p class="incorrect back">❌ Parabéns! Resposta errada!</p>';
        feedback.style.display = 'block';
    }
}

function checkAnswerMultiple(question, answears) {
    // let allInputs = document.querySelectorAll(`input[name="q${question}"]`);
    let inputsSelected = document.querySelectorAll(`input[name="q${question}"]:checked`);

    let feedback = document.querySelector(`#feedback${question}`);
    let info = document.querySelector(`#info${question}`);

    feedback.style.display = "block";

    let acertos = 0;
    let temErrada = false;

    for (let i = 0; i < inputsSelected.length; i++) {
        if (answears.includes(inputsSelected[i].value)) {
            acertos++;
        } else {
            temErrada = true;
        }
    }

    if (acertos == answears.length && !temErrada) {
        feedback.innerHTML = '<p class="correct back">✅ Parabéns! Resposta correta!</p>';
        info.style.display = 'flex';

        let options = document.querySelectorAll(`input[name="q${question}"]`);
        for (let i = 0; i < options.length; i++) {
            options[i].disabled = true;
        }
        document.querySelector(`#respond${question}`).disabled = true;


        setTimeout(() => {
            document.querySelector(`#question${question + 1}`).classList.add('show');
        }, 2500);

    } else {
        feedback.innerHTML = '<p class="incorrect back">❌ Resposta incorreta! Tente novamente.</p>';

        for (let i = 0; i < inputsSelected.length; i++) {
            inputsSelected[i].checked = false;
        }
    }

}

function changeFooter(section) {
    document.querySelector(`#info-${section}`).classList.add('active');
    if (section == "geral") {
        document.querySelector(`#info-references`).classList.remove('active');
    } else {
        document.querySelector(`#info-geral`).classList.remove('active');
    }
}