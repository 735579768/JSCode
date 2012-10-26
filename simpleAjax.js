(function (a, b) {
	
	//======================一个简单的ajax对象===============================
	//选择器
	$sel = function (id) {
		return document.getElementById(id)
	}
	
	var ajax = {
		test : function () {
			alert();
		},
		result : null,
		xmlHttp : null,
		//创建xmlHttp对象
		createXMLHttpRequest : function () {
			if (window.ActiveXObject) {
				return new ActiveXObject("Microsoft.XMLHTTP");
			} else if (window.XMLHttpRequest) {
				return new XMLHttpRequest();
			}
		},
		/*发送请求
		@param re_mod请求的方法
		@param re_file请求的文件
		@param re_param请求的参数，用，号分隔开如：（“1，2，3，”）
		@param callfun回调函数  这里最好直接用一个匿名函数来代替如：function(){}
		 */
		startRequest : function (re_mod, re_file, param, callfun) {
			this.xmlHttp = this.createXMLHttpRequest();
			var xmlobj = this; //把本对象赋值给一个变量是为啦兼容ie因为this对象在不同的浏览器中有不同的解释
			xmlobj.xmlHttp.onreadystatechange = function () {
				if (xmlobj.xmlHttp.readyState == 4) {
					xmlobj.result = xmlobj.xmlHttp.responseText
						if (xmlobj.xmlHttp.status == 200 || xmlobj.xmlHttp.status == 500) {
							callfun(xmlobj.result);
						} else {
							alert("ERROE:" + xmlobj.result);
						}
				}
			};
			//把传进来的参数数组给分解下
			var par_arr = param.split(",");
			var str;
			//判断是否有参数传递
			if (param) {
				str = re_file + "?";
				for (i = 0; i <= par_arr.length; i++) {
					if (i == par_arr.length) {
						str += par_arr[i];
					} else {
						str += par_arr[i] + "&";
					}
				}
			} else {
				str = re_file;
			}
			
			xmlobj.xmlHttp.open(re_mod, str, true);
			xmlobj.xmlHttp.send(null);
		}
	};
	a.simpleAjax = ajax;
})(window);
//================
//测试ajax对象
/*发送请求
@param re_mod请求的方法
@param re_file请求的文件
@param re_param请求的参数，用，号分隔开如：（“1，2，3，”）
@param callfun回调函数  这里最好直接用一个匿名函数来代替如：function(){}
 */
simpleAjax.startRequest("GET", "xml.xml", "act=1,act2=2", function (data) {
	alert(data);
});
