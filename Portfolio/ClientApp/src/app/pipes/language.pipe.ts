import { Pipe, PipeTransform } from '@angular/core';

interface Language {
  name: string;
  percentage: number;
  color: string;
}

@Pipe({
  name: 'languageFilter'
})
export class LanguagePipe implements PipeTransform {

  transform(projects: any[], filter: Set<string>): any {
    if (!projects || !filter) {
      return projects;
    }

    return projects.filter(project => {
      let hasLanguage = false;

      project.languages.forEach((language: Language) => {
        if (filter.has(language.name))
          hasLanguage = true;
      });

      return hasLanguage;
    });
  }
}


