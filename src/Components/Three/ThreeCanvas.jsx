import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import "../Main/Home.css";

function ThreeCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Creamos la escena, cámara y renderizador
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Creamos un objeto en la escena
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x656b75 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Movemos la cámara hacia atrás para que se pueda ver el objeto
    camera.position.z = 5;

    // Creamos un bucle de animación para renderizar la escena
    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };

    animate();
  }, []);

  return (
    <div className="canvas-container">
      <div className="overlay">
        <div className="container">
          <canvas id="canvas" />
          <span className="title">Hello World!</span>
          <span>
            <p className="description">
              I am Gonzalo Andres Asis, React Front-end Developer.
            </p>
          </span>
        </div>
        <p className="name"></p>
      </div>
      <canvas ref={canvasRef} />
    </div>
  );
}

export default ThreeCanvas;
