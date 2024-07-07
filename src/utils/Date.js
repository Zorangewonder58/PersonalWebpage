import React from 'react';
import moment from 'moment';

//const moment = require('moment');

//var FontAwesome = require('react-fontawesome');

export function getCurrentDate(separator=''){
    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    return `${year}${separator}${month<10?`0${month}`:`${month}`}${separator}${date}`;
}

export function getMoment(dateSeparator=':',)
{
    const date_create = moment().format(`MM${dateSeparator}DD`);

    return date_create;
}





