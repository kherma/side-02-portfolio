import bootcamp1 from '../../../images/bootcamp/bootcamp-1.jpg';
import bootcamp2 from '../../../images/bootcamp/bootcamp-2.jpg';
import bootcamp3 from '../../../images/bootcamp/bootcamp-3.jpg';
import bootcamp4 from '../../../images/bootcamp/bootcamp-4.jpg';
import bootcamp5 from '../../../images/bootcamp/bootcamp-5.jpg';
import bootcamp6 from '../../../images/bootcamp/bootcamp-6.jpg';

import filler from '../../../images/filler.jpg';

import course1 from '../../../images/courses/course-1.jpg';
import course2 from '../../../images/courses/course-2.jpg';
import course3 from '../../../images/courses/course-3.jpg';
import course4 from '../../../images/courses/course-4.jpg';
import course5 from '../../../images/courses/course-5.jpg';
import course6 from '../../../images/courses/course-6.jpg';
import course7 from '../../../images/courses/course-7.jpg';
import course8 from '../../../images/courses/course-8.jpg';

import { v4 as uuidv4 } from 'uuid';

const data = [
  {
    id: uuidv4(),
    sectionTitle: 'not bad (bootcamp)',
    projects: [
      {
        id: uuidv4(),
        type: 'back',
        rwd: false,
        imageSource: filler,
        githubLink: 'https://github.com/kherma/school-19-mongodb-database',
        technologies: [
          { text: 'express', color: '#2D2D2D', id: uuidv4() },
          { text: 'mongodb', color: '#13964C', id: uuidv4() },
        ],
      },
      {
        id: uuidv4(),
        type: 'full',
        rwd: false,
        imageSource: bootcamp6,
        hostLink: 'https://express-api-client-app.herokuapp.com/',
        githubLink: 'https://github.com/kherma/school-16-rest-api',
        technologies: [
          { text: 'react', color: '#5FD3F2', id: uuidv4() },
          { text: 'api', color: '#bfcbd6', id: uuidv4() },
          { text: 'websocket', color: '#2D5291', id: uuidv4() },
        ],
      },
      {
        id: uuidv4(),
        type: 'full',
        rwd: false,
        imageSource: bootcamp5,
        githubLink:
          'https://github.com/kherma/school-15-express-almost-spotify',
        technologies: [
          { text: 'express', color: '#2D2D2D', id: uuidv4() },
          { text: 'handlebars', color: '#EC6023', id: uuidv4() },
        ],
      },
      {
        id: uuidv4(),
        type: 'front',
        rwd: false,
        imageSource: bootcamp4,
        hostLink: 'https://react-and-redux-to-do-list.herokuapp.com/',
        githubLink: 'https://github.com/kherma/school-07-react-starter',
        technologies: [
          { text: 'react', color: '#5FD3F2', id: uuidv4() },
          { text: 'router', color: '#C44043', id: uuidv4() },
          { text: 'redux', color: '#7249B6', id: uuidv4() },
        ],
      },
      {
        id: uuidv4(),
        type: 'front',
        rwd: false,
        imageSource: bootcamp3,
        hostLink:
          'https://murmuring-wave-46799.herokuapp.com/?date=2020-12-04&hour=12&people=1&hours=1&phone=&address=#/home',
        githubLink: 'https://github.com/kherma/school-06-project-pizzeria',
        technologies: [
          { text: 'html', color: '#E96328', id: uuidv4() },
          { text: 'scss', color: '#C66493', id: uuidv4() },
          { text: 'javascript', color: '#F7D137', id: uuidv4() },
        ],
      },
      {
        id: uuidv4(),
        type: 'front',
        rwd: false,
        imageSource: bootcamp2,
        hostLink: 'https://kherma.github.io/school-05-javascript-blog/',
        githubLink: 'https://github.com/kherma/school-05-javascript-blog',
        technologies: [
          { text: 'html', color: '#E96328', id: uuidv4() },
          { text: 'scss', color: '#C66493', id: uuidv4() },
          { text: 'javascript', color: '#F7D137', id: uuidv4() },
        ],
      },
      {
        id: uuidv4(),
        type: 'front',
        rwd: false,
        imageSource: bootcamp1,
        hostLink: 'https://kherma.github.io/school-04-javascript-prework/',
        githubLink: 'https://github.com/kherma/school-04-javascript-prework',
        technologies: [
          { text: 'html', color: '#E96328', id: uuidv4() },
          { text: 'scss', color: '#C66493', id: uuidv4() },
          { text: 'javascript', color: '#F7D137', id: uuidv4() },
        ],
      },
    ],
  },
  {
    id: uuidv4(),
    sectionTitle: 'quantity matter (courses)',
    projects: [
      {
        id: uuidv4(),
        type: 'front',
        rwd: false,
        imageSource: course8,
        hostLink: 'https://wonderful-mirzakhani-3a1736.netlify.app/',
        githubLink: 'https://github.com/kherma/practice-17-chess.js-dnd',
        technologies: [
          { text: 'react', color: '#5FD3F2', id: uuidv4() },
          { text: 'chess.js', color: '#B38A65', id: uuidv4() },
          { text: 'dnd', color: '#355D71', id: uuidv4() },
        ],
      },
      {
        id: uuidv4(),
        type: 'front',
        rwd: false,
        imageSource: course7,
        hostLink: 'https://loving-nightingale-601569.netlify.app/',
        githubLink: 'https://github.com/kherma/practice-12-mapty-oop',
        technologies: [
          { text: 'javascript', color: '#F7D137', id: uuidv4() },
          { text: 'geolocation', color: '#D5483B', id: uuidv4() },
        ],
      },
      {
        id: uuidv4(),
        type: 'front',
        rwd: false,
        imageSource: course6,
        hostLink: 'https://cranky-curran-3e989d.netlify.app/',
        githubLink:
          'https://github.com/kherma/practice-11-bankist-advanced-dom',
        technologies: [
          { text: 'html', color: '#E96328', id: uuidv4() },
          { text: 'css', color: '#28A4D9', id: uuidv4() },
          { text: 'javascript', color: '#F7D137', id: uuidv4() },
        ],
      },
      {
        id: uuidv4(),
        type: 'front',
        rwd: true,
        imageSource: course5,
        hostLink: 'https://kherma.github.io/practice-10-scss-natour/',
        githubLink: 'https://github.com/kherma/practice-10-scss-natour',
        technologies: [
          { text: 'html', color: '#E96328', id: uuidv4() },
          { text: 'scss', color: '#C66493', id: uuidv4() },
        ],
      },
      {
        id: uuidv4(),
        type: 'front',
        rwd: false,
        imageSource: course4,
        hostLink: 'https://hopeful-ramanujan-a0f4c6.netlify.app/',
        githubLink: 'https://github.com/kherma/practice-09-bankist-date-time',
        technologies: [
          { text: 'html', color: '#E96328', id: uuidv4() },
          { text: 'css', color: '#28A4D9', id: uuidv4() },
          { text: 'javascript', color: '#F7D137', id: uuidv4() },
        ],
      },
      {
        id: uuidv4(),
        type: 'front',
        rwd: true,
        imageSource: course3,
        hostLink: 'https://stoic-cray-f8ac53.netlify.app/',
        githubLink: 'https://github.com/kherma/practice-08-sass',
        technologies: [
          { text: 'html', color: '#E96328', id: uuidv4() },
          { text: 'scss', color: '#C66493', id: uuidv4() },
        ],
      },
      {
        id: uuidv4(),
        type: 'front',
        rwd: true,
        imageSource: course2,
        hostLink: 'https://determined-chandrasekhar-9a7b2f.netlify.app/',
        githubLink: 'https://github.com/kherma/practice-07-grid',
        technologies: [
          { text: 'html', color: '#E96328', id: uuidv4() },
          { text: 'css', color: '#28A4D9', id: uuidv4() },
        ],
      },
      {
        id: uuidv4(),
        type: 'front',
        rwd: false,
        imageSource: course1,
        hostLink: 'https://kherma.github.io/practice-03-dice-game-dom/',
        githubLink: 'https://github.com/kherma/practice-03-dice-game-dom',
        technologies: [
          { text: 'html', color: '#E96328', id: uuidv4() },
          { text: 'css', color: '#28A4D9', id: uuidv4() },
          { text: 'javascript', color: '#F7D137', id: uuidv4() },
        ],
      },
    ],
  },
];

export default data;
