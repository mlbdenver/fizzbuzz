$(document).ready(function () {
   for (var counter=1;counter<=100;counter++) {
        if(counter%3===0) {
            if(counter%5===0) {
                $("#container").append("<p>fizzbuzz</p>");
                console.log("fizzbuzz");
            }
            else {
               $("#container").append("<p>fizz</p>");
               console.log("fizz");
            }
        }
        else {
            if(counter%5===0) {
            $("#container").append("<p>buzz</p>");
            console.log("buzz");
            }
            else {
                var result = "<p>" + counter + "</p>";
                $("#container").append(result);
                console.log(counter);
            }
        }
    }
});
     