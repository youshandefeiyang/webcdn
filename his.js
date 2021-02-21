function hisonclick(){ 
	   layer.open({
	   title: '<i class="layui-icon layui-icon-tips"> 温馨提示</i>',
	   content: `<div style="color:red">用户名和密码请关注电报频道：<a href="https://t.me/yunspeedtest" style="color:blue;text-decoration:none;font-size:20px">机场 ☁️ 测速</a>后查看第一条置顶消息获取！</div>`
	   ,btn: ['确定']
	   ,yes: function(){
	     window.location.href= "http://yunspeedtest.cc/results"
	   }
	   ,cancel: function(){ 
	     window.location.href= "http://yunspeedtest.cc/results"
	   }
	 });
     }