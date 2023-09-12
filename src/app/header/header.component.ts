import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  menuVisible: boolean = false;

// Función que oculta o muestra el menu
mostrarOcultarMenu(): void {
  const navElement = document.getElementById("nav");
  if (!navElement) return;

  if (this.menuVisible) {
    navElement.classList.remove("responsive");
    this.menuVisible = false;
  } else {
    navElement.classList.add("responsive");
    this.menuVisible = true;
  }
}


seleccionar(seccionId: string): void {
  const navElement = document.getElementById("nav");
  if (navElement) {
    navElement.classList.remove("responsive");
    this.menuVisible = false;
  }

  const seccion = document.getElementById(seccionId);
  if (seccion) {
    const targetY = seccion.getBoundingClientRect().top + window.scrollY;
    const startingY = window.scrollY;
    const distance = targetY - startingY;
    const startTime = performance.now();
    const duration = 1000; // Duración del desplazamiento en milisegundos

    const scrollStep = (timestamp: number) => {
      const currentTime = timestamp - startTime;
      const progress = Math.min(currentTime / duration, 1);
      window.scrollTo(0, startingY + distance * progress);

      if (currentTime < duration) {
        requestAnimationFrame(scrollStep);
      }
    };

    requestAnimationFrame(scrollStep);
  }
}

}
