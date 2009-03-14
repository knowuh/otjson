/**
 * $Id: editor_plugin_src.js 201 2007-02-12 15:56:56Z spocke $
 *
 * @author Moxiecode
 * @copyright Copyright © 2004-2008, Moxiecode Systems AB, All rights reserved.
 */

(function() {
	// Load plugin specific language pack
	tinymce.PluginManager.requireLangPack('question');

	tinymce.create('tinymce.plugins.QuestionPlugin', {
	  
		
		/**
		 * Initializes the plugin, this will be executed after the plugin has been created.
		 * This call is done before the editor instance has finished it's initialization so use the onInit event
		 * of the editor instance to intercept that event.
		 *
		 * @param {tinymce.Editor} ed Editor instance that the plugin is initialized in.
		 * @param {string} url Absolute URL to where the plugin is located.
		 */
		init : function(ed, url) {
		  var t = this;
			t.editor = ed;
			
			// Register the command so that it can be invoked by using tinyMCE.activeEditor.execCommand('mceQuestion');
			ed.addCommand('mceQuestion', function() {
				ed.windowManager.open({
					file : url + '/dialog.htm',
					width : 320 + parseInt(ed.getLang('question.delta_width', 0)),
					height : 120 + parseInt(ed.getLang('question.delta_height', 0)),
					inline : 1
				}, {
					plugin_url : url, // Plugin absolute URL
					// prompt : params.prompt,
					// default_response : params.default_response
				});
			});
			
			function isQuestionElm(n) {
				return /^(otjsonquestion)$/.test(n.className);
			};

			// Register question button
			ed.addButton('question', {
				title : 'question.desc',
				cmd : 'mceQuestion',
				image : url + '/img/question.gif'
			});

			// Add a node change handler, selects the button in the UI when a image is selected
			ed.onNodeChange.add(function(ed, cm, n, o) {
				cm.setActive('question', n.class == 'question');
			});
			
			ed.onKeyUp.add(function(ed, e) {
			   console.debug('Key up event: ' + e.keyCode);
				console.debug('key up event: ' + e.element().class_name);
			});

			
			
			ed.onDblClick.add(function(ed, e) {
				console.log('Double click event: ' + e.target.nodeName);
				question = Question.find(e.target.id);
				ed.windowManager.open({
					file : url + '/dialog.htm',
					width : 320 + parseInt(ed.getLang('question.delta_width', 0)),
					height : 140 + parseInt(ed.getLang('question.delta_height', 0)),
					inline : 1
				}, {
					plugin_url : url, // Plugin absolute URL
					prompt : question.prompt,
					default_response : question.default_response
				});
			});
			
			ed.onInit.add(function() {
				if (ed.settings.content_css !== false)
					ed.dom.loadCSS(url + "/css/content.css");
			});
		},

		/**
		 * Creates control instances based in the incomming name. This method is normally not
		 * needed since the addButton method of the tinymce.Editor class is a more easy way of adding buttons
		 * but you sometimes need to create more complex controls like listboxes, split buttons etc then this
		 * method can be used to create those.
		 *
		 * @param {String} n Name of the control to create.
		 * @param {tinymce.ControlManager} cm Control manager to use inorder to create new control.
		 * @return {tinymce.ui.Control} New control instance or null if no control was created.
		 */
		createControl : function(n, cm) {
			return null;
		},

		/**
		 * Returns information about the plugin as a name/value array.
		 * The current keys are longname, author, authorurl, infourl and version.
		 *
		 * @return {Object} Name/value array containing information about the plugin.
		 */
		getInfo : function() {
			return {
				longname : 'question plugin',
				author : 'Some author',
				authorurl : 'http://tinymce.moxiecode.com',
				infourl : 'http://wiki.moxiecode.com/index.php/TinyMCE:Plugins/question',
				version : "1.0"
			};
		}

		
	});

	// Register plugin
	tinymce.PluginManager.add('question', tinymce.plugins.QuestionPlugin);
})();