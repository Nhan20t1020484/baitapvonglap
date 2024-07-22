document.addEventListener('DOMContentLoaded', () => {
    const number = 5;
    const vonglapfor = (num) => {
        let result = 1;
        for (let i = 1; i <= num; i++) {
            result *= i;
        }
        return result;
    };
    const vonglapwhile = (num) => {
        let result = 1;
        let i = 1;
        while (i <= num) {
            result *= i;
            i++;
        }
        return result;
    };

    const vonglapdowhile = (num) => {
        let result = 1;
        let i = 1;
        do {
            result *= i;
            i++;
        } while (i <= num);
        return result;
    };
    const vonglaplongvaonhau = (num) => {
        let result = 1;
        for (let i = 1; i <= num; i++) {
            for (let j = 1; j <= 1; j++) {
                result *= i;
            }
        }
        return result;
    };

    document.getElementById('output-for').textContent = `Giai thừa của ${number} là: ${vonglapfor(number)}`;
    document.getElementById('output-while').textContent = `Giai thừa của ${number} là: ${vonglapwhile (number)}`;
    document.getElementById('output-do-while').textContent = `Giai thừa của ${number} là: ${vonglapdowhile(number)}`;
    document.getElementById('output-nested').textContent = `Giai thừa của ${number} là: ${vonglaplongvaonhau(number)}`;
});
