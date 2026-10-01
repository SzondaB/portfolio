import type { Project } from '../types/project'

export const projectsEn: Project[] = [
  {
    id: 'adversarial-neural-networks',

    title:
      'Investigating the Applicability of Adversarial Neural Networks in Security Systems',

    shortTitle:
      'Adversarial Neural Networks',

    description:
      'A research project investigating the recognition and exploitation of patterns emerging in encrypted communication using adversarial neural networks.',

    fullDescription:
      'As part of my thesis, I investigated an Alice–Bob–Eve neural communication system. The research focused on analyzing how accurately and effectively an attacker neural network operating without access to the key can decode an encrypted message, as well as what hidden patterns it can recognize and exploit during communication.',

    technologies: [
      'Python',
      'PyTorch',
      'Neural Networks',
      'Machine Learning'
    ],

    category: 'Research Project',

    status: 'active',

    featured: true,

    highlights: [
      'Alice–Bob–Eve neural communication architecture',
      'Adversarial training process',
      'Pattern recognition from Eve’s perspective',
      'Investigation of nonce-based communication',
      'MultiEve approach',
      'Evaluation based on bitwise accuracy and hard bit error'
    ],

    sections: [
      {
        title: 'Project Goal',
        content:
          'The goal of the research was to investigate how adversarial neural networks can be applied in encrypted communication systems. Particular attention was given to analyzing whether Eve can recognize hidden patterns emerging during communication and use them to improve decoding performance.'
      },

      {
        title: 'Alice, Bob and Eve',
        content:
          'Alice is responsible for encoding the message using a key, while Bob attempts to recover the original message using the same key. Eve, in contrast, attempts to reconstruct the message without access to the key. During the adversarial training of the three networks, Alice aims to establish reliable communication while limiting Eve’s decoding capabilities by gradually increasing the complexity of the encoding method without reducing Bob’s ability to decode the message.'
      },

      {
        title: 'Pattern Recognition',
        content:
          'One of the main research questions was what hidden structures or recurring patterns Eve could recognize in the encrypted communication. These patterns could potentially be exploited to improve the efficiency of keyless decoding.'
      },

      {
        title: 'Further Developments',
        content:
          'Several variants of the system were investigated. Nonce-based communication was introduced to reduce the formation of static patterns, while the MultiEve approach used multiple different attacker networks to examine the security of the learned communication.'
      }
    ]
  },

  {
    id: 'ai-chess',

    title: 'AI-Based Chess Application',

    description:
      'An actively developed chess application combining classical search algorithms and neural networks for evaluating positions and selecting moves.',

    fullDescription:
      'The goal of the project is to develop a custom chess application with an artificial intelligence opponent. The system combines classical chess algorithms with neural-network-based position evaluation while also supporting the generation of self-play data for further model training.',

    technologies: [
      'Python',
      'PyTorch',
      'Pygame',
      'python-chess',
      'Minimax',
      'Alpha-Beta Pruning'
    ],

    category: 'Artificial Intelligence',

    status: 'active',

    highlights: [
      'Custom graphical chess interface',
      'Minimax search',
      'Alpha-beta pruning',
      'Neural position evaluation',
      'Self-play-based training'
    ],

    sections: [
      {
        title: 'Project Goal',
        content:
          'The project is an actively developed chess application in which I combine classical search algorithms with neural-network-based evaluation. The long-term goal is to create an increasingly capable and adaptive chess opponent.'
      },

      {
        title: 'Search Algorithm',
        content:
          'The AI uses the minimax algorithm with alpha-beta pruning to analyze possible moves. This allows it to evaluate positions several moves ahead while eliminating less relevant branches of the search tree.'
      },

      {
        title: 'Neural Network',
        content:
          'The neural model is responsible for estimating the value of chess positions. The network was developed using PyTorch and can use CUDA acceleration when compatible hardware is available.'
      },

      {
        title: 'Self-Play',
        content:
          'The system can generate games by playing against itself. The resulting training samples can then be used to further improve the neural evaluation model.'
      }
    ]
  },

  {
    id: 'portfolio',

    title: 'Personal Portfolio Website',

    description:
      'An interactive portfolio built with React and TypeScript to showcase my projects, certificates, and professional background.',

    fullDescription:
      'A custom portfolio website built with React and TypeScript to present my professional background, projects, certificates, and CV through a unified interactive interface. During development, I placed particular emphasis on component-based architecture, reusability, responsive design, and a clean user experience.',

    technologies: [
      'React',
      'TypeScript',
      'Vite',
      'CSS Modules'
    ],

    category: 'Web Development',

    status: 'active',

    highlights: [
      'React and TypeScript component architecture',
      'Interactive and animated user interface',
      'Data-driven project pages',
      'Interactive certificate cards with PDF previews',
      'CV preview and download functionality',
      'Responsive design'
    ],

    sections: [
      {
        title: 'Project Goal',
        content:
          'The goal of the project is to create a modern personal portfolio website that presents my professional background, projects, certificates, and CV through a unified interface. An important aspect of the design was to make the information easy to navigate while maintaining a visually consistent and interactive experience.'
      },

      {
        title: 'Component-Based Architecture',
        content:
          'The application was developed using React and TypeScript. Different functions and interface elements were divided into reusable components, while project-related information is stored in a separate data structure. As a result, adding new projects does not require creating a separate page for each project.'
      },

      {
        title: 'Interactive Interface',
        content:
          'The interface was designed so that animations and interactive elements support the presentation of content without making the website feel overcrowded. The site uses dynamic backgrounds, scroll-based appearance effects, and various interactive interface elements.'
      },

      {
        title: 'Certificates and CV',
        content:
          'The certificates I have earned are displayed on separate interactive cards. The cards can be flipped to display the original PDF document directly on the website, with additional options to open or download it separately. A dedicated CV interface also provides PDF preview and download functionality.'
      }
    ]
  },

  {
    id: 'funnel-analytics',

    title: 'Funnel Analytics Mini App',

    description:
      'A frontend application for analyzing campaign conversion funnels using automatically calculated metrics and a simple rule-based decision-support insight system.',

    fullDescription:
      'A Vue 3 and Vite frontend application for analyzing the conversion funnels of marketing campaigns. The system automatically calculates conversion and drop-off metrics from campaign- and step-level data, identifies problematic steps, and generates rule-based insights to support interpretation of the results.',

    technologies: [
      'Vue',
      'JavaScript',
      'Vite'
    ],

    category: 'Frontend',

    status: 'completed',

    highlights: [
      'Overview of campaigns and funnel steps',
      'Automatic conversion rate calculation',
      'Drop-off rate and drop-off count calculation',
      'Identification of the weakest funnel step',
      'Rule-based insight system',
      'Vue 3 component architecture'
    ],

    sections: [
      {
        title: 'Project Goal',
        content:
          'The goal of the project was to create an easy-to-use analytics interface that automatically calculates the most important conversion metrics from marketing campaign funnel data and helps identify problematic stages in the process.'
      },

      {
        title: 'Funnel Analysis',
        content:
          'The application handles multiple consecutive steps for each campaign. Based on the data associated with these steps, it calculates metrics including conversion rate, drop-off rate, and drop-off count, as well as the overall conversion rate of the campaign.'
      },

      {
        title: 'Insight System',
        content:
          'Based on the calculated metrics, the application generates rule-based insights. The system can identify conditions such as low overall conversion or unusually high drop-off and display relevant warnings and recommendations based on the data.'
      },

      {
        title: 'User Interface',
        content:
          'The Vue 3 interface consists of two main panels: one for selecting campaigns and another for reviewing the funnel steps and results of the selected campaign. The interface was designed with a focus on quick readability and clear presentation of analytical results.'
      }
    ]
  },

  {
    id: 'book-exchange',

    title: 'Book Lending and Exchange System',

    description:
      'A full-stack web application for managing books, purchasing them, and handling transactions between users.',

    fullDescription:
      'A full-stack web application built with React and Spring Boot for managing and sharing books and handling transactions between users. The system consists of separate frontend and backend layers, a MySQL database, user authentication, and authorization management.',

    technologies: [
      'React',
      'Spring Boot',
      'Java',
      'MySQL'
    ],

    category: 'Full Stack',

    status: 'completed',

    highlights: [
      'React-based frontend',
      'Spring Boot REST API',
      'JWT-based authentication',
      'MySQL database',
      'Private and public book management',
      'Book purchasing process',
      'Incoming and outgoing exchange offer management'
    ],

    sections: [
      {
        title: 'Project Goal',
        content:
          'The goal of the project was to create a full-stack web application where users can manage their own books, browse books belonging to other users, and initiate book-related transactions.'
      },

      {
        title: 'Frontend and Backend',
        content:
          'The client-side application was developed using React, while the backend provides a Spring Boot REST API. The two layers communicate through HTTP requests, and application data is stored in a MySQL database.'
      },

      {
        title: 'Users and Authentication',
        content:
          'The system supports user authentication and protected operations. Authenticated requests access the appropriate backend endpoints using JWT tokens, allowing user-specific books and transactions to be managed separately.'
      },

      {
        title: 'Book Management',
        content:
          'Users can manage their own books and configure them as private or public. Public books can be browsed by other users, while private and publicly available books can be managed separately through the user profile.'
      },

      {
        title: 'Transactions',
        content:
          'The application supports book-related transactions between users. Incoming and outgoing offers can be managed, accepted, or declined, and a separate purchasing process is also available.'
      }
    ]
  }
]