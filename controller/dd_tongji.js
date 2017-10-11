var database = require('./database')
var url = require('url');//���ڽ���get��ʽ�������еĲ���

//��ѯ����
exports.selectList = function(req, res) {
  // ����SQL���
  var sql = "SELECT * FROM websites";

  // �������ݿ�
  var connection = database.getConnection();
  connection.query(sql, function(error,results) {
   if (error){
		console.log('[SELECT ERROR] - ' , error.message);
		res.end(JSON.stringify(error.message));
	};
	var jsonString = {status:1 , data:results};
	res.end(JSON.stringify(results));
	});
}

//����ID��ѯ�����
exports.selectById = function(req , res , next) {

	var params = url.parse(req.url , true).query;
	var id = params.id;
	//����SQL���
	var sql = "SELECT * FROM websites WHERE Id = ?";
	var selectSqlParams = new Array();
	selectSqlParams[0] = id;
	//�������ݿ�
	var connection = database.getConnection();
	//console.log(params.id);
	connection.query(sql , selectSqlParams , function(error , results) {
		if(error) {
			console.log('[SELECT ERROR] - ' , error.message);
			res.end(JSON.stringify(error.message));
		}
		var jsonString = {status:1 , data:results};
	 	res.end(JSON.stringify(jsonString));
	});
}

//���һ������
exports.addOne = function(req , res) {
	
	var id = req.body.id;
	var name = req.body.name;
	var url = req.body.url;
	var alexa = req.body.alexa;
	var country = req.body.country;
	//����SQL���
	var sql = "INSERT INTO websites(Id,name,url,alexa,country) VALUES(?,?,?,?,?)";
	var  addSqlParams = new Array();
	addSqlParams[0] = id;
	addSqlParams[1] = name;
	addSqlParams[2] = url;
	addSqlParams[3] = alexa;
	addSqlParams[4] = country;
	//console.log(req.body);
	//�������ݿ�
	var connection = database.getConnection();
	connection.query(sql , addSqlParams , function(error , results) {
		if(error) {
			console.log('[INSERT ERROR] - ' , error.message);
			res.end(JSON.stringify(error.message));
		}
		
		var jsonString = {status:1 , data:results};
		res.end(JSON.stringify(jsonString));
	});
}

//����IDɾ�������
exports.deleteById = function(req , res) {
	
	var id = req.body.id;
	//����SQL���
	var sql = "DELETE FROM websites WHERE ID = ?";
	var deleteSqlParams = new Array();
	deleteSqlParams[0] = id;
	var connection = database.getConnection();
	connection.query(sql , deleteSqlParams , function(error , results) {
		if(error) {
			console.log('[DELETE ERROR] - ' , error.message);
			res.end(JSON.stringify(error.message));
		}
		
		var jsonString = {status:1 , data:results};
		res.end(JSON.stringify(jsonString));
	});
}

//����ID�޸�һ������
exports.updateById = function(req , res) {
	
	var id = req.body.id;
	var name = req.body.name;
	var url = req.body.url;
	var alexa = req.body.alexa;
	var country = req.body.country;
	//����SQL���
	var sql = "update websites SET name = ?,url = ?,alexa = ?,country = ? WHERE Id = ?";
	var  updateSqlParams = new Array();
	updateSqlParams[0] = name;
	updateSqlParams[1] = url;
	updateSqlParams[2] = alexa;
	updateSqlParams[3] = country;
	updateSqlParams[4] = id;
    console.log(req.body);
	//�������ݿ�
	var connection = database.getConnection();
	connection.query(sql , updateSqlParams , function(error , results) {
		if(error) {
			console.log('[UPDATE ERROR] - ' , error.message);
			res.end(JSON.stringify(error.message));
		}
		
		var jsonString = {status:1 , data:results};
		res.end(JSON.stringify(jsonString));
	});
}



