import React from 'react';
import ReactDOM from "react-dom";
import FamilyViewCreate from './Apps/FamilyViewCreate';

var test = document.getElementById('test-container');
if (test != null) {
    ReactDOM.render(
        <FamilyViewCreate />,
        test
    );
}