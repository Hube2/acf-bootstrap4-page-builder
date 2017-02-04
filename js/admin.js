	//console.log(typeof window.FileReader); // http://stackoverflow.com/questions/7346563/loading-local-json-file
	//console.log(typeof(acf));
	if (typeof(acf) == 'object') {
		
		acf.add_action('ready append sortstop remove', function($el) {
			
			// setup
			jQuery(function($) {
				acf_bs4_page_builder_add_paths($);
			}); // document ready
			
		}); // end acf.add_action
		
		acf.add_action('ready', function($el) {
			//console.log('ready');
		});
			
	} // end if acf
	
	jQuery(document).ready(function($){
		// make sure acf is loaded, it should be, but just in case
		if (typeof acf == 'undefined') { return; }
		
		// extend the acf.ajax object
		// you should probably rename this var
		var acf_bs4_page_builder = acf.ajax.extend({
			events: {
				
				// container
				'input [data-key="field_586d322d1b9ca"] .acf-input input': 'update_element_path',
				// row
				'input [data-key="field_586cf907eb5ce"] .acf-input input': 'update_element_path',
				// column
				'input [data-key="field_586cf92deb5cf"] .acf-input input': 'update_element_path',
				// nested row
				'input [data-key="field_586da9a8b156a"] .acf-input input': 'update_element_path',
				// nested column
				'input [data-key="field_586daa86c09a9"] .acf-input input': 'update_element_path',
			},
			
			update_element_path: function(e) {
				//console.log(e.$el.closest('.acf-field').data('key'));
				var $key = e.$el.closest('.acf-field').data('key');
				switch ($key) {
					case 'field_586d322d1b9ca':
						// container
						var $container = e.$el.val().replace('|', '');
						e.$el.val($container);
						if ($container.trim() == '') {
							$container = '?'
						}
						var $data = [$container];
						
						var $path_element = e.$el.closest('td.acf-fields').find('.page-builder-element-path').first();
						var $path = $path_element.attr('data-path');
						var $paths = $path.split(/\|/);
						for (i=0; i<$paths.length; i++) {
							if ($data[i] !== false) {
								$paths[i] = $data[i];
							}
						}
						$path = $paths.join('|');
						//console.log($path);
						var $content = $paths.join(' &raquo; ');
						$path_element.attr('data-path', $path);
						$path_element.empty();
						$path_element.append($content);
						
						this.update_row_paths(e.$el, $data);
						break;
					case 'field_586cf907eb5ce':
						// row
						var $row = e.$el.val().replace('|', '');
						e.$el.val($row);
						if ($row.trim() == '') {
							$row = '?'
						}
						var $data = [false, $row];
						
						var $path_element = e.$el.closest('td.acf-fields').find('.page-builder-element-path').first();
						var $path = $path_element.attr('data-path');
						var $paths = $path.split(/\|/);
						for (i=0; i<$paths.length; i++) {
							if ($data[i] !== false) {
								$paths[i] = $data[i];
							}
						}
						$path = $paths.join('|');
						//console.log($path);
						var $content = $paths.join(' &raquo; ');
						$path_element.attr('data-path', $path);
						$path_element.empty();
						$path_element.append($content);
						
						this.update_column_paths(e.$el, $data);
						break;
					case 'field_586cf92deb5cf':
						// column
						var $column = e.$el.val().replace('|', '');
						e.$el.val($column);
						if ($column.trim() == '') {
							$column = '?'
						}
						var $data = [false, false, $column];
						
						var $path_element = e.$el.closest('td.acf-fields').find('.page-builder-element-path').first();
						var $path = $path_element.attr('data-path');
						var $paths = $path.split(/\|/);
						for (i=0; i<$paths.length; i++) {
							if ($data[i] !== false) {
								$paths[i] = $data[i];
							}
						}
						$path = $paths.join('|');
						//console.log($path);
						var $content = $paths.join(' &raquo; ');
						$path_element.attr('data-path', $path);
						$path_element.empty();
						$path_element.append($content);
						
						this.update_nested_row_paths(e.$el, $data);
						break;
					case 'field_586da9a8b156a':
						// nested row
						var $nested_row = e.$el.val().replace('|', '');
						e.$el.val($nested_row);
						if ($nested_row.trim() == '') {
							$nested_row = '?'
						}
						var $data = [false, false, false, $nested_row];
						
						var $path_element = e.$el.closest('td.acf-fields').find('.page-builder-element-path').first();
						var $path = $path_element.attr('data-path');
						var $paths = $path.split(/\|/);
						for (i=0; i<$paths.length; i++) {
							if ($data[i] !== false) {
								$paths[i] = $data[i];
							}
						}
						$path = $paths.join('|');
						//console.log($path);
						var $content = $paths.join(' &raquo; ');
						$path_element.attr('data-path', $path);
						$path_element.empty();
						$path_element.append($content);
						
						this.update_nested_column_paths(e.$el, $data);
						break;
					case 'field_586daa86c09a9':
						// nested column
						var $nested_column = e.$el.val().replace('|', '');
						e.$el.val($nested_column);
						if ($nested_column.trim() == '') {
							$nested_column = '?'
						}
						var $data = [false, false, false, false, $nested_column];
						
						var $path_element = e.$el.closest('td.acf-fields').find('.page-builder-element-path').first();
						var $path = $path_element.attr('data-path');
						var $paths = $path.split(/\|/);
						for (i=0; i<$paths.length; i++) {
							if ($data[i] !== false) {
								$paths[i] = $data[i];
							}
						}
						$path = $paths.join('|');
						//console.log($path);
						var $content = $paths.join(' &raquo; ');
						$path_element.attr('data-path', $path);
						$path_element.empty();
						$path_element.append($content);
						break;
				} // end switch
			}, // end update_element_path
			
			update_row_paths: function(element, $data) {
				var $rows = element.closest('.acf-row').find('[data-key="field_586cf730d430e"]');
				
				$rows.find('.acf-row [data-key="field_586cf907eb5ce"] .acf-input input').not('.acf-row.acf-clone [data-key="field_586cf907eb5ce"] .acf-input input').each(function(index, element) {
						
					var $row = element.value;
					$data[1] = $row;
					var $path_element = $(element).closest('td.acf-fields').find('.page-builder-element-path').first();
					acf_bs4_page_builder_update_path_element($, $path_element, $data);
					acf_bs4_page_builder.update_column_paths($(element), $data);
				}); // end each row
			}, // end update_row_paths
			
			update_column_paths: function(element, $data) {
				
				var $columns = element.closest('.acf-row').find('[data-key="field_586cf767d430f"]');
				$columns.find('.acf-row [data-key="field_586cf92deb5cf"] .acf-input input').not('.acf-row.acf-clone [data-key="field_586cf92deb5cf"] .acf-input input').each(function(index, element) {
						
					var $column = element.value;
					$data[2] = $column;
					var $path_element = $(element).closest('td.acf-fields').find('.page-builder-element-path').first();
					acf_bs4_page_builder_update_path_element($, $path_element, $data);
					acf_bs4_page_builder.update_nested_row_paths($(element), $data);
				}); // end each nested row
			}, // end update_column_paths
			
			update_nested_row_paths: function(element, $data) {
				
				var $nested_rows = element.closest('.acf-row').find('[data-key="field_586cf7e7d4311"]');
				$nested_rows.find('.acf-row [data-key="field_586da9a8b156a"] .acf-input input').not('.acf-row.acf-clone [data-key="field_586da9a8b156a"] .acf-input input').each(function(index, element) {
						
					var $nested_row = element.value;
					$data[3] = $nested_row;
					var $path_element = $(element).closest('td.acf-fields').find('.page-builder-element-path').first();
					acf_bs4_page_builder_update_path_element($, $path_element, $data);
					acf_bs4_page_builder.update_nested_column_paths($(element), $data);
				}); // end each nested row
			}, // end update_nested_row_paths
			
			update_nested_column_paths: function(element, $data) {
				
				var $nested_columns = element.closest('.acf-row').find('[data-key="field_586cf8b9d4313"]');
				$nested_columns.find('.acf-row [data-key="field_586daa86c09a9"] .acf-input input').not('.acf-row.acf-clone [data-key="field_586daa86c09a9"] .acf-input input').each(function(index, element) {
						
					var $nested_column = element.value;
					$data[4] = $nested_column;
					var $path_element = $(element).closest('td.acf-fields').find('.page-builder-element-path').first();
					acf_bs4_page_builder_update_path_element($, $path_element, $data);
					acf_bs4_page_builder.update_nested_column_paths($(element), $data);
				}); // end each nested row
			}, // end update_nested_column_paths
	
			
		}); // end acr_page_builder
		
		
		//$('[data-key="field_XXXXXXXXX"] input').trigger('ready');
		
		acf_bs4_page_builder_multifield_labels($);
		
	}); // end document ready
	
	function acf_bs4_page_builder_add_paths($) {
		// add container names
		var $containers = $('[data-key="field_586d3169ebc11"]');
		if (!$containers.length) {
			return;
		}
		var $count = 1;
		$containers.find('.acf-row [data-key="field_586d322d1b9ca"] .acf-input input').not('.acf-row.acf-clone [data-key="field_586d322d1b9ca"] .acf-input input').each(function(index, element) {
			if (element.value == '') {
				element.value = 'Container '+$count;
			}
			
			var $container_name = element.value;
			if ($container_name.match(/^Container [0-9]+$/)) {
				$container_name = 'Container '+$count;
				element.value = $container_name;
			}
			
			$count++;
			
			var $data = [$container_name];
			
			if ($(element).closest('td.acf-fields').find('.page-builder-element-path').length == 0) {
				$(element).closest('td.acf-fields').each(function(index, element) {
					$(element).prepend('<span class="page-builder-element-path" data-path="'+
														 '">'+$container_name+'</span>');
				});
			} else {
				// element already existes	
				var $path_element = $(element).closest('td.acf-fields').find('.page-builder-element-path').first();
				acf_bs4_page_builder_update_path_element($, $path_element, $data);
			}
			
			// add row names
			var $rows = $(element).closest('.acf-row').find('[data-key="field_586cf730d430e"]');
			var $count_rows = 1;
			$rows.find('.acf-row [data-key="field_586cf907eb5ce"] .acf-input input').not('.acf-row.acf-clone [data-key="field_586cf907eb5ce"] .acf-input input').each(function(index, element) {
				if (element.value == '') {
					element.value = 'Row '+$count_rows;
				}
				
				var $row_name = element.value;
				if ($row_name.match(/^Row [0-9]+$/)) {
					$row_name = 'Row '+$count;
					element.value = $row_name;
				}
				
				$count_rows++;
				
				$data[1] = $row_name;
				
				// add path info to container
				//console.log($('td.acf-fields'));
				if ($(element).closest('td.acf-fields').find('.page-builder-element-path').length == 0) {
					$(element).closest('td.acf-fields').each(function(index, element) {
						$(element).prepend('<span class="page-builder-element-path" data-path="'+
															$container_name+'|'+$row_name+'">'+$container_name+
															' &raquo; '+$row_name+'</span>');
					});
				} else {
					// element already existes	
					var $path_element = $(element).closest('td.acf-fields').find('.page-builder-element-path').first();
					acf_bs4_page_builder_update_path_element($, $path_element, $data);
				}
				
				// add column names
				var $columns = $(element).closest('.acf-row').find('[data-key="field_586cf767d430f"]');
				var $count_columns = 1;
				$columns.find('.acf-row [data-key="field_586cf92deb5cf"] .acf-input input').not('.acf-row.acf-clone [data-key="field_586cf92deb5cf"] .acf-input input').each(function(index, element) {
					if (element.value == '') {
						element.value = 'Column '+$count_columns;
					}
					
					var $column_name = element.value;
					if ($column_name.match(/^Column [0-9]+$/)) {
						$column_name = 'Column '+$count;
						element.value = $column_name;
					}
					
					$count_columns++;
					
					if ($data.length > 2) {
						$data = [$data[0], $data[1]];
					}
					$data[2] = $column_name;
				
					// add path info
					if ($(element).closest('td.acf-fields').find('.page-builder-element-path').length == 0) {
						$(element).closest('td.acf-fields').each(function(index, element) {
							$(element).prepend('<span class="page-builder-element-path" data-path="'+
																$container_name+'|'+$row_name+'|'+$column_name+'">'+
																$container_name+' &raquo; '+$row_name+' &raquo; '+
																$column_name+'</span>');
						});
					} else {
						// element already existes	
						var $path_element = $(element).closest('td.acf-fields').find('.page-builder-element-path').first();
						acf_bs4_page_builder_update_path_element($, $path_element, $data);
					}
					
					// nested row names
					var $nested_rows = $(element).closest('.acf-row').find('[data-key="field_586cf7e7d4311"]');
					var $count_nested_rows = 1;
					$nested_rows.find('.acf-row [data-key="field_586da9a8b156a"] .acf-input input').not('.acf-row.acf-clone [data-key="field_586da9a8b156a"] .acf-input input').each(function(index, element) {
						if (element.value == '') {
							element.value = 'Row '+$count_nested_rows;
						}
						
						var $nested_row_name = element.value;
						if ($nested_row_name.match(/^Row [0-9]+$/)) {
							$nested_row_name = 'Row '+$count;
							element.value = $nested_row_name;
						}
						
						$count_nested_rows++;
						
						if ($data.length > 3) {
							$data = [$data[0], $data[1], $data[2]];
						}
						$data[3] = $nested_row_name;
						//console.log($nested_row_name);
						
						if ($(element).closest('td.acf-fields').find('.page-builder-element-path').length == 0) {
							$(element).closest('td.acf-fields').each(function(index, element) {
								$(element).prepend('<span class="page-builder-element-path" data-path="'+
																	$container_name+'|'+$row_name+'|'+$column_name+
																	'|'+$nested_row_name+'">'+$container_name+' &raquo; '+
																	$row_name+' &raquo; '+$column_name+' &raquo; '+
																	$nested_row_name+'</span>');
							});
						} else {
							// element already existes	
							var $path_element = $(element).closest('td.acf-fields').find('.page-builder-element-path').first();
							acf_bs4_page_builder_update_path_element($, $path_element, $data);
						}
						
						// nested column names
						var $nested_columns = $(element).closest('.acf-row').find('[data-key="field_586cf8b9d4313"]');
						var $count_nested_columns = 1;
						$nested_columns.find('.acf-row [data-key="field_586daa86c09a9"] .acf-input input').not('.acf-row.acf-clone [data-key="field_586daa86c09a9"] .acf-input input').each(function(index, element) {
							if (element.value == '') {
								element.value = 'Column '+$count_nested_columns;
							}
							
							var $nested_column_name = element.value;
							if ($nested_column_name.match(/^Column [0-9]+$/)) {
								$nested_column_name = 'Column '+$count;
								element.value = $nested_column_name;
							}
							
							$count_nested_columns++;
							
							if ($data.length > 4) {
								$data = [$data[0], $data[1], $data[2], $data[3]];
							}
							$data[4] = $nested_column_name;
							
							if ($(element).closest('td.acf-fields').find('.page-builder-element-path').length == 0) {
								$(element).closest('td.acf-fields').each(function(index, element) {
									$(element).prepend('<span class="page-builder-element-path" data-path="'+
																		$container_name+'|'+$row_name+'|'+$column_name+'|'+
																		$nested_row_name+'|'+$nested_column_name+'">'+
																		$container_name+' &raquo; '+$row_name+' &raquo; '+
																		$column_name+' &raquo; '+$nested_row_name+' &raquo; '+
																		$nested_column_name+'</span>');
								});
							} else {
								// element already existes	
								var $path_element = $(element).closest('td.acf-fields').find('.page-builder-element-path').first();
								acf_bs4_page_builder_update_path_element($, $path_element, $data);
							}
							
						}); // end nested columns
					}); // end nested rows
				}); // end each column
			}); // end each row
		}); // end each container
		
		$(document).on('click', '.page-builder-element-path', function (e) {
			//console.log($(this).closest('.acf-fields').find('.acf-field .acf-input input').first());
			var input = $(this).closest('.acf-fields').find('.acf-field .acf-input input').first();
			input.focus();
			input.select();
		});
		
		$(document).on('dblclick', '.page-builder-element-path', function (e) {
			//console.log($(this).closest('.acf-fields').find('.acf-field .acf-input input').first());
			$(this).closest('.acf-row').find('[data-event="collapse-row"]').first().click();
			
			if (window.getSelection) {
				if (window.getSelection().empty) {  // Chrome
					window.getSelection().empty();
				} else if (window.getSelection().removeAllRanges) {  // Firefox
					window.getSelection().removeAllRanges();
				}
			} else if (document.selection) {  // IE?
				document.selection.empty();
			}
			$(this).closest('.acf-fields').find('.acf-field .acf-input input').first().blur();
		});
		
	} // end function acf_bs4_page_builder_add_paths
	
	function acf_bs4_page_builder_update_path_element($, $path_element, $data) {
		var $path = $path_element.attr('data-path');
		var $paths = $path.split(/\|/);
		for (i=0; i<$paths.length; i++) {
			if ($data[i] !== false) {
				$paths[i] = $data[i];
			}
		}
		$path = $paths.join('|');
		//console.log($path);
		var $content = $paths.join(' &raquo; ');
		$path_element.attr('data-path', $path);
		$path_element.empty();
		$path_element.append($content);
	} // end function acf_bs4_page_builder_update_path_element
	
	function acf_bs4_page_builder_multifield_labels($) {
		var $multifield_label = '<div class="page-builder-multifield-label acf-field">Size</div>';
		$($multifield_label).insertBefore('[data-key="field_587198fb67598"]');
		var $multifield_label = '<div class="page-builder-multifield-label acf-field">Offset</div>';
		$($multifield_label).insertBefore('[data-key="field_5872c36089084"]');
	} // end function acf_bs4_page_builder_multifield_labels
	
	var acf_bs4_page_builder_move_content;
	jQuery(document).ready(function($){
		if (typeof acf == 'undefined') { return; }
		acf_bs4_move_content = new acf_bs4_page_builder_move($);
	}); // end document ready
	
	function acf_bs4_page_builder_move($) {
		//console.log($);
	} // end function acf_bs4_move