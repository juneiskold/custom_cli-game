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

    p.intro(`${color.bgRed(color.black(`Welcome to the ${color.bold(`Bonolo's Games`)} 🚀🚀🚀`))}`);

    const question1 = new Question(
        "💻 Is HTML a language?",
        ["Yes", "No"],
        1,
    );

    const question2 = new Question(
        "📅 When was JavaScript Created?",
        ["1940", "2003", "1995", "2010"],
        2,
    );

    const question3 = new Question(
        "🤝 What is the most popular programming language?",
        ["Python", "JavaScript", "Java", "C"],
        1,
    );

    const question4 = new Question(
        "🌎 How many programmers are there in the world?",
        ["20 million", "17 million", "12 million", "26 million"],
        3,
    );

    const question5 = new Question(
        "🐐 Who is the best coding YouTuber?",
        ["FireShip", "Traversy Media", "Web Dev Simplified", "CodeStackr"],
        0,
    );
}