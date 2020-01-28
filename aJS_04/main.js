/*
Homework 1
Task 1
Create an html page with a table and a button. When the button is clicked show results for the first 10 planets from the Star Wars api. The information in the table are:

Planet Name
Population
Climate
Gravity
There should be a function that makes the call to the api for the planets ( should have URL for a parameter ) There should be a function that prints planets in to the table **API URL: ** https://swapi.co/api/planets/?page=1

Task 2
After the user clicks the button to get the first 10 planets, a button should be shown below the table that says: NEXT 10. When the button is clicked you should make another call and get the next 10 planets and change the table contents with information about the next 10 planets. After the next 10 planets are shown the button NEXT 10 should disapear and a new button PREVIOUS 10 should appear. The previous button should return the first 10 planets in the table and hide the PREVIOUS 10 button and show the NEXT 10 button.

**API URL: ** https://swapi.co/api/planets/?page=2
*/

let btn = $("#btn");

let showPlanets = () => {
    $.ajax({
        url: "https://swapi.co/api/planets/?page=1",

        success: (res) => {
            let thead = $("<thead>");
            thead.appendTo("table");
            let tbody = $("<tbody>");
            tbody.appendTo("table");
            let planetStats = ["Planet Name", "Population", "Climate", "Gravity"];
            $.each(planetStats, (i) => {
                let tdhead = $("<td>");
                tdhead.text(`${planetStats[i]}`);
                tdhead.appendTo(thead);
            });
            $.each(res.results, (i) => {
                let planets = res.results[i];

                let row = $("<tr>");
                row.appendTo(tbody);
                let tdName = $("<td>");
                tdName.text(`${planets.name}`);
                tdName.appendTo(row);

                let tdPop = $("<td>");
                tdPop.text(`${planets.population}`);
                tdPop.appendTo(row);

                let tdClimate = $("<td>");
                tdClimate.text(`${planets.climate}`);
                tdClimate.appendTo(row);

                let tdGrav = $("<td>");
                tdGrav.text(`${planets.gravity}`);
                tdGrav.appendTo(row);
            })

        }
    })

    btn.delay(1000).fadeOut("slow");
}
btn.click(showPlanets);
btn.click(() => {
    let newBtn = $("<button>");
    newBtn.appendTo("#parent");
    newBtn.text("NEXT 10");

    newBtn.click(() => {
        $("thead").remove();
        $("tbody").remove();

        $.ajax({
            url: "https://swapi.co/api/planets/?page=2",

            success: (res) => {
                let thead = $("<thead>");
                thead.appendTo("table");
                let tbody = $("<tbody>");
                tbody.appendTo("table");
                let planetStats = ["Planet Name", "Population", "Climate", "Gravity"];
                $.each(planetStats, (i) => {
                    let tdhead = $("<td>");
                    tdhead.text(`${planetStats[i]}`);
                    tdhead.appendTo(thead);
                });
                $.each(res.results, (i) => {
                    let planets = res.results[i];

                    let row = $("<tr>");
                    row.appendTo(tbody);
                    let tdName = $("<td>");
                    tdName.text(`${planets.name}`);
                    tdName.appendTo(row);

                    let tdPop = $("<td>");
                    tdPop.text(`${planets.population}`);
                    tdPop.appendTo(row);

                    let tdClimate = $("<td>");
                    tdClimate.text(`${planets.climate}`);
                    tdClimate.appendTo(row);

                    let tdGrav = $("<td>");
                    tdGrav.text(`${planets.gravity}`);
                    tdGrav.appendTo(row);
                })

            }
        })

        newBtn.delay(1000).fadeOut("slow");
    });

    newBtn.click(() => {
        let prevTen = $("<button>");
        prevTen.appendTo("#parent");
        prevTen.text("PREVIOUS 10");

        prevTen.click(() => {
            $("thead").remove();
            $("tbody").remove();

            showPlanets();

            prevTen.delay(1000).fadeOut("slow");
            newBtn.show();
        })
    })
});