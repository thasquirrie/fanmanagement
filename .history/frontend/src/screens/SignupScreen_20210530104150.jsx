import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const SignupScreen = () => {
 const dispatch = useDispatch();
 const [email, setEmail] = useState('');
 const [name, setName] = useState('');
 const [password, setPassword] = useState('');
 const [confirmPassword, setConfirmPassword] = useState('');

 return <div></div>;
};

const dispatch = useDispatch();
const [email, setEmail] = useState('');
const [name, setName] = useState('');
const [password, setPassword] = useState('');
const [confirmPassword, setConfirmPassword] = useState('');

export default SignupScreen;
