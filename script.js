async function fetchData() {
    try {
        const res = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json");
        const record = await res.json();
        console.log(record);
        let bpiData = record.bpi;

        let row = "";
        for (let key in bpiData) {
            row += `
                <tr>
                    <td id="code_${key}">${bpiData[key].code}</td>
                    <td id="symbol_${key}">${bpiData[key].symbol}</td>
                    <td id="rate_${key}">${bpiData[key].rate}</td>
                    <td id="description_${key}">${bpiData[key].description}</td>
                    <td id="rate_float_${key}">${bpiData[key].rate_float}</td>
                </tr>
            `
        }
        document.getElementById("tbody").innerHTML = row;
    } catch (error) {
        console.log(error);
    }

}
fetchData();