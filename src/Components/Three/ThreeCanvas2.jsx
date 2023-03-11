import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { TextureLoader } from "three";
import "./ThreeCanvas2.css";
import photo0 from "../../Static/photographs/0.jpg";
import photo1 from "../../Static/photographs/1.jpg";
import photo2 from "../../Static/photographs/2.jpg";
import photo3 from "../../Static/photographs/3.jpg";

function ThreeCanvas2() {
  const canvasRef = useRef(null);

  const textureLoader = new THREE.TextureLoader();

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

    const geometry = new THREE.PlaneGeometry(2, 2.3);
    const material = new THREE.MeshBasicMaterial({
      map: textureLoader.load(photo0),
    });
    const material1 = new THREE.MeshBasicMaterial({
      map: textureLoader.load(photo1),
    });
    const material2 = new THREE.MeshBasicMaterial({
      map: textureLoader.load(photo2),
    });
    const material3 = new THREE.MeshBasicMaterial({
      map: textureLoader.load(photo3),
    });

    const img0 = new THREE.Mesh(geometry, material);
    const img1 = new THREE.Mesh(geometry, material1);
    const img2 = new THREE.Mesh(geometry, material2);
    const img3 = new THREE.Mesh(geometry, material3);

    img0.position.set(0, 0, 0);
    img1.position.set(3, 1, 0);
    img2.position.set(3, -5, 0);
    img3.position.set(4, -2, 0);

    scene.add(img0, img1, img2, img3);

    img0.position.set();

    // for(let i = 0; i < 3; i++){
    //   const material = new THREE.MeshBasicMaterial({
    //     map: textureLoader.load(`../../Static/photographs/${i}.jpg`)
    //   })

    //   const img = new THREE.Mesh(geometry, material)
    //   img.position.set(1, i*1.8)

    //   scene.add(img)
    // }

    // const miSeccion = document.getElementById("scrolleable");

    // miSeccion.addEventListener("wheel", function (event) {
    //   event.preventDefault();
    //   miSeccion.scrollLeft += event.deltaY;
    // });

    // Movemos la cámara hacia atrás para que se pueda ver el objeto
    camera.position.z = 5;

    window.addEventListener("wheel", onMouseWheel);

    let y = 0;
    let position = 0;

    function onMouseWheel(event) {
      y = event.deltaY * 0.0007;
    }

    const raycaster = new THREE.Raycaster();

    const clock = new THREE.Clock();

    // Creamos un bucle de animación para renderizar la escena
    const animate = () => {
      requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      position += y;
      y *= 0.9;

      camera.position.y = position;
      renderer.render(scene, camera);
    };

    animate();
  }, []);

  return (
    <div id="section2">
      <div className="canvas-container">
        <canvas ref={canvasRef} />
      </div>
    </div>
  );
}

export default ThreeCanvas2;
