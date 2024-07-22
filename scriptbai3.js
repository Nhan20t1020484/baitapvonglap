document.addEventListener('DOMContentLoaded', () => {
    let output = '';

    // Pattern 1: Increasing triangle
    let rows = 5;
    let currentRow = 1;
    while (currentRow <= rows) {
        let stars = '';
        let count = 0;
        while (count < currentRow) {
            stars += '*';
            count++;
        }
        output += stars + '\n';
        currentRow++;
    }
    output += '\n';

    // Pattern 2: Decreasing triangle
    currentRow = rows;
    while (currentRow > 0) {
        let stars = '';
        let count = 0;
        while (count < currentRow) {
            stars += '*';
            count++;
        }
        output += stars + '\n';
        currentRow--;
    }
    output += '\n';

    // Pattern 3: Right-aligned increasing triangle
    currentRow = 1;
    while (currentRow <= rows) {
        let stars = '';
        let spaces = rows - currentRow;
        let countSpaces = 0;
        let countStars = 0;
        while (countSpaces < spaces) {
            stars += ' ';
            countSpaces++;
        }
        while (countStars < currentRow) {
            stars += '*';
            countStars++;
        }
        output += stars + '\n';
        currentRow++;
    }
    output += '\n';

    // Pattern 4: Right-aligned decreasing triangle
    currentRow = rows;
    while (currentRow > 0) {
        let stars = '';
        let spaces = rows - currentRow;
        let countSpaces = 0;
        let countStars = 0;
        while (countSpaces < spaces) {
            stars += ' ';
            countSpaces++;
        }
        while (countStars < currentRow) {
            stars += '*';
            countStars++;
        }
        output += stars + '\n';
        currentRow--;
    }

    document.getElementById('patterns').textContent = output;
});
