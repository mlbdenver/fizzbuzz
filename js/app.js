$(document).ready(function () {
   for (var counter=1;counter<=100;counter++) {
        if(counter%3===0) {
            if(counter%5===0) {
                $("#container").append("<p>FizzBuzz</p>");
                //console.log("fizzbuzz");//
            }
            else {
               $("#container").append("<p>Fizz</p>");
               //console.log("fizz");//
            }
        }
        else {
            if(counter%5===0) {
            $("#container").append("<p>Buzz</p>");
            //console.log("buzz");//
            }
            else {
                var result = "<p>" + counter + "</p>";
                $("#container").append(result);
                //console.log(counter);//
            }
        }
    }
});
     