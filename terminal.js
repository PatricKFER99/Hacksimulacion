const input = document.getElementById('command-input');
const output = document.getElementById('console-output');

const fakeData = {
    names: ["Carlos Rivera", "Jorge Mendez", "Lucia Campos", "Katia Fernandez", "Patrick Lopez"],
    cities: ["Lima, PE", "Bogota, CO", "CDMX, MX", "Santiago, CL", "Buenos Aires, AR"],
    os: ["Windows 11 Pro", "Android 15 (Rooted)", "iOS 17.2", "Kali Linux 2024"]
};

function log(html, className = "") {
    const div = document.createElement('div');
    div.innerHTML = html;
    if (className) div.classList.add(className);
    output.appendChild(div);
    output.scrollTop = output.scrollHeight;
}

function getRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

async function startHack(target) {
    input.disabled = true;
    input.value = `ACCESSING TARGET: ${target}...`;
    
    const steps = [
        "Bypassing Firewall...",
        "Injecting Payload...",
        "Decryption Keys Found...",
        "Accessing GPS Module...",
        "Downloading User Data..."
    ];

    for (const step of steps) {
        await new Promise(r => setTimeout(r, 600 + Math.random() * 500));
        log(`> ${step}`);
    }

    // Fallo dramático simulado (20% probabilidad)
    if (Math.random() > 0.8) {
        log("⚠️ SECURITY BREACH DETECTED! REROUTING...", "warning");
        await new Promise(r => setTimeout(r, 1000));
    }

    showResults(target);
    input.disabled = false;
    input.value = "";
    input.focus();
}

function showResults(target) {
    log("<br>=== TARGET ACQUIRED ===", "success");
    log(`ID: ${target}`);
    log(`<span class="data-row">NAME: ${getRandom(fakeData.names)}</span>`);
    log(`<span class="data-row">IP: 192.168.${Math.floor(Math.random()*255)}.${Math.floor(Math.random()*255)}</span>`);
    log(`<span class="data-row">GEO: ${getRandom(fakeData.cities)}</span>`);
    log(`<span class="data-row">OS: ${getRandom(fakeData.os)}</span>`);
    log(`<span class="data-row">STATUS: <span class="error">COMPROMISED</span></span>`);
    log("=========================<br>");
}

input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && input.value.trim() !== "") {
        const val = input.value;
        log(`root@ghost:~$ scan ${val}`, "success");
        startHack(val);
    }
});