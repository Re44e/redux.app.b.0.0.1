import React from 'react';

import { connect } from 'react-redux';

const Video = ({activeModule, activeLesson}) => (
  <div>
    <strong>Módulo: <p>{activeModule.title}</p> </strong>
    <span>Aula: <p>{activeLesson.title}</p></span>
  </div>
);

export default connect(state => ({
  activeModule: state.course.activeModule,
  activeLesson: state.course.activeLesson
}))(Video);