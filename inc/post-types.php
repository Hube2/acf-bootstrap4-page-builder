<?php 
	
	// If this file is called directly, abort.
	if (!defined('WPINC')) {die;}
	
	new acf_bs4_page_builder_post_types();
	
	class acf_bs4_page_builder_post_types {
		
		private $post_type = 'acf-bs4-pb-template';
		private $taxonomy = 'acf-bs4-pb-template-type';
		private $terms = array('Page', 'Container', 'Row');
		
		public function __construct() {
			add_action('init', array($this, 'init'));
			add_action('restrict_manage_posts', array($this, 'restrict_manage_posts'));
			add_filter('query_vars', array($this, 'query_vars'));
			add_filter('pre_get_posts', array($this, 'pre_get_posts'));
			add_action('acf-bs4-page-builder/activate', array($this, 'activate'));
			add_filter('acf/fields/taxonomy/query/key=field_589e0e2046545', array($this, 'tax_order'), 10, 3);
			add_filter('acf/fields/taxonomy/wp_list_categories/key=field_589e0e2046545', array($this, 'tax_order'), 10, 3);
		} // end public function __construct
		
		public function init() {
			$this->template();
			$this->template_types();
		} // end public function init
		
		public function tax_order($args, $field, $post_id) {
			$args['orderby'] = 'id';
			return $args;
		} // end public function tax_order
		
		public function activate() {
			$this->init();
			$args = array(
				'taxonomy' => $this->taxonomy,
				'hide_empty' => false,
				'fields' => 'count'
			);
			$terms = get_terms($args);
			if ($terms == count($this->terms)) {
				return;
			}
			// insert terms
			foreach ($this->terms as $term) {
				if (!term_exists($term, $this->taxonomy)) {
					wp_insert_term($term, $this->taxonomy);
				}
			}
		} // end public function activate
		
		public function query_vars($vars) {
			$vars[] = 'template-type';
			return $vars;
		} // end public function query_vars
		
		public function restrict_manage_posts() {
			global $typenow, $wp_query;
			if ($typenow != $this->post_type) {
				return;
			}
			$value = 0;
			if (isset($wp_query->query['template-type'])) {
				$value = $wp_query->query['template-type'];
			}
			//echo '<pre>'; print_r($wp_query); echo '</pre>';
			$args = array(
				'show_option_all' =>  'Show All Template Types',
				'taxonomy'        =>  $this->taxonomy,
				'name'            =>  'template-type',
				'orderby'         =>  'id',
				'selected'        =>  $value,
				'hierarchical'    =>  false,
				'show_count'      =>  true,
				'hide_empty'      =>  false
			);
			wp_dropdown_categories($args);
		} // end public function restrict_manage_posts
		
		public function pre_get_posts($query) {
			global $pagenow;
			if ($pagenow != 'edit.php' ||
					!$query->is_main_query() ||
					$query->query['post_type'] != $this->post_type) {
				return;
			}
			$template_type = intval(get_query_var('template-type', 0));
			if (!$template_type) {
				return;
			}
			$tax_query = array(
			  array(
					'taxonomy' => $this->taxonomy,
					'terms' => array($template_type),
					'field' => 'id'
				)
			);
			$query->set('tax_query', $tax_query);
		} // end public function pre_get_posts
		
		private function template() {
			$labels = array(
				'name' => 'Page Builder Templates',
				'singular_name' => 'Template',
				'menu_name' => 'Templates',
				'all_items' => 'Templates',
				'add_new' => 'Add New',
				'add_new_item' => 'Add New Template',
				'edit_item' => 'Edit Template',
				'new_item' => 'New Template',
				'view_item' => 'View Template',
				'view_items' => 'View Templates',
				'search_items' => 'Search Templates',
				'not_found' => 'No Templates Found',
				'not_found_in_trash' => 'No Templates Found in Trash',
				'parent_item_colon' => 'Parent Template',
				'featured_image' => 'Featured Image for this Template',
				'set_featured_image' => 'Set Featured Image for this Template',
				'remove_featured_image' => 'Remove Featured Image for this Template',
				'use_featured_image' => 'Use as Featured Image for this Template',
				'archives' => 'Template Archives',
				'insert_into_item' => 'Insert into Template',
				'uploaded_to_this_item' => 'Uploaded to this Template',
				'filter_items_list' => 'Filter Template List',
				'items_list_navigation' => 'Template List Navication',
				'items_list' => 'Template List',
				'attributes' => 'Template Attributes',
				'parent_item_colon' => 'Parent Template',
			);
			$args = array(
				'label' => 'Templates',
				'labels' => $labels,
				'description' => '',
				'public' => false,
				'publicly_queryable' => false,
				'show_ui' => true,
				'show_in_rest' => false,
				'rest_base' => '',
				'has_archive' => false,
				'show_in_menu' => apply_filters('acf-bs4-page-builder/admin-page', 'acf-bs4-page-builder'),
				'exclude_from_search' => true,
				'capability_type' => 'post',
				'map_meta_cap' => true,
				'hierarchical' => false,
				'rewrite' => false,
				'query_var' => true,
				'supports' => array('title', 'custom-fields', 'revisions'),
				'taxonomies' => array($this->taxonomy),
			);
			register_post_type($this->post_type, $args);
		} // end private function template
		
		private function template_types() {
			$labels = array(
				'name' => 'Template Types',
				'singular_name' => 'Template Typs',
				'menu_name' => 'Template Types',
				'all_items' => 'All Template Types',
				'edit_item' => 'Edit Template Type',
				'view_item' => 'View Template Type',
				'update_item' => 'Update Template Type',
				'add_new_item' => 'Add New Template Type',
				'new_item_name' => 'New Template Type Name',
				'parent_item' => 'Parent Template Type',
				'parent_item_colon' => 'Parent Template Type:',
				'search_items' => 'Search Template Types',
				'popular_items' => 'Popular Template Types',
				'separate_items_with_commas' => 'Separate Template Types with commas',
				'add_or_remove_items' => 'Add or Remove Template Types',
				'choose_from_most_used' => 'Choose from the most used Template Types',
				'not_found' => 'No Template Types Found'
			);
			$args = array(
				'label' => 'Template Types',
				'labels' => $labels,
				'public' => false,
				'publicly_queryable' => false,
				'show_ui' => false,
				'show_in_menu' => false,
				'show_in_nav_menus' => false,
				'show_in_rest' => false,
				'show_tag_cloud' => false,
				'show_in_quick_edit' => false,
				'meta_box_cb' => false,
				'show_admin_column' => true,
				'description' => '',
				'hierarchical' => false,
				'query_var' => true,
				'rewrite' => false
			);
			register_taxonomy($this->taxonomy, $this->post_type, $args);
		} // end private function template_types
		
	} // end class acf_bs4_page_builder_post_types

	
?>