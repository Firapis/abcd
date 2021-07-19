function play_se(){
  var 検出=new Audio("検出.mp3");
  検出.play();
  navigator.vibrate([200,100,200,100,200,100,200])
}

$(function(){
  //  ページ読み込みが完了すると実行

//ブラウザバック禁止
history.pushState(null,null,null);
$(window).on("popstate",function(e){
  if(!e.orininalEvent.state){
play_se();
}
});

  //モーダル表示
  $(".modal").modal({dismissible:false});
  $("#alert").modal("open");
  $("#close").click(function(){
    $("#alert").modal("close");
    play_se();
  });

//端末情報取得

var device=navigator.userAgent.match(/Android|iPhone|iPad/);
if (device==null){
   device="端末";
}
$("#device").text(device);

  var time=200;
  setInterval(function(){
    time--;
      $("#timer").text(time);
  },1000);
});
