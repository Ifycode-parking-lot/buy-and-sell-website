
$(function() {

   
    $('#showHidePassLandscape').click(function(){
        $('#passLandscape').attr('type', $('#passLandscape').is(':password')? 'text' : 'password' );
    
        if ( $('#passLandscape').attr('type') === 'password') {
            $('#showHidePassLandscape').removeClass('hidePassword').addClass('showPassword');
            
        }

        else {
            $('#showHidePassLandscape').removeClass('showPassword').addClass('hidePassword');
        }
    });


    
    

    $('.passLandscape').keyup(function() {
        $('.textParrot').html(checkStrength( $('.passLandscape').val() )
        );
    
        $(".passLandscape, .nameLandscape").keyup(function(event) {

            if(event.keyCode === 13) {
        
                $(".landscapeScapeSubmit").click();
                
            }
        
        });
    
    
    });

    
   


        function checkStrength(variablePass) {

            var strength = 0;

           

           if (variablePass.length < 1) {
           
                $('.textParrot').html("8 characters min");

                $('.textParrot').css({
                    'opacity' : '0.2',
                    'color' : 'white'
                });

                $('.h2').html("@Ifycode");

                $('.h2').css({
                    'color' : 'white'
                });
            }

            else {
                $('.textParrot').css({
                    'opacity' : '1',
                    'color' : 'gold'
                });

                $('.textParrot').html("Too short");//

            }

            //whatever you type in letters, numbers or symbols strength == 1
            if (variablePass.length > 0) strength +=1;

            //If first character is a letter, then add number to arrive at strength == 2 and vice versa
            if (variablePass.match(/([a-zA-Z])/) && variablePass.match(/([0-9])/)) strength +=1;

             //If first character is a letter, then add symbol to arrive at strength == 2 and vice versa
             if (variablePass.match(/([a-zA-Z])/) && variablePass.match(/([~,!,@,#,$,%,^,&,*,-,_,+,=,<,>,?])/)) strength +=1;

             //uppercase and lowercase letters
             if (variablePass.match(/([a-z])/) && variablePass.match(/([A-Z])/)) strength +=1;



            if (strength == 1 && variablePass.length < 8) {
                $('.textParrot').html("Weak - Too short");

    
                $('.firstBoxParrot').css({
                    'display' : 'block',
                    'background' : 'red',
                    'opacity' : '1'
                });

                $('.secondBoxParrot').css({
                    'background' : 'white',
                    'opacity' : '0.2'

                });

                $('.thirdBoxParrot').css({
                    'background' : 'white',
                    'opacity' : '0.2'
                });

             
                
            }

            else if (strength == 1 && variablePass.length >= 8) {
                $('.textParrot').html("Weak Password");
                
                $('.firstBoxParrot').css({
                    'display' : 'block',
                    'background' : 'red',
                    'opacity' : '1'
                });

                $('.secondBoxParrot').css({
                    'background' : 'white',
                    'opacity' : '0.2'

                });

                $('.thirdBoxParrot').css({
                    'background' : 'white',
                    'opacity' : '0.2'
                });

                $('.h2').html("@Ifycode");

                $('.h2').css({
                    'color' : 'white'
                });

              
            }

            else if (strength < 1) {
                $('.firstBoxParrot').css({
                    'background' : 'white',
                    'opacity' : '0.2'

                });

                $('.secondBoxParrot').css({
                    'background' : 'white',
                    'opacity' : '0.2'

                });

                $('.thirdBoxParrot').css({
                    'background' : 'white',
                    'opacity' : '0.2'
                });

                $('.h2').html("@Ifycode");

                $('.h2').css({
                    'color' : 'white'
                });

                
                
            }

            else if (strength == 2 && variablePass.length < 8) {
                $('.textParrot').html("Ok - Too short");
                $('.firstBoxParrot').css({
                    'display' : 'block',
                    'background' : 'yellow',
                    'opacity' : '1'
                });

                $('.secondBoxParrot').css({
                    'display' : 'block',
                    'background' : 'yellow',
                    'opacity' : '1'
                });

                $('.thirdBoxParrot').css({
                    'background' : 'white',
                    'opacity' : '0.2'
                });

                $('.h2').html("@Ifycode");

                $('.h2').css({
                    'color' : 'white'
                });
                
            }

            else if (strength == 2 && variablePass.length >= 8) {
                $('.textParrot').html("Ok Password");
                $('.firstBoxParrot').css({
                    'background' : 'yellow',
                    'opacity' : '1'
                });

                $('.secondBoxParrot').css({
                    'background' : 'yellow',
                    'opacity' : '1'
                });

                $('.thirdBoxParrot').css({
                    'background' : 'white',
                    'opacity' : '0.2'
                });

                $('.h2').html("@Ifycode");

                $('.h2').css({
                    'color' : 'white'
                });
                
            }

            else if (strength >= 3 && variablePass.length < 8) {
                $('.textParrot').html("Strong - Too short");
                $('.firstBoxParrot').css({
                    'background' : 'cyan',
                    'opacity' : '1'
                });

                $('.secondBoxParrot').css({
                    'background' : 'cyan',
                    'opacity' : '1'
                });

                $('.thirdBoxParrot').css({
                    'background' : 'cyan',
                    'opacity' : '1'
                });

                $('.h2').html("@Ifycode");

                $('.h2').css({
                    'color' : 'white'
                });
                
            }

            else {
                $('.textParrot').html("Strong Password");
                $('.firstBoxParrot').css({
                    'background' : 'cyan',
                    'opacity' : '1'
                });

                $('.secondBoxParrot').css({
                    'background' : 'cyan',
                    'opacity' : '1'
                });

                $('.thirdBoxParrot').css({
                    'background' : 'cyan',
                    'opacity' : '1'
                });

                $('.h2').html("@Ifycode");

                $('.h2').css({
                    'color' : 'white'
                });
                
            }




            $('.landscapeScapeSubmit').click(function(){

                if ( $('.nameLandscape').val().length == 0 ) {
                       
                    
                    $('form').find(".nameLandscape").each(function(ev) {
                        $(this).attr("placeholder", "Required field*");
                    });
                  
                    

                    if ( $('.passLandscape').val().length < 8 ) {
                    
                        $('.textParrot').html("8 characters min");
    
                        
                    }
            
                    else if ( $('.passLandscape').val().length >= 8 && (strength < 2)) {
                           
                        $('.h2').html("@ifycode");

                        $('.h2').css({
                            'color' : 'white'
                        });
            
                    
                    }
    
                    else if ( $('.passLandscape').val().length >= 8 && (strength == 2)) {
                           
                        $('.h2').html("@ifycode");

                    $('.h2').css({
                        'color' : 'white'
                    });
            
                    
                    }
    
                    else {
                           
                    $('.h2').html("@ifycode");

                    $('.h2').css({
                        'color' : 'white'
                    });

                    }
                     
                }

                else {

                    $('form').find(".nameLandscape").each(function(ev) {
                        $(this).attr("placeholder", "Name");
                       });


                    if ( $('.passLandscape').val().length < 8 ) {
                    
                        $('.textParrot').html("8 characters min");
    
                        
                    }
            
                    else if ( $('.passLandscape').val().length >= 8 && (strength < 2)) {
                           
                        $('.h2').html("Hackable");
    
                        $('.h2').css({
                            'color' : 'gold'
                        });
            
                    
                    }
    
                    else if ( $('.passLandscape').val().length >= 8 && (strength == 2)) {
                           
                        $('.h2').html("Manageable");
    
                        $('.h2').css({
                            'color' : 'gold'
                        });
            
                    
                    }
    
                    else {
                           
                        $('.h2').html("Yeeeeees!");
            
                        $('.h2').css({
                            'color' : 'gold'
                        });
    
                    }
    



                }

              
        
            });
            
            
        }
    
    
    });


    