const trustedRekberLinks = [
    "https://www.facebook.com/mraihanbimoarifi",
    "https://www.facebook.com/RekberBimo",
    "https://www.facebook.com/patrickhiunediaa",
    "https://www.facebook.com/ImeL.Rinoa",
    "https://www.facebook.com/aartama",
    "https://www.facebook.com/tokovalorants"
];

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
    "6265094299"
];

const scammerAccounts = [
    "0382007060", // BCA Syariah atas nama Mochamad Akbar Erlangga
    "08111000048" // Dana
];

function normalizeUrl(url) {
    // Menghapus trailing '/' jika ada
    return url.endsWith('/') ? url.slice(0, -1) : url;
}

function checkProfile() {
    const userInput = document.getElementById('profileUrl').value.trim();
    const resultElement = document.getElementById('result');

    // Normalisasi URL
    let normalizedInput = normalizeUrl(userInput);

    if (trustedRekberLinks.includes(normalizedInput)) {
        resultElement.textContent = "Trusted";
        resultElement.className = 'result trusted';
    } else if (scammerRekberLinks.includes(normalizedInput)) {
        resultElement.textContent = "SCAMMER, LARI COK";
        resultElement.className = 'result scammer';
    } else {
        resultElement.textContent = "Tidak ada track record";
        resultElement.className = 'result no-record';
    }
}

function checkAccount() {
    const userInput = document.getElementById('accountId').value.trim();
    const resultElement = document.getElementById('accountResult');

    if (trustedAccounts.includes(userInput)) {
        resultElement.textContent = "Trusted";
        resultElement.className = 'result trusted';
    } else if (scammerAccounts.includes(userInput)) {
        resultElement.textContent = "SCAMMER, LARI COK";
        resultElement.className = 'result scammer';
    } else {
        resultElement.textContent = "Tidak ada track record";
        resultElement.className = 'result no-record';
    }
}
