var Sequelize = require('sequelize');
var sequelize = require('../mysql');

//定义表的模型
var Message = sequelize.define('message', {
    id:{ //自增长id,主键,整形
        type:Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement:true
    },
    username: { //谁留的言
        type: Sequelize.STRING(30)
    },
    content: { //留言的内容
        type: Sequelize.TEXT
    }
});
Message.sync(); //创建表

module.exports = Message;