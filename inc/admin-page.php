<?php 
	
	// If this file is called directly, abort.
	if (!defined('WPINC')) {die;}
	
	new acfbs4_page_builder_admin_page();
	
	class acfbs4_page_builder_admin_page {
		
		private $admin_page = false;
		private $capability = 'manage_options';
		private $slug = 'acf-bs4-page-builder';
		
		public function __construct() {
			add_action('admin_menu', array($this, 'menu_page'), 9, 0);
			add_filter('acf-bs4-page-builder/admin-page', array($this, 'get_admin_slug'), 1, 1);
			add_filter('acf-bs4-page-builder/admin-capaiblity', array($this, 'get_capability'), 1, 1);
		} // end public function __construct
		
		public function get_capability($cap) {
			return $this->capability;
		} // end public function get_capability
		
		public function get_admin_slug($slug) {
			return $this->slug;
		} // end public function get_admin_slug
		
		public function menu_page() {
			$capability = apply_filters('acf-bs4-page-builder/admin-capaiblity', $this->capability);
			$page_title = 'Page Builder Admin';
			$menu_title = 'Page Builder';
			$menu_slug = 'acf-bs4-page-builder';
			$function = array($this, 'admin_page_callback');
			$icon = 'dashicons-welcome-widgets-menus';
			$position = NULL;
			$this->admin_page = add_menu_page($page_title, $menu_title, $capability, $menu_slug, $function, $icon, $position);
		} // end public function menu_page
		
		public function admin_page_callback() {
			// to show content of admin page
			?>
				<p>this is the content of the admin page</p>
			<?php 
		} // end public function menu
		
	} // end class acf_page_builder_acf_load
	
?>