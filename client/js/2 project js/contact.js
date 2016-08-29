Template.contact.onRendered(function() {
    $(".js-height-full").height($(window).height());
    $(window).resize(function() {
        $(".js-height-full").height($(window).height());
    });


    // trim polyfill : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
    if (!String.prototype.trim) {
        (function() {
            // Make sure we trim BOM and NBSP
            var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
            String.prototype.trim = function() {
                return this.replace(rtrim, '');
            };
        })();
    }
 [].slice.call(document.querySelectorAll('input.input__field')).forEach(function(inputEl) {
        // in case the input is already filled..
        if (inputEl.value.trim() !== '') {
            classie.add(inputEl.parentNode, 'input--filled');
        }

        // events:
        inputEl.addEventListener('focus', onInputFocus);
        inputEl.addEventListener('blur', onInputBlur);
    });

    function onInputFocus(ev) {
        classie.add(ev.target.parentNode, 'input--filled');
    }

    function onInputBlur(ev) {
        if (ev.target.value.trim() === '') {
            classie.remove(ev.target.parentNode, 'input--filled');
        }
    }



});
Template.contactFormTemplate.events({
    //    'click .press-bt': function() {
    //        $( ".modal-backdrop").hide();
    //        $( ".modal" ).hide();
    //    }
    'blur input, change input, keyup input, blur textarea, change textarea, keyup textarea': function(e) {
        var textBox1 = $.trim($('#firstName').val());
        var textBox2 = $.trim($('#lastName').val());
        var textBox3 = $.trim($('#email').val());
        var textBox4 = $.trim($('#mobile').val());
        var textBox5 = $.trim($('#msg').val());
        var send =  $('#send_bt');
        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if (textBox1 == "") {
           // $(".fname_label span").addClass("error");
            $(".fname_label").addClass("error2");
           // return false;
        }
        else{}
        if (textBox2 == "") {
           // $(".lname_label span").addClass("error");
            $(".lname_label").addClass("error2");
          //  return false;
        }
        else{}
       if (textBox3 == "") {
            //$(".email_label span").addClass("error");
            $(".email_label").addClass("error2");
          // return false;
        }
        else{}
        if (textBox4 == "") {
           // $(".lname_label span").addClass("error");
            $(".phone_label").addClass("error2");
          //  return false;
        }
        else{}
        if (textBox5 == "") {
           // $(".lname_label span").addClass("error");
            $(".msg_label").addClass("error2");
          //  return false;
        }
       // console.log(e.currentTarget);
        if (textBox1 != "" && textBox2 != "" && textBox3 != "" && textBox4 != "" && textBox5 != "" && reg.test(textBox3) == true) {
             $(".input__label--yoko").removeClass("email_error");
            return send.prop('disabled', false);
           
        }
       else{
           $(".input__label--yoko").addClass("email_error");
       }
        
        
            //var address = document.getElementById[email].value;
//            if (reg.test(textBox3) == true) 
//            {
//                console.log("Dilan test");
//                return send.prop('disabled', false);
//            }


    }
    
});

Template.contactFormTemplate.helpers({
//    submitEnabled: function () {
//        var textBox1 = $.trim($('#firstName').val());
//        var textBox2 = $.trim($('#lastName').val());
//        var textBox3 = $.trim($('#email').val());
//        var textBox4 = $.trim($('#mobile').val());
//        var textBox5 = $.trim($('#msg').val());
//        
//        if( textBox1 == "" ){
//            
//            return 'disabled';
//        }
//        else{
//            return '';
//        }
//        
//    }
});