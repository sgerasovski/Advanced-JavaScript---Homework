let btn = $("#search");

btn.click(() => {
    let input = $("#country").val();

    fetch(`https://restcountries.eu/rest/v2/alpha/${input}`)
        .then(res => res.json())
        .then(data => {
            console.log("Country:")
            console.log(data.name)
            console.log("Neighbours:")

            let border = data.borders
            border.forEach(element => {
                fetch(`https://restcountries.eu/rest/v2/alpha/${element}`)
                    .then(res => res.json())
                    .then(data => {
                        console.log(data.name)
                    })
            });
        })
});