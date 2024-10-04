async function brasilHolidays() {
    const url = "https://brasilapi.com.br/api/feriados/v1/2024";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    for (const item of data) {
        console.log(item);

        const container = document.querySelector("#data-container");

        container.innerHTML += '<div class="block">' + "<p>" +"Date: " + item.date + "<br>" +  "Name: " + item.name + "<br>" +  "Type: " + item.type + "</p>" + "</div>"
    }
  }
brasilHolidays();