var mongoose=require("mongoose");
var Schema = mongoose.Schema;
// 直接链接到  库
// 页面的数据库
var conn1 = mongoose.createConnection("mongodb://127.0.0.1:27017/index");
//用书的数据库
var conn2 = mongoose.createConnection("mongodb://127.0.0.1:27017/d_user");
// mongoose.connect(链接url,fn(err))
// 1.链接数据库,连不上报错



//2.制作数据模板
 var indexSchema=new mongoose.Schema({
 	// 定义一个骨架  字段:类型
 	img1:String,
 	img2:String,
 	img3:Array,
 	img4:Array
     
 	


 });
 var userSchema=new mongoose.Schema({
 	// 定义一个骨架  字段:类型
 	uname:String,
 	upass:String


 });


// 3.生成模板
 var indexModel = conn1.model('d_datas',indexSchema);
 var userModel=conn2.model("d_datas",userSchema);

 // console.log(userModel);

module.exports={
	indexModel:indexModel,
	userModel:userModel
};





