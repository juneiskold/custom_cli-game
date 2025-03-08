#!/usr/bin/env node


import * as p from '@clack/prompts';
import { setTimeout } from 'timers/promises';
import color from 'picocolors';


let  correctTotal = 0;

async function askQuestions(questions, answers, correctAnswerIndex) {
    
    const options = []
    answers.forEach((answer) => {
        options.push({value: answer, label: answer})
    });
}