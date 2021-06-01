function EmailValidation1(email) 
{
   var pattern = RegExp('^[A-Z a-z 0-9]{3,}$');
   if(pattern.test(email)){
      console.log("Valid EmailId!");
      return true;
   }
   else {
      console.log("Invalid EmailId!");
      return false;
   }
}

let emailId1 = 'abc';
EmailValidation1(emailId1);
