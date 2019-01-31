
      function validate() {
      
        if( document.myForm.Name.value == "" ) {
            alert( "  تکایە ناوەکەت داخل بکە " );
            document.myForm.Name.focus() ;
            return false;         }
   			

        if( document.myForm.email.value == "" ) {
            alert( "تکایە ئیمەیلەکەت داخل بکا" );
            document.myForm.email.focus() ;
            return false;
         }


        if( document.myForm.mob.value == "" ) {
            alert( "  تکایە ژمارە تەلەفۆنەکەت داخل بکە ");
            document.myForm.mob.focus() ;
            return false;
         }


		if( document.myForm.city.value == "-1" ) {
            alert( "تکایە شارەکەت دیاری بکا!" );
            return false;
         }
        
        if ( ( document.myForm.gender[0].checked == false ) && ( document.myForm.gender[1].checked == false ) ) {
			alert ( "تکایە ڕەگەزەکەت هەل بژێرە" ); 
			return false;
		}
		
		if ( ( document.myForm.hobbies[0].checked == false ) && ( document.myForm.hobbies[1].checked == false )  && ( document.myForm.hobbies[2].checked == false )) 	{
		 alert ( "تکایە هیوایەتەکەت داخل بکە" ); 
		return false;
		}

 		return( true );
      	}//function 
  