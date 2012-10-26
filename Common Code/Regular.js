//������֤��js����
//��֤�Ƿ�Ϊ�Ϸ����ֻ�����
String.prototype.isMobile = function () {
  return /^(?:13\d|15[89])-?\d{5}(\d{3}|\*{3})$/.test(this.trim());
};

//��֤�Ƿ�Ϊ�Ϸ��ĵ绰�������
String.prototype.isPhone = function () {
	return /^(([0\+]\d{2,3}-)?(0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$/.test(this.trim());
};

//��֤�Ƿ�Ϊ�Ϸ���Email
String.prototype.isEmail = function () {
	return /^[a-zA-Z0-9_\-]{1,}@[a-zA-Z0-9_\-]{1,}\.[a-zA-Z0-9_\-.]{1,}$/.test(this.trim());
};

//��֤�Ƿ�Ϊ�Ϸ����ʱ�
String.prototype.isPost = function () {
	return /^\d{6}$/.test(this.trim());
};

//��֤�Ƿ�Ϊ�Ϸ�����ַ
String.prototype.isUrl = function () {
	var strRegex = "^((https|http|ftp|rtsp|mms)://)"
		 + "(([0-9a-z_!~*��().&=+$%-]+: )?[0-9a-z_!~*��().&=+$%-]+@)?" //��֤ftp��user@
		 + "(([0-9]{1,3}\.){3}[0-9]{1,3}" // ��֤IP��ʽ��URL
		 + "|" // ����IP��DOMAIN��������
		 + "([0-9a-z_!~*��()-]+\.)*" // ����- www.
		 + "([0-9a-z][0-9a-z-]{0,61})?[0-9a-z]\." // ��������
		 + "[a-z]{2,6})" // һ������
		 + "(:[0-9]{1,4})?" // �˿�
		var re = new RegExp(strRegex);
	return re.test(this.trim());
};
//ȥ���ַ����Ŀո�
String.prototype.trim = function () {
	return this.replace(/(^\s*)|(\s*$)/g, "");
};

String.prototype.lTrim = function () {
	return this.replace(/(^\s*)/g, "");
};

String.prototype.rTrim = function () {
	return this.replace(/(\s*$)/g, "");
};