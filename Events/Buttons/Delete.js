const k=s,{EmbedBuilder:v,ActionRowBuilder:D,ButtonBuilder:E,ButtonStyle:S,PermissionFlagsBits:e}=(!function(){for(var e=s,t=r();;)try{if(372117==+parseInt(e(352))+parseInt(e(348))/2*(parseInt(e(320))/3)+parseInt(e(442))/4*(parseInt(e(344))/5)+parseInt(e(436))/6*(-parseInt(e(399))/7)+-parseInt(e(338))/8*(parseInt(e(327))/9)+-parseInt(e(440))/10*(parseInt(e(425))/11)+parseInt(e(318))/12*(parseInt(e(355))/13))break;t.push(t.shift())}catch(e){t.push(t.shift())}}(),require(k(398))),g=require(k(429)),C=require("fs"),t=require(k(393)),B=require(k(441)),b=require("discord-ht"+k(325)+k(414))["generateFromMessages"],Z=require(k(388)+"er"),H=t[k(350)](C[k(418)+"nc"]("./Config/Embeds.yaml",k(375))),R=t[k(350)](C[k(418)+"nc"](k(406)+"uttons.yaml",k(375))),j=t.load(C[k(418)+"nc"]("./Config/R"+k(404)+"l",k(375))),i={GREEN:S[k(362)],RED:S[k(377)],BLUE:S[k(382)],GREY:S[k(339)]};function r(){const e=["eteTicket","from","35rHaXXO","VKlnU","TranscrRea","Image","778tzcQXj","filter","load","HYAFZ","124542QaEtZv","DownloadTr","Setup_Tick","1287aPNkUX","string","sort","guild","EOnline","TicketInfo","name","Success","slice","DeleteTick","addCompone","Unclaimed","setAuthor","setEmoji","Replies","Claimed","vLrMZ","existsSync","setStyle","Jtakf","utf-8","startsWith","Danger","KZEOz","Color","send","messages","Primary","estamp","setColor","SNo","ts/","OYjLk","../../serv","customId","error","values","createdTim","js-yaml","exports","last","channels","nCreate","discord.js","28oPDjrs","NNo","Ticket dat","concat","tton style","eplies.yam","writeFileS","./Config/B","r-Team]","Fields2","delete","tTdHk",".html","get","ChannelID","ipts","setCustomI","AyIZt","yVsTa","readFileSy","ButtosE","teTicket","a not foun","<@!","NYes","../../Tran","3374085SYKWvJ","https://i.","ConfirmDel","Title","pro.db","setURL","anscript_","TicketDele","QxWPG","et_","reply","288138DvKvtS","ButtosStyl","HSOHT","replace","10KbOKyd","path","80048TwBmRU","setImage","CancelDele","Invalid bu","cache","ButtosN","104988HHoQTh","NDownload","3261CfZPjZ","imgur.com/","Confirmati","NOnline","fetch","ml-transcr","setTitle","9YaJKbY","4 & [DevXo","setLabel","mkdirSync","chaTranscr","GoKib","message","closed-","size","iconURL","Fields1","5461408dHSHix","Secondary","/transcrip","channel"];return(r=function(){return e})()}function F(e){var t=k,n=i[e];if(n)return n;throw new Error(t(315)+t(403)+": "+e)}function s(e,t){const n=r();return(s=function(e,t){return e-=315,n[e]})(e,t)}module[k(394)]={name:"interactio"+k(397),execute:async function(n,i){const r=k,s={KZEOz:function(e,t){return e===t},QxWPG:r(364)+"et",ZwxVv:r(427)+r(342),VKlnU:function(e,t){return e(t)},AyIZt:r(444)+r(420),GoKib:function(e,t){return e(t)},HYAFZ:function(e,t){return e===t},tTdHk:function(e,t){return e!==t},PWcOk:function(e,t,n,i){return e(t,n,i)},Jtakf:r(356),vLrMZ:r(424)+"scripts",OYjLk:r(366),HSOHT:function(e,t){return e(t)},yVsTa:r(353)+"anscript_"};try{if(i.isButton())if(s[r(378)](i[r(389)],s[r(433)])){var e=(new D)[r(365)+"nts"]((new E)[r(329)](R[r(317)][r(423)])[r(415)+"d"](s.ZwxVv)[r(373)](s[r(345)](F,R[r(437)+"e"].SYes))[r(368)](R.ButtosE.EYes),(new E)[r(329)](R[r(317)][r(400)]).setCustomId(s[r(416)])[r(373)](s[r(332)](F,R[r(437)+"e"][r(385)])).setEmoji(R[r(419)].ENo));await i[r(435)]({content:j[r(369)][r(322)+"onMessageD"],components:[e]})}else if(s[r(351)](i[r(389)],s[r(416)]))await i[r(333)][r(409)]();else if(i[r(389)]===s.ZwxVv){const T=i[r(341)],w=g[r(412)](r(354)+r(434)+i[r(358)].id),I=g[r(412)](r(360)+"_"+i[r(358)].id),h=I.find(e=>e.ChannelID===T.id);if(h){let e=[],t;for(;;){var a=await T[r(381)][r(324)]({limit:100,before:t});if(e=e[r(402)](Array[r(343)](a[r(391)]())),t=a[r(395)]()?.id,s[r(410)](a[r(335)],100))break}e[r(357)]((e,t)=>e[r(392)+r(383)]-t[r(392)+r(383)]);var o=await s.PWcOk(b,e,T,{returnType:s[r(374)]}),c=B.join(__dirname,s[r(371)]),l=(C[r(372)](c)||C[r(330)](c),T[r(361)][r(363)](-4)),u=r(334)+l+r(411),d=B.join(c,u),m=(C[r(405)+"ync"](d,o),(new v)[r(326)](H[r(432)+"te"][r(428)])[r(367)]({name:i[r(358)][r(361)],iconURL:i[r(358)][r(336)]()}).setFields({name:H[r(432)+"te"][r(337)],value:r(422)+h.UserID+">",inline:!0},{name:H.TicketDelete[r(408)],value:h[r(370)]?r(422)+h.Claimed+">":s[r(387)],inline:!0},{name:H[r(432)+"te"].Fields3,value:""+T.id,inline:!0},{name:H.TicketDelete.Fields4,value:l,inline:!0})[r(384)](H[r(432)+"te"][r(379)])[r(443)](H[r(432)+"te"][r(347)]).setFooter({text:"© Copyright by Sohaib 2022-202"+r(328)+r(407),iconURL:r(426)+r(321)+"ed2JeXN.png"}).setTimestamp()),f=(new D)[r(365)+"nts"]((new E)[r(329)](R[r(317)][r(319)])[r(373)](s[r(438)](F,R.ButtosStyle.SDownload))[r(415)+"d"](r(353)+r(431)+u)[r(368)](R[r(419)].EDownload),(new E)[r(329)](R[r(317)][r(323)])[r(373)](S.Link)[r(430)](Z+(r(340)+r(386))+u)[r(368)](R.ButtosE[r(359)])),p=n[r(396)][r(316)][r(412)](w[r(331)+"ipt"]);p&&(await p[r(380)]({embeds:[m],components:[f]}),await i[r(435)]({content:j[r(369)].TicketDelete})),setTimeout(async()=>{const t=r;await T[t(409)](),g.set(t(360)+"_"+i[t(358)].id,I[t(349)](e=>e[t(413)]!==T.id))},5e3)}else await i[r(435)]({content:r(401)+r(421)+"d.",ephemeral:!0})}else{var t,y;i[r(389)][r(376)](s[r(417)])&&(t=i.customId[r(439)]("DownloadTranscript_",""),y=B.join(__dirname,s[r(371)],t),await i.reply({content:j.Replies[r(346)+"dy"],files:[y],ephemeral:!0}))}}catch(e){console[r(390)](e)}}};