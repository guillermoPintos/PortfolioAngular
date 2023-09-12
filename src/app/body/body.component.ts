import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements AfterViewInit {
  constructor() {}

  ngAfterViewInit() {
    this.applySkillAnimations();
  }

  applySkillAnimations() {
    const skills = document.querySelectorAll('.progreso');
    skills.forEach(skill => {
      const skillName = skill.getAttribute('data-skill');
      if (skillName) {
        skill.classList.add(this.getClassForSkill(skillName));
      }
    });
  }

  getClassForSkill(skillName: string): string {
    return skillName + '-animation';
  }
}
