# CURSE NOTES WEEK 3

## DAY ONE

### jQuery

__An example of Jquery__

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
  <!-- Latest compiled and minified CSS -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
  <style type="text/css">


  </style>
</head>
<body>

  <div class="container">
    <ul class="list-group" id="myList"></ul>
  </div>


  <script type="text/javascript" src="https://code.jquery.com/jquery-3.2.1.js"></script>

  <script type="text/javascript">
    var beatles = ['john','paul','george','ringo']
    var htmlList = ''
    beatles.forEach( function(name, i) {
      htmlList += '<li class="list-group-item">' + name + '</li>'
      console.log(htmlList)
    })
    console.log( typeof htmlList )
    $('#myList').html(htmlList)
  </script>
</body>
</html>
```

------




## DAY TWO

------
## DAY THREE


------
## DAY FOUR

------
## DAY FIVE












