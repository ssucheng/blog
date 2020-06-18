function serializeJson(form){
    // 定义一个空对象  存储循环出来的键值对
    var result = {};
    // serializeArray 方法返回一个表单提交内容的数组
   form.serializeArray().forEach(function(item){
        result[item.name] = item.value;
    });
    return result;
 }