window.onload = function() {
    function trattim() {
        const trattim= [
            " ** ** ",
            "*******",
            "*******",
            " ***** ",
            "  ***  ",
            "   *   "
        ];
        
        let rowIndex = 0;
        let heartString = '';
        
        do {
            heartString += trattim[rowIndex] + '\n';
            rowIndex++;
        } while (rowIndex < trattim.length);
        
        // In kết quả ra màn hình
        document.getElementById('trattim').textContent = heartString;
    }
    
    trattim();
};
