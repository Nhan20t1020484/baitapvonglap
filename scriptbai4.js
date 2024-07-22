window.onload = function() {
    let chieudai = 20;
    let chieurong = 4; 
    let hinhchunhat = '';
    let i = 0;
    do {
        if (i === 0 || i === chieurong - 1) {
            hinhchunhat += '*'.repeat(chieudai) + '\n';
        } else {
            hinhchunhat += '*' + ' '.repeat(chieudai - 2) + '*' + '\n';
        }
        i++;
    } while (i < chieurong);

    document.getElementById('hinhchunhat').textContent = hinhchunhat;
};
