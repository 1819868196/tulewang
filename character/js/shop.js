$(() => {
	// 	$('#ck').click(function() {
	// 		$('input[name="item"]').prop('checked', this.checked);
	// 		calcountandprice();
	// 	});
	// 
	// 	$('input[name="item"]').click(function() {
	// 		if (!this.checked) {
	// 			$('#ck').prop('checked', false);
	// 		} else {
	// 			if ($('input[name="item"]').length === $('input[name="item"]:checked').length) {
	// 				$('#ck').prop('checked', true);
	// 			} else {
	// 				$('#ck').prop('checked', false);
	// 			}
	// 		}
	// 		calcountandprice();
	// 	});
	// 	var deleteObject;
	var that;
	document.querySelector("#ck").onclick = function() {
		that = this;
		document.querySelectorAll("input[name='item']").forEach(function(item) {
			item.checked = that.checked;
			 calcountandprice() ;
		});
	}
	document.querySelectorAll("input[name='item']").forEach(function(item) {
		item.onclick = function() {
			if (!this.checked) {
				document.querySelector("#ck").checked = false;
			} else {
				var flag = true;
				document.querySelectorAll("input[name='item']").forEach(function(item) {
					if (!item.checked) {
						flag = false;
						document.querySelector("#ck").checked = false;
						return;
					}
				});
				if (flag) {
					document.querySelector("#ck").checked = true;
				}
			}
			 calcountandprice() ;
		}
	});

	document.querySelectorAll(".btnAdd").forEach(function(item) {
		item.onclick = function() {
			var _input = this.previousElementSibling;
			_input.value = parseInt(_input.value) + 1;
			 calcountandprice() ;
		}
	});

	document.querySelectorAll(".btnMinus").forEach(function(item) {
		item.onclick = function() {
			var _input = this.nextElementSibling;
			var _i = parseInt(_input.value) - 1;
			if (_i <= 1) {
				_i = 1;
			}
			_input.value = _i;
			 calcountandprice() ;
		}
	});

$('li.cz').click(function() {
	showMask();
	showDialog();
	$('div.dialog').show();
	deleteObject = $(this).parent();
});

$('#closePic,#btnCancel').click(function() {
	$('div.dialog').hide();
	$('div.mask').hide();
});

$('#btnSure').click(function() {
	$('div.dialog').hide();
	$('div.mask').hide();
	deleteObject.remove();
	calcountandprice();
});

$('#btnDelMul').click(function() {
	if ($('input[name="item"]:checked').length === 0) {
		alert('至少要选择一行');
		return;
	} else {
		var flag = window.confirm('确定删除吗?');
		if (flag) {
			$('input[name="item"]:checked').each(function(index, item) {
				$(item).parent().parent().remove();
			});
		}
	}
	calcountandprice();
});

$('img').mouseover(function(e) {
	$('img#imgTip').attr('src', $(this).attr('src')).css({
		top: e.pageY + 10 + 'px',
		left: e.pageX + 5 + 'px',
		display: 'block'
	});
}).mouseout(function() {
	$('img#imgTip').hide();
}); calcountandprice();

// //加按钮
// $('.btnAdd').click(function() {
// 	var _input = this.previousElementSibling;
// 	_input.value = parseInt(_input.value) + 1;
// 	calcountandprice();
// });
// //减按钮
// $('.btnMinus').click(function() {
// 	var _input = this.nextElementSibling;
// 	var _i = parseInt(_input.value) - 1;
// 	if (_i <= 1) {
// 		_i = 1;
// 	}
// 	_input.value = _i;
// 	calcountandprice();
// });
// 

});

function showMask() {
	var $body = $('body');
	$('div.mask').css({
		width: $body.width() + 'px',
		height: $body.height() + 'px',
		display: 'block'
	});
}

function showDialog() {
	var $window = $(window);
	var $dialog = $('div.dialog');
	$dialog.css({
		left: ($window.width() - $dialog.width()) / 2 + 'px',
		top: ($window.height() - $dialog.height()) / 2 + 'px'
	});
}

function calcountandprice() {
	var $input = $('input[name="item"]');
	var $count = $('input.txt');
	var $li = $('li.rs');
	var count = 0;
	var total = 0.0;
	for (var i = 0; i < $input.length; i++) {
		if ($input[i].checked) {
			count += parseInt($count[i].value);
			total += parseFloat($li[i + 1].innerHTML.substring(1)) * parseInt($count[i].value);

		}
	}

	$('#spanItemCount').html(count);
	$('#sp').html(total.toFixed(1));
}

function picLight() {
	var settings = {
		containerResizeSpeed: 350,
		overlayOpacity: 0.5
	};
	$('#luxian a[title]').lightBox(settings);
}
picLight()
