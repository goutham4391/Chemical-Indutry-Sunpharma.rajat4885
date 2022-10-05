jQuery(document).ready( function($) {
    var CaptchaCallback = function() {
        jQuery('.g-recaptcha').each(function(index, el) {
            grecaptcha.render(el, {
                'sitekey' : jQuery(el).attr('data-sitekey')
                ,'theme' : jQuery(el).attr('data-theme')
                ,'size' : jQuery(el).attr('data-size')
                ,'tabindex' : jQuery(el).attr('data-tabindex')
                ,'callback' : jQuery(el).attr('data-callback')
                ,'expired-callback' : jQuery(el).attr('data-expired-callback')
                ,'error-callback' : jQuery(el).attr('data-error-callback')
            });
        });
      };
});