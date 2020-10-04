import React, { useEffect } from "react";
import "./App.css";

function App() {
    useEffect(() => {
        const accessCamera = async () => {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            document.querySelector('#video').srcObject = stream;
        }

        accessCamera();
    })
    return (
        <video id="video" width="720" height="540" autoPlay></video>
    );
}

export default App;
