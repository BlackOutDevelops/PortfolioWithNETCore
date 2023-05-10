import { Injectable } from '@angular/core';
import { GithubService } from '../services/github.service';

enum color {
  TypeScript = '#FF5722',
  Java = '#E91E63',
  C = '#9C27B0',
  CSharp = '#673AB7',
  HTML = '#3F51B5',
  CSS = '#FF4081',
  SCSS = '#E040FB',
  JavaScript = '#536DFE',
  Python = '#2196F3',
  Makefile = '#009688',
  Perl = '#2196F3',
  Batchfile = '#40C4FF',
  Cplusplus = '#00BCD4',
  Verilog = '#64FFDA',
  Tcl = '#69F0AE',
  Shell = '#4CAF50',
  Pascal = '#B2FF59',
  PureBasic = '#CDDC39',
  Cuda = '#FFFF00',
  Cmake = '#FFC107',
  Objective_Cplusplus = '#FFAB40',
  Assembly = '#FF5722',
  Tex = '#BCAAA4',
  Objective_C = '#795548',
  Scala = '#9E9E9E',
  AIDL = '#B0BEC5',
  Clojure = '#607D8B',
  MATLAB = '#FF8F00',
  Jupyter = '#388E3C',
};

interface Language {
  name: string;
  bytes: number;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public languages: Language[] = []

  constructor(private githubService: GithubService) { }

  getLanguages(repository: string, owner: string = "BlackOutDevelops"): any {
    let languageHolder: { name: string, percentage: number, color: string }[] = [];
    let sum: number = 0;
    let currentLanguagePercentage: number = 0;
    let languageColor: string = '';

    this.githubService.getLanguages(repository, owner).subscribe(result => {
      this.languages = result;

      this.languages.forEach(language => {
        sum += language.bytes;
      })

      this.languages.forEach(language => {

        switch (language.name) {
          case "TypeScript": {
            languageColor = color.TypeScript;
            break;
          }
          case "HTML": {
            languageColor = color.HTML;
            break;
          }
          case "CSS": {
            languageColor = color.CSS;
            break;
          }
          case "SCSS": {
            languageColor = color.SCSS;
            break;
          }
          case "JavaScript": {
            languageColor = color.JavaScript;
            break;
          }
          case "Java": {
            languageColor = color.Java;
            break;
          }
          case "C#": {
            languageColor = color.CSharp;
            break;
          }
          case "C++": {
            languageColor = color.Cplusplus;
            break;
          }
          case "Python": {
            languageColor = color.Python;
            break;
          }
          case "Makefile": {
            languageColor = color.Makefile;
            break;
          }
          case "Perl": {
            languageColor = color.Perl;
            break;
          }
          case "C": {
            languageColor = color.C;
            break;
          }
          case "Batchfile": {
            languageColor = color.Batchfile;
            break;
          }
          case "Verilog": {
            languageColor = color.Verilog;
            break;
          }
          case "Tcl": {
            languageColor = color.Tcl;
            break;
          }
          case "Shell": {
            languageColor = color.Shell;
            break;
          }
          case "Pascal": {
            languageColor = color.Pascal;
            break;
          }
          case "PureBasic": {
            languageColor = color.PureBasic;
            break;
          }
          case "Cuda": {
            languageColor = color.Cuda;
            break;
          }
          case "CMake": {
            languageColor = color.Cmake;
            break;
          }
          case "Objective-C++": {
            languageColor = color.Objective_Cplusplus;
            break;
          }
          case "Assembly": {
            languageColor = color.Assembly;
            break;
          }
          case "TeX": {
            languageColor = color.Tex;
            break;
          }
          case "Objective-C": {
            languageColor = color.Objective_C;
            break;
          }
          case "Scala": {
            languageColor = color.Scala;
            break;
          }
          case "AIDL": {
            languageColor = color.AIDL;
            break;
          }
          case "Clojure": {
            languageColor = color.Clojure;
            break;
          }
          case "MATLAB": {
            languageColor = color.MATLAB;
            break;
          }
          case "Jupyter Notebook": {
            languageColor = color.Jupyter;
            break;
          }
          default: {
            languageColor = "#000000";
            break;
          }
        }

        currentLanguagePercentage = language.bytes / sum * 100;

        var languageElement = {
          name: language.name, percentage: Math.round((currentLanguagePercentage + Number.EPSILON) * 100) / 100, color: languageColor
        };

        languageHolder.push(languageElement);
      })
    })

    return languageHolder;
  }

  public projects = [
    {
      // 0
      name: "Portfolio Website in Angular",
      languages: this.getLanguages('Portfolio'),
      description: [
        {
          paragraph: "UPDATE! My portfolio is a collection of my work, skills, and achievements, presented in a visually appealing and organized way. As a software developer, I have had the opportunity to work on various projects and tasks that have helped me grow and develop my expertise."
        },
        {
          paragraph: "On my portfolio website, you'll find a homepage that offers a brief introduction and highlights some of my best work. You'll also find an about section that provides more information about my background, experience, and skills. My portfolio section showcases some of my most significant projects, including images, videos, and detailed descriptions."
        },
        {
          paragraph: "Additionally, my services or products page outlines the services or products I offer, their benefits, and pricing. I have also included a contact page where potential clients or customers can easily reach out to me to make inquiries or request my services."
        },
        {
          paragraph: "I created my portfolio website to establish a strong online presence, promote my expertise, and attract potential clients or customers. I am passionate about what I do and take pride in the work I have accomplished. I hope that my portfolio inspires and impresses you and encourages you to reach out to me for any opportunities or collaborations. Thank you for visiting my portfolio!"
        },
      ],
      link: "https://github.com/BlackOutDevelops/Portfolio"
    },
    {
      // 1
      name: "Web Server with User Privileges",
      languages: this.getLanguages('WebServerWithUserPrivileges'),
      description: [
        {
          paragraph: "I understand the importance of securing web servers against malicious attacks and unauthorized access. One of the best practices I follow is to run web servers with user privileges"
        },
        {
          paragraph: "Running a web server with user privileges means that the server processes are running under a specific user account rather than the root account. This ensures that the web server has limited access to system resources and files, which improves the overall security of the server."
        },
        {
          paragraph: "When setting up a web server with user privileges, I carefully plan and manage the server to ensure that the necessary permissions are set up for the web server to function properly. I also ensure that file permissions and ownership are set up correctly to prevent any issues with file access or modification."
        },
        {
          paragraph: "By running the server processes under a non-root user account, the web server is limited in the actions it can perform on the server. This prevents any malicious code or unauthorized access from causing significant damage to the system."
        },
        {
          paragraph: "While running a web server with user privileges requires careful planning and management, it is a recommended security practice that can help protect the server and the data stored on it. It allows me to have better control over the server processes and improves the management of the server."
        },
        {
          paragraph: "Overall, running a web server with user privileges is an essential step in securing web servers and ensuring the safety of sensitive data."
        }
      ],
      link: "https://github.com/BlackOutDevelops/WebServerWithUserPrivileges"
    },
    {
      // 2
      name: "Web Server with Database",
      languages: this.getLanguages('WebServerWithDatabase'),
      description: [
        {
          paragraph: "As a web developer, I understand the importance of setting up a web server with a database to power dynamic websites and applications. A web server with a database allows me to create complex, data-driven applications that can handle large amounts of information and user interactions."
        },
        {
          paragraph: "I usually use a relational database management system such as MySQL to store and manage data on the web server. These systems allow me to create tables to store data in a structured and organized manner, and use SQL queries to retrieve, update, and delete data."
        },
        {
          paragraph: "Once the web server and database are set up, I can start building my website or application. I can use server-side scripting languages to connect to the database and retrieve data, and use client-side scripting languages such as JavaScript to interact with the user and display data dynamically."
        },
        {
          paragraph: "A web server with a database provides a robust and secure platform for building complex web applications that require large amounts of data. With the right setup and configuration, it allows me to build powerful and dynamic websites that can handle high traffic and complex user interactions."
        },
      ],
      link: "https://github.com/BlackOutDevelops/WebServerWithDatabase"
    },
    {
      // 3
      name: "Clippy",
      languages: this.getLanguages('Clippy'),
      description: [
        {
          paragraph: "As a web development team, we understood the importance of creating responsive web applications that could be accessed on various devices. We worked together to create a mobile-first design approach, where we designed the application with the smallest screens in mind first and then scaled up to larger screens."
        },
        {
          paragraph: "To ensure that the application adapted to different screen sizes and resolutions, we used responsive design techniques such as fluid layouts, flexible images, and media queries. We also used frameworks like Bootstrap or Foundation to help with the responsive design of the web application, which provided pre-designed responsive components like grids, forms, and navigation bars that we customized to match the application's design."
        },
        {
          paragraph: "Optimizing the performance of the application was also a critical aspect of creating a responsive web application. We worked together to minimize the size of images, scripts, and stylesheets to ensure that the application loaded quickly on all devices, regardless of the network connection."
        },
        {
          paragraph: "To ensure that the application functioned correctly and looked great on all platforms, we tested the application on various devices and browsers using tools like browser emulators, developer tools, and real devices."
        },
        {
          paragraph: "Working as a team, we were able to create responsive web applications that provided a positive user experience and increased user engagement. Our applications were optimized for performance and accessible on all devices, making them valuable assets for our clients. We communicated effectively and collaborated closely to ensure that the applications met the requirements and exceeded the expectations of our clients."
        },
      ],
      link: "https://github.com/BlackOutDevelops/Clippy"
    },
    {
      // 4
      name: "Shipping Management With Multithreading",
      languages: this.getLanguages('ShippingManagementWithMultithreading'),
      description: [
        {
          paragraph: "I have had experience creating a multithreading application that can perform multiple tasks simultaneously, improving the application's performance and responsiveness."
        },
        {
          paragraph: "To create this application, I first identified the parts of the code that could be run independently and asynchronously. I then used multithreading techniques like creating multiple threads or utilizing thread pools to run these independent parts of the code concurrently."
        },
        {
          paragraph: "Throughout the development process, I relied on online resources and documentation to guide me in the creation of the application. I also used various tools like profilers and debuggers to identify and resolve any potential issues with my multithreading implementation."
        },
        {
          paragraph: "Testing my multithreading application was also crucial to ensure that it performed as expected. I used various test cases to simulate different scenarios and ensure that the application was running smoothly and without any errors."
        },
        {
          paragraph: "One of the main benefits of my multithreading application was the significant improvement in performance and responsiveness. I was able to achieve faster processing times and reduced wait times for the user, resulting in a better user experience. Additionally, the application could handle multiple requests simultaneously, allowing for greater scalability and performance."
        },
        {
          paragraph: "Overall, I was able to successfully create a multithreading application that improved the performance and responsiveness of my software. By identifying independent parts of the code, utilizing multithreading techniques, relying on online resources, and testing thoroughly, I was able to create an application that met the requirements and exceeded my expectations."
        },
      ],
      link: "https://github.com/BlackOutDevelops/ShippingManagementWithMultithreading"
    },
    {
      // 5
      name: "Server and Client Implementation",
      languages: this.getLanguages('ServerAndClient'),
      description: [
        {
          paragraph: "I have had experience creating a small server and client application that communicate with each other to provide a seamless user experience."
        },
        {
          paragraph: "To create a server application, I first identified the requirements for the application, such as handling requests from a single client, processing data, and providing responses. I then used a suitable programming language and framework to create the server application, implementing features such as database integration to handle requests and respond to the client."
        },
        {
          paragraph: "To create a client application, I identified the requirements for the application, such as user interface design, user input validation, and communication with the server application. I used a suitable programming language and framework to create the client application, implementing features such as user interface design, user input validation, and networking to communicate with the server application."
        },
        {
          paragraph: "Throughout the development process, I relied on online resources and documentation to guide me in the creation of the applications. I also used various tools like version control systems to manage my development process and collaborate effectively with myself."
        },
        {
          paragraph: "Testing my server and client applications was also crucial to ensure that they performed as expected. I used various test cases to simulate different scenarios and ensure that the applications were running smoothly and without any errors."
        },
        {
          paragraph: "Overall, I was successful in creating a server and client application that communicated effectively and provided a seamless user experience. By identifying the requirements for each application, utilizing suitable programming languages and frameworks, relying on online resources, and testing thoroughly, I was able to create applications that met the requirements and exceeded my expectations."
        },
      ],
      link: "https://github.com/BlackOutDevelops/ServerAndClient"
    },
    {
      // 6
      name: "Cache Simulator",
      languages: this.getLanguages('CacheSimulator'),
      description: [
        {
          paragraph: "In a course project, I created a cache simulator to analyze the performance of different matrix multiplication algorithms. The simulator needed to predict cache hits and misses for different matrix sizes and cache sizes."
        },
      ],
      link: "https://github.com/BlackOutDevelops/CacheSimulator"
    },
    {
      // 7
      name: "Sticky Note Copy Cat",
      languages: this.getLanguages('StickyNoteCopyCat'),
      description: [
        {
          paragraph: "Another project involved creating a standalone sticky note copycat application for personal use. The application needed to allow users to create and save digital sticky notes to their local machine. I used C# and WPF to implement the application, and I incorporated SQLite to enable users to save and load their notes."
        },
      ],
      link: "https://github.com/BlackOutDevelops/StickyNoteCopyCat"
    },
    {
      // 8
      name: "Photo-TANK Remote Controller",
      languages: this.getLanguages("Photo-TANK-RC"),
      description: [
        {
          paragraph: "For my Senior Design, I was tasked with creating a remote control application for a Bluetooth tank using Windows Presentation Foundation (WPF)."
        },
        {
          paragraph: "First, I researched and identified the appropriate libraries and APIs for Bluetooth communication in C#. I decided to use the 32feet.NET library, which provides an easy-to-use interface for Bluetooth connectivity."
        },
        {
          paragraph: "Next, I designed the user interface using XAML in WPF. The interface consisted of a virtual joystick for controlling the movement of the tank and several buttons for additional functions like firing the tank's weapons."
        },
        {
          paragraph: "Finally, I tested the application with an actual Bluetooth tank and made any necessary adjustments to improve its performance and stability."
        },
      ],
      link: "https://github.com/BlackOutDevelops/Photo-TANK-RC"
    },
    {
      // 9
      name: "Labs for Embedded Systems",
      languages: this.getLanguages('EmbeddedSystemLabs'),
      description: [
        {
          paragraph: "All my completed labs from my UCF college course, Embedded Systems. This was all done in code composer studio."
        },
      ],
      link: "https://github.com/BlackOutDevelops/EmbeddedSystemLabs"
    },
    {
      // 10
      name: "Adaboost Implementation",
      languages: this.getLanguages('Adaboost'),
      description: [
        {
          paragraph: "I created an Adaboost application using C++ for a classification problem."
        },
        {
          paragraph: "I imported the necessary libraries such as the Standard Template Library (STL) and the Boost C++ Libraries. Then, I loaded the dataset into a vector of structures and performed exploratory data analysis to gain insights into the data."
        },
        {
          paragraph: "I preprocessed the data by handling missing values, encoding categorical features, and scaling the numerical features. I split the data into training and testing sets using a random function."
        },
        {
          paragraph: "I then implemented the Adaboost algorithm using C++ code. I defined the base estimator as a decision tree with a maximum depth of 2 and set the number of estimators to 50. I used a vector of weights to keep track of the sample weights and updated the weights after each iteration to give more weight to the misclassified samples."
        },
        {
          paragraph: "Once the model was trained, I evaluated its performance using the testing data and calculated metrics such as accuracy, precision, recall, and F1-score. I also plotted the ROC curve to visualize the trade-off between true positive rate and false positive rate."
        },
        {
          paragraph: "I then performed hyperparameter tuning by trying different values for the number of estimators and the learning rate and selected the combination that gave the best performance."
        },
        {
          paragraph: "Finally, I deployed the Adaboost application by saving the model and using it to classify new data. I also performed additional testing to ensure that the model was working correctly. Overall, the Adaboost application was successful in accurately classifying the data using C++."
        },
      ],
      link: "https://github.com/BlackOutDevelops/Adaboost"
    },
    {
      // 11
      name: "Verilog Project",
      languages: this.getLanguages('VerilogProject'),
      description: [
        {
          paragraph: "For the 9-bit, I designed a module that could compare two 9-bit inputs and generate a 1-bit output indicating whether the inputs were equal or not. I implemented the comparator by using conditional statements and logical operators. I then simulated the design using test benches to ensure its correctness and functionality. Finally, I synthesized the design for an FPGA to test its performance on hardware."
        },
        {
          paragraph: "In the 6-bit, I designed a module that could add two 6-bit inputs and generate a 7-bit output that included the sum and a carry bit. I implemented the adder by combining full-adder modules and a carry chain. I then simulated the design using test benches to ensure its correctness and functionality. Finally, I synthesized the design for an FPGA to test its performance on hardware."
        },
      ],
      link: "https://github.com/BlackOutDevelops/VerilogProject"
    },
    {
      // 12
      name: "Optical Flow Implementation",
      languages: this.getLanguages('OpticalFlow'),
      description: [
        {
          paragraph: "Optical flow is a technique used in computer vision to track the motion of objects in a video sequence. The idea is to estimate the motion of pixels between two consecutive frames in a video."
        },
        {
          paragraph: "I began by studying the mathematical background of optical flow and understanding the algorithms involved in its implementation. I then started coding the implementation in C++, using OpenCV library for image processing and computer vision."
        },
        {
          paragraph: "The algorithm I implemented used a variation of Lucas-Kanade method, which is a well-known technique for optical flow estimation. I created a function that takes two consecutive frames as input and returns the flow field between them as output."
        },
        {
          paragraph: "After coding the implementation, I tested it on various video sequences and evaluated its performance using metrics such as accuracy and computational efficiency. I also optimized the code by implementing parallel processing techniques to speed up the execution time."
        },
        {
          paragraph: "Overall, the optical flow implementation project in C++ was a challenging but rewarding experience as a computer vision engineer. It allowed me to deepen my understanding of optical flow and improve my programming skills in C++."
        },
      ],
      link: "https://github.com/BlackOutDevelops/OpticalFlow"
    },
    {
      // 13
      name: "Marr-Hildreth Edge Detector Implementation",
      languages: this.getLanguages('Marr-HildrethEdgeDetector'),
      description: [
        {
          paragraph: "The Marr-Hildreth algorithm is a popular technique for detecting edges in digital images. It uses a Gaussian filter to smooth the image and then applies the Laplacian of Gaussian (LoG) operator to the smoothed image to detect edges."
        },
        {
          paragraph: "To implement the Marr-Hildreth algorithm in C, I first wrote a function to generate a Gaussian kernel of a given size and standard deviation. I then used this function to generate the kernel for the Gaussian filter."
        },
        {
          paragraph: "Next, I applied the Gaussian filter to the input image using a convolution operation. I then calculated the Laplacian of the filtered image using a discrete approximation of the Laplacian operator. Finally, I searched for zero-crossings in the Laplacian image to detect the edges."
        },
        {
          paragraph: "I tested it on various images and evaluated its performance using metrics such as accuracy and computational efficiency. I also optimized the code by implementing parallel processing techniques to speed up the execution time."
        },
        {
          paragraph: "The Marr-Hildreth edge detector implementation project in C was a challenging but rewarding experience as a software developer. It allowed me to deepen my understanding of image processing techniques and improve my programming skills in C."
        },
      ],
      link: "https://github.com/BlackOutDevelops/Marr-HildrethEdgeDetector"
    },
    {
      // 14
      name: "Sobel Edge Detector Implementation",
      languages: this.getLanguages('SobelEdgeDetector'),
      description: [
        {
          paragraph: "When I implemented the Sobel edge detector, I began by loading the input image and converting it to grayscale. This allowed me to work with a single channel of intensity values rather than three separate channels for red, green, and blue."
        },
        {
          paragraph: "I then initialized two 3x3 Sobel filters for horizontal and vertical edge detection respectively. The Sobel filters are composed of coefficients that are applied to the neighboring pixels surrounding the current pixel being processed. The horizontal Sobel filter emphasizes vertical edges, while the vertical Sobel filter emphasizes horizontal edges."
        },
        {
          paragraph: "After initializing the filters, I created a new image matrix of the same size as the input image to store the edge detection results. Then, for each pixel in the input image, I convolved the Sobel filters with the neighboring pixels and calculated the gradient magnitude of the resulting values."
        },
        {
          paragraph: "Finally, I applied a threshold value to the gradient magnitude to determine whether the current pixel was part of an edge or not. If the gradient magnitude exceeded the threshold, I set the corresponding pixel in the output image to white. Otherwise, I set it to black."
        },
        {
          paragraph: "The Sobel edge detector is a commonly used algorithm for detecting edges in images, and its ability to emphasize edges in both the horizontal and vertical directions makes it particularly useful."
        },
      ],
      link: "https://github.com/BlackOutDevelops/SobelEdgeDetector"
    },
    {
      // 15
      name: "Root Locus Implementation",
      languages: this.getLanguages('DesignUsingRootLocus'),
      description: [
        {
          paragraph: "I have had the opportunity to implement a root locus design for a control system. The root locus is a graphical method that allows us to analyze and design the feedback control of a system based on its open-loop transfer function."
        },
        {
          paragraph: "To implement the root locus design, I first needed to determine the open-loop transfer function of the system. This involved deriving the transfer function by analyzing the system's differential equations and Laplace transforms. I then plotted the poles and zeros of the open-loop transfer function on the complex plane to determine the system's stability."
        },
        {
          paragraph: "Next, I drew the root locus diagram by varying the gain of the system and plotting the locations of the closed-loop poles as a function of the gain. The root locus diagram is a plot of the system's closed-loop pole locations in the complex plane as the gain varies from zero to infinity."
        },
        {
          paragraph: "Using the root locus diagram, I was able to select a value of gain that would place the closed-loop poles in the desired locations, such as on the negative real axis to achieve a stable system. I also checked for overshoot, settling time, and other performance criteria to ensure that the control system met the design specifications."
        },
        {
          paragraph: "After selecting the appropriate gain value, I implemented the feedback control system in the hardware or software of the system. I also tested the control system to ensure that it performed as expected and met the design specifications."
        },
        {
          paragraph: "In conclusion, implementing a root locus design involved analyzing the open-loop transfer function, drawing the root locus diagram, selecting the appropriate gain value, and implementing the feedback control system. The root locus design is a powerful tool for control engineers to analyze and design control systems."
        },
      ],
      link: "https://github.com/BlackOutDevelops/DesignUsingRootLocus"
    },
    {
      // 16
      name: "FileDotCom",
      languages: this.getLanguages('FileDotCom'),
      description: [
        {
          paragraph: "I have worked on a project that involved creating a Java GUI with data manipulation functionality. The GUI was designed to allow users to input data and manipulate it based on certain criteria."
        },
        {
          paragraph: "To begin the project, I first designed the GUI using the Swing framework. The GUI included input fields, buttons, and tables to display data. The user could input data into the fields and click the \"submit\" button to add the data to the table."
        },
        {
          paragraph: "Next, I implemented the data manipulation functionality. This involved adding buttons to the GUI that allowed the user to perform actions such as sorting, filtering, and searching the data in the table. For example, the \"sort\" button would sort the data in the table based on a selected column, while the \"filter\" button would display only the rows that matched certain criteria."
        },
        {
          paragraph: "To implement these features, I used Java's built-in data structures such as ArrayLists and HashMaps to store and manipulate the data. I also used Java's Collection API to perform operations such as sorting and filtering on the data."
        },
        {
          paragraph: "After implementing the data manipulation functionality, I added validation to the input fields to ensure that the user entered valid data. For example, if the user entered a non-numeric value in a field that required a number, an error message would be displayed."
        },
        {
          paragraph: "To test the GUI and data manipulation functionality, I created a set of test cases that covered various scenarios such as adding and deleting data, sorting and filtering the table, and handling invalid input."
        },
        {
          paragraph: "Creating a Java GUI with data manipulation functionality involved designing the GUI using the Swing framework, implementing data manipulation features using Java's built-in data structures and Collection API, adding validation to input fields, and testing the GUI with a set of test cases. The project required a good understanding of Java programming concepts and GUI design principles."
        },
      ],
      link: "https://github.com/BlackOutDevelops/FileDotCom"
    },
    {
      // 17
      name: "Dijkstra and Bellman-Ford Implementation",
      languages: this.getLanguages('DijkstraBellmanFloyd'),
      description: [
        {
          paragraph: "I have implemented both the Dijkstra and Bellman-Ford algorithms for finding the shortest path in a graph."
        },
        {
          paragraph: "I implemented the Dijkstra algorithm, which is a greedy algorithm that works by maintaining a set of nodes whose shortest distance from the starting node is already known. The algorithm then iteratively selects the node with the smallest distance and updates the distances of its adjacent nodes until the shortest path to all nodes is found."
        },
        {
          paragraph: "To implement the Dijkstra algorithm, I used a priority queue to store the nodes and their distances. I also used a map to keep track of the shortest distance to each node and a set to keep track of the visited nodes. The time complexity of the algorithm is O(E log V), where E is the number of edges and V is the number of vertices in the graph."
        },
        {
          paragraph: "Next, I implemented the Bellman-Ford algorithm, which is a dynamic programming algorithm that works by iteratively relaxing the edges in the graph. The algorithm starts by initializing the shortest distance to all nodes as infinity, except for the starting node, whose shortest distance is set to zero. It then iteratively relaxes the edges until the shortest path to all nodes is found."
        },
        {
          paragraph: "To implement the Bellman-Ford algorithm, I used an array to store the shortest distance to each node and a list of edges to represent the graph. The algorithm requires V-1 iterations, where V is the number of vertices in the graph. The time complexity of the algorithm is O(VE), where E is the number of edges and V is the number of vertices in the graph."
        },
        {
          paragraph: "I also tested both implementations using a set of test cases to ensure that they returned the correct output for various graph sizes and edge weights."
        },
        {
          paragraph: "Implementing the Dijkstra and Bellman-Ford algorithms involved using data structures such as priority queues, maps, and arrays to represent the graph and track the shortest distances. The projects required a good understanding of data structures, algorithm design, and time complexity analysis."
        },
      ],
      link: "https://github.com/BlackOutDevelops/DijkstraBellmanFloyd"
    },
    {
      // 18
      name: "Dijkstra Implementation",
      languages: this.getLanguages('Dijkstra'),
      description: [
        {
          paragraph: "This project was a starter project to \"Dijkstra and Bellman-Ford Implementaton.\""
        },
      ],
      link: "https://github.com/BlackOutDevelops/Dijkstra"
    },
    {
      // 19
      name: "Skip List Implementation",
      languages: this.getLanguages('SkipList'),
      description: [
        {
          paragraph: "I have implemented a skip list data structure in Java. A skip list is a probabilistic data structure that allows for efficient search, insertion, and deletion of elements."
        },
        {
          paragraph: "I designed the skip list data structure using a linked list of nodes. Each node had a key and a value, as well as a set of pointers to other nodes. The pointers formed a hierarchy of layers, with each layer having progressively fewer nodes and larger gaps between them. This allowed for efficient searching by skipping over large portions of the list."
        },
        {
          paragraph: "Then, I implemented the search function, which worked by starting at the top layer of the skip list and traversing the pointers to the next node with a key less than or equal to the target key. The search continued down the layers until the target key was found or the bottom layer was reached."
        },
        {
          paragraph: "I also implemented the insert function, which worked by first searching for the correct position in the skip list using the search function. Once the correct position was found, a new node was created and inserted into the appropriate layers of the skip list."
        },
        {
          paragraph: "I implemented the delete function, which worked by first searching for the node with the target key using the search function. Once the node was found, its pointers were adjusted to remove it from the skip list."
        },
        {
          paragraph: "To test the skip list implementation, I created a set of test cases that covered various scenarios such as inserting and deleting nodes, searching for nodes with different key values, and testing the time complexity of the operations."
        },
        {
          paragraph: "Implementing a skip list in Java involved designing the data structure using a linked list of nodes with pointers, implementing the search, insert, and delete functions, and testing the implementation with a set of test cases. The project required a good understanding of data structures, algorithm design, and time complexity analysis."
        },
      ],
      link: "https://github.com/BlackOutDevelops/SkipList"
    },
    {
      // 20
      name: "Hashtastic",
      languages: this.getLanguages('Hashtastic'),
      description: [
        {
          paragraph: "I have practiced implementing a HashTable data structure. A HashTable is a data structure that allows for efficient insertion, search, and deletion of key-value pairs."
        },
        {
          paragraph: "To begin, I designed the HashTable using an array of buckets. Each bucket was a linked list that could store multiple key-value pairs. The HashTable also had a hash function that took in a key and returned an index into the array of buckets."
        },
        {
          paragraph: "Then, I implemented the hash function, which used the modulo operator to map the key to an index in the array of buckets. The hash function also handled collisions by chaining the key-value pairs in a linked list at the corresponding bucket."
        },
        {
          paragraph: "I then implemented the insert function, which worked by first computing the hash value of the key using the hash function. The key-value pair was then inserted at the head of the linked list in the corresponding bucket."
        },
        {
          paragraph: "Next, I implemented the search function, which worked by computing the hash value of the key and then traversing the linked list in the corresponding bucket to find the key-value pair with the matching key."
        },
        {
          paragraph: "Finally, I implemented the delete function, which worked by computing the hash value of the key and then traversing the linked list in the corresponding bucket to find the key-value pair with the matching key. Once the key-value pair was found, it was removed from the linked list."
        },
        {
          paragraph: "To test the HashTable implementation, I created a set of test cases that covered various scenarios such as inserting and deleting key-value pairs, searching for pairs with different keys, and testing the time complexity of the operations."
        },
        {
          paragraph: "Practicing HashTable implementation in C involved designing the data structure using an array of buckets and linked lists, implementing the hash function, insert, search, and delete functions, and testing the implementation with a set of test cases. The project required a good understanding of data structures, algorithm design, and time complexity analysis."
        },
      ],
      link: "https://github.com/BlackOutDevelops/Hashtastic"
    },
    {
      // 21
      name: "Kindred Spirits",
      languages: this.getLanguages('KindredSpirits'),
      description: [
        {
          paragraph: "I have practiced implementing a linked list data structure with various traversals. A linked list is a dynamic data structure that allows for efficient insertion, deletion, and traversal of elements."
        },
        {
          paragraph: "I designed the linked list data structure using a struct that contained a data element and a pointer to the next node in the list. The list was represented by a pointer to the first node."
        },
        {
          paragraph: "I implemented the insert function, which worked by creating a new node and updating the next pointer of the previous node and the previous pointer of the new node to point to each other. The new node was inserted into the list at the specified position."
        },
        {
          paragraph: "Next, I implemented the search function, which worked by traversing the list to find the node with the specified data element. Once the node was found, its position in the list was returned."
        },
        {
          paragraph: "To perform traversals, I implemented three different types of traversal functions: the print function, the reverse print function, and the search and update function."
        },
        {
          paragraph: "The print function worked by traversing the list from the first node to the last node and printing out the data element of each node."
        },
        {
          paragraph: "The reverse print function worked by traversing the list from the last node to the first node and printing out the data element of each node."
        },
        {
          paragraph: "The search and update function worked by traversing the list to find the node with the specified data element and updating its data element to a new value."
        },
        {
          paragraph: "To test the linked list implementation with traversals, I created a set of test cases that covered various scenarios such as inserting and deleting nodes, searching for nodes with different data elements, and testing the time complexity of the operations."
        },
        {
          paragraph: "In the end, practicing linked list implementation in C with traversals involved designing the data structure using a struct with a data element and a pointer to the next node, implementing the insert, delete, search, print, reverse print, and search and update functions, and testing the implementation with a set of test cases. The project required a good understanding of data structures, algorithm design, and time complexity analysis."
        },
      ],
      link: "https://github.com/BlackOutDevelops/KindredSpirits"
    },
    {
      // 22
      name: "Listy Fib",
      languages: this.getLanguages('ListyFib'),
      description: [
        {
          paragraph: "I have practiced implementing a linked list data structure with the ability to convert strings and integers to linked lists. A linked list is a dynamic data structure that allows for efficient insertion, deletion, and traversal of elements."
        },
        {
          paragraph: "To convert a string to a linked list, I implemented a function that took a string as an input and converted each character in the string to a node in the linked list. The function worked by looping through the string and inserting each character into a new node in the linked list."
        },
        {
          paragraph: "To convert an integer to a linked list, I implemented a function that took an integer as an input and converted each digit in the integer to a node in the linked list. The function worked by converting the integer to a string, looping through the string, and inserting each digit into a new node in the linked list."
        },
        {
          paragraph: "To test the linked list implementation with string and integer conversion, I created a set of test cases that covered various scenarios such as converting a string and an integer to linked lists, inserting and deleting nodes, searching for nodes with different data elements, and testing the time complexity of the operations."
        },
        {
          paragraph: "Practicing linked list implementation in C with string and integer conversion involved designing the data structure using a struct with a data element and a pointer to the next node, implementing the insert, delete, search, string to list, and int to list functions, and testing the implementation with a set of test cases. The project required a good understanding of data structures, algorithm design, and time complexity analysis."
        },
      ],
      link: "https://github.com/BlackOutDevelops/ListyFib"
    },
    {
      // 23
      name: "Lonely Party Array",
      languages: this.getLanguages('LonelyPartyArray'),
      description: [
        {
          paragraph: "I have implemented a custom array that dynamically allocated memory as needed. This involved designing a data structure that would allocate memory only when necessary, and deallocate it when it was no longer needed."
        },
        {
          paragraph: "I created a struct that contained a pointer to a block of memory, the current size of the block, and the maximum size of the block. The initial size of the block was set to a small value to conserve memory."
        },
        {
          parargraph: "Next, I implemented a function that checked if the current size of the block was less than the maximum size. If it was, the function allocated additional memory for the block. If the block was full, the function allocated a larger block of memory, copied the contents of the old block into the new block, and then freed the old block."
        },
        {
          paragraph: "I then implemented a function that retrieved an element from the custom array based on its index. The function worked by checking if the index was within the current size of the block. If it was, the function returned the value at that index."
        },
        {
          paragraph: "Next, I implemented a function that updated an element in the custom array based on its index. The function worked by checking if the index was within the current size of the block. If it was, the function updated the value at that index."
        },
        {
          paragraph: "To test the custom array implementation, I created a set of test cases that covered various scenarios such as inserting and deleting elements, resizing the block of memory, and checking the time complexity of the operations."
        },
        {
          paragraph: "I used the custom array implementation to create a linked list data structure. The linked list was represented by a struct that contained a pointer to the first node and a pointer to the custom array. The list was constructed by inserting new nodes into the custom array and updating the pointers accordingly."
        },
        {
          paragraph: "Implementing a custom array that allocated memory as needed involved designing a data structure that allocated memory only when necessary and deallocating it when it was no longer needed. The implementation required a good understanding of memory management, algorithm design, and time complexity analysis. The custom array implementation could be used to create a linked list data structure with efficient memory management."
        },
      ],
      link: "https://github.com/BlackOutDevelops/LonelyPartyArray"
    },
    {
      // 24
      name: "Domichar",
      languages: this.getLanguages('Domichar'),
      description: [
        {
          paragraph: "I have practiced string manipulation using built-in functions and custom implementations. String manipulation is the process of modifying or manipulating a string of characters."
        },
        {
          paragraph: "I used built-in string functions such as strlen() to perform common string operations such as finding the length of a string."
        },
        {
          parargraph: "Next, I implemented custom string functions such as isVowel(), isConsonant(), and isNonalphabetic() to gain a better understanding of how string manipulation worked internally."
        },
        {
          paragraph: "In conclusion, string manipulation in C involves using built-in functions and custom implementations to modify or manipulate a string of characters. This requires a good understanding of pointers, loops, and memory management. Custom implementations can provide a better understanding of how built-in functions work internally and can be used to handle strings with unknown lengths."
        },
      ],
      link: "https://github.com/BlackOutDevelops/Domichar"
    },
    {
      // 25
      name: "Branch Predictor",
      languages: this.getLanguages('BranchPredictor'),
      description: [
        {
          paragraph: "I have implemented a branch predictor using a perceptron algorithm. A branch predictor is a hardware or software component that attempts to guess the outcome of a conditional branch instruction."
        },
        {
          paragraph: "To begin, I designed a perceptron data structure that consisted of an array of weights and a bias value. Each weight represented a feature of the branch instruction that might influence the outcome of the prediction. The bias value represented the threshold for the perceptron to fire."
        },
        {
          parargraph: "Next, I implemented a function that extracted the features from the branch instruction and used them to make a prediction. The features included the address of the branch instruction, the opcode of the branch instruction, and the history of previous outcomes of the branch instruction."
        },
        {
          paragraph: "I then implemented a function that trained the perceptron based on the actual outcome of the branch instruction. This involved updating the weights and bias value using the perceptron update rule."
        },
        {
          paragraph: "To test the branch predictor implementation, I created a set of test cases that covered various scenarios such as changing the weight and bias values, changing the number of features, and checking the accuracy of the predictions."
        },
        {
          parargraph: "I integrated the branch predictor into a larger program such as a simulator or a compiler to test its performance in a real-world setting."
        },
        {
          paragraph: "Implementing a branch predictor using a perceptron algorithm involved designing a perceptron data structure that consisted of an array of weights and a bias value and implementing functions to extract features from the branch instruction, make predictions, and train the perceptron. The implementation required a good understanding of machine learning, data structures, and algorithm design. The branch predictor implementation could be integrated into larger programs to improve their performance."
        },
      ],
      link: "https://github.com/BlackOutDevelops/BranchPredictor"
    },
    {
      // 26
      name: "Artificial Intelligence Homework and Projects",
      languages: [
        {
          name: "Python",
          percentage: 100,
          color: "#2196F3"
        },
      ],
      description: [
        {
          paragraph: "All course work from my Artificial Intelligence course."
        },
      ],
      link: "https://github.com/stars/BlackOutDevelops/lists/artificial-intelligence"
    },
    {
      // 27
      name: "Line Follower",
      languages: this.getLanguages("AI_Project", "SamiESK"),
      description: [
        {
          paragraph: "As a team of robotics enthusiasts and Python programmers, we implemented a line follower with lane detection using a Jetson Nano on Jupyter Notebooks."
        },
        {
          paragraph: "We started by connecting a camera module to the Jetson Nano and installing the necessary software such as the JetPack SDK and the OpenCV libraries. We then collaborated to write a Python program that read video frames from the camera and processed them to detect the lanes on the road."
        },
        {
          parargraph: "To extract the lane lines, we used a combination of color thresholding, morphological operations, and Hough transform. We converted the video frames from RGB to grayscale, applied a binary threshold to extract the white pixels corresponding to the lanes, performed morphological operations to remove noise and fill gaps, and applied the Hough transform to detect the lines."
        },
        {
          paragraph: "Next, we filtered the detected lines based on their slope and position to detect only the lane lines. We used the detected lane lines to calculate the steering angle of the robot using a proportional-integral-derivative (PID) controller. The PID controller used the deviation of the robot's position from the center of the lane to calculate the appropriate steering angle."
        },
        {
          paragraph: "We tested the line follower with lane detection using a set of test cases that covered various scenarios such as different lighting conditions, different road types, and different speeds. We used a simulator to evaluate the performance of the line follower with lane detection."
        },
        {
          parargraph: "Finally, we integrated the line follower with lane detection into a larger robot platform and tested its performance in a real-world setting. The line follower with lane detection was able to navigate autonomously and follow the lanes on the road."
        },
        {
          paragraph: "Overall, implementing a line follower with lane detection on Jupyter Notebooks required a good understanding of computer vision, control theory, and algorithm design. As a team, we collaborated to implement and test the line follower with lane detection, and we were able to integrate it into a larger robot platform to navigate autonomously on Jupyter Notebooks."
        },
      ],
      link: "https://github.com/SamiESK/AI_Project"
    },
  ]

  public favoriteProjects = [this.projects[8], this.projects[3], this.projects[0], this.projects[7], this.projects[1], this.projects[2], this.projects[4], this.projects[5], this.projects[16], this.projects[25], this.projects[27]];

  public houseOneBeforeImageLocations = [
    {
      url: '/assets/images/houses/1st/before/Picture-9.jpg'
    },
    {
      url: '/assets/images/houses/1st/before/Picture-2.jpg'
    },
    {
      url: '/assets/images/houses/1st/before/Picture-3.jpg'
    },
    {
      url: '/assets/images/houses/1st/before/Picture-4.jpg'
    },
    {
      url: '/assets/images/houses/1st/before/Picture-5.jpg'
    },
    {
      url: '/assets/images/houses/1st/before/Picture-6.jpg'
    },
    {
      url: '/assets/images/houses/1st/before/Picture-7.jpg'
    },
    {
      url: '/assets/images/houses/1st/before/Picture-8.jpg'
    },
    {
      url: '/assets/images/houses/1st/before/Picture-1.jpg'
    },
  ]
  public houseOneAfterImageLocations = [
    {
      url: '/assets/images/houses/1st/after/Picture-1.webp'
    },
    {
      url: '/assets/images/houses/1st/after/Picture-2.webp'
    },
    {
      url: '/assets/images/houses/1st/after/Picture-3.webp'
    },
    {
      url: '/assets/images/houses/1st/after/Picture-4.webp'
    },
    {
      url: '/assets/images/houses/1st/after/Picture-5.webp'
    },
    {
      url: '/assets/images/houses/1st/after/Picture-6.webp'
    },
    {
      url: '/assets/images/houses/1st/after/Picture-7.webp'
    },
    {
      url: '/assets/images/houses/1st/after/Picture-8.webp'
    },
    {
      url: '/assets/images/houses/1st/after/Picture-9.webp'
    },
    {
      url: '/assets/images/houses/1st/after/Picture-10.webp'
    },
    {
      url: '/assets/images/houses/1st/after/Picture-11.webp'
    },
    {
      url: '/assets/images/houses/1st/after/Picture-12.webp'
    },
    {
      url: '/assets/images/houses/1st/after/Picture-13.webp'
    },
    {
      url: '/assets/images/houses/1st/after/Picture-14.webp'
    },
    {
      url: '/assets/images/houses/1st/after/Picture-15.webp'
    },
    {
      url: '/assets/images/houses/1st/after/Picture-16.webp'
    },
    {
      url: '/assets/images/houses/1st/after/Picture-17.webp'
    },
    {
      url: '/assets/images/houses/1st/after/Picture-18.webp'
    },
    {
      url: '/assets/images/houses/1st/after/Picture-19.webp'
    },
    {
      url: '/assets/images/houses/1st/after/Picture-20.webp'
    },
    {
      url: '/assets/images/houses/1st/after/Picture-21.webp'
    },
    {
      url: '/assets/images/houses/1st/after/Picture-22.webp'
    },
  ]
  public houseTwoBeforeImageLocations = [
    {
      url: '/assets/images/houses/2nd/before/Picture-1.jpg'
    },
    {
      url: '/assets/images/houses/2nd/before/Picture-2.jpg'
    },
    {
      url: '/assets/images/houses/2nd/before/Picture-3.jpg'
    },
    {
      url: '/assets/images/houses/2nd/before/Picture-4.jpg'
    },
    {
      url: '/assets/images/houses/2nd/before/Picture-5.jpg'
    },
    {
      url: '/assets/images/houses/2nd/before/Picture-6.jpg'
    },
    {
      url: '/assets/images/houses/2nd/before/Picture-7.jpg'
    },
    {
      url: '/assets/images/houses/2nd/before/Picture-8.jpg'
    },
    {
      url: '/assets/images/houses/2nd/before/Picture-9.jpg'
    },
    {
      url: '/assets/images/houses/2nd/before/Picture-10.jpg'
    },
    {
      url: '/assets/images/houses/2nd/before/Picture-11.jpg'
    },
    {
      url: '/assets/images/houses/2nd/before/Picture-12.jpg'
    },
    {
      url: '/assets/images/houses/2nd/before/Picture-13.jpg'
    },
    {
      url: '/assets/images/houses/2nd/before/Picture-14.jpg'
    },
    {
      url: '/assets/images/houses/2nd/before/Picture-15.jpg'
    },
    {
      url: '/assets/images/houses/2nd/before/Picture-16.jpg'
    },
    {
      url: '/assets/images/houses/2nd/before/Picture-17.jpg'
    },
    {
      url: '/assets/images/houses/2nd/before/Picture-18.jpg'
    },
    {
      url: '/assets/images/houses/2nd/before/Picture-19.jpg'
    },
    {
      url: '/assets/images/houses/2nd/before/Picture-20.jpg'
    },
    {
      url: '/assets/images/houses/2nd/before/Picture-21.jpg'
    },
    {
      url: '/assets/images/houses/2nd/before/Picture-22.jpg'
    },
  ]
  public houseTwoAfterImageLocations = [
    {
      url: '/assets/images/houses/2nd/after/Picture-1.webp'
    },
    {
      url: '/assets/images/houses/2nd/after/Picture-2.webp'
    },
    {
      url: '/assets/images/houses/2nd/after/Picture-3.webp'
    },
    {
      url: '/assets/images/houses/2nd/after/Picture-4.webp'
    },
    {
      url: '/assets/images/houses/2nd/after/Picture-5.webp'
    },
    {
      url: '/assets/images/houses/2nd/after/Picture-6.webp'
    },
    {
      url: '/assets/images/houses/2nd/after/Picture-7.webp'
    },
    {
      url: '/assets/images/houses/2nd/after/Picture-8.webp'
    },
    {
      url: '/assets/images/houses/2nd/after/Picture-9.webp'
    },
    {
      url: '/assets/images/houses/2nd/after/Picture-10.webp'
    },
    {
      url: '/assets/images/houses/2nd/after/Picture-11.webp'
    },
    {
      url: '/assets/images/houses/2nd/after/Picture-12.webp'
    },
    {
      url: '/assets/images/houses/2nd/after/Picture-13.webp'
    },
    {
      url: '/assets/images/houses/2nd/after/Picture-14.webp'
    },
    {
      url: '/assets/images/houses/2nd/after/Picture-15.webp'
    },
    {
      url: '/assets/images/houses/2nd/after/Picture-16.webp'
    },
    {
      url: '/assets/images/houses/2nd/after/Picture-17.webp'
    },
    {
      url: '/assets/images/houses/2nd/after/Picture-18.webp'
    },
    {
      url: '/assets/images/houses/2nd/after/Picture-19.webp'
    },
    {
      url: '/assets/images/houses/2nd/after/Picture-20.webp'
    },
    {
      url: '/assets/images/houses/2nd/after/Picture-21.webp'
    },
    {
      url: '/assets/images/houses/2nd/after/Picture-22.webp'
    },
    {
      url: '/assets/images/houses/2nd/after/Picture-23.webp'
    },
    {
      url: '/assets/images/houses/2nd/after/Picture-24.webp'
    },
    {
      url: '/assets/images/houses/2nd/after/Picture-25.webp'
    },
    {
      url: '/assets/images/houses/2nd/after/Picture-26.webp'
    },
  ]
}
