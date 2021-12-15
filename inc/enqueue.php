<?php
/*
=====================
	Add Styles And Scripts
=====================
*/

add_action( 'wp_enqueue_scripts', 'theme_load_scripts' );
function theme_load_scripts(){
	
    wp_enqueue_script( 'jquery' );
  

    //main.js
    wp_enqueue_script( 'main', get_template_directory_uri() . '/dist/main.min.js', false , false , true);
    wp_localize_script( 'main', 'customjs_ajax_object',
        array( 
            'content_url' => site_url().'/',
            'ajax_url' => admin_url( 'admin-ajax.php' ),
            'ajax_nonce' => wp_create_nonce( "secure_nonce_name" )
        )
    );


    /*theme css*/
	wp_enqueue_style( 'main',get_template_directory_uri() . '/dist/main.min.css');

}

//additional variables
function javascript_variables(){ ?>
  <script type="text/javascript">
      var ajax_url = '<?php echo admin_url( "admin-ajax.php" ); ?>';
      var ajax_nonce = '<?php echo wp_create_nonce( "secure_nonce_name" ); ?>';
  </script><?php
}
add_action ( 'wp_head', 'javascript_variables' );
