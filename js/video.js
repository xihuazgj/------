
    function init(){
    window.a=["周杰伦","《东风破》" ,"周杰伦","《回到过去》","周杰伦","《你听得到》","周杰伦","《黑色毛衣》","周杰伦","《简单爱》","周杰伦","《世界末日》","周杰伦","《一路向北》","周杰伦","《暗号》","周杰伦","《爷爷泡的茶》"];
    window.late=document.getElementById("d");		//创建一个全		局变量late用于保存上次播放的电影
    window.late_1=document.getElementById("d");		//创建一个全局变量late_1用于保存上次悬浮的div
    for(window.i=1 ; i<10 ; i++){			//window.变量名：定义全局变量
    var video=document.createElement("video");		//创建一个电影并复制src
    video.src="../video/"+i+".mp4";
    d();
    shipin(video);
    text(window.a[i-1]);
}
}

    function d(){
    window.div=document.createElement("div");		//创建电影栏目div用于保存一个电影信息
    div.setAttribute("id",i);					//setAttribute() ：方法添加指定的属性，并为其赋指定的值。
    document.getElementById("selector").appendChild(div);
    var video = document.querySelector('video');
    video.setAttribute('poster', '../image/index1.gif');

    window.div.onmouseover=function(){			//鼠标悬浮事件
    if(this!=window.late)			//避免鼠标移到正在播放的电影栏目		上时也改变背景色
    this.style.backgroundColor="cadetblue";
    window.late_1=this;
}
    window.div.onmouseleave=function(){			//鼠标离开事件
    if(window.late!=window.late_1)	//避免在离开正在播放的电影栏目时也会恢复其背景色
    window.late_1.style.backgroundColor="transparent";
}
}

    function shipin(video){

    // window.div.appendChild(videoElement);
    window.div.appendChild(video);
    window.div.onclick=function(){				//电影栏目的		onclick事件
    document.getElementById("video").src=video.src;
    window.late.style.backgroundColor="transparent";		//将前一个电影背景色恢复
    this.style.backgroundColor="#808080";					//将当前选中的电影背景色改变
    document.getElementById("name").innerHTML=a[this.id*2-1]; //动态改变视频名称
    document.getElementById("author").innerHTML=a[this.id*2-2];	//动态改变视频作者
    window.late=this;						//更新late变量
}
}

    function text(map){
    var div2=document.createElement("div");				//电影的说明文字
    div2.innerHTML=window.a[i*2-1];			//a数组每两个元素存放一个视频的信息（作者、视频名），所以这里同i*2-1即可找到视频名(i从1开始，下标从0开始)
    window.div.appendChild(div2);
}
