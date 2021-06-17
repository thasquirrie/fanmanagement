import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signup } from '../actions/userActions';

const SignupScreen = ({ location, history }) => {
 const [name, setName] = useState('');
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');
 const [confirmPassword, setConfirmPassword] = useState('');
 const [aboutYou, setAboutYou] = useState('');

 const dispatch = useDispatch();

 const redirect = location.search ? location.search.split('=')[1] : '/';

 const userSignup = useSelector((state) => state.userSignup);

 const { loading, error, userInfo } = userSignup;

 useEffect(() => {
  if (userInfo) {
   history.push(redirect);
  }
 }, [userInfo, history, redirect]);

 const submitHandler = (e) => {
  e.preventDefault();
  console.log('thasquirrie');
  console.log();
  dispatch(signup({ name, email, password, confirmPassword }));
 };
 return (
 
 );
};
export default SignupScreen;
