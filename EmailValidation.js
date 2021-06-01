function EmailValidation4(email) 
{
   var pattern = RegExp('^[A-Z a-z 0-9]+([._+-][0-9 a-z A-Z]+)*@[0-9 a-z A-Z]+.[a-z A-Z]{2,3}$');
   if(pattern.test(email)){
      console.log("Valid EmailId!");
      return true;
   }
   else {
      console.log("Invalid EmailId!");
      return false;
   }
}

let emailId4 = 'abc.xyz@bridgelabz.co';
EmailValidation4(emailId4);
