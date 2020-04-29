async function run(){
  let firstURL=window.location.href;
let deStr=`<tr class="discussRow ng-scope" ng-click="goToArticle(article)" ng-repeat="article in articleList">
                    <!-- ngIf: !(category == 'notice' && article.isopen == true) && !article.groupNotice --><td class="discussNum ng-binding ng-scope" ng-if="!(category == 'notice' &amp;&amp; article.isopen == true) &amp;&amp; !article.groupNotice">
                        530550
                    </td><!-- end ngIf: !(category == 'notice' && article.isopen == true) && !article.groupNotice -->
                    <!-- ngIf: (category == 'notice' && article.isopen == true) || article.groupNotice -->
                    <td class="discussTitle">
                        <div class="discussTitleWrapper entryEllipsis ng-binding" ng-class="{discussNoticeCategory:article.category == 'notice' &amp;&amp; article.isopen == true}">
                            현인작 사본할게요
                        </div>
                        <!-- ngIf: category == 'report' && global.user.username != article.user.username -->
                        <!-- ngIf: category != 'report' && article.commentsLength -->
                        <!-- ngIf: category != "report" && getTimeInterval(article.created) --><span ng-if="category != &quot;report&quot; &amp;&amp; getTimeInterval(article.created)" class="ng-scope">
                        <span ng-if="category != 'report' &amp;&amp; article.commentsLength" class="ng-binding ng-scope">
                            (243423545)
                        </span>
                            <img src="/img/assets/study/new.png">
                        </span><!-- end ngIf: category != "report" && getTimeInterval(article.created) -->
                    </td>
                    <td class="discussWriter entryEllipsis ng-binding">
                        <!-- ngIf: advisoryList.indexOf(article.owner) !== -1 -->
                        windows12345
                    </td>
                    <td class="discussDate ng-binding">20.04.29</td>
                    <!-- ngIf: category != 'report' --><td class="discussViewCount ng-binding ng-scope" ng-if="category != 'report'">1dsdsdsds</td><!-- end ngIf: category != 'report' -->
                    <!-- ngIf: category != 'report' --><td class="discussLikeCount ng-binding ng-scope" ng-if="category != 'report'">
                        23423423234</td><!-- end ngIf: category != 'report' -->
                    <!-- ngIf: category == 'report' -->
                </tr>`
if(window.location.href.split("/")[3]=="ds#!"){
await setInterval(function() {
  if(window.location.href!=firstURL){return 1;}
  $.get(`https://playentry.org/api/discuss/find?title=${window.location.href.split("=")[1].split("&")[0]}&search_title=${window.location.href.split("=")[1].split("&")[0]}&sort=created&rows=20&page=1&category=${window.location.href.split("/")[4].split("?")[0]}&noCache=1588128370472`,d=>{
    let Str="";
    for(let i=0;i<20;i++){

      if(d.data[i].commentsLength!=0){Str=Str+deStr.replace("530550",d.data[i].number).replace("현인작 사본할게요",d.data[i].title).replace("windows12345",d.data[i].owner).replace("1dsdsdsds",d.data[i].visit).replace("23423423234",d.data[i].likesLength).replace("243423545",d.data[i].commentsLength)}
      else{Str=Str+deStr.replace("530550",d.data[i].number).replace("현인작 사본할게요",d.data[i].title).replace("windows12345",d.data[i].owner).replace("1dsdsdsds",d.data[i].visit).replace("23423423234",d.data[i].likesLength).replace(`(243423545)`,"");}
    }
    $("tbody").html(`<tr class="discussHeadRow">
                      <th width="45" class="discussTag">#</th>
                      <th width="440" class="discussTitle ng-binding">제목</th>
                      <th width="153" class="discussWriter ng-binding">작성자</th>
                      <th width="110" class="discussDateHead ng-binding">등록일</th>
                      <!-- ngIf: category != 'report' --><th width="80" ng-if="category != 'report'" class="discussViewCountHead ng-binding ng-scope">조회수</th><!-- end ngIf: category != 'report' -->
                      <!-- ngIf: category != 'report' --><th width="80" ng-if="category != 'report'" class="discussLikeCountHead ng-binding ng-scope">좋아요</th><!-- end ngIf: category != 'report' -->
                      <!-- ngIf: category=='report' -->
                  </tr>`+Str);
  });
},20);
}
else{
await $.get(`https://playentry.org/api/project/${window.location.href.split("/")[4].split("?")[0]}?like=true&noCache=1588125187198`,d=>{
  let Str=d.description;
  if(Str.indexOf("$.get")!=-1){
    if(Str.indexOf("$.getScript")!=-1){
      let i=0;
      for(i=Str.indexOf("$.getScript");Str.charAt(i)!=")";i++){}
      if(confirm("이 작품에 필요한 스크립트를 로드하시겠습니까?")==1){
        eval(strcut(Str,Str.indexOf("$.getScript"),i));
      }
    }
    else{
      let i=0;
      for(i=Str.indexOf("$.get");Str.charAt(i)!=")";i++){}
      if(confirm("이 작품에 필요한 스크립트를 로드하시겠습니까?")==1){
        eval(strcut(Str,Str.indexOf("$.get"),i));
      }
    }
  }
})
}
return 1;
}
function strcut(index,a,b){
    var returnn="";
    for(var i=a;i<=b;i++){
        returnn=returnn+index.charAt(i);
    }
    return returnn;
}
function isURL(str) {
  var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
  '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|'+ // domain name
  '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
  '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
  '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
  '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
  return pattern.test(str);
}
