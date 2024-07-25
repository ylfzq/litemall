
export default {
    normalizeMoneyStr: function (moneyStr) {
        const parts = `${moneyStr}`.split('.');
        if (parts.length == 2) {
            return parts[0] + '.' + (parts[1].length < 2 ? parts[1] + '0' : parts[1].substr(0,2))
        } else if (parts.length == 1) {
            return moneyStr + '.00'
        } else {
            return moneyStr;
        }
    }
}