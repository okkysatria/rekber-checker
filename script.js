const originalRekberLinks = [
    "https://www.facebook.com/groups/229013498938555/user/100000274846853",
    "https://www.facebook.com/groups/602713303725760/user/100068922445885"
];

const originalAccounts = [
    "085811328725",
    "0382007060",
    // Add more digital wallets and bank account numbers as needed
];

function checkProfile() {
    const userInput = document.getElementById('profileUrl').value.trim();
    const resultElement = document.getElementById('result');
    
    if (originalRekberLinks.includes(userInput)) {
        resultElement.textContent = "Link ini adalah profil Facebook yang asli.";
        resultElement.className = 'result safe';
    } else {
        resultElement.textContent = "Link ini bukan profil Facebook yang asli!";
        resultElement.className = 'result warning';
    }
}

function checkAccount() {
    const userInput = document.getElementById('accountId').value.trim();
    const resultElement = document.getElementById('accountResult');
    
    if (originalAccounts.includes(userInput)) {
        resultElement.textContent = "Akun ini adalah dompet digital atau rekening bank yang asli.";
        resultElement.className = 'result safe';
    } else {
        resultElement.textContent = "Akun ini bukan dompet digital atau rekening bank yang asli!";
        resultElement.className = 'result warning';
    }
}
