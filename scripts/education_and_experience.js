var educationBranchText = "education";
var experienceBranchText = "experience";
var gameJamBranchText = "game jam";
var igsBranchText = "igs";
var maxonBranchText = "maxon";
var sigonoBranchText = "sigono";
var aktskBranchText = "aktsk";

var bsText = "逢甲大學電機系 (2000-2004)";
var msText = "逢甲大學資工所 (2004-2006)";
var igsText1 = "鈊象電子 (軟體工程師: 200802-201103)";
var igsText2 = "鈊象電子 (資深軟體工程師: 201103-201402)";
var igsText3 = "鈊象電子 (軟體主任: 201403-201405)";
var maxonText = "麥成文創 (軟體架構師: 201405-201511)";
var sigonoText = "信革數位 (資深工程師: 201601-201808)";
var aktskText = "曉數碼 (資深工程師: 201810-)";

var sdkProjText = "GameTower SDK";
var mjProjText = "明星三缺一 Win8 (WP)";
var vegaProjText = "織女星寵 (Android)";
var galileeProjText = "加利利旅遊 (Android/iOS)";
var ichibanProjText = "百萬智多星 (Android/iOS)";
var beyondProjText = "地球計畫 (Android/iOS/Steam/Switch/MacOS)";
var heavenProjText = "靈魂之橋 (Android/iOS/Steam/Switch/MacOS)";
var bonbonProjText = "ONE PIECE BON！BON！JOURNEY！！ (Android/iOS)";
var dokkanProjText = "DRAGON BALL Z DOKKAN BATTLE (Android/iOS)";

var igsQuitText = "201402"
var maxonQuitText = "201511"
var sigonoQuitText = "201808"
var aktskQuitText = ""

var gameJam2016Text = "The Magnificently Unholy Quest of the Mighty Sword of Sweet Blessings";
var gameJam2017Text = "Life Journey";
var gameJam2020Text = "Brain Repair";
var aktskHackthon2020Text = "Aktsk Hackthon";

var gitgraph = new GitGraph({
  template: "metro",
  orientation: "vertical",
  mode: "compact"
});

var educationBranch = gitgraph.branch({name: educationBranchText, column: 1 });
educationBranch.commit( bsText ).commit( msText );
var experienceBranch = educationBranch.branch( {name: experienceBranchText, column: 3 } );

experienceBranch.commit( igsText1 );
var igsJobBranch = experienceBranch.branch( {name: igsBranchText, column: 4 } );
igsJobBranch.commit( sdkProjText )
igsJobBranch.commit( mjProjText );
experienceBranch.commit( igsText2 );
experienceBranch.commit( igsText3 );
igsJobBranch.merge( experienceBranch, igsQuitText );

experienceBranch.commit( maxonText );
var maxonJobBranch = experienceBranch.branch( {name: maxonBranchText, column: 5 } );
maxonJobBranch.commit( vegaProjText );
maxonJobBranch.commit( galileeProjText );
maxonJobBranch.commit( ichibanProjText );
maxonJobBranch.merge( experienceBranch, maxonQuitText );

var gameJamBranch = educationBranch.branch( {name: gameJamBranchText, column: 2 } );
gameJamBranch.commit( gameJam2016Text );

experienceBranch.commit( sigonoText );
var sigonoJobBranch = experienceBranch.branch( {name: sigonoBranchText, column: 6 } );
sigonoJobBranch.commit( beyondProjText );
gameJamBranch.commit( gameJam2017Text );
sigonoJobBranch.commit( heavenProjText );
sigonoJobBranch.merge( experienceBranch, sigonoQuitText );

experienceBranch.commit( aktskText );
var aktskJobBranch = experienceBranch.branch( {name: aktskBranchText, column: 7 } );
aktskJobBranch.commit( bonbonProjText );
gameJamBranch.commit( gameJam2020Text );
gameJamBranch.commit( aktskHackthon2020Text );
aktskJobBranch.commit( dokkanProjText );
// aktskJobBranch.merge( experienceBranch, aktskQuitText );

