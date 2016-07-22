$(document).ready(function() {

	/*
	|----------------------------------------------------------------------------
	| Show image preview
	|----------------------------------------------------------------------------
	*/
	$('input.preview_image').change(function(event) {
		var input = this;
		var $image_box = $(input).parents('.previewable_div').find('.preview_div')
		if (window.File && window.FileReader) {
        var file = event.target.files[0];
        var max_size = $(input).attr('data-max-size');
        var size = file.size/(1024 * 1024 * max_size);
        console.log("image size "+size);
        if(size > max_size){
          $(input).val(null);
          alert('Please select image of size less than '+max_size+' MB.');
        } 
        else{
          var reader = new FileReader(); 
          reader.onload = function (e) {
            $image_box.attr('src', e.target.result);
          };
          reader.readAsDataURL(input.files[0]);
        }    
     }
     else {
      console.log("FileReader not available");
     }
	});
});
