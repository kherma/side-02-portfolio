import {
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaBootstrap,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaNpm,
  FaYarn,
  FaJira,
} from 'react-icons/fa';
import { DiJavascript } from 'react-icons/di';
import {
  SiReactrouter,
  SiRedux,
  SiSocketDotIo,
  SiMongodb,
  SiPrettier,
  SiEslint,
  SiJest,
  SiMocha,
} from 'react-icons/si';
import { BiDevices } from 'react-icons/bi';

const skills = [
  {
    id: 'front-end',
    stack: [
      { name: 'html', Icon: FaHtml5, color: '#E96328' },
      { name: 'css', Icon: FaCss3Alt, color: '#28A4D9' },
      { name: 'scss', Icon: FaSass, color: '#C66493' },
      { name: 'rwd', Icon: BiDevices, color: '#99BB68' },
      { name: 'bootstrap', Icon: FaBootstrap, color: '#6D36B2' },
      { name: 'javascript', Icon: DiJavascript, color: '#F7D137' },
      { name: 'react', Icon: FaReact, color: '#5FD3F2' },
      { name: 'router', Icon: SiReactrouter, color: '#C44043' },
      { name: 'redux', Icon: SiRedux, color: '#7249B6' },
    ],
  },
  {
    id: 'back-end',
    stack: [
      { name: 'node.js', Icon: FaNodeJs, color: '#8CBE3D' },
      { name: 'express', Icon: 'express', color: '#2D2D2D' },
      { name: 'websocket', Icon: SiSocketDotIo, color: '#2D5291' },
      { name: 'mongodb', Icon: SiMongodb, color: '#13964C' },
      { name: 'rest api', Icon: 'api', color: '#bfcbd6' },
    ],
  },
  {
    id: 'tools',
    stack: [
      { name: 'version control', Icon: FaGitAlt, color: '#E14B2F' },
      { name: 'npm', Icon: FaNpm, color: '#C53635' },
      { name: 'yarn', Icon: FaYarn, color: '#2B8AB5' },
      { name: 'bem', Icon: 'BEM', color: '#27292E' },
      { name: 'prettier', Icon: SiPrettier, color: '#192B32' },
      { name: 'eslint', Icon: SiEslint, color: '#4930BD' },
      { name: 'jira', Icon: FaJira, color: '#2580F7' },
      { name: 'jest', Icon: SiJest, color: '#944158' },
      { name: 'enzyme', Icon: 'enzyme', color: '#F55961' },
      { name: 'chai', Icon: 'chai', color: '#EDD39D' },
      { name: 'mocha', Icon: SiMocha, color: '#856141' },
    ],
  },
];

export default skills;
