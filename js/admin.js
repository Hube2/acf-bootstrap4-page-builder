		
	jQuery(document).ready(function($){
		// make sure acf is loaded, it should be, but just in case
		if (typeof acf == 'undefined') { return; }
		
		// extend the acf.ajax object
		// you should probably rename this var
		var acfbs4_page_builder = acf.ajax.extend({
			events: {
				// change page bg image
				'change [data-key="field_58d6c374f6afb"] .acf-input input[type="hidden"]': 'change_page_bg_img',
				'initialize [data-key="field_58d6c374f6afb"] .acf-input input[type="hidden"]': 'change_page_bg_img',
				
				// change page v units
				'change [data-key="field_58d6c13af6af7"] .acf-input input:checked': 'change_page_v_unit_change',
				'initialize [data-key="field_58d6c13af6af7"] .acf-input input:checked': 'change_page_v_unit',
				
				// change page h units
				'change [data-key="field_58d6bd7e50b68"] .acf-input input:checked': 'change_page_h_unit_change',
				'initialize [data-key="field_58d6bd7e50b68"] .acf-input input:checked': 'change_page_h_unit',
				
				// change page backround tiling
				'change [data-key="field_58d6c3d5f6afc"] .acf-input input:checked': 'change_page_bg_tiling',
				'initialize [data-key="field_58d6c3d5f6afc"] .acf-input input:checked': 'change_page_bg_tiling',
				
				// change page background color
				// if background color is not empty and (it is not the same as browser bg or an image is selected) show the opacity setting, otherwise, hide that opacity setting.
				'change [data-key="field_58d80bca9279c"] .acf-input input[type="hidden"]': 'change_page_bg_color',
				'initialize [data-key="field_58d80bca9279c"] .acf-input input[type="hidden"]': 'change_page_bg_color',
				
				
			},
			
			change_page_bg_color: function(e) {
				var $val = e.$el.val().toLowerCase();
				var $browser = $('[data-key="field_58d6c249f6af9"] .acf-input input[type="hidden"]').val().toLowerCase();
				var $image = $('[data-key="field_58d6c374f6afb"] .acf-input input[type="hidden"]').val();
				$field = $('[data-key="field_58d80ce457b69"]');
				if ($image != '') {
					// if there's an image, show opacity
					if ($field.hasClass('hidden-by-conditional-logic')) {
						$field.removeClass('hidden-by-conditional-logic');
					}
				} else if ($image == '' && $val != $browser) {
					// if there is not and image and bg's do not match, show opacity
					if ($field.hasClass('hidden-by-conditional-logic')) {
						$field.removeClass('hidden-by-conditional-logic');
					}
				} else if(!$field.hasClass('hidden-by-conditional-logic')) {
					// else no image and colors match, hide opacity
					$field.addClass('hidden-by-conditional-logic');
				}
			},
			
			change_page_bg_tiling: function(e) {
				var $val = e.$el.val();
				var $change = false;
				$('[data-key="field_58d6c484f6afd"] input').each(function(index, element) {
					if ($(element).val() == 'cover' || $(element).val() == 'contain') {
						var $li = $(element).closest('li');
						if ($val == 'no-repeat' && $li.hasClass('hidden-by-conditional-logic')) {
							$li.removeClass('hidden-by-conditional-logic');
						} else if ($val != 'no-repeat' && !$li.hasClass('hidden-by-conditional-logic')) {
							if (element.checked) {
								$change = true;
							}
							$li.addClass('hidden-by-conditional-logic');
						}
					}
				});
				if ($change) {
					$('[data-key="field_58d6c484f6afd"] input[value="auto"]').prop('checked', true);
					$('[data-key="field_58d6c484f6afd"] input').trigger('change');
				}
			},
			
			change_page_h_unit_change: function (e) {
				this.change_page_h_unit(e, true);
			},
			
			change_page_h_unit: function(e, change) {
				var $val = e.$el.val();
				var $fields = [
					'field_58d6bca350b67'
				];
				for (i=0; i<$fields.length; i++) {
					var $field = $('[data-key="'+$fields[i]+'"]');
					$field.find('.acf-input-append').empty();
					$field.find('.acf-input-append').append($val);
					if (change) {
						$field.find('input').attr('value', 0);
						$field.find('input').trigger('change');
					}
					switch ($val) {
						case '%':
							$field.find('input').attr('step', 0.01);
							break;
						case 'em':
							$field.find('input').attr('step', 0.25);
							break;
						case 'rem':
							$field.find('input').attr('step', 0.25);
							break;
						case 'px':
							$field.find('input').attr('step', 1);
							break;
					} // end switch
				} // end for
			},
			
			change_page_v_unit_change: function(e) {
				this.change_page_v_unit(e, true);
			},
			
			change_page_v_unit: function(e, change) {
				var $val = e.$el.val();
				var $fields = [
					'field_58d6c078f6af5',
					'field_58d6c0a8f6af6'
				];
				for (i=0; i<$fields.length; i++) {
					var $field = $('[data-key="'+$fields[i]+'"]');
					$field.find('.acf-input-append').empty();
					$field.find('.acf-input-append').append($val);
					if (change) {
						$field.find('input').attr('value', 0);
						$field.find('input').trigger('change');
					}
					switch ($val) {
						case 'em':
							$field.find('input').attr('step', 0.25);
							break;
						case 'rem':
							$field.find('input').attr('step', 0.25);
							break;
						case 'px':
							$field.find('input').attr('step', 1);
							break;
					} // end switch
				} // end for
			},
			
			change_page_bg_img: function(e) {
				var $val = e.$el.val();
				var $fields = [
					'field_58d6c3d5f6afc',
					'field_58d6c484f6afd',
					'field_58d6c7ecf53d1',
					'field_58d6c9c8632e7',
					'field_58d6ca8ad94ac',
					'field_58d6cb20195ed',
					'field_58d8069cb700c'
				];
				for (i=0; i<$fields.length; i++) {
					var $el = $('[data-key="'+$fields[i]+'"]');
					if (!$val && !$el.hasClass('hidden-by-conditional-logic')) {
						$el.addClass('hidden-by-conditional-logic');
					} else if ($val && $el.hasClass('hidden-by-conditional-logic')) {
						$el.removeClass('hidden-by-conditional-logic');
					}
				}
				// trigger change of page bg color
				$('[data-key="field_58d80bca9279c"] .acf-input input[type="hidden"]').trigger('initialize');
			}, // end update_element_paths
	
			
		}); // end acr_page_builder
		
		// page gb image init
		$('[data-key="field_58d6c374f6afb"] .acf-input input[type="hidden"]').trigger('initialize');
		// page v unit init
		$('[data-key="field_58d6c13af6af7"] .acf-input input:checked').trigger('initialize');
		// page h unit init
		$('[data-key="field_58d6bd7e50b68"] .acf-input input:checked').trigger('initialize');
		//  backround tiling
		$('[data-key="field_58d6c3d5f6afc"] .acf-input input:checked').trigger('initialize');
		
	}); // end document ready