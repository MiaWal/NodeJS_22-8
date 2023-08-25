// Requires prompt-sync and @types/prompt-sync package to be installed
import promptSync from 'prompt-sync';

const prompt = promptSync();

let balance = 0;

function deposit() {
    const amount = prompt('Enter amount: ');
    balance += parseInt(amount);
}

function withdraw() {
    const amount = prompt('Enter amount: ');
    balance -= parseInt(amount);
}

function exit() {
    process.exit(0);
}

function mainMenu() {
    console.clear();
    console.log('==========================');
    console.log(`Current balance: ${balance}`);
    console.log('1. Deposit');
    console.log('2. Withdraw');
    console.log('3. Exit');

    const selection = prompt('Select alternative: ');
    
    switch (selection) {
        case '1':
            deposit();
            break;
        case '2':
            withdraw();
            break;
        case '3':
            exit();
            break;
        default:
            process.exit(0);
            break;
    }
}

while(true){
    mainMenu();
}

// ts-node bonus2.ts