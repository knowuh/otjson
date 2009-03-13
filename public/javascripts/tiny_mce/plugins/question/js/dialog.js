tinyMCEPopup.requireLangPack();
Resource.model("Question");

var QuestionDialog = {
	init : function() {
		var f = document.forms[0];

		// Get the selected contents as text and place it in the input
		f.prompt.value = tinyMCEPopup.editor.selection.getContent({format : 'text'});
		f.default_response.value = tinyMCEPopup.getWindowArg('default_response');
		f.prompt.value = tinyMCEPopup.getWindowArg('prompt');
	},

	insert : function() {
		// Insert the contents from the input into the document
		var prompt = document.forms[0].prompt.value;
		var default_response = document.forms[0].default_response.value;
		var activity_id = tinyMCEPopup.getWindowArg('activity_id');
		question = Question.create({prompt: prompt, default_response: default_response, activity_id: activity_id});
	
		var imgurl = tinyMCEPopup.getWindowArg("plugin_url") + '/img/qtext.gif"' ;
		var resp_text = '<img class="question_edit_button" src="' + imgurl + '" id="' + question.id + '"/><br/>';
		
		tinyMCEPopup.editor.execCommand('mceInsertContent', false, resp_text);
		tinyMCEPopup.close();
	}
};

tinyMCEPopup.onInit.add(QuestionDialog.init, QuestionDialog);
