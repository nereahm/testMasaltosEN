import React from 'react';
import './App.css'; // Asegúrate de tener un archivo App.css para los estilos

function App() {
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
        let result;
        switch (maxAnswer) {
            case 'a':
                result = "Businessman of the Year";
                break;
            case 'b':
                result = "Sport";
                break;
            case 'c':
                result = "Perfect Groom";
                break;
            case 'd':
                result = "Nice man";
                break;
            case 'e':
                result = "Family man";
                break;
            case 'f':
                result = "Party man";
                break;
        }

        // Muestra el resultado en el pop-up
        document.getElementById("resultText").textContent = "Your style is: " + result;
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
                    <p>1. What is your favourite activity during your free time?</p>
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
                    <p>4. What is most important to you when choosing an outfit?</p>
                    <label><input type="radio" name="q4" value="a" /> Professional impression and elegance.</label>
                    <label><input type="radio" name="q4" value="b" /> Comfort and performance in activities.</label>
                    <label><input type="radio" name="q4" value="c" /> Style and impact for special occasions.</label>
                    <label><input type="radio" name="q4" value="d" /> Versatility for different social situations.</label>
                    <label><input type="radio" name="q4" value="e" /> Comfort and a casual approach for everyday life.</label>
                    <label><input type="radio" name="q4" value="f" /> The ability to stand out.</label>
                </div>

                {/* Pregunta 5 */}
                <div className="question">
                    <p>5. When do you feel most confident?</p>
                    <label><input type="radio" name="q5" value="a" /> With a polished, professional look that exudes confidence.</label>
                    <label><input type="radio" name="q5" value="b" /> In clothing that allows freedom of movement and functionality.</label>
                    <label><input type="radio" name="q5" value="c" /> With a refined style that shines at special events.</label>
                    <label><input type="radio" name="q5" value="d" /> In an outfit that helps you stand out in social gatherings.</label>
                    <label><input type="radio" name="q5" value="e" /> With a relaxed, comfortable style for family time.</label>
                    <label><input type="radio" name="q5" value="f" /> In trendy attire that makes you shine at nightlife events.</label>
                </div>

                <button type="button" onClick={calculateResult}>Send</button>
            </form>

            {/* Modal para mostrar el resultado */}
            <div id="resultModal" className="modal" style={{ display: 'none' }}>
                <div className="modal-content">
                    <p className="result-text" id="resultText"></p>
                    <button className="close-button" onClick={closeModal}>Close</button>
                </div>
            </div>
        </div>
    );
}

export default App;
