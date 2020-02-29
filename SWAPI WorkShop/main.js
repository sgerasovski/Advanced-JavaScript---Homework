let peopleBtn = $("#people");
let shipBtn = $("#ships");
let showPeople = () => {
  $("#parent").hide("slow");

  let picDiv = $("<div>");
  picDiv.appendTo("#pplDiv");
  let img = $("<img>");
  img.attr("src", "loader.gif");
  img
    .css("height", "350px")
    .css("width", "350px")
    .css("position", "absolute")
    .css("border", "none");
  img.appendTo(picDiv);

  $.ajax({
    url: "https://swapi.co/api/people/?page=1",

    success: res => {
      picDiv.hide("slow");
      let table = $("<table>");
      table.appendTo("#pplDiv");

      let thead = $("<thead>");
      thead.appendTo(table);
      let tbody = $("<tbody>");
      tbody.appendTo(table);
      let peopleStats = [
        "Name",
        "Height",
        "Mass",
        "Birth Year",
        "Species Name"
      ];
      $.each(peopleStats, i => {
        let tdhead = $("<td>");
        tdhead.attr("class", "cursor");
        tdhead.attr("id", `id${i}`);
        tdhead.text(`${peopleStats[i]}`);
        tdhead.appendTo(thead);
      });

      $.each(res.results, i => {
        let people = res.results[i];

        let row = $("<tr>");
        row.appendTo(tbody);
        let tdName = $("<td>");
        tdName.text(`${people.name}`);
        tdName.appendTo(row);
        $("#id0").click(() => {
          let sortNames = [];
          $.each(res.results, i => {
            let people = res.results[i];
            sortNames.push(people.name);
          });

          sortNames.sort((a, b) => (a > b ? 1 : -1));
          tdName.text(`${sortNames[i]}`);

          $("#id0").click(() => {
            sortNames.sort((a, b) => (a > b ? -1 : 1));
            tdName.text(`${sortNames[i]}`);
          });
        });

        let tdHeight = $("<td>");
        tdHeight.text(`${people.height}`);
        tdHeight.appendTo(row);
        $("#id1").click(() => {
          let sortHeight = [];
          $.each(res.results, i => {
            let people = res.results[i];
            sortHeight.push(people.height);
          });

          sortHeight.sort((a, b) => a - b);
          tdHeight.text(`${sortHeight[i]}`);

          $("#id1").click(() => {
            sortHeight.sort((a, b) => b - a);
            tdHeight.text(`${sortHeight[i]}`);
          });
        });

        let tdMass = $("<td>");
        tdMass.text(`${people.mass}`);
        tdMass.appendTo(row);
        $("#id2").click(() => {
          let sortMass = [];
          $.each(res.results, i => {
            let people = res.results[i];
            sortMass.push(people.mass);
          });

          sortMass.sort((a, b) => a - b);
          tdMass.text(`${sortMass[i]}`);

          $("#id2").click(() => {
            sortMass.sort((a, b) => b - a);
            tdMass.text(`${sortMass[i]}`);
          });
        });

        let tdBirthYear = $("<td>");
        tdBirthYear.text(`${people.birth_year}`);
        tdBirthYear.appendTo(row);
        $("#id3").click(() => {
          let sortBY = [];
          $.each(res.results, i => {
            let people = res.results[i];
            sortBY.push(people.birth_year);
          });

          sortBY.sort(
            (a, b) =>
              a.substring(0, a.length - 3) - b.substring(0, b.length - 3)
          );
          tdBirthYear.text(`${sortBY[i]}`);

          $("#id3").click(() => {
            sortBY.sort(
              (a, b) =>
                b.substring(0, b.length - 3) - a.substring(0, a.length - 3)
            );
            tdBirthYear.text(`${sortBY[i]}`);
          });
        });

        $.ajax({
          url: people.species[0],

          success: res => {
            let speciesName = $("<td>");
            speciesName.text(`${res.name}`);
            speciesName.appendTo(row);
            $("#id4").click(() => {
              let sortSN = [];
              $.each(res, i => {
                // let people = res.results[i]
                sortSN.push(res.name);
              });
              console.log(sortSN);

              sortSN.sort((a, b) => (a > b ? 1 : -1));
              speciesName.text(`${sortSN[i]}`);

              $("#id0").click(() => {
                sortSN.sort((a, b) => (a > b ? -1 : 1));
                speciesName.text(`${sortSN[i]}`);
              });
            });
          }
        });
      });
    },

    error: err => {
      let errorDiv = $("<div>");
      errorDiv.appendTo("#pplDiv");
      errorDiv
        .css("height", "250px")
        .css("width", "500px")
        .css("border", "solid #808080 2px")
        .css("border-radius", "10px")
        .css("background-color", "#F5F5DC")
        .css("margin", "0 auto");
      let pError = $("<p>");
      pError.appendTo(errorDiv);
      pError.text("Oops! That page couldn't be found.");
      pError
        .css("font-size", "32px")
        .css("margin", "10px")
        .css("padding", "5px")
        .css("color", "#FF6347");
      let img = $("<img>");
      img.attr("src", "loader.gif");
      img
        .css("height", "150px")
        .css("width", "150px")
        .css("margin-left", "175px")
        .css("border", "none");
      img.appendTo(errorDiv);
    }
  });
};

peopleBtn.click(showPeople);
// peopleBtn.click(() => {
//   let picDiv = $("<div>");
//   picDiv.appendTo("#pplDiv");
//   let img = $("<img>");
//   img.attr("src", "loader.gif");
//   img
//     .css("height", "350px")
//     .css("width", "350px")
//     .css("position", "absolute")
//     .css("border", "none");
//   img.appendTo(picDiv);
//   setTimeout(() => {
//     picDiv.hide("slow");
//     showPeople();
//   }, 1000);
// });
peopleBtn.click(() => {
  $("#parent").hide("slow");
  let newBtn = $("<button>");
  newBtn.appendTo("#pplDiv");
  newBtn.text("NEXT 10");

  newBtn.click(() => {
    $("thead").remove();
    $("tbody").remove();

    $.ajax({
      url: "https://swapi.co/api/people/?page=2",

      success: res => {
        let table = $("<table>");
        table.appendTo("#pplDiv");

        let thead = $("<thead>");
        thead.appendTo(table);
        let tbody = $("<tbody>");
        tbody.appendTo(table);
        let peopleStats = [
          "Name",
          "Height",
          "Mass",
          "Birth Year",
          "Species Name"
        ];
        $.each(peopleStats, i => {
          let tdhead = $("<td>");
          tdhead.text(`${peopleStats[i]}`);
          tdhead.appendTo(thead);
        });
        $.each(res.results, i => {
          let people = res.results[i];

          let row = $("<tr>");
          row.appendTo(tbody);
          let tdName = $("<td>");
          tdName.text(`${people.name}`);
          tdName.appendTo(row);

          let tdHeight = $("<td>");
          tdHeight.text(`${people.height}`);
          tdHeight.appendTo(row);

          let tdMass = $("<td>");
          tdMass.text(`${people.mass}`);
          tdMass.appendTo(row);

          let tdBirthYear = $("<td>");
          tdBirthYear.text(`${people.birth_year}`);
          tdBirthYear.appendTo(row);

          $.ajax({
            url: people.species[0],

            success: res => {
              let speciesName = $("<td>");
              speciesName.text(`${res.name}`);
              speciesName.appendTo(row);
            }
          });
        });
      }
    });
    newBtn.delay(1000).fadeOut("slow");
  });
  newBtn.click(() => {
    let prevTen = $("<button>");
    prevTen.appendTo("#pplDiv");
    prevTen.text("PREVIOUS 10");

    prevTen.click(() => {
      $("thead").remove();
      $("tbody").remove();

      showPeople();

      prevTen.delay(1000).fadeOut("slow");
      newBtn.show();
    });
  });
  let backBtn = $("<button>");
  backBtn.appendTo("#pplDiv");
  backBtn.text("Back To Main Screen");

  backBtn.click(() => {
    $("#pplDiv").hide("slow");
    $("#parent").show("slow");
  });
});

// ------------------------------------------------
// ------------------------------------------------

let showShips = () => {
  $("#parent").hide("slow");
  $.ajax({
    url: "https://swapi.co/api/starships/?page=1",

    success: res => {
      let table = $("<table>");
      table.appendTo("#shipsDiv");

      let thead = $("<thead>");
      thead.appendTo(table);
      let tbody = $("<tbody>");
      tbody.appendTo(table);
      let shipStats = [
        "Name",
        "Model",
        "Manufacturer",
        "Cost (Credits)",
        "People Capacity",
        "Class"
      ];
      $.each(shipStats, i => {
        let tdhead = $("<td>");
        tdhead.text(`${shipStats[i]}`);
        tdhead.appendTo(thead);
      });
      $.each(res.results, i => {
        let ships = res.results[i];

        let row = $("<tr>");
        row.appendTo(tbody);
        let tdName = $("<td>");
        tdName.text(`${ships.name}`);
        tdName.appendTo(row);

        let tdModel = $("<td>");
        tdModel.text(`${ships.model}`);
        tdModel.appendTo(row);

        let tdManufactor = $("<td>");
        tdManufactor.text(`${ships.manufacturer}`);
        tdManufactor.appendTo(row);

        let tdCost = $("<td>");
        tdCost.text(`${ships.cost_in_credits}`);
        tdCost.appendTo(row);

        let tdCapac = $("<td>");
        tdCapac.text(`${parseInt(ships.passengers) + parseInt(ships.crew)}`);
        tdCapac.appendTo(row);

        let tdClass = $("<td>");
        tdClass.text(`${ships.starship_class}`);
        tdClass.appendTo(row);
      });
    }
  });
};

shipBtn.click(showShips);
shipBtn.click(() => {
  $("#parent").hide("slow");
  let newBtn = $("<button>");
  newBtn.appendTo("#shipsDiv");
  newBtn.text("NEXT 10");

  newBtn.click(() => {
    $("thead").remove();
    $("tbody").remove();

    $.ajax({
      url: "https://swapi.co/api/starships/?page=2",

      success: res => {
        let table = $("<table>");
        table.appendTo("#shipsDiv");

        let thead = $("<thead>");
        thead.appendTo(table);
        let tbody = $("<tbody>");
        tbody.appendTo(table);
        let shipStats = [
          "Name",
          "Model",
          "Manufacturer",
          "Cost (Credits)",
          "People Capacity",
          "Class"
        ];
        $.each(shipStats, i => {
          let tdhead = $("<td>");
          tdhead.text(`${shipStats[i]}`);
          tdhead.appendTo(thead);
        });
        $.each(res.results, i => {
          let ships = res.results[i];

          let row = $("<tr>");
          row.appendTo(tbody);
          let tdName = $("<td>");
          tdName.text(`${ships.name}`);
          tdName.appendTo(row);

          let tdModel = $("<td>");
          tdModel.text(`${ships.model}`);
          tdModel.appendTo(row);

          let tdManufactor = $("<td>");
          tdManufactor.text(`${ships.manufacturer}`);
          tdManufactor.appendTo(row);

          let tdCost = $("<td>");
          tdCost.text(`${ships.cost_in_credits}`);
          tdCost.appendTo(row);

          let tdCapac = $("<td>");
          tdCapac.text(`${parseInt(ships.passengers) + parseInt(ships.crew)}`);
          tdCapac.appendTo(row);

          let tdClass = $("<td>");
          tdClass.text(`${ships.starship_class}`);
          tdClass.appendTo(row);
        });
      }
    });
    newBtn.delay(1000).fadeOut("slow");
  });

  newBtn.click(() => {
    let prevTen = $("<button>");
    prevTen.appendTo("#shipsDiv");
    prevTen.text("PREVIOUS 10");

    prevTen.click(() => {
      $("thead").remove();
      $("tbody").remove();

      showShips();

      prevTen.delay(1000).fadeOut("slow");
      newBtn.show();
    });
  });

  let backBtn = $("<button>");
  backBtn.appendTo("#shipsDiv");
  backBtn.text("Back To Main Screen");

  backBtn.click(() => {
    $("#shipsDiv").hide("slow");
    $("#parent").show("slow");
  });
});
