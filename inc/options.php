<?php 
	
	// If this file is called directly, abort.
	if (!defined('WPINC')) {die;}
	
	new acfbs4_page_builder_options();
	
	class acfbs4_page_builder_options {
		
		private $options = array();
		
		public function __construct() {
			add_action('init', array($this, 'init'));
		} // end public function __construct
		
		public function init() {
			$this->options_page();
		} // end public function init
		
		private function options_page() {
			if (!function_exists('acf_add_options_sub_page')) {
				return;
			}
			$args = array(
				'page_title' => 'Page Builder Options',
				'menu_title' => 'Options',
				'menu_slug' => 'acf-bs4-pb-options',
				'capabiltiy' => apply_filters('acf-bs4-page-builder/admin-capaiblity', 'manage_options'),
				'parent_slug' => apply_filters('acf-bs4-page-builder/admin-page', 'acf-bs4-page-builder')
			);
			acf_add_options_sub_page($args);
		} // end private function options_page
		
	} // end class acfbs4_page_builder_options
	
?>