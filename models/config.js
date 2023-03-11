var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'database-2.cygprm6tqvj5.ap-south-1.rds.amazonaws.com',
  user     : 'dheeraj',
  password : '123456789',
  database : 'library_management_system'
});

module.exports = {
	executeQuery: function(sql, sqlParam, callback){
		if(sqlParam == null)
		{
			connection.query(sql, function(error, result){
				if(error)
				{
					console.log(error);
				}
				callback(result);
			});
		}
		else
		{
			connection.query(sql, sqlParam, function(error, result){
				if(error)
				{
					console.log(error);
				}
				callback(result);
			});
		}
	}
};