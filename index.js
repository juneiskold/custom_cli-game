#!/usr/bin/env node


import * as p from '@clack/prompts';
import { setTimeout } from 'timers/promises';
import color from 'picocolors';


let  correctTotal = 0;

async function askQuestions(question, answers, correctAnswerIndex) {
    
    const options = []
    answers.forEach((answer) => {
        options.push({value: answer, label: answer})
    });

    const answer = await p.select({
        message: question,
        initialValue: '1',
        options: options,
    });

    const s = p.spinner();
    s.start();
    await setTimeout(1000);
    s.stop();

    if (answer === answers[correctAnswerIndex]) {
        correctTotal ++;
    }
}

class Question {

    constructor(question, answersArray, correctAnswerIndex) {
        this.question = question;
        this.answers = this.answers;
        this.correctAnswerIndex = correctAnswerIndex;
    }
}

async function main() {
    
    console.clear();

    await setTimeout(1000);

    p.intro(`${color.bgRed(color.black(`Welcome to the ${color.bold(`Bonolo's Games`)} 🚀🚀🚀`))}`)
}