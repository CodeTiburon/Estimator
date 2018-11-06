import React from 'react';
import { toast } from 'react-toastify';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faSpinner);

const http = require('axios');
const icon = <span><FontAwesomeIcon icon="spinner" spin /> Loading...</span>;

export function httpGet(url, onSuccess, params = null) {
    const loadingToastId = toast(icon);

    http.get( url, {params: params} )
        .then( (response) => {
            onSuccess(response);
        })
        .catch( (error) => {
            let message = null;

            if (error.response) {
                message = error.response.status + ': ' + error.response.data.message;
            } else if (error.request) {
                message = 'Unknow error occured. Please verify your request and try again';
            } else {
                message = error.message;
            }

            if ( null !== message ) {
                showMessage(message);
            }
        })
        .then( () => {
            toast.dismiss(loadingToastId);
        });
}

export function showMessage(message, type = 'error') {
    ('default' === type) ? toast(message) : toast[type](message);
}

export function decodeHTML(text) {
    var doc = new DOMParser().parseFromString(text, 'text/html');

    return doc.documentElement.textContent;
}
