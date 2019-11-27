$(document).ready(function() {
  let balance = 10000; //set a global balance so deposit and withdrawal can come from same balance
  $(".select_screen").hide();
  $(".withdraw_screen").hide();
  $(".deposit_screen").hide();
  $(".balance").hide();

  $(".enter").click(function() {
    let pin = $("#pin").val();
    if (pin == 1234) {
      $(".error").text("");
      $(".pin_screen").hide();
      $(".select_screen").show();
    } else {
      $(".error").text("incorrect pin");
    }
  });

  //----withdrawal
  $(".withdraw").click(function() {
    $(".balance").text("SAR " + balance); //set balance
    $(".balance").show(); //show balance
    $(".select_screen").hide(); //hide select screen
    $(".withdraw_screen").show(); //show withdrawal screen
  });

  //---back button
  $(".back").click(function() {
    $(".balance").hide();
    $(".select_screen").show();
    //kill two birds with one stone
    //hide all other screens and show just the
    // select screen
    $(".withdraw_screen").hide();
    $(".deposit_screen").hide();
  });

  $(".deposit").click(function() {
    $(".balance").text("SAR " + balance);
    $(".balance").show();
    $(".select_screen").hide();
    $(".deposit_screen").show();
  });

  /*
    Get the input value only when
    the button is clicked and update the
    balance
  */
  $(".withdraw_btn").click(function() {
    $(".error").text("");
    let amount = $("#withdraw_amt").val();
    if (amount > balance) {
      $(".error").text("insufficient funds");
    } else if (isNaN(amount)) {
      //check is a number
      //https://www.w3schools.com/jsref/jsref_isnan.asp
      $(".error").text("enter a number");
    } else {
      //means balance = balance - amount
      balance -= amount; //subtract from balance
      $(".balance").text("SAR " + balance);
    }
  });

  $(".deposit_btn").click(function() {
    $(".error").text("");
    let amount = $("#deposit_amt").val();

    if (isNaN(amount)) {
      //if its not a number return error
      $(".error").text("enter a number");
    } else {
      balance += parseInt(amount, 10); // cover to number and add to balance
      $(".balance").text("SAR " + balance);
    }
  });
});
