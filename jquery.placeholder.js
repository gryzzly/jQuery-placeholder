(function($) {
jQuery.fn.placeholder = function(options) {
  // add placeholder support
  if (!('placeholder' in document.createElement('input'))) {
    return this.each(function() {
    
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
    });
  }
};
})(jQuery);
