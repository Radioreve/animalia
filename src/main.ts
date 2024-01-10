import "./style.css";
import img1 from "./images/1.jpg";
import img2 from "./images/2.jpg";
import img3 from "./images/3.jpg";

import goatScreaming from "./sounds/goat.mp3";

const addImage = (imgUrl: string) => {
  const img = new Image();
  img.src = imgUrl;
  document.getElementById("article")!.append(img);
  img.addEventListener("click", () => {
    const audioContext = new AudioContext();
    const audioElement = new Audio(goatScreaming);
    const audioSource = audioContext.createMediaElementSource(audioElement);
    audioSource.connect(audioContext.destination);
    audioElement.play();
  });
};

[img1, img2, img3].forEach(addImage);
