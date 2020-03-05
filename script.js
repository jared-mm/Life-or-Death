$("button").click(function() {

    let name = $(".name").val();
    let risk1 = $(".risk1").val();
    let risk2 = $(".risk2").val();
    let risk3 = $(".risk3").val();
    let risk4 = $(".risk4").val();
    let risk5 = $(".risk5").val();
    let lastinput = $(".lastinput").val();

    let odds = rand(35, 95);
    let risks = [risk1, risk2, risk3, risk4, risk5];
    let randRisk = rand(1,5);
    let risk= risks[randRisk];
    let year = rand(2026, 2065);
    $(".result").text(`${name}, the odds of you dying in the year ${year} by ${risk} is ${odds}%`);
});

function rand(num1, num2) {
    return Math.floor((Math.random() *(num2- num1 + 1)) + num1);

}