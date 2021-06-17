import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const SignupScreen = () => {
 const [email, setEmail] = useState('');
 const [name, setName] = useState('');
 const [password, setPassword] = useState('');
 const [confirmPassword, setConfirmPassword] = useState('');

 const dispatch = useDispatch();
 return <div></div>;
};
export default SignupScreen;
