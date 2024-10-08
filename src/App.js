import React, { useState } from 'react';
import './App.css'; // Asegúrate de tener un archivo App.css para los estilos

function App() {
    const [result, setResult] = useState("");
    const [resultImage, setResultImage] = useState("");

    const calculateResult = () => {
        const answers = { a: 0, b: 0, c: 0, d: 0, e: 0, f: 0 };
        const form = document.forms["quizForm"];

        // Recorre las preguntas y acumula las respuestas
        for (let i = 1; i <= 5; i++) {
            const selected = form["q" + i].value;
            if (selected) {
                answers[selected]++;
            }
        }

        // Encuentra la respuesta mayoritaria
        let maxAnswer = 'a';
        for (const key in answers) {
            if (answers[key] > answers[maxAnswer]) {
                maxAnswer = key;
            }
        }

        // Define los resultados según la respuesta mayoritaria
        let resultText = "";
        let resultImageUrl = "";
        switch (maxAnswer) {
            case 'a':
                resultText = "Empreendedor do ano";
                resultImageUrl = "https://pruebas.masaltos.com/img/cms/empresario.png";
                break;
            case 'b':
                resultText = "Sport";
                resultImageUrl = "https://pruebas.masaltos.com/img/cms/sport.png";
                break;
            case 'c':
                resultText = "Noivo perfeito";
                resultImageUrl = "https://pruebas.masaltos.com/img/cms/novio.png";
                break;
            case 'd':
                resultText = "Nice man";
                resultImageUrl = "https://pruebas.masaltos.com/img/cms/niceman.png";
                break;
            case 'e':
                resultText = "Familiar";
                resultImageUrl = "https://pruebas.masaltos.com/img/cms/familiar.png";
                break;
            case 'f':
                resultText = "Party man";
                resultImageUrl = "https://pruebas.masaltos.com/img/cms/fiestero.png";
                break;
        }

        // Actualiza el estado con el resultado y la imagen
        setResult(resultText);
        setResultImage(resultImageUrl);

        // Muestra el resultado en el pop-up
        document.getElementById("resultModal").style.display = "flex";
    };

    const closeModal = () => {
        document.getElementById("resultModal").style.display = "none";
    };

    return (
        <div className="quiz-container">
            <h1>Que estilo você procura?</h1>
            <form id="quizForm">
                {/* Pergunta 1 */}
                <div className="question">
                    <p>1. Qual é a sua atividade favorita durante o tempo livre?</p>
                    <label><input type="radio" name="q1" value="a" /> Eventos profissionais.</label>
                    <label><input type="radio" name="q1" value="b" /> Pratique esportes ou atividades ao ar livre.</label>
                    <label><input type="radio" name="q1" value="c" /> Preparativos para eventos especiais.</label>
                    <label><input type="radio" name="q1" value="d" /> Saia com amigos.</label>
                    <label><input type="radio" name="q1" value="e" /> Passe algum tempo com a família.</label>
                    <label><input type="radio" name="q1" value="f" /> Participe de festas.</label>
                </div>

                {/* Pergunta 2 */}
                <div className="question">
                    <p>2. Como você descreveria sua abordagem à moda?</p>
                    <label><input type="radio" name="q2" value="a" /> Elegante e profissional.</label>
                    <label><input type="radio" name="q2" value="b" /> Casual e confortável.</label>
                    <label><input type="radio" name="q2" value="c" /> Refinado e sofisticado.</label>
                    <label><input type="radio" name="q2" value="d" /> Atraente e versátil.</label>
                    <label><input type="radio" name="q2" value="e" /> Descontraído e confortável.</label>
                    <label><input type="radio" name="q2" value="f" /> Na moda.</label>
                </div>

                {/* Pergunta 3 */}
                <div className="question">
                    <p>3. Que tipo de eventos você prefere participar?</p>
                    <label><input type="radio" name="q3" value="a" /> Eventos de empresa.</label>
                    <label><input type="radio" name="q3" value="b" /> Competições esportivas.</label>
                    <label><input type="radio" name="q3" value="c" /> Casamentos, aniversários e celebrações pessoais.</label>
                    <label><input type="radio" name="q3" value="d" /> Reuniões sociais e jantares com amigos.</label>
                    <label><input type="radio" name="q3" value="e" /> Atividades familiares e jantares em casa.</label>
                    <label><input type="radio" name="q3" value="f" /> Concertos, clubes e eventos noturnos.</label>
                </div>

                {/* Pergunta 4 */}
                <div className="question">
                    <p>4. O que é mais importante ao escolher sua roupa?</p>
                    <label><input type="radio" name="q4" value="a" /> Projetar elegância e profissionalismo.</label>
                    <label><input type="radio" name="q4" value="b" /> Conforto e desempenho.</label>
                    <label><input type="radio" name="q4" value="c" /> Estilo e impacto em ocasiões especiais.</label>
                    <label><input type="radio" name="q4" value="d" /> Adaptabilidade a diferentes situações sociais.</label>
                    <label><input type="radio" name="q4" value="e" /> Conforto para o dia a dia.</label>
                    <label><input type="radio" name="q4" value="f" /> Destacar em eventos noturnos.</label>
                </div>

                {/* Pergunta 5 */}
                <div className="question">
                    <p>5. Com qual estilo você se sente mais seguro?</p>
                    <label><input type="radio" name="q5" value="a" /> Um look profissional que projete confiança.</label>
                    <label><input type="radio" name="q5" value="b" /> Roupas que permitam liberdade de movimento e funcionalidade.</label>
                    <label><input type="radio" name="q5" value="c" /> Um estilo refinado para destacar em eventos especiais.</label>
                    <label><input type="radio" name="q5" value="d" /> Uma vestimenta que brilha em reuniões sociais.</label>
                    <label><input type="radio" name="q5" value="e" /> Um estilo relaxado e confortável para passar tempo com a família.</label>
                    <label><input type="radio" name="q5" value="f" /> Um look na moda para brilhar em eventos noturnos.</label>
                </div>

                <button type="button" onClick={calculateResult}>Enviar</button>
            </form>

            {/* Modal para mostrar o resultado */}
            <div id="resultModal" className="modal" style={{ display: 'none' }}>
                <div className="modal-content">
                    <p className="result-text" id="resultText">Seu estilo é: {result}</p>
                    {resultImage && (
                        <div style={{ textAlign: 'center' }}>
                            <img src={resultImage} alt={result} style={{ width: '200px', height: 'auto', margin: '10px' }} />
                        </div>
                    )}
                    <button className="close-button" onClick={closeModal}>Fechar</button>
                </div>
            </div>
        </div>
    );
}

export default App;
