import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import "../Main/Home.css";

function ThreeCanvas() {
  const canvasRef = useRef(null);

  // Texture Loader
  const textureLoader = new THREE.TextureLoader();
  const container = document.getElementById("canvas-container");

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
      antialias: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Creamos un objeto en la escena
    const geometry = new THREE.OctahedronGeometry(5.4, 0);
    const material = new THREE.MeshStandardMaterial({
      color: 0x858282,
    });

    // material.normalMap = texture
    material.metalness = 0;
    material.roughness = 0.8;

    const sphere = new THREE.Mesh(geometry, material);

    sphere.position.y = 0;
    sphere.position.x = 0;

    scene.add(sphere);

    // Movemos la cámara hacia atrás para que se pueda ver el objeto
    camera.position.z = 10;

    document.addEventListener("mousemove", onMouseMove);

    let mouseX = 0;
    let mouseY = 0;

    let targetX = 0;
    let targetY = 0;

    const windowX = window.innerWidth / 2;
    const windowY = window.innerWidth / 2;

    function onMouseMove(event) {
      mouseX = event.clientX - windowX;
      mouseY = event.clientY - windowY;
    }

    window.addEventListener("scroll", updateSphere);

    function updateSphere() {
      sphere.position.y = window.scrollY * 0.009;
    }

    // Lights

    const pointLight = new THREE.PointLight(0xffffff, 0.4);
    pointLight.position.x = 7;
    pointLight.position.y = 10;
    pointLight.position.z = 3;
    scene.add(pointLight);

    const pointLightHelper1 = new THREE.PointLightHelper(pointLight, 2);
    scene.add(pointLightHelper1);

    const pointLight2 = new THREE.PointLight(0xffffff, 0.4);
    pointLight2.position.x = -7;
    pointLight2.position.y = -10;
    pointLight2.position.z = 3;
    scene.add(pointLight2);

    const pointLightHelper2 = new THREE.PointLightHelper(pointLight, 2);
    scene.add(pointLightHelper2);

    const clock = new THREE.Clock();

    // Creamos un bucle de animación para renderizar la escena
    const animate = () => {
      targetX = mouseX * 0.001;
      targetY = mouseY * 0.001;

      requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      sphere.rotation.y = 0.1 * elapsedTime;
      sphere.rotation.x = 0.1 * elapsedTime;
      sphere.rotation.y += 0.15 * (targetX - sphere.rotation.y);
      sphere.rotation.x += 0.15 * (targetY - sphere.rotation.x);

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
