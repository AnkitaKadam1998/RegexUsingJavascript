function EmailValidation3(email) 
{
   var pattern = RegExp('^[A-Z a-z 0-9 .]+@[0-9 a-z A-Z]+.[a-z A-Z]{2,3}$');
   if(pattern.test(email)){
      console.log("Valid EmailId!");
      return true;
   }
   else {
      console.log("Invalid EmailId!");
      return false;
   }
}

let emailId3 = 'abc.xyz@bridgelabz.co';
EmailValidation3(emailId3);
