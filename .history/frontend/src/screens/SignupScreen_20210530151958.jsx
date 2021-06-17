import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const SignupScreen = () => {
 const [name, setName] = useState('');
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');
 const [confirmPassword, setConfirmPassword] = useState('');

 const dispatch = useDispatch();
 return <div></div>;
};
export default SignupScreen;
