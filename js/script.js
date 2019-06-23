String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};


function changeTextAreasSize() {
	var shift = 3;
	leftTextArea = document.getElementById('left-text-area');
	rightTextArea = document.getElementById('right-text-area');

	leftTextAreaScrollHeight = leftTextArea.scrollHeight;
	rightTextAreaScrollHeight = rightTextArea.scrollHeight;

	newHeight = leftTextAreaScrollHeight;
	if (rightTextAreaScrollHeight > newHeight){
		newHeight = rightTextAreaScrollHeight;
	}
	newHeight += shift;

	leftTextArea.style.height = newHeight + 'px';
	rightTextArea.style.height = newHeight + 'px';
};

var oldVal = "";
function processText(force_update=false) {
	var currentVal = $("#left-text-area").val();
	if(!force_update && currentVal == oldVal) {
	    return; //check to prevent multiple simultaneous triggers
	}	

	oldVal = currentVal;
	switch (currentOperation) {
		case 'encode':
			transformedText = encode(currentVal);
			break;
		case 'decode':
			transformedText = decode(currentVal);
			break;
	};

	$("#right-text-area").text(transformedText);
	changeTextAreasSize();
};


$("#left-text-area").on("change keyup paste", processText);


currentOperation = 'encode';
$("#decode-button").on("click", function() {
	$(this).addClass('active');
	$("#encode-button").removeClass('active');
	currentOperation = 'decode';
	processText(true);
});

$("#encode-button").on("click", function() {
	$(this).addClass('active');
	$("#decode-button").removeClass('active');
	currentOperation = 'encode';
	processText(true);
});
