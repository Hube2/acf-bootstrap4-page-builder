<?php 
	/*
		Plugin Name: ACF5 Pro + Bootstrap4 Page Builder
		Plugin URI: https://bitbucket.org/Hube2/acf-bootstrap4-page-builder
		Description: 
		Version: 0.0.1
		Author: John A. Huebner II
		Author URI: https://github.com/Hube2/
		
		Page Builder using ACF 5 Pro for Bootstrap 4
		
		This plugin will not provide any functionality if ACF is not installed
		
	*/
	
	// If this file is called directly, abort.
	if (!defined('WPINC')) {die;}
	
	new acf_bs4__page_builder();
	
	class acf_bs4__page_builder {
		
		private $version = '0.0.1';
		
		public function __construct() {
			register_activation_hook(__FILE__, array($this, 'activate'));
			register_deactivation_hook(__FILE__, array($this, 'deactivate'));
			add_action('acf/input/admin_enqueue_scripts', 	array($this, 'scripts'));
		} // end public function __construct

		public function scripts() {
			if (!$this->run()) {
				return;
			}
			// wp_enqueue_script
			$handle    	= 'acf-bs4-page-builder';
			$src       	= plugin_dir_url(__FILE__).'js/admin.js';
			$deps      	= array('acf-input');
			$ver       	= $this->version;
			$in_footer 	= false;
			wp_register_script($handle, $src, $deps, $ver, $in_footer);
			$object = 'acf_page_builder_vars';
			$data = array();
			wp_localize_script($handle, $object, $data);
			wp_enqueue_script($handle);
			
			$handle = 'acf-bs4-page-builder';
			$src       	= plugin_dir_url(__FILE__).'css/admin.css';
			$deps      	= array('acf-input');
			$ver       	= $this->version;
			wp_enqueue_style($handle, $src, $deps, $ver);
			
			wp_enqueue_script('jquery-ui-tooltip');
			
		} // end public function scripts
		
		public function activate() {
			// just in case I need to do something to activate
		} // end public function activate
		
		public function deactivate() {
			// just in case I need to do something to deactivate
		} // end public function deactivate

		private function run() {
			// cannot run on field group editor or it will
			// add code to every ACF field in the editor
			$run = true;
			global $post;
			if (is_a($post, 'WP_Post') && get_post_type($post->ID) == 'acf-field-group') {
				$run = false;
			}
			return $run;
		} // end private function run
		
	} // end class acf_bs4__page_builder
	
?>