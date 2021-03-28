
const request = require('request');

let inputKey = '';
process.argv.forEach((val, index) => {
    if (index === 2) {
        inputKey = val;
    }
});

const options = {
    url: 'https://codequiz.azurewebsites.net/',
    headers: {
        'Cookie': 'hasCookie=true'
    }
}
request.get(options, (err2, response2, body2) => {
    let splitTable = body2.split('<table>')[1];
    splitTable = splitTable.split('</table>')[0];

    let splitTr = splitTable.split('<tr>');

    const dataList = [];
    splitTr.forEach((item, index) => {
        if (index > 1) {
            const ds = item.trim().split('<td>');
            dataList.push({ FUND_NAME: ds[1].replace('</td>', '').trim(), NAV: ds[2].replace('</td>', '').trim(), BID: ds[3].replace('</td>', '').trim(), OFFER: ds[4].replace('</td>', '').trim(), CHANGE: ds[5].replace('</td></tr>', '').trim() })
        }
    });
    const filter = dataList.find((ds) => ds.FUND_NAME.toLowerCase() == inputKey.toLowerCase());
    console.log('Your FUNDCODE is -> ', filter);
});

