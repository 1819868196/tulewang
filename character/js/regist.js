$(function(){
	$("#regFrm").validate({
		rules: {
			txtNo: {
				required: true,
				rangelength: [6,12]
			},
			txtPwd: {
				required: true,
				rangelength: [6,12]
			},
			txtConfirmPwd: {
				required: true,
				rangelength: [6,12],
				equalTo: txtPwd
			},
			txtName: {
				required: true,
				rangelength: [2,6]
			},
			txtId: {
				required: true,
				isIdCardNo: true
			},
			txtPhone: {
				required: true,
				isTelCode: true
			},
			textfield: {
				required: true
			}
		},
		messages: {
			txtNo: {
				required: "用户账号是必填项",
				rangelength: "用户账号的字符长度为6~12位"
			},
			txtPwd: {
				required: "密码是必填项",
				rangelength: "密码的字符长度为6~12位"
			},
			txtConfirmPwd: {
				required: "确认密码是必填项",
				rangelength: "密码的字符长度为6~12位",
				equalTo: "两次密码输入不一致"
			},
			txtName: {
				required: "用户名是必填项",
				rangelength: "密码的字符长度为2~6位"
			},
			txtId: {
				required: "身份证号码是必填项",
			},
			txtPhone: {
				required: "手机号码是必填项"
			},
			textfield: {
				required: "验证码是必填项"
			}
		}
	});
	
	jQuery.validator.addMethod("isIdCardNo",function(value,element){
		return this.optional(element) || isIdCardNo(value);
	},"身份证由15位或者18位数字组成");
	
	jQuery.validator.addMethod("isTelCode",function(value,element){
		var tel = /^1[3|5|8]\d{9}$/;
		return this.optional(element) || (tel.test(value));
	},"手机号码一13、15或18开始，由11位数字组成");
	
	function isIdCardNo(num){
		var factorArr = new Array(7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2,1);
		var parityBit = new Array("1","0","x","9","8","7","6","5","4","3","2");
		var varArray = new Array();
		var inValue;
		var lngProduct = 0;
		var intCheckDigit;
		var intStrLen = num.length;
		var idNumber = num;
		
		if((intStrLen != 15) && (intStrLen != 18)){
			return false;
		}
		for (var i = 0; i < intStrLen; i++) {
			varArray[i] = idNumber.charAt(i);
			if((varArray[i] < '0' || varArray[i] > '9') && (i != 17)){
				return false;
			}else if(i <17){
				varArray[i] = varArray[i] * factorArr[i];
			}
		}
		if(intStrLen == 18){
			var date8 = idNumber.substring(6,14);
			if(isDate8(date8) == false){
				return false;
			}
			for (var i = 0; i < 17; i++) {
				lngProduct = lngProduct + varArray[i];
			}
			intCheckDigit = parityBit[lngProduct % 11];
			if(varArray[17] != intCheckDigit){
				return false;
			}
		}else{
			var date6 = idNumber.substring(6,12);
			if(isDate6(date6) == false){
				return false;
			}
		}
		return true;
	}
	
	$('#button1').click(function(){
		console.log('2');
	})
	
	$('#button').click(function(){
		console.log('1');
	});

});