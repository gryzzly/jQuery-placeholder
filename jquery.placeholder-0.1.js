(function($) {
  jQuery.fn.placeholder = function(options) {
    settings = jQuery.extend({
      // let's see if browser supports placeholder natively
      placeholderSupport: (function(){
        return 'placeholder' in document.createElement('input');
      })()
  }, options);
  
  return this.each(function() {
    
    // add placeholder support
    if (!settings.placeholderSupport) {
      var $this = $(this);
      
      // this puts [placeholder] text as input's value
      this.defaultValue = $this.attr('placeholder');

      $this.bind({
        'focus': function(){
          if ($this.val() == this.defaultValue) { 
            $this.val('');
          }
        },
        'blur': function(){
          if (!$this.val().length) {
            $this.val(this.defaultValue);
          }
        }
      });
    }
    
  });
};
})(jQuery);