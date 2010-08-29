$(document).ready(function() {
  var checkboxattr = $('#edit-docreader-prefer-uk').attr('checked');

  if ($('#edit-docreader-lang option:selected', this).val() == 'en_us') {
	$('#edit-docreader-prefer-uk-wrapper').show();
  }else
  {
	$('#edit-docreader-prefer-uk-wrapper').hide();	
  }

  $('#edit-docreader-lang').change(function(){
    if ($('option:selected', this).val() == 'en_us') {
		$('#edit-docreader-prefer-uk-wrapper').show();
	}else
	{
	  $('#edit-docreader-prefer-uk').attr('checked', checkboxattr);
	  $('#edit-docreader-prefer-uk').val(0);
	  $('#edit-docreader-prefer-uk-wrapper').hide();
	}
  });
});
