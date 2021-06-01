function is_usZipCode(str)
{
regexp = /^[1-9]{1}[0-9]{2}[ ]?[0-9]{3}$/;

        if (regexp.test(str))
          {
            return true;
          }
        else
          {
            return false;
          }
}

console.log(is_usZipCode("400088"));
console.log(is_usZipCode("A400088"));
console.log(is_usZipCode("#400088"));
 
