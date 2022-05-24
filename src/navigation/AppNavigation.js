import React from 'react';
import AuthStack from './AuthStack';
import StudentStack from './StudentStack';
import TeacherStack from './TeacherStack';

export default function AppNavigation() {
  const uid = null;
  const isTeacher = false;
  return (
    <>{uid ? isTeacher ? <TeacherStack /> : <StudentStack /> : <AuthStack />}</>
  );
}
