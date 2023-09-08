import { FirebaseAuth } from '@/auth/firebase/firebaseConfig';
import { login, logout } from '@/store/auth/authSlice';
import { RootState } from '@/store/store';
import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

export const useCheckAuth = () => {

  const dispatch = useDispatch();
  const {errorMessage,status} = useSelector((state:RootState) => state.auth)

  useEffect(() => {
    onAuthStateChanged(FirebaseAuth, async(user)=> {
      if(!user) return dispatch(logout(errorMessage));

      const {uid, email, displayName, photoURL} = user;

      dispatch(login({uid, email, displayName, photoURL}))
    })
  }, [])

  return {status}
}
