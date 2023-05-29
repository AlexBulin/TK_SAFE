$(document).ready(function(){
    
    (function($) {
        "use strict";

    
    jQuery.validator.addMethod('answercheck', function (value, element) {
        return this.optional(element) || /^\bcat\b$/.test(value)
    }, "type the correct answer -_-");

    // Валидация
    $(function() {
        $('#contactForm').validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                subject: {
                    required: true,
                    minlength: 10
                },
                number: {
                    required: true,
                    minlength: 10
                },
                email: {
                    required: true,
                    email: true
                },
                message: {
                    required: true,
                    minlength: 10
                }
            },
            messages: {
                name: {
                    required: "Введите, пожалуйста, ваше имя",
                    minlength: "Имя должно состоять как минимум из 2 символов"
                },
                subject: {
                    required: "Введите, пожалуйста, телефон для связи с вами",
                    minlength: "Введите корректный номер телефона"
                },
                number: {
                    required: "Укажите номер телефона для связи",
                    minlength: "Введите корректный номер телефона"
                },
                email: {
                    required: "Введите, пожалуйста, ваш e-mail для связи с вами"
                },
                message: {
                    required: "Введите, пожалуйста, ваше сообщение!",
                    minlength: "Ваше сообщение слишком короткое"
                }
            },
            submitHandler: function(form) {
                $(form).ajaxSubmit({
                    type:"POST",
                    data: $(form).serialize(),
                    url:"contact_process.php",
                    success: function() {
                        $('#contactForm :input').attr('disabled', 'disabled');
                        $('#contactForm').fadeTo( "slow", 1, function() {
                            $(this).find(':input').attr('disabled', 'disabled');
                            $(this).find('label').css('cursor','default');
                            $('#success').fadeIn()
                            $('.modal').modal('hide');
		                	$('#success').modal('show');
                        })
                    },
                    error: function() {
                        $('#contactForm').fadeTo( "slow", 1, function() {
                            $('#error').fadeIn()
                        })
                    }
                })
            }
        })
    })
        
 })(jQuery)
})