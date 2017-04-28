$('#search-beer').on('click', function(e) {
    e.preventDefault()
    var beerName = $('#beer-name').val()
    var urlSearchName = 'https://quiet-inlet-67115.herokuapp.com/api/search/all?q=' + beerName

    // var name = $('#beers-selection').find(":selected").text();
    // $('#name-beer-title').text(name)

    $.ajax({
        url: urlSearchName,
        success: function(data) {
            console.log(data)
            var beersFound = data;
            var beersOptions = '<option selected disabled>Select a Beer</option>'

            beersFound.forEach(function(beerData) {
                beersOptions += '<option value="' + beerData.id + '">' + beerData.name + '</option>'

            })
            $('#beers-selection').html(beersOptions)
        }
    })
})

//https://quiet-inlet-67115.herokuapp.com/api/beer/iT9pf4

$('#beers-selection').on('change', function(e) {
    var idBeer = $(this).val()
    var urlSelectedBeer = 'https://quiet-inlet-67115.herokuapp.com/api/beer/' + idBeer

    console.log(urlSelectedBeer)
    $.ajax({
        url: urlSelectedBeer,
        success: function (dataDescription){
            $('.description').html(dataDescription.description)
            $('#id-showed').html(dataDescription.id)
            $('#name-beer-title').html(dataDescription.name)
            var imgBeer = dataDescription.labels
            console.log(imgBeer)
            // $('#img-beer').attr('src', dataDescription.images)
        }
    })
})
