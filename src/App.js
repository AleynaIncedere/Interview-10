import React, { useState } from "react";
import './styles.css';

const ONE =
  "https://images.pexels.com/photos/2249528/pexels-photo-2249528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
const TWO =
  "https://images.pexels.com/photos/1061141/pexels-photo-1061141.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
const THREE =
  "https://images.pexels.com/photos/2249530/pexels-photo-2249530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
const FOUR =
  "https://images.pexels.com/photos/1061139/pexels-photo-1061139.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
const FIVE =
  "https://images.pexels.com/photos/1010973/pexels-photo-1010973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
const SIX =
  "https://images.pexels.com/photos/4772874/pexels-photo-4772874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

const images = [ONE, TWO, THREE, FOUR, FIVE, SIX];

function App() {
  return <Captcha />;
}

const Captcha = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [correctImage, setCorrectImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [questionText, setQuestionText] = useState("");

  const getRandomIndex = () => Math.floor(Math.random() * images.length);

  const startCaptcha = () => {
    const randomImageIndex = getRandomIndex();
    setCorrectImage(randomImageIndex);
    setQuestionText(`Lütfen ${randomImageIndex + 1}. resmi seçin`); 
    setIsModalOpen(true);
    setErrorMessage(""); 
  };

  const handleImageSelect = (index) => {
    if (index === correctImage) {
      alert("Başarıyla doğrulandı!");
      setIsModalOpen(false);
      setSelectedImage(null);
      setCorrectImage(null);
      setQuestionText("");
    } else {
      setErrorMessage("Yanlış seçim! Lütfen tekrar deneyin.");
    }
  };

  return (
    <div>
      <button onClick={startCaptcha}>Captcha Başlat</button>

      {isModalOpen && (
        <div style={modalStyle}>
          <div style={modalContentStyle}>
            <h2>{questionText}</h2> 
            <div style={imageContainerStyle}>
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Image ${index + 1}`}
                  style={imageStyle}
                  onClick={() => handleImageSelect(index)}
                />
              ))}
            </div>
            {errorMessage && <p style={errorMessageStyle}>{errorMessage}</p>}
          </div>
        </div>
      )}
    </div>
  );
};

const modalStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const modalContentStyle = {
  backgroundColor: "#fff",
  padding: "20px",
  borderRadius: "10px",
  textAlign: "center",
};

const imageContainerStyle = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
};

const imageStyle = {
  width: "100px",
  height: "100px",
  margin: "10px",
  cursor: "pointer",
  borderRadius: "8px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  transition: "transform 0.2s", 
};

const errorMessageStyle = {
  color: "red",
  marginTop: "10px",
  fontWeight: "bold",
};

export default App;
