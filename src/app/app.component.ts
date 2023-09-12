import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cvfrancovillarruel';

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    this.efectoHabilidades();
  }

  efectoHabilidades(): void {
    const skills = document.getElementById("skills");
    if (skills) {
      const distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
      if (distancia_skills >= 300) {
        const habilidades = document.querySelectorAll(".progreso");
        habilidades.forEach((habilidad) => {
          const skillName = habilidad.getAttribute("data-skill");
          if (skillName) {
            habilidad.classList.add(this.getClassForSkill(skillName));
          }
        });
      }
    }
  }


  getClassForSkill(skillName: string): string {
    switch (skillName) {
      case "javascript":
        return "javascript";
      case "htmlcss":
        return "htmlcss";
      case "drupal":
        return "drupal";
        case "comunicacion":
        return "comunicacion";
        case "trabajo":
          return "trabajo";
          case "creatividad":
            return "creatividad";
            case "dedicacion":
        return "dedicacion";
        case "reactjs":
        return "reactjs";
        case "nodejs":
        return "nodejs";

       default:
        return ""; // Si no hay correspondencia, devolver una cadena vacía
    }
  }
}
