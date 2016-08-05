/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$('.logDiv').prepend('<div class="disabledWrapper"></div>');


var editorvalue = "";
var editor="";
var isOnQue=false;
var buttonBoolean = true;
var markers_present = [];
var program_b64 = null;
var compiled=false;
var function_starttime=null;
var program_str="";
var queue_tmr = null;

    

function ace_grammar_demo(_editor, code, langs)
{
    
    //ace/ext/language_tools
   
  //  ace.config.set('basePath', '/ace-builds/src-noconflict');
  //ace.config.set('basePath', '/ace-builds/src-noconflict');
   var Editor = ace.require("ace/editor").Editor,
         
           
   editor = ace.edit("editor"),
   
     session = editor.getSession();
      
    editor.setTheme("ace/theme/solarized_dark");


    var main_lang, main_mode;

    for (var i = 0, l = langs.length; i < l; i++)
    {
        var lang = langs[i].language, grammar = langs[i].grammar, mode;

        // 2. parse the grammar into an ACE syntax-highlight mode
        mode = AceGrammar.getMode(grammar);
        mode.name = lang;

        if (0 === i)
        {
            // main mode
            main_lang = lang;
            main_mode = mode;

            // enable syntax validation
            main_mode.supportGrammarAnnotations = true;
            // enable auto-completion
            main_mode.supportAutoCompletion = true;
            main_mode.autocompleter.options = {prefixMatch: true, caseInsensitiveMatch: false, inContext: true};
            // enable code-folding
            main_mode.supportCodeFolding = true;
            // enable code-matching
            main_mode.supportCodeMatching = true;
        } else
        {
            // submodes
            // add any sub/inner modes to main mode
            main_mode.submode(lang, mode);
        }
    }

    // 3. use it with ACE

    // editor commands
    var commands = {
        defaults: {
            toggleCommentLines: {win: "Ctrl-L", mac: "Command-L"},
            toggleCommentBlock: {win: "Alt-L", mac: "Alt-L"}
        },
        toggleCommentLines: {
            name: "toggleCommentLines",
            exec: function (editor) {
                editor.toggleCommentLines();
            },
            bindKey: null
        },
        toggleCommentBlock: {
            name: "toggleCommentBlock",
            exec: function (editor) {
                editor.toggleBlockComment();
            },
            bindKey: null
        }
    };
    commands.toggleCommentLines.bindKey = commands.defaults.toggleCommentLines;
    commands.toggleCommentBlock.bindKey = commands.defaults.toggleCommentBlock;

    // editpr options
    ace.config.defineOptions(Editor.prototype, "editor", {
        toggleCommentLinesKey: {
            set: function (val) {
                if (val)
                    commands.toggleCommentLines.bindKey = val;
                else
                    commands.toggleCommentLines.bindKey = commands.defaults.toggleCommentLines;
            },
            value: commands.defaults.toggleCommentLines
        },
        toggleCommentBlockKey: {
            set: function (val) {
                if (val)
                    commands.toggleCommentBlock.bindKey = val;
                else
                    commands.toggleCommentBlock.bindKey = commands.defaults.toggleCommentBlock;
            },
            value: commands.defaults.toggleCommentBlock
        },
        enableToggleCommentLines: {
            set: function (val) {
                if (val)
                    this.commands.addCommand(commands.toggleCommentLines);
                else
                    this.commands.removeCommand(commands.toggleCommentLines);
            },
            value: false
        },
        enableToggleCommentBlock: {
            set: function (val) {
                if (val)
                    this.commands.addCommand(commands.toggleCommentBlock);
                else
                    this.commands.removeCommand(commands.toggleCommentBlock);
            },
            value: false
        },
        onlyKeywordsAutoComplete: {
            set: function (val) {
                if (this.getOption('enableBasicAutocompletion'))
                {
                    if (val)
                    {
                        this._completers = this._completers || this.completers.slice();
                        // keyword completer taken from the grammar mode
                        this.completers = [this.completers[2]];
                    } else if (this._completers)
                    {
                        // default completers
                        this.completers = this._completers;
                        this._completers = null;
                    }
                }
            },
            value: false
        }
    });



//    ace.config.loadModule("ace/theme/dawn", function () {
//   alert("loaded");
//
//    });
    ace.config.loadModule("ace/ext/language_tools", function () {

        editor.getSession().on('change', function (e) {
            var x = editor.getValue();
            // console.log(" i am empty"+x);

            if (x.length > 0) {


                editorvalue = x;

            }
          //  editor.selection.selectLineEnd();

            editor.find(';');
            editor.replaceAll('');


        });


        editor.setOptions({
            enableBasicAutocompletion: true,
            enableSnippets: true,
            enableToggleCommentLines: true,
            enableToggleCommentBlock: true
        });
        editor.setOptions({
            onlyKeywordsAutoComplete: true
        });
        main_mode.matcher(editor);
        editor.setValue(code, -1);
        session.setMode(main_mode);
        //session.setOptions({useWorker: false});
        session.setFoldStyle("markbeginend");
        //editor.clearSelection();
    });

    return editor;
}

function excButtonQueue() {
    

          
    clearMarkers();

    $('.containerDeviceradio').html('');

    
          
  
      
      if(editorvalue.length>0){
          
          
       deviceradioProcess(editorvalue);
      // $('.exe_button_3').hide();
      // $('.exe_button_default').show();
          
      }else{
          
      // $('.exe_button_3').hide();
      // $('.exe_button_default').show();
      }
      
 
 
//    if ($(".containerDeviceradio").text().length > 0) {
//        
//      $('.exe_button_3').hide();
//      $('.exe_button_default').show();
//    }else{
//           $('.exe_button_3').hide();
//      $('.exe_button_default').show();
//        
//    }
 
 
 


}

function reloadButton() {
    

   // alert("deleted");
    var htmlvalue= document.getElementById("code").innerHTML;
  
     editor.getSession().setValue(htmlvalue);
     
     $("#code").html(htmlvalue);
     $('.reload_default').hide();
     

     
      $('.reload_exe').show();
       // alert($("#code").text());
       
        
      $('.reload_exe').fadeIn(400, function(){
      $('.reload_exe').fadeOut(400);
        //cogAnimation2();
          $('.reload_default').show();
          
          clearMarkers();
      });
     // $('.reload_exe').hide();
     // $('.reload_default').show();
}

function deviceradioProcess(text) {
    
     
    
 function addNewlines(str) {
  var result = '';
  while (str.length > 0) {
    result += str.substring(0, 80) + '\n';
    str = str.substring(80);
  }
  return result;
}

function syntaxHighlight(json) {
    if (typeof json != 'string') {
         json = JSON.stringify(json, undefined, 2);
    }
    json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
        var cls = 'number';
        if (/^"/.test(match)) {
            if (/:$/.test(match)) {
                cls = 'key';
            } else {
                cls = 'string';
            }
        } else if (/true|false/.test(match)) {
            cls = 'boolean';
        } else if (/null/.test(match)) {
            cls = 'null';
        }
        return '<span class="' + cls + '">' + match + '</span>';
    });
}   

    
    
  function_starttime = new Date();
 
$('#console').html('');



    var data = text;
    
     program_str=data;


    // console.log("i am text"+text);
    var html = '<div class="wrap">';

    html += '<pre class="left"><code>';
    var n = 1;
    for (var i = 0; i < data.split(/\r\n|\r|\n/).length; i++) {
        if (i)
            html += "\n";
        html += n++;
    }
    html += '</code></pre>';

    html += '<pre class="right"><code data-language="drdl">' + data + '</code></pre>';
    html += '</div>';







}

var compile_program = function() {
     
      
    
	// setup build environment
	var lex = new DeviceRadio.Lexer;
	var com = new DeviceRadio.Compiler;
	com.add(lex.parse(
		"task system_boot\n" +
		"  boot.register\n" +
		"  trigger(boot)\n" +
		"task transmit\n" +
		"  radio.register\n" +
		"  radio.transmit\n" +
		"task dummy on 55s\n" +
		"  var $foo\n" +
		"  $foo = !$foo\n"
	), null, "Core");
	
	// compile program
	var compilation_message = "Program compiled successfully.\n";
	program_b64 = null;
	try {
            
		var tokens = lex.parse(program_str);
		com.add(tokens, null, "deviceradio.txt");
		com.optimize();
		var stats = com.generate();
		
		var program_u8 = [];
		for (var i = 0; i < stats[1].length; i++) program_u8.push(stats[1].charCodeAt(i));
		program_b64 = fromByteArray(program_u8);
              
	}
	catch (ex) {
		compilation_message = ex.message;
                
                var listex = Object.getOwnPropertyNames(ex);
        //           alert(listex);
        var lineNumber = "";
        if ('lineNumber' in ex) {
            // alert("has");
            lineNumber = ex.lineNumber;
        }

        var columnNumber = "";
        if ('columnNumber' in ex) {
            columnNumber = ex.columnNumber;
        }
//                
        var row = lineNumber - 1;
        var column = columnNumber;


        // document.getElementById('errorReport').innerHTML = "row"+row+" col "+column;

        var Range = ace.require('ace/range').Range;
        var marker = editor.session.addMarker(new Range(row, 0, row, 1), "myMarker", "fullLine");  /// first is number of lines to be highlighted,0,number of row, number of column  


        markers_present[markers_present.length] = marker;

        editor.session.selection.moveCursorToPosition({row: row, column: column});
        editor.session.selection.selectLineEnd();

                
		$('#btn-push').addClass('error');
		console.log(ex);
	}

	$('#console').prepend('<p><code>' + compilation_message + '</code></p>');

	// for debug
	if (false) {
		$('.container').prepend('<pre class="wrap"><code>' + syntaxHighlight(com._ns) + '</code></pre>');
		$('.container').prepend('<pre class="wrap"><code>' + syntaxHighlight(com._s) + '</code></pre>');
		$('.container').prepend('<pre class="wrap"><code>' + syntaxHighlight(com._t) + '</code></pre>');
		$('.container').prepend('<pre class="wrap"><code>' + syntaxHighlight(com._v) + '</code></pre>');
		$('.container').prepend('<pre class="wrap"><code>' + syntaxHighlight(com._c) + '</code></pre>');
		$('.container').prepend('<pre class="wrap"><code>' + syntaxHighlight(com._m) + '</code></pre>');
		$('.container').prepend('<pre class="wrap"><code>' + syntaxHighlight(com._compiler) + '</code></pre>');
	}

	return program_b64 !== null;
};

$(function () {

// handle multiple device ids
var device_ids = [
	'38F8-932-5E41A', // 222200000010
	'91E5-F1C-331F9'  // 222200000011
];
for (i in device_ids) {
	$('#btn-device').prepend('<option value="' + device_ids[i] + '"' + ((i == 0) ? 'selected="selected"' : '') + '>Device: ' + device_ids[i] + '</option>');
}
var dev_id = device_ids[0];

// create a new instance of the live programming handler
var live = new DeviceRadioLive('http://stomp.deviceradio.net:15674/stomp', 'gateway', 'deviceradio', 'dreD8G@fRu');

// event handler for successfull connection
live.on('connect', function () {
	$('.btn').removeClass('disabled');
});

// event handler for disconnection
live.on('disconnect', function () {
	$('.btn').addClass('disabled');
});

// event handler for successfull firmware upload
live.on('upload', function () {
	$('#console').prepend('<p><code>Firmware written successfully</code></p>');
});

// event handler for upload errors
live.on('uploaderror', function (reason) {
	$('#console').prepend('<p><code>Upload failed (' + reason + ')</code></p>');
});

// event handler for changes in the queue
live.on('queuechange', function (total, before_you, max) {
	// if you are first or not in queue
	if (!before_you) {
		$('#console').prepend('<p><code>In queue: ' + total + '</code></p>');
	}
	else {
		$('#console').prepend('<p><code>In queue: ' + total + ', people before you: ' + ((before_you > 0) ? before_you : (max + '+')) + '</code></p>');
	}
});

// event handler when its your turn
live.on('yourturn', function (status) {
	// we are now in control of device
	if (status) {
		// timer is running
		if (queue_tmr !== null) {
			clearTimeout(queue_tmr);
			queue_tmr = null;
			// compile
			if (compile_program()) {
				// upload
				$('#console').prepend('<p><code>Uploading firmware to device</code></p>');
				// write firmware to device
				live.upload(dev_id, program_b64);
			}
		}
		// show popups as normal
		else {
			$('#console').prepend('<p><code>It is your turn</code></p>');
			
			// enable buttons
			$('.btn').removeClass('disabled');
			
			alert('It is now your time to have control of the device');
		}
	}
	// we have lost control of device
	else {
		$('#console').prepend('<p><code>Your turn is up</code></p>');
		alert('Your time is now up');
	}
});

// start queueing
var do_queueing = function() {
	if (queue_tmr === null) {
		queue_tmr = setTimeout(function(){
			queue_tmr = null;

			// disable buttons until we are in control
			$('.btn').addClass('disabled');

			alert('Your are now in the queue for getting control of the device');
		}, 1000);

		// put us in queue
		live.queue(dev_id);
	}
};

// "program device"-button pushed
$('#btn-push').on('click', function() {
	// only work if buttons are enabled
	if (!$(this).hasClass('disabled')) {
		// if not in queue, start queueing
		if (!live.queueing) do_queueing();
		// else compile and upload
		else if (live.connected) {
			// compile
			if (compile_program()) {
				// upload
				$('#console').prepend('<p><code>Uploading firmware to device</code></p>');
				// write firmware to device
				live.upload(dev_id, program_b64);
			}
		}
	}
});

// "wipe device"-button pushed
$('#btn-wipe').on('click', function() {
	// only work if buttons are enabled
	if (!$(this).hasClass('disabled')) {
		// if not in queue, start queueing
		if (!live.queueing) do_queueing();
		// else format the device
		else if (live.connected) {
			$('#console').prepend('<p><code>Clearing all code in the device</code></p>');
			// format the device
			live.upload(dev_id);
		}
	}
});

// connect to server
live.connect();

// handle device change combo box
$('#btn-device').on('change', function(){
	if (live.queueing) {
		live.queue(dev_id, true);
		dev_id = this.value;
		live.queue(dev_id);
	}
	else dev_id = this.value;
});


});


            

$('.exe_button_disabled, .reload_button_disabled').click(function(){
    // alert("poing!");
    $('.disabledWrapper').prepend('<div class="disabledMessage"><p>Button disabled until it\'s your turn</p></div>');
    // $('.disabledMessage').prepend('<p class="disabledPara">Button disabled until it\'s your turn</p>');
    $('.disabledMessage').fadeIn(70).fadeOut(70).fadeIn(70).fadeOut(70).fadeIn(70).fadeOut(70).fadeIn(70).fadeOut(70).fadeIn(70).delay(2000).fadeOut(2000);
});

    function cogAnimation1(){
        $('.exe_button_default').hide();
        $('.exe_button_1').fadeIn(300, function(){
            $('.exe_button_1').fadeOut(300);
            cogAnimation2();
        });
    }
    function cogAnimation2(){
        $('.exe_button_2').fadeIn(200, function(){
            $('.exe_button_2').fadeOut(200);
            cogAnimation3();
        });
    }
    function cogAnimation3(){
      $('.exe_button_3').fadeIn(200, function(){
          $('.exe_button_3').fadeOut(200);
          $('.exe_button_default').show();
          // excButton();
      });
    }

function clearMarkers() {

    var markers = editor.session.getMarkers(false);

    for (var id in markers) {

        editor.session.removeMarker(id);

    }



}