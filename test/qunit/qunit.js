(function(){
	var isReady,
		stateAfterScript;
		
//we probably have to have this only describing where the tests are
steal('jquery').then(function(){
	$(function(){
			isReady = true;
	})
})
.then('./jmvc.js')
.then('jquery/dom/animate/animate_test.js',
	'jquery/dom/compare/compare_test.js',
	'jquery/dom/compare/compare_test.js',
	'jquery/dom/dimensions/dimensions_test.js',
	'jquery/dom/form_params/form_params_test.js',
	'jquery/dom/styles/styles_test.js',
	'jquery/event/default/default_test.js',
	'jquery/event/destroyed/destroyed_test.js',
	'jquery/event/drag/drag_test.js',
	'jquery/event/drop/drop_test.js',
	'jquery/event/hover/hover_test.js',
	'jquery/event/fastfix/fastfix_test.js',
	'jquery/event/key/key_test.js',
	'jquery/event/pause/pause_test.js',
	'jquery/event/resize/resize_test.js',
	'jquery/event/swipe/swipe_test.js',
	'jquery/event/default/default_pause_test.js',
	function(){
		stateAfterScript = isReady;
		module('jquery v steal');
		test("jquery isn't ready", function(){
			ok(!stateAfterScript, "jQuery isn't ready yet")
		});
	});
})();
