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
                resultText = "Businessman of the Year";
                resultImageUrl = "https://pruebas.masaltos.com/img/cms/empresario.png";
                break;
            case 'b':
                resultText = "Sport";
                resultImageUrl = "https://pruebas.masaltos.com/img/cms/sport.png";
                break;
            case 'c':
                resultText = "Perfect Groom";
                resultImageUrl = "https://pruebas.masaltos.com/img/cms/novioperfecto.png";
                break;
            case 'd':
                resultText = "Nice man";
                resultImageUrl = "https://pruebas.masaltos.com/img/cms/niceman.png";
                break;
            case 'e':
                resultText = "Family man";
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
            <h1>What style are you looking for?</h1>
            <form id="quizForm">
                {/* Pregunta 1 */}
                <div className="question">
                    <p>1. What is your favorite activity during your free time?</p>
                    <label><input type="radio" name="q1" value="a" /> Professional events.</label>
                    <label><input type="radio" name="q1" value="b" /> Practicing sports or outdoor activities.</label>
                    <label><input type="radio" name="q1" value="c" /> Preparing for special events.</label>
                    <label><input type="radio" name="q1" value="d" /> Going out with friends.</label>
                    <label><input type="radio" name="q1" value="e" /> Spending time with family.</label>
                    <label><input type="radio" name="q1" value="f" /> Attending parties.</label>
                </div>

                {/* Pregunta 2 */}
                <div className="question">
                    <p>2. How would you describe your approach to fashion?</p>
                    <label><input type="radio" name="q2" value="a" /> Elegant and professional.</label>
                    <label><input type="radio" name="q2" value="b" /> Casual and comfortable.</label>
                    <label><input type="radio" name="q2" value="c" /> Refined and sophisticated.</label>
                    <label><input type="radio" name="q2" value="d" /> Attractive and versatile.</label>
                    <label><input type="radio" name="q2" value="e" /> Relaxed and comfortable.</label>
                    <label><input type="radio" name="q2" value="f" /> Trendy.</label>
                </div>

                {/* Pregunta 3 */}
                <div className="question">
                    <p>3. What type of events do you prefer to attend?</p>
                    <label><input type="radio" name="q3" value="a" /> Corporate events.</label>
                    <label><input type="radio" name="q3" value="b" /> Sports competitions.</label>
                    <label><input type="radio" name="q3" value="c" /> Weddings, anniversaries, and personal celebrations.</label>
                    <label><input type="radio" name="q3" value="d" /> Social gatherings, dinners, and outings with friends.</label>
                    <label><input type="radio" name="q3" value="e" /> Family activities, gatherings, and home dinners.</label>
                    <label><input type="radio" name="q3" value="f" /> Concerts, clubs, and nightlife events.</label>
                </div>

                {/* Pregunta 4 */}
                <div className="question">
                    <p>4. What is most important when choosing your outfit?</p>
                    <label><input type="radio" name="q4" value="a" /> Projecting elegance and professionalism.</label>
                    <label><input type="radio" name="q4" value="b" /> Comfort and performance.</label>
                    <label><input type="radio" name="q4" value="c" /> Style and impact on special occasions.</label>
                    <label><input type="radio" name="q4" value="d" /> Adaptability to different social situations.</label>
                    <label><input type="radio" name="q4" value="e" /> Comfort for daily life.</label>
                    <label><input type="radio" name="q4" value="f" /> Standing out at nightlife events.</label>
                </div>

                {/* Pregunta 5 */}
                <div className="question">
                    <p>5. Which style makes you feel most confident?</p>
                    <label><input type="radio" name="q5" value="a" /> A professional look that projects confidence.</label>
                    <label><input type="radio" name="q5" value="b" /> Clothes that allow freedom of movement and functionality.</label>
                    <label><input type="radio" name="q5" value="c" /> A refined style to stand out at special events.</label>
                    <label><input type="radio" name="q5" value="d" /> An outfit that shines at social gatherings.</label>
                    <label><input type="radio" name="q5" value="e" /> A relaxed and comfortable style for family time.</label>
                    <label><input type="radio" name="q5" value="f" /> A trendy look to shine at nightlife events.</label>
                </div>

                <button type="button" onClick={calculateResult}>Submit</button>
            </form>

            {/* Modal para mostrar el resultado */}
            <div id="resultModal" className="modal" style={{ display: 'none' }}>
                <div className="modal-content">
                    <p className="result-text" id="resultText">Your style is: {result}</p>
                    {resultImage && (
                        <div style={{ textAlign: 'center' }}>
                            <img src={resultImage} alt={result} style={{ width: '200px', height: 'auto', margin: '10px' }} />
                        </div>
                    )}
                    <button className="close-button" onClick={closeModal}>Close</button>
                </div>
            </div>
        </div>
    );
}

export default App;
