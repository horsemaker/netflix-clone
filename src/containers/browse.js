import React, { useState, useEffect, useContext } from 'react';
import { SelectProfileContainer } from './profiles';
import { FooterContainer } from './footer';
import { FirebaseContext } from '../context/firebase';
import * as ROUTES from '../constants/routes';
import logo from '../logo.svg'
import { Header } from './../components';

export function BrowseContainer({ slides }) {
    const { firebase } = useContext(FirebaseContext);
    const user = firebase.auth().currentUser || {};

    return <SelectProfileContainer user={user} />;
}