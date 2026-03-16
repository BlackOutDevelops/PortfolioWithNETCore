import { keyframes } from '@angular/animations';
import { AfterContentInit, AfterViewChecked, AfterViewInit, Component, Directive, HostListener, ViewEncapsulation } from '@angular/core';
import { DataService } from '../services/data.service';
declare var anime: any;

@Component({
  selector: 'home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})
export class HomeComponent implements AfterViewInit {
  favProjects = this.dataService.favoriteProjects;
  clickMessage: string = "";
  programmingLanguages: Array<string> = ['C', 'Java', 'SQL', 'MQL', 'CQL', 'Python', 'C++', 'C#', 'HTML', 'CSS', 'JavaScript', 'TypeScript', 'XML', 'JSON', 'Kotlin for Android', 'Verilog', 'Assembly', 'MIPS', 'MATLAB'];
  frameworkExperience: Array<string> = ['Angular.js', 'React.js', 'WPF', 'WinForms', '.NET Framework', '.NET Core', 'DevExpress', 'MongoDB', 'Kubernetes', 'Docker'];
  proficientTools: Array<string> = ['Bash', 'Eclipse', 'Code Composer', 'Visual Studio', 'Atom', 'Intellij IDEA', 'Windows', 'Ubuntu', 'MobaXterm', 'TortoiseSVN', 'SVN', 'GIT',
    'Github', 'Android Studio', 'Azure DevOps', 'Azure Repos', 'Azure Blob Storage', 'Hive', 'Trino', 'Fusion 360'];
  hardwareAndCompliance: Array<string> = ['FPGA', 'PCB Design', 'Circuit Design', 'Embedded Systems', 'Digital Logic Design', 'Hardware Synthesis', 'Cache Architecture', 'Branch Prediction', 'Jetson Nano', 'PID Control', 'Bluetooth', 'Arduino', 'Texas Instruments', 'Servo Integration', 'Motor Integration', 'Microcontrollers'];
  methodologies: Array<string> = ['Agile', 'Scrum', 'CI/CD', 'HIPAA Compliance'];
  aiAndMl: Array<string> = ['TensorFlow', 'PyTorch', 'YOLO', 'ResNet', 'OpenCV', 'Computer Vision', 'Model Training', 'Machine Learning', 'Robotics', 'Perceptron Algorithm', 'Claude AI', 'GitHub Copilot', 'ChatGPT', 'Augment'];

  constructor(private dataService: DataService) { }

  downloadResume() {
    this.clickMessage = "Downloading Resume...";
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', '../../assets/files/Resume.pdf');
    link.setAttribute('download', 'Resume.pdf');
    document.body.appendChild(link);
    link.click();
    link.remove();
    this.clickMessage = "Resume Downloaded";
    setTimeout(() => this.clickMessage = "", 1000);
  }

  ngAfterViewInit() {
    const helloTextWrapper = document.querySelector('.hello') as Element;
    const summaryTextWrapper = document.querySelector('.summary') as Element;
    this.textAnimation(helloTextWrapper, 100);
  }

  textAnimation(textWrapper: Element, delay: number) {
    const textContent = textWrapper.textContent as string;
    textWrapper.innerHTML = textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    const letters = document.querySelectorAll('.letter');
    let count = 1;

    letters.forEach(letter => {
      (letter as HTMLSpanElement).style.opacity = '0';
    });

    letters.forEach(letter => {
      letter.animate([
        {
          opacity: "0",
        },
        {
          offset: .1,
          opacity: "1",
        }
      ],
        {
          duration: 1000,
          delay: delay * count++,
        });
      setTimeout(() => (letter as HTMLSpanElement).style.opacity = '1', delay * count - 1);
    });
  }
}
