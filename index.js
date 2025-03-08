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

    const allQuestions = [question1, question2, question3, question4, question5];

    const readyToPlay = await p.select({
        message: "No cheating. 5 questions. Results at the end. Ready to play?",
        initialValue: "Yes",
        options: [
            {
                value: "Yes", label: "Yes"
            },

            {
                value: "No", label: "No"
            }
        ],
    });

    if (readyToPlay === "Yes") {
        
        for (const question of allQuestions) {
            await askQuestions(question.question, question.answers, question.correctAnswerIndex);
        }

        p.outro(`${color.bgRed(color.black(`You got ${color.bold(correctTotal)} questions correct!`))}`);

        if (correctTotal === 5) {
            const s = p.spinner();
            s.start("Generating girft card code...");
            await setTimeout(5000);
            s.stop();
            p.outro(`${color.bgWhite(color.black(`Code: XR7WLY7JG5LW7CQM ${color.bold("")}`))}`);
        
        } else {
            const s = p.spinner();
            s.start();
            await setTimeout(3000);
            s.stop();
            p.outro(`${color.bgRed(color.black(`You need 5 correct answers to get the code 🤫`))}`);

        }
    } else {
        p.outro(`${color.bgCyan(color.black('Thank you for playing the Bonolo Games 🚀🚀🚀'))}`);
    }
}