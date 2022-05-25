import React from 'react';
import { useSelector } from 'react-redux';
import AuthStack from './AuthStack';
import StudentStack from './StudentStack';
import TeacherStack from './TeacherStack';

export default function AppNavigation() {
  const { uid, role } = useSelector(state => state.auth);
  const isTeacher = role === 'teacher';
  return (
    <>{uid ? isTeacher ? <TeacherStack /> : <StudentStack /> : <AuthStack />}</>
  );
}
