window.opener=null;window.open('','_self','');window.close();

//几个验证的js方法
//验证是否为合法的手机号码
String.prototype.isMobile = function () {
  return /^(?:13\d|15[89])-?\d{5}(\d{3}|\*{3})$/.test(this.trim());
};

//验证是否为合法的电话号码或传真
String.prototype.isPhone = function () {
	return /^(([0\+]\d{2,3}-)?(0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$/.test(this.trim());
};

//验证是否为合法的Email
String.prototype.isEmail = function () {
	return /^[a-zA-Z0-9_\-]{1,}@[a-zA-Z0-9_\-]{1,}\.[a-zA-Z0-9_\-.]{1,}$/.test(this.trim());
};

//验证是否为合法的邮编
String.prototype.isPost = function () {
	return /^\d{6}$/.test(this.trim());
};

//验证是否为合法的网址
String.prototype.isUrl = function () {
	var strRegex = "^((https|http|ftp|rtsp|mms)://)"
		 + "(([0-9a-z_!~*’().&=+$%-]+: )?[0-9a-z_!~*’().&=+$%-]+@)?" //验证ftp的user@
		 + "(([0-9]{1,3}\.){3}[0-9]{1,3}" // 验证IP形式的URL
		 + "|" // 允许IP和DOMAIN（域名）
		 + "([0-9a-z_!~*’()-]+\.)*" // 域名- www.
		 + "([0-9a-z][0-9a-z-]{0,61})?[0-9a-z]\." // 二级域名
		 + "[a-z]{2,6})" // 一级域名
		 + "(:[0-9]{1,4})?" // 端口
		var re = new RegExp(strRegex);
	return re.test(this.trim());
};
//去掉字符串的空格
String.prototype.trim = function () {
	return this.replace(/(^\s*)|(\s*$)/g, "");
};

String.prototype.lTrim = function () {
	return this.replace(/(^\s*)/g, "");
};

String.prototype.rTrim = function () {
	return this.replace(/(\s*$)/g, "");
};

//操作表单元素的几个js方法
//删除下拉框选项
function removeAllOptions(obj) {
	for (var k = obj.length - 1; k > 0; k--) {
		obj.remove(k);
	}
}

//添加下拉框选项
//其中data是action传过来的TreeMap值
function appendAllOptions(obj, data) {
	removeAllOptions(obj);
	//	data = data.substr(1, data.length - 2);
	var arg = data.split(",");
	for (var i = 0; i < arg.length; i++) {
		var val = arg[i].split("=");
		obj.add(new Option(val[1], val[0]));
	}
}

//通过已选中checkbox的id获取当前行第n列的值，并组合成字符串返回
function getTDText(chkId, n) {
	var temp = "";
	var ids = chkId.split(",");
	for (var i = 0; i < ids.length; i++) {
		var tr = $(ids[i]).parentElement.parentElement;
		if (temp == "") {
			temp = tr.cells[n].innerText.trim();
		} else {
			temp += "," + tr.cells[n].innerText.trim();
		}
	}
	return temp;
}

//获取一组radio选中项的值
function getRadioValue(name) {
	var obj = document.getElementsByName(name);
	if (obj != null) {
		for (i = 0; i < obj.length; i++) {
			if (obj[i].checked) {
				return obj[i].value;
			}
		}
	}
	return null;
}

//全选或取消全选
function chkAll(ele) {
	var objArray = document.getElementsByName("chk");
	for (var i = 0; i < objArray.length; i++) {
		objArray[i].checked = ele.checked;
	}
}

//获取选中的ID
function getChkVal() {
	var ids = "";
	var objArray = document.getElementsByName("chk");
	for (var i = 0; i < objArray.length; i++) {
		if (objArray[i].checked) {
			if (ids == "") {
				ids = objArray[i].id;
			} else {
				ids += "," + objArray[i].id;
			}
		}
	}
	return ids;
}
