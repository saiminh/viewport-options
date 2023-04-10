<?php
/**
 * Plugin Name:       Element Viewport Options 
 * Description:       Adding some viewport options like full viewport height.
 * Requires at least: 5.9
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Simon Flöter
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       viewport-options
 *
 * @package           viewport-options
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */


if ( !function_exists('viewportOptions') ) {
  // Adding support for gridlines and span- classes in Gutenberg
  function viewportOptions(){
    wp_enqueue_script(
      'viewportOptions',
      plugins_url('/build/index.js', __FILE__),
      ['wp-edit-post']
    );
  }
  add_action('enqueue_block_editor_assets', 'viewportOptions');
}

function enqueue_viewport_option_frontend_assets() {
  
  wp_enqueue_style(
      'viewport-options-frontend-styles',
      plugins_url('/build/index.css', __FILE__)        
  );
}
// Hook the enqueue function into the frontend and editor
add_action( 'enqueue_block_assets', 'enqueue_viewport_option_frontend_assets' );