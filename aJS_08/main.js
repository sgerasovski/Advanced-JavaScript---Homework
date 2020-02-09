let btn = $("#search");

btn.click(() => {
    let input = $("#country").val();

    fetch(`http://restcountries.eu/rest/v2/name/${input}`)
        .then(res => res.json())
        .then(data => {
            console.log("Country:")
            console.log(data[0].name)
            console.log("Neighbours:")

            let border = data[0].borders
            border.forEach(element => {
                fetch(`http://restcountries.eu/rest/v2/name/${element}`)
                    .then(res => {
                        if (res.status === 404) {
                            fetch(`http://restcountries.eu/rest/v2/name/${element.substring(0, element.length - 1)}`)
                                .then(res => res.json())
                                .then(data => {
                                    console.log(data[0].name)
                                })
                        } else {
                            return res.json()
                        }
                    })
                    .then(data => {
                        console.log(data[0].name)
                    })
            });
        })
});