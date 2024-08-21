const trustedRekberLinks = {
    "https://www.facebook.com/mraihanbimoarifi/": "bimoarif",
    "https://www.facebook.com/RekberBimo": "Rekbim",
    "https://www.facebook.com/patrickhiunediaa": "Pattrrick Darnell",
    "https://www.facebook.com/ImeL.Rinoa": "Imel Anggraini",
    "https://www.facebook.com/aartama": "Arya Pratama",
    "https://www.facebook.com/tokovalorants": "Toko Valorant"
};

const scammerRekberLinks = [
    "https://www.facebook.com/groups/602713303725760/user/100068922445885",
    "https://www.facebook.com/61564003316106",
    "https://www.facebook.com/groups/groups.rekbims",
    "https://www.facebook.com/100046935469044",
    "https://www.facebook.com/100087531587418",
    "https://www.facebook.com/groups/rekberbyxylous",
    "https://www.facebook.com/100090262387386",
    "https://www.facebook.com/100001410816702",
    "https://www.facebook.com/100084295721416",
    "https://www.facebook.com/100027396799418",
    "https://www.facebook.com/100039131837095",
    "https://www.facebook.com/100082214996855",
    "https://www.facebook.com/100077990753579",
    "https://www.facebook.com/100078395115053",
    "https://www.facebook.com/61552783995978"
];

const trustedAccounts = [
    "085811328725"
];

const scammerAccounts = [
    "0382007060", // BCA Syariah atas nama Mochamad Akbar Erlangga
    "08111000048" // Dana
];

function checkProfile() {
    const userInput = document.getElementById('profileUrl').value.trim();
    const resultElement = document.getElementById('result');

    // Pastikan URL berakhir dengan '/' untuk pencocokan yang tepat
    let normalizedInput = userInput;
    if (!normalizedInput.endsWith('/')) {
        normalizedInput += '/';
    }

    if (trustedRekberLinks.hasOwnProperty(normalizedInput)) {
        resultElement.textContent = `Trusted: ${trustedRekberLinks[normalizedInput]} (warna hijau)`;
        resultElement.className = 'result trusted';
    } else if (scammerRekberLinks.includes(normalizedInput)) {
        resultElement.textContent = "Scammer (warna merah)";
        resultElement.className = 'result scammer';
    } else {
        resultElement.textContent = "Tidak ada track record (abu-abu/putih)";
        resultElement.className = 'result no-record';
    }
}

function checkAccount() {
    const userInput = document.getElementById('accountId').value.trim();
    const resultElement = document.getElementById('accountResult');

    if (trustedAccounts.includes(userInput)) {
        resultElement.textContent = "Trusted (warna hijau)";
        resultElement.className = 'result trusted';
    } else if (scammerAccounts.includes(userInput)) {
        resultElement.textContent = "Scammer (warna merah)";
        resultElement.className = 'result scammer';
    } else {
        resultElement.textContent = "Tidak ada track record (abu-abu/putih)";
        resultElement.className = 'result no-record';
    }
}
