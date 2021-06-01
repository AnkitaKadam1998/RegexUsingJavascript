function EmailValidation2(email) 
{
   var pattern = RegExp('^[A-Z a-z 0-9 .]+@[0-9 a-z A-Z]+$');
   if(pattern.test(email)){
      console.log("Valid EmailId!");
      return true;
   }
   else {
      console.log("Invalid EmailId!");
      return false;
   }
}

let emailId2 = 'abc.xyz@bridgelabz';
EmailValidation2(emailId2);
