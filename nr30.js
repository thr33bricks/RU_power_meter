//Jquery
try {
	eval(function (p, a, c, k, e, r) {
		e = function (c) {
			return (c < a ? '' : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36));
		};
		if (!''.replace(/^/, String)) {
			while (c--) r[e(c)] = k[c] || e(c);
			k = [function (e) {
				return r[e];
			}];
			e = function () {
				return '\\w+';
			};
			c = 1;
		}
		while (c--)
			if (k[c]) p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]);
		return p;
	}('(G(){9(1n E!="11")H w=E;H E=17.16=G(a,c){9(17==6||!6.4K)I 1q E(a,c);I 6.4K(a,c)};9(1n $!="11")H D=$;17.$=E;H u=/^[^<]*(<(.|\\s)+>)[^>]*$|^#(\\w+)$/;E.1b=E.3x={4K:G(a,c){a=a||U;9(1n a=="1M"){H m=u.2L(a);9(m&&(m[1]||!c)){9(m[1])a=E.4I([m[1]],c);J{H b=U.42(m[3]);9(b)9(b.1T!=m[3])I E().1X(a);J{6[0]=b;6.L=1;I 6}J a=[]}}J I 1q E(c).1X(a)}J 9(E.1p(a))I 1q E(U)[E.1b.2d?"2d":"37"](a);I 6.6u(a.1d==1C&&a||(a.4d||a.L&&a!=17&&!a.1z&&a[0]!=11&&a[0].1z)&&E.2h(a)||[a])},4d:"1.2",82:G(){I 6.L},L:0,28:G(a){I a==11?E.2h(6):6[a]},2v:G(a){H b=E(a);b.4Y=6;I b},6u:G(a){6.L=0;1C.3x.1a.15(6,a);I 6},O:G(a,b){I E.O(6,a,b)},4J:G(a){H b=-1;6.O(G(i){9(6==a)b=i});I b},1y:G(f,d,e){H c=f;9(f.1d==3T)9(d==11)I 6.L&&E[e||"1y"](6[0],f)||11;J{c={};c[f]=d}I 6.O(G(a){M(H b 1j c)E.1y(e?6.R:6,b,E.1c(6,c[b],e,a,b))})},18:G(b,a){I 6.1y(b,a,"3O")},2t:G(e){9(1n e!="5w"&&e!=S)I 6.4o().3e(U.6F(e));H t="";E.O(e||6,G(){E.O(6.2X,G(){9(6.1z!=8)t+=6.1z!=1?6.6x:E.1b.2t([6])})});I t},5l:G(b){9(6[0])E(b,6[0].3N).6t().38(6[0]).1W(G(){H a=6;1Y(a.1t)a=a.1t;I a}).3e(6);I 6},8p:G(a){I 6.O(G(){E(6).6p().5l(a)})},8h:G(a){I 6.O(G(){E(6).5l(a)})},3e:G(){I 6.3s(1k,Q,1,G(a){6.57(a)})},6k:G(){I 6.3s(1k,Q,-1,G(a){6.38(a,6.1t)})},6g:G(){I 6.3s(1k,P,1,G(a){6.14.38(a,6)})},53:G(){I 6.3s(1k,P,-1,G(a){6.14.38(a,6.2i)})},1B:G(){I 6.4Y||E([])},1X:G(t){H b=E.1W(6,G(a){I E.1X(t,a)});I 6.2v(/[^+>] [^+>]/.12(t)||t.1e("..")>-1?E.4V(b):b)},6t:G(e){H f=6.1W(G(){I 6.66?E(6.66)[0]:6.4S(Q)});9(e===Q){H d=f.1X("*").4Q();6.1X("*").4Q().O(G(i){H c=E.K(6,"2A");M(H a 1j c)M(H b 1j c[a])E.1h.1f(d[i],a,c[a][b],c[a][b].K)})}I f},1A:G(t){I 6.2v(E.1p(t)&&E.2T(6,G(b,a){I t.15(b,[a])})||E.3G(t,6))},5T:G(t){I 6.2v(t.1d==3T&&E.3G(t,6,Q)||E.2T(6,G(a){I(t.1d==1C||t.4d)?E.2S(a,t)<0:a!=t}))},1f:G(t){I 6.2v(E.1S(6.28(),t.1d==3T?E(t).28():t.L!=11&&(!t.Y||t.Y=="7t")?t:[t]))},3j:G(a){I a?E.3G(a,6).L>0:P},7g:G(a){I 6.3j("."+a)},2V:G(b){9(b==11){9(6.L){H c=6[0];9(E.Y(c,"24")){H e=c.4z,a=[],W=c.W,2P=c.N=="24-2P";9(e<0)I S;M(H i=2P?e:0,2Y=2P?e+1:W.L;i<2Y;i++){H d=W[i];9(d.29){H b=E.V.1g&&!d.70["1N"].9U?d.2t:d.1N;9(2P)I b;a.1a(b)}}I a}J I 6[0].1N.1o(/\\r/g,"")}}J I 6.O(G(){9(b.1d==1C&&/4s|5u/.12(6.N))6.2K=(E.2S(6.1N,b)>=0||E.2S(6.2J,b)>=0);J 9(E.Y(6,"24")){H a=b.1d==1C?b:[b];E("9m",6).O(G(){6.29=(E.2S(6.1N,a)>=0||E.2S(6.2t,a)>=0)});9(!a.L)6.4z=-1}J 6.1N=b})},4n:G(a){I a==11?(6.L?6[0].3D:S):6.4o().3e(a)},6H:G(a){I 6.53(a).2e()},2s:G(){I 6.2v(1C.3x.2s.15(6,1k))},1W:G(b){I 6.2v(E.1W(6,G(a,i){I b.3c(a,i,a)}))},4Q:G(){I 6.1f(6.4Y)},3s:G(f,d,g,e){H c=6.L>1,a;I 6.O(G(){9(!a){a=E.4I(f,6.3N);9(g<0)a.91()}H b=6;9(d&&E.Y(6,"1F")&&E.Y(a[0],"4k"))b=6.4q("1J")[0]||6.57(U.5r("1J"));E.O(a,G(){9(E.Y(6,"1P")){9(6.3g)E.3w({1u:6.3g,3h:P,1Z:"1P"});J E.5h(6.2t||6.6s||6.3D||"")}J e.15(b,[c?6.4S(Q):6])})})}};E.1i=E.1b.1i=G(){H c=1k[0]||{},a=1,2g=1k.L,5e=P;9(c.1d==8v){5e=c;c=1k[1]||{}}9(2g==1){c=6;a=0}H b;M(;a<2g;a++)9((b=1k[a])!=S)M(H i 1j b){9(c==b[i])6r;9(5e&&1n b[i]==\'5w\'&&c[i])E.1i(c[i],b[i]);J 9(b[i]!=11)c[i]=b[i]}I c};H F="16"+(1q 3v()).3u(),6q=0,5d={};E.1i({8k:G(a){17.$=D;9(a)17.16=w;I E},1p:G(a){I!!a&&1n a!="1M"&&!a.Y&&a.1d!=1C&&/G/i.12(a+"")},4a:G(a){I a.35&&!a.1K||a.34&&a.3N&&!a.3N.1K},5h:G(a){a=E.33(a);9(a){9(17.6o)17.6o(a);J 9(E.V.1H)17.58(a,0);J 3p.3c(17,a)}},Y:G(b,a){I b.Y&&b.Y.26()==a.26()},1I:{},K:G(c,d,b){c=c==17?5d:c;H a=c[F];9(!a)a=c[F]=++6q;9(d&&!E.1I[a])E.1I[a]={};9(b!=11)E.1I[a][d]=b;I d?E.1I[a][d]:a},30:G(c,b){c=c==17?5d:c;H a=c[F];9(b){9(E.1I[a]){2G E.1I[a][b];b="";M(b 1j E.1I[a])22;9(!b)E.30(c)}}J{2c{2G c[F]}27(e){9(c.54)c.54(F)}2G E.1I[a]}},O:G(a,b,c){9(c){9(a.L==11)M(H i 1j a)b.15(a[i],c);J M(H i=0,45=a.L;i<45;i++)9(b.15(a[i],c)===P)22}J{9(a.L==11)M(H i 1j a)b.3c(a[i],i,a[i]);J M(H i=0,45=a.L,2V=a[0];i<45&&b.3c(2V,i,2V)!==P;2V=a[++i]){}}I a},1c:G(c,b,d,e,a){9(E.1p(b))b=b.3c(c,[e]);H f=/z-?4J|7T-?7S|1v|69|7Q-?1G/i;I b&&b.1d==4X&&d=="3O"&&!f.12(a)?b+"2I":b},1m:{1f:G(b,c){E.O((c||"").2p(/\\s+/),G(i,a){9(!E.1m.3t(b.1m,a))b.1m+=(b.1m?" ":"")+a})},2e:G(b,c){b.1m=c!=11?E.2T(b.1m.2p(/\\s+/),G(a){I!E.1m.3t(c,a)}).65(" "):""},3t:G(t,c){I E.2S(c,(t.1m||t).3z().2p(/\\s+/))>-1}},2q:G(e,o,f){M(H i 1j o){e.R["3C"+i]=e.R[i];e.R[i]=o[i]}f.15(e,[]);M(H i 1j o)e.R[i]=e.R["3C"+i]},18:G(e,p){9(p=="1G"||p=="2E"){H b={},3Z,3Y,d=["7L","7K","7J","7G"];E.O(d,G(){b["7F"+6]=0;b["7D"+6+"61"]=0});E.2q(e,b,G(){9(E(e).3j(\':3X\')){3Z=e.7A;3Y=e.7z}J{e=E(e.4S(Q)).1X(":4s").5X("2K").1B().18({4v:"1O",2W:"4D",19:"2U",7w:"0",1R:"0"}).5P(e.14)[0];H a=E.18(e.14,"2W")||"3V";9(a=="3V")e.14.R.2W="7k";3Z=e.7h;3Y=e.7f;9(a=="3V")e.14.R.2W="3V";e.14.3k(e)}});I p=="1G"?3Z:3Y}I E.3O(e,p)},3O:G(h,j,i){H g,2u=[],2q=[];G 3l(a){9(!E.V.1H)I P;H b=U.3M.3P(a,S);I!b||b.4y("3l")==""}9(j=="1v"&&E.V.1g){g=E.1y(h.R,"1v");I g==""?"1":g}9(j.1U(/4r/i))j=y;9(!i&&h.R[j])g=h.R[j];J 9(U.3M&&U.3M.3P){9(j.1U(/4r/i))j="4r";j=j.1o(/([A-Z])/g,"-$1").2F();H d=U.3M.3P(h,S);9(d&&!3l(h))g=d.4y(j);J{M(H a=h;a&&3l(a);a=a.14)2u.4Z(a);M(a=0;a<2u.L;a++)9(3l(2u[a])){2q[a]=2u[a].R.19;2u[a].R.19="2U"}g=j=="19"&&2q[2u.L-1]!=S?"2j":U.3M.3P(h,S).4y(j)||"";M(a=0;a<2q.L;a++)9(2q[a]!=S)2u[a].R.19=2q[a]}9(j=="1v"&&g=="")g="1"}J 9(h.43){H f=j.1o(/\\-(\\w)/g,G(m,c){I c.26()});g=h.43[j]||h.43[f];9(!/^\\d+(2I)?$/i.12(g)&&/^\\d/.12(g)){H k=h.R.1R;H e=h.4t.1R;h.4t.1R=h.43.1R;h.R.1R=g||0;g=h.R.74+"2I";h.R.1R=k;h.4t.1R=e}}I g},4I:G(a,e){H r=[];e=e||U;E.O(a,G(i,d){9(!d)I;9(d.1d==4X)d=d.3z();9(1n d=="1M"){d=d.1o(/(<(\\w+)[^>]*?)\\/>/g,G(m,a,b){I b.1U(/^(71|6Z|5D|6Y|49|9S|9P|3f|9K|9I)$/i)?m:a+"></"+b+">"});H s=E.33(d).2F(),1r=e.5r("1r"),2x=[];H c=!s.1e("<9D")&&[1,"<24>","</24>"]||!s.1e("<9A")&&[1,"<6S>","</6S>"]||s.1U(/^<(9x|1J|9u|9t|9s)/)&&[1,"<1F>","</1F>"]||!s.1e("<4k")&&[2,"<1F><1J>","</1J></1F>"]||(!s.1e("<9r")||!s.1e("<9q"))&&[3,"<1F><1J><4k>","</4k></1J></1F>"]||!s.1e("<5D")&&[2,"<1F><1J></1J><6L>","</6L></1F>"]||E.V.1g&&[1,"1r<1r>","</1r>"]||[0,"",""];1r.3D=c[1]+d+c[2];1Y(c[0]--)1r=1r.5k;9(E.V.1g){9(!s.1e("<1F")&&s.1e("<1J")<0)2x=1r.1t&&1r.1t.2X;J 9(c[1]=="<1F>"&&s.1e("<1J")<0)2x=1r.2X;M(H n=2x.L-1;n>=0;--n)9(E.Y(2x[n],"1J")&&!2x[n].2X.L)2x[n].14.3k(2x[n]);9(/^\\s/.12(d))1r.38(e.6F(d.1U(/^\\s*/)[0]),1r.1t)}d=E.2h(1r.2X)}9(0===d.L&&(!E.Y(d,"3B")&&!E.Y(d,"24")))I;9(d[0]==11||E.Y(d,"3B")||d.W)r.1a(d);J r=E.1S(r,d)});I r},1y:G(c,d,a){H e=E.4a(c)?{}:E.5o;9(d=="29"&&E.V.1H)c.14.4z;9(e[d]){9(a!=11)c[e[d]]=a;I c[e[d]]}J 9(E.V.1g&&d=="R")I E.1y(c.R,"9g",a);J 9(a==11&&E.V.1g&&E.Y(c,"3B")&&(d=="9e"||d=="9d"))I c.9b(d).6x;J 9(c.34){9(a!=11){9(d=="N"&&E.Y(c,"49")&&c.14)6E"N 96 94\'t 93 92";c.90(d,a)}9(E.V.1g&&/6B|3g/.12(d)&&!E.4a(c))I c.4l(d,2);I c.4l(d)}J{9(d=="1v"&&E.V.1g){9(a!=11){c.69=1;c.1A=(c.1A||"").1o(/6A\\([^)]*\\)/,"")+(3K(a).3z()=="8V"?"":"6A(1v="+a*6z+")")}I c.1A?(3K(c.1A.1U(/1v=([^)]*)/)[1])/6z).3z():""}d=d.1o(/-([a-z])/8T,G(z,b){I b.26()});9(a!=11)c[d]=a;I c[d]}},33:G(t){I(t||"").1o(/^\\s+|\\s+$/g,"")},2h:G(a){H r=[];9(1n a!="8Q")M(H i=0,2g=a.L;i<2g;i++)r.1a(a[i]);J r=a.2s(0);I r},2S:G(b,a){M(H i=0,2g=a.L;i<2g;i++)9(a[i]==b)I i;I-1},1S:G(a,b){9(E.V.1g){M(H i=0;b[i];i++)9(b[i].1z!=8)a.1a(b[i])}J M(H i=0;b[i];i++)a.1a(b[i]);I a},4V:G(b){H r=[],2f={};2c{M(H i=0,6P=b.L;i<6P;i++){H a=E.K(b[i]);9(!2f[a]){2f[a]=Q;r.1a(b[i])}}}27(e){r=b}I r},2T:G(b,a,c){9(1n a=="1M")a=3p("P||G(a,i){I "+a+"}");H d=[];M(H i=0,4m=b.L;i<4m;i++)9(!c&&a(b[i],i)||c&&!a(b[i],i))d.1a(b[i]);I d},1W:G(c,b){9(1n b=="1M")b=3p("P||G(a){I "+b+"}");H d=[];M(H i=0,4m=c.L;i<4m;i++){H a=b(c[i],i);9(a!==S&&a!=11){9(a.1d!=1C)a=[a];d=d.8O(a)}}I d}});H v=8M.8K.2F();E.V={4f:(v.1U(/.+(?:8I|8H|8F|8E)[\\/: ]([\\d.]+)/)||[])[1],1H:/6T/.12(v),3a:/3a/.12(v),1g:/1g/.12(v)&&!/3a/.12(v),39:/39/.12(v)&&!/(8B|6T)/.12(v)};H y=E.V.1g?"4h":"5g";E.1i({5f:!E.V.1g||U.8A=="8z",4h:E.V.1g?"4h":"5g",5o:{"M":"8y","8x":"1m","4r":y,5g:y,4h:y,3D:"3D",1m:"1m",1N:"1N",36:"36",2K:"2K",8w:"8u",29:"29",8t:"8s"}});E.O({1D:"a.14",8r:"16.4e(a,\'14\')",8q:"16.2R(a,2,\'2i\')",8o:"16.2R(a,2,\'4c\')",8n:"16.4e(a,\'2i\')",8m:"16.4e(a,\'4c\')",8l:"16.5c(a.14.1t,a)",8j:"16.5c(a.1t)",6p:"16.Y(a,\'8i\')?a.8f||a.8e.U:16.2h(a.2X)"},G(i,n){E.1b[i]=G(a){H b=E.1W(6,n);9(a&&1n a=="1M")b=E.3G(a,b);I 6.2v(E.4V(b))}});E.O({5P:"3e",8d:"6k",38:"6g",8c:"53",8b:"6H"},G(i,n){E.1b[i]=G(){H a=1k;I 6.O(G(){M(H j=0,2g=a.L;j<2g;j++)E(a[j])[n](6)})}});E.O({5X:G(a){E.1y(6,a,"");6.54(a)},8a:G(c){E.1m.1f(6,c)},89:G(c){E.1m.2e(6,c)},88:G(c){E.1m[E.1m.3t(6,c)?"2e":"1f"](6,c)},2e:G(a){9(!a||E.1A(a,[6]).r.L){E.30(6);6.14.3k(6)}},4o:G(){E("*",6).O(G(){E.30(6)});1Y(6.1t)6.3k(6.1t)}},G(i,n){E.1b[i]=G(){I 6.O(n,1k)}});E.O(["87","61"],G(i,a){H n=a.2F();E.1b[n]=G(h){I 6[0]==17?E.V.1H&&3r["86"+a]||E.5f&&32.2Y(U.35["59"+a],U.1K["59"+a])||U.1K["59"+a]:6[0]==U?32.2Y(U.1K["6n"+a],U.1K["6m"+a]):h==11?(6.L?E.18(6[0],n):S):6.18(n,h.1d==3T?h:h+"2I")}});H C=E.V.1H&&3q(E.V.4f)<85?"(?:[\\\\w*56-]|\\\\\\\\.)":"(?:[\\\\w\\84-\\83*56-]|\\\\\\\\.)",6j=1q 47("^>\\\\s*("+C+"+)"),6i=1q 47("^("+C+"+)(#)("+C+"+)"),6h=1q 47("^([#.]?)("+C+"*)");E.1i({55:{"":"m[2]==\'*\'||16.Y(a,m[2])","#":"a.4l(\'1T\')==m[2]",":":{81:"i<m[3]-0",7Z:"i>m[3]-0",2R:"m[3]-0==i",7Y:"m[3]-0==i",3o:"i==0",3n:"i==r.L-1",6f:"i%2==0",6d:"i%2","3o-46":"a.14.4q(\'*\')[0]==a","3n-46":"16.2R(a.14.5k,1,\'4c\')==a","7X-46":"!16.2R(a.14.5k,2,\'4c\')",1D:"a.1t",4o:"!a.1t",7W:"(a.6s||a.7V||\'\').1e(m[3])>=0",3X:\'"1O"!=a.N&&16.18(a,"19")!="2j"&&16.18(a,"4v")!="1O"\',1O:\'"1O"==a.N||16.18(a,"19")=="2j"||16.18(a,"4v")=="1O"\',7U:"!a.36",36:"a.36",2K:"a.2K",29:"a.29||16.1y(a,\'29\')",2t:"\'2t\'==a.N",4s:"\'4s\'==a.N",5u:"\'5u\'==a.N",52:"\'52\'==a.N",51:"\'51\'==a.N",50:"\'50\'==a.N",6c:"\'6c\'==a.N",6b:"\'6b\'==a.N",2y:\'"2y"==a.N||16.Y(a,"2y")\',49:"/49|24|6a|2y/i.12(a.Y)",3t:"16.1X(m[3],a).L",7R:"/h\\\\d/i.12(a.Y)",7P:"16.2T(16.2Z,G(1b){I a==1b.T;}).L"}},68:[/^(\\[) *@?([\\w-]+) *([!*$^~=]*) *(\'?"?)(.*?)\\4 *\\]/,/^(:)([\\w-]+)\\("?\'?(.*?(\\(.*?\\))?[^(]*?)"?\'?\\)/,1q 47("^([:.#]*)("+C+"+)")],3G:G(a,c,b){H d,2b=[];1Y(a&&a!=d){d=a;H f=E.1A(a,c,b);a=f.t.1o(/^\\s*,\\s*/,"");2b=b?c=f.r:E.1S(2b,f.r)}I 2b},1X:G(t,o){9(1n t!="1M")I[t];9(o&&!o.1z)o=S;o=o||U;H d=[o],2f=[],3n;1Y(t&&3n!=t){H r=[];3n=t;t=E.33(t);H l=P;H g=6j;H m=g.2L(t);9(m){H p=m[1].26();M(H i=0;d[i];i++)M(H c=d[i].1t;c;c=c.2i)9(c.1z==1&&(p=="*"||c.Y.26()==p.26()))r.1a(c);d=r;t=t.1o(g,"");9(t.1e(" ")==0)6r;l=Q}J{g=/^([>+~])\\s*(\\w*)/i;9((m=g.2L(t))!=S){r=[];H p=m[2],1S={};m=m[1];M(H j=0,31=d.L;j<31;j++){H n=m=="~"||m=="+"?d[j].2i:d[j].1t;M(;n;n=n.2i)9(n.1z==1){H h=E.K(n);9(m=="~"&&1S[h])22;9(!p||n.Y.26()==p.26()){9(m=="~")1S[h]=Q;r.1a(n)}9(m=="+")22}}d=r;t=E.33(t.1o(g,""));l=Q}}9(t&&!l){9(!t.1e(",")){9(o==d[0])d.44();2f=E.1S(2f,d);r=d=[o];t=" "+t.67(1,t.L)}J{H k=6i;H m=k.2L(t);9(m){m=[0,m[2],m[3],m[1]]}J{k=6h;m=k.2L(t)}m[2]=m[2].1o(/\\\\/g,"");H f=d[d.L-1];9(m[1]=="#"&&f&&f.42&&!E.4a(f)){H q=f.42(m[2]);9((E.V.1g||E.V.3a)&&q&&1n q.1T=="1M"&&q.1T!=m[2])q=E(\'[@1T="\'+m[2]+\'"]\',f)[0];d=r=q&&(!m[3]||E.Y(q,m[3]))?[q]:[]}J{M(H i=0;d[i];i++){H a=m[1]=="#"&&m[3]?m[3]:m[1]!=""||m[0]==""?"*":m[2];9(a=="*"&&d[i].Y.2F()=="5w")a="3f";r=E.1S(r,d[i].4q(a))}9(m[1]==".")r=E.4W(r,m[2]);9(m[1]=="#"){H e=[];M(H i=0;r[i];i++)9(r[i].4l("1T")==m[2]){e=[r[i]];22}r=e}d=r}t=t.1o(k,"")}}9(t){H b=E.1A(t,r);d=r=b.r;t=E.33(b.t)}}9(t)d=[];9(d&&o==d[0])d.44();2f=E.1S(2f,d);I 2f},4W:G(r,m,a){m=" "+m+" ";H c=[];M(H i=0;r[i];i++){H b=(" "+r[i].1m+" ").1e(m)>=0;9(!a&&b||a&&!b)c.1a(r[i])}I c},1A:G(t,r,h){H d;1Y(t&&t!=d){d=t;H p=E.68,m;M(H i=0;p[i];i++){m=p[i].2L(t);9(m){t=t.7O(m[0].L);m[2]=m[2].1o(/\\\\/g,"");22}}9(!m)22;9(m[1]==":"&&m[2]=="5T")r=E.1A(m[3],r,Q).r;J 9(m[1]==".")r=E.4W(r,m[2],h);J 9(m[1]=="["){H g=[],N=m[3];M(H i=0,31=r.L;i<31;i++){H a=r[i],z=a[E.5o[m[2]]||m[2]];9(z==S||/6B|3g|29/.12(m[2]))z=E.1y(a,m[2])||\'\';9((N==""&&!!z||N=="="&&z==m[5]||N=="!="&&z!=m[5]||N=="^="&&z&&!z.1e(m[5])||N=="$="&&z.67(z.L-m[5].L)==m[5]||(N=="*="||N=="~=")&&z.1e(m[5])>=0)^h)g.1a(a)}r=g}J 9(m[1]==":"&&m[2]=="2R-46"){H e={},g=[],12=/(\\d*)n\\+?(\\d*)/.2L(m[3]=="6f"&&"2n"||m[3]=="6d"&&"2n+1"||!/\\D/.12(m[3])&&"n+"+m[3]||m[3]),3o=(12[1]||1)-0,d=12[2]-0;M(H i=0,31=r.L;i<31;i++){H j=r[i],14=j.14,1T=E.K(14);9(!e[1T]){H c=1;M(H n=14.1t;n;n=n.2i)9(n.1z==1)n.4U=c++;e[1T]=Q}H b=P;9(3o==1){9(d==0||j.4U==d)b=Q}J 9((j.4U+d)%3o==0)b=Q;9(b^h)g.1a(j)}r=g}J{H f=E.55[m[1]];9(1n f!="1M")f=E.55[m[1]][m[2]];f=3p("P||G(a,i){I "+f+"}");r=E.2T(r,f,h)}}I{r:r,t:t}},4e:G(b,c){H d=[];H a=b[c];1Y(a&&a!=U){9(a.1z==1)d.1a(a);a=a[c]}I d},2R:G(a,e,c,b){e=e||1;H d=0;M(;a;a=a[c])9(a.1z==1&&++d==e)22;I a},5c:G(n,a){H r=[];M(;n;n=n.2i){9(n.1z==1&&(!a||n!=a))r.1a(n)}I r}});E.1h={1f:G(g,e,c,h){9(E.V.1g&&g.41!=11)g=17;9(!c.2r)c.2r=6.2r++;9(h!=11){H d=c;c=G(){I d.15(6,1k)};c.K=h;c.2r=d.2r}H i=e.2p(".");e=i[0];c.N=i[1];H b=E.K(g,"2A")||E.K(g,"2A",{});H f=E.K(g,"2m",G(){H a;9(1n E=="11"||E.1h.4T)I a;a=E.1h.2m.15(g,1k);I a});H j=b[e];9(!j){j=b[e]={};9(g.4R)g.4R(e,f,P);J g.7N("40"+e,f)}j[c.2r]=c;6.23[e]=Q},2r:1,23:{},2e:G(d,c,b){H e=E.K(d,"2A"),2O,4J;9(1n c=="1M"){H a=c.2p(".");c=a[0]}9(e){9(c&&c.N){b=c.4P;c=c.N}9(!c){M(c 1j e)6.2e(d,c)}J 9(e[c]){9(b)2G e[c][b.2r];J M(b 1j e[c])9(!a[1]||e[c][b].N==a[1])2G e[c][b];M(2O 1j e[c])22;9(!2O){9(d.4O)d.4O(c,E.K(d,"2m"),P);J d.7M("40"+c,E.K(d,"2m"));2O=S;2G e[c]}}M(2O 1j e)22;9(!2O){E.30(d,"2A");E.30(d,"2m")}}},1L:G(d,b,e,c,f){b=E.2h(b||[]);9(!e){9(6.23[d])E("*").1f([17,U]).1L(d,b)}J{H a,2O,1b=E.1p(e[d]||S),4N=!b[0]||!b[0].2B;9(4N)b.4Z(6.4M({N:d,2o:e}));9(E.1p(E.K(e,"2m")))a=E.K(e,"2m").15(e,b);9(!1b&&e["40"+d]&&e["40"+d].15(e,b)===P)a=P;9(4N)b.44();9(f&&f.15(e,b)===P)a=P;9(1b&&c!==P&&a!==P&&!(E.Y(e,\'a\')&&d=="4L")){6.4T=Q;e[d]()}6.4T=P}I a},2m:G(d){H a;d=E.1h.4M(d||17.1h||{});H b=d.N.2p(".");d.N=b[0];H c=E.K(6,"2A")&&E.K(6,"2A")[d.N],3m=1C.3x.2s.3c(1k,1);3m.4Z(d);M(H j 1j c){3m[0].4P=c[j];3m[0].K=c[j].K;9(!b[1]||c[j].N==b[1]){H e=c[j].15(6,3m);9(a!==P)a=e;9(e===P){d.2B();d.3L()}}}9(E.V.1g)d.2o=d.2B=d.3L=d.4P=d.K=S;I a},4M:G(c){H a=c;c=E.1i({},a);c.2B=G(){9(a.2B)a.2B();a.7I=P};c.3L=G(){9(a.3L)a.3L();a.7H=Q};9(!c.2o&&c.64)c.2o=c.64;9(E.V.1H&&c.2o.1z==3)c.2o=a.2o.14;9(!c.4H&&c.4G)c.4H=c.4G==c.2o?c.7E:c.4G;9(c.63==S&&c.62!=S){H e=U.35,b=U.1K;c.63=c.62+(e&&e.2D||b.2D||0);c.7C=c.7B+(e&&e.2z||b.2z||0)}9(!c.3R&&(c.60||c.5Z))c.3R=c.60||c.5Z;9(!c.5Y&&c.5W)c.5Y=c.5W;9(!c.3R&&c.2y)c.3R=(c.2y&1?1:(c.2y&2?3:(c.2y&4?2:0)));I c}};E.1b.1i({3Q:G(c,a,b){I c=="5V"?6.2P(c,a,b):6.O(G(){E.1h.1f(6,c,b||a,b&&a)})},2P:G(d,b,c){I 6.O(G(){E.1h.1f(6,d,G(a){E(6).5U(a);I(c||b).15(6,1k)},c&&b)})},5U:G(a,b){I 6.O(G(){E.1h.2e(6,a,b)})},1L:G(c,a,b){I 6.O(G(){E.1h.1L(c,a,6,Q,b)})},7y:G(c,a,b){9(6[0])I E.1h.1L(c,a,6[0],P,b)},25:G(){H a=1k;I 6.4L(G(e){6.4E=0==6.4E?1:0;e.2B();I a[6.4E].15(6,[e])||P})},7x:G(f,g){G 4x(e){H p=e.4H;1Y(p&&p!=6)2c{p=p.14}27(e){p=6};9(p==6)I P;I(e.N=="4w"?f:g).15(6,[e])}I 6.4w(4x).5S(4x)},2d:G(f){5R();9(E.3W)f.15(U,[E]);J E.3i.1a(G(){I f.15(6,[E])});I 6}});E.1i({3W:P,3i:[],2d:G(){9(!E.3W){E.3W=Q;9(E.3i){E.O(E.3i,G(){6.15(U)});E.3i=S}9(E.V.39||E.V.3a)U.4O("5Q",E.2d,P);9(!17.7v.L)E(17).37(G(){E("#4C").2e()})}}});E.O(("7u,7o,37,7n,6n,5V,4L,7m,"+"7l,7j,7i,4w,5S,7p,24,"+"50,7q,7r,7s,3U").2p(","),G(i,o){E.1b[o]=G(f){I f?6.3Q(o,f):6.1L(o)}});H x=P;G 5R(){9(x)I;x=Q;9(E.V.39||E.V.3a)U.4R("5Q",E.2d,P);J 9(E.V.1g){U.7e("<7d"+"7c 1T=4C 7b=Q "+"3g=//:><\\/1P>");H a=U.42("4C");9(a)a.5O=G(){9(6.2C!="1l")I;E.2d()};a=S}J 9(E.V.1H)E.4B=41(G(){9(U.2C=="5N"||U.2C=="1l"){4A(E.4B);E.4B=S;E.2d()}},10);E.1h.1f(17,"37",E.2d)}E.1b.1i({37:G(g,d,c){9(E.1p(g))I 6.3Q("37",g);H e=g.1e(" ");9(e>=0){H i=g.2s(e,g.L);g=g.2s(0,e)}c=c||G(){};H f="4F";9(d)9(E.1p(d)){c=d;d=S}J{d=E.3f(d);f="5M"}H h=6;E.3w({1u:g,N:f,K:d,1l:G(a,b){9(b=="1E"||b=="5L")h.4n(i?E("<1r/>").3e(a.4p.1o(/<1P(.|\\s)*?\\/1P>/g,"")).1X(i):a.4p);58(G(){h.O(c,[a.4p,b,a])},13)}});I 6},7a:G(){I E.3f(6.5K())},5K:G(){I 6.1W(G(){I E.Y(6,"3B")?E.2h(6.79):6}).1A(G(){I 6.2J&&!6.36&&(6.2K||/24|6a/i.12(6.Y)||/2t|1O|51/i.12(6.N))}).1W(G(i,c){H b=E(6).2V();I b==S?S:b.1d==1C?E.1W(b,G(i,a){I{2J:c.2J,1N:a}}):{2J:c.2J,1N:b}}).28()}});E.O("5J,5I,5H,6e,5G,5F".2p(","),G(i,o){E.1b[o]=G(f){I 6.3Q(o,f)}});H B=(1q 3v).3u();E.1i({28:G(d,b,a,c){9(E.1p(b)){a=b;b=S}I E.3w({N:"4F",1u:d,K:b,1E:a,1Z:c})},78:G(b,a){I E.28(b,S,a,"1P")},77:G(c,b,a){I E.28(c,b,a,"3S")},76:G(d,b,a,c){9(E.1p(b)){a=b;b={}}I E.3w({N:"5M",1u:d,K:b,1E:a,1Z:c})},80:G(a){E.1i(E.4u,a)},4u:{23:Q,N:"4F",2H:0,5E:"75/x-73-3B-72",6l:Q,3h:Q,K:S},4b:{},3w:G(s){H f,48=/=(\\?|%3F)/g,1s,K;s=E.1i(Q,s,E.1i(Q,{},E.4u,s));9(s.K&&s.6l&&1n s.K!="1M")s.K=E.3f(s.K);H q=s.1u.1e("?");9(q>-1){s.K=(s.K?s.K+"&":"")+s.1u.2s(q+1);s.1u=s.1u.2s(0,q)}9(s.1Z=="5b"){9(!s.K||!s.K.1U(48))s.K=(s.K?s.K+"&":"")+(s.5b||"6X")+"=?";s.1Z="3S"}9(s.1Z=="3S"&&s.K&&s.K.1U(48)){f="5b"+B++;s.K=s.K.1o(48,"="+f);s.1Z="1P";17[f]=G(a){K=a;1E();17[f]=11;2c{2G 17[f]}27(e){}}}9(s.1Z=="1P"&&s.1I==S)s.1I=P;9(s.1I===P&&s.N.2F()=="28")s.K=(s.K?s.K+"&":"")+"56="+(1q 3v()).3u();9(s.K&&s.N.2F()=="28"){s.1u+="?"+s.K;s.K=S}9(s.23&&!E.5a++)E.1h.1L("5J");9(!s.1u.1e("6W")&&s.1Z=="1P"){H h=U.4q("8g")[0];H g=U.5r("1P");g.3g=s.1u;9(!f&&(s.1E||s.1l)){H j=P;g.9Q=g.5O=G(){9(!j&&(!6.2C||6.2C=="5N"||6.2C=="1l")){j=Q;1E();1l();h.3k(g)}}}h.57(g);I}H k=P;H i=17.6V?1q 6V("9O.9N"):1q 6U();i.9M(s.N,s.1u,s.3h);9(s.K)i.5B("9J-9H",s.5E);9(s.5A)i.5B("9G-5z-9F",E.4b[s.1u]||"9E, 9C 9B 9z 5v:5v:5v 9y");i.5B("X-9w-9v","6U");9(s.6R)s.6R(i);9(s.23)E.1h.1L("5F",[i,s]);H c=G(a){9(!k&&i&&(i.2C==4||a=="2H")){k=Q;9(d){4A(d);d=S}1s=a=="2H"&&"2H"||!E.6Q(i)&&"3U"||s.5A&&E.6O(i,s.1u)&&"5L"||"1E";9(1s=="1E"){2c{K=E.6N(i,s.1Z)}27(e){1s="5t"}}9(1s=="1E"){H b;2c{b=i.5i("6M-5z")}27(e){}9(s.5A&&b)E.4b[s.1u]=b;9(!f)1E()}J E.5s(s,i,1s);1l();9(s.3h)i=S}};9(s.3h){H d=41(c,13);9(s.2H>0)58(G(){9(i){i.9p();9(!k)c("2H")}},s.2H)}2c{i.9n(s.K)}27(e){E.5s(s,i,S,e)}9(!s.3h)c();I i;G 1E(){9(s.1E)s.1E(K,1s);9(s.23)E.1h.1L("5G",[i,s])}G 1l(){9(s.1l)s.1l(i,1s);9(s.23)E.1h.1L("5H",[i,s]);9(s.23&&!--E.5a)E.1h.1L("5I")}},5s:G(s,a,b,e){9(s.3U)s.3U(a,b,e);9(s.23)E.1h.1L("6e",[a,s,e])},5a:0,6Q:G(r){2c{I!r.1s&&9l.9k=="52:"||(r.1s>=6K&&r.1s<9j)||r.1s==6J||E.V.1H&&r.1s==11}27(e){}I P},6O:G(a,c){2c{H b=a.5i("6M-5z");I a.1s==6J||b==E.4b[c]||E.V.1H&&a.1s==11}27(e){}I P},6N:G(r,b){H c=r.5i("9i-N");H d=b=="6y"||!b&&c&&c.1e("6y")>=0;H a=d?r.9h:r.4p;9(d&&a.35.34=="5t")6E"5t";9(b=="1P")E.5h(a);9(b=="3S")a=3p("("+a+")");I a},3f:G(a){H s=[];9(a.1d==1C||a.4d)E.O(a,G(){s.1a(3b(6.2J)+"="+3b(6.1N))});J M(H j 1j a)9(a[j]&&a[j].1d==1C)E.O(a[j],G(){s.1a(3b(j)+"="+3b(6))});J s.1a(3b(j)+"="+3b(a[j]));I s.65("&").1o(/%20/g,"+")}});E.1b.1i({1x:G(b,a){I b?6.1V({1G:"1x",2E:"1x",1v:"1x"},b,a):6.1A(":1O").O(G(){6.R.19=6.3d?6.3d:"";9(E.18(6,"19")=="2j")6.R.19="2U"}).1B()},1w:G(b,a){I b?6.1V({1G:"1w",2E:"1w",1v:"1w"},b,a):6.1A(":3X").O(G(){6.3d=6.3d||E.18(6,"19");9(6.3d=="2j")6.3d="2U";6.R.19="2j"}).1B()},6G:E.1b.25,25:G(a,b){I E.1p(a)&&E.1p(b)?6.6G(a,b):a?6.1V({1G:"25",2E:"25",1v:"25"},a,b):6.O(G(){E(6)[E(6).3j(":1O")?"1x":"1w"]()})},9c:G(b,a){I 6.1V({1G:"1x"},b,a)},9a:G(b,a){I 6.1V({1G:"1w"},b,a)},99:G(b,a){I 6.1V({1G:"25"},b,a)},98:G(b,a){I 6.1V({1v:"1x"},b,a)},97:G(b,a){I 6.1V({1v:"1w"},b,a)},95:G(c,a,b){I 6.1V({1v:a},c,b)},1V:G(j,h,g,f){H i=E.6C(h,g,f);I 6[i.3I===P?"O":"3I"](G(){i=E.1i({},i);H d=E(6).3j(":1O"),3r=6;M(H p 1j j){9(j[p]=="1w"&&d||j[p]=="1x"&&!d)I E.1p(i.1l)&&i.1l.15(6);9(p=="1G"||p=="2E"){i.19=E.18(6,"19");i.2N=6.R.2N}}9(i.2N!=S)6.R.2N="1O";i.3H=E.1i({},j);E.O(j,G(c,a){H e=1q E.2w(3r,i,c);9(/25|1x|1w/.12(a))e[a=="25"?d?"1x":"1w":a](j);J{H b=a.3z().1U(/^([+-]?)([\\d.]+)(.*)$/),1Q=e.2b(Q)||0;9(b){1B=3K(b[2]),2k=b[3]||"2I";9(2k!="2I"){3r.R[c]=1B+2k;1Q=(1B/e.2b(Q))*1Q;3r.R[c]=1Q+2k}9(b[1])1B=((b[1]=="-"?-1:1)*1B)+1Q;e.3J(1Q,1B,2k)}J e.3J(1Q,a,"")}});I Q})},3I:G(a,b){9(!b){b=a;a="2w"}9(!1k.L)I A(6[0],a);I 6.O(G(){9(b.1d==1C)A(6,a,b);J{A(6,a).1a(b);9(A(6,a).L==1)b.15(6)}})},9f:G(){H a=E.2Z;I 6.O(G(){M(H i=0;i<a.L;i++)9(a[i].T==6)a.6D(i--,1)}).5p()}});H A=G(b,c,a){9(!b)I;H q=E.K(b,c+"3I");9(!q||a)q=E.K(b,c+"3I",a?E.2h(a):[]);I q};E.1b.5p=G(a){a=a||"2w";I 6.O(G(){H q=A(6,a);q.44();9(q.L)q[0].15(6)})};E.1i({6C:G(b,a,c){H d=b&&b.1d==8Z?b:{1l:c||!c&&a||E.1p(b)&&b,2a:b,3E:c&&a||a&&a.1d!=8Y&&a};d.2a=(d.2a&&d.2a.1d==4X?d.2a:{8X:8W,8U:6K}[d.2a])||9o;d.3C=d.1l;d.1l=G(){E(6).5p();9(E.1p(d.3C))d.3C.15(6)};I d},3E:{6I:G(p,n,b,a){I b+a*p},5q:G(p,n,b,a){I((-32.8S(p*32.8R)/2)+0.5)*a+b}},2Z:[],2w:G(b,c,a){6.W=c;6.T=b;6.1c=a;9(!c.3A)c.3A={}}});E.2w.3x={4j:G(){9(6.W.2M)6.W.2M.15(6.T,[6.2l,6]);(E.2w.2M[6.1c]||E.2w.2M.6w)(6);9(6.1c=="1G"||6.1c=="2E")6.T.R.19="2U"},2b:G(a){9(6.T[6.1c]!=S&&6.T.R[6.1c]==S)I 6.T[6.1c];H r=3K(E.3O(6.T,6.1c,a));I r&&r>-8P?r:3K(E.18(6.T,6.1c))||0},3J:G(c,b,e){6.5n=(1q 3v()).3u();6.1Q=c;6.1B=b;6.2k=e||6.2k||"2I";6.2l=6.1Q;6.4g=6.4i=0;6.4j();H f=6;G t(){I f.2M()}t.T=6.T;E.2Z.1a(t);9(E.2Z.L==1){H d=41(G(){H a=E.2Z;M(H i=0;i<a.L;i++)9(!a[i]())a.6D(i--,1);9(!a.L)4A(d)},13)}},1x:G(){6.W.3A[6.1c]=E.1y(6.T.R,6.1c);6.W.1x=Q;6.3J(0,6.2b());9(6.1c=="2E"||6.1c=="1G")6.T.R[6.1c]="8N";E(6.T).1x()},1w:G(){6.W.3A[6.1c]=E.1y(6.T.R,6.1c);6.W.1w=Q;6.3J(6.2b(),0)},2M:G(){H t=(1q 3v()).3u();9(t>6.W.2a+6.5n){6.2l=6.1B;6.4g=6.4i=1;6.4j();6.W.3H[6.1c]=Q;H a=Q;M(H i 1j 6.W.3H)9(6.W.3H[i]!==Q)a=P;9(a){9(6.W.19!=S){6.T.R.2N=6.W.2N;6.T.R.19=6.W.19;9(E.18(6.T,"19")=="2j")6.T.R.19="2U"}9(6.W.1w)6.T.R.19="2j";9(6.W.1w||6.W.1x)M(H p 1j 6.W.3H)E.1y(6.T.R,p,6.W.3A[p])}9(a&&E.1p(6.W.1l))6.W.1l.15(6.T);I P}J{H n=t-6.5n;6.4i=n/6.W.2a;6.4g=E.3E[6.W.3E||(E.3E.5q?"5q":"6I")](6.4i,n,0,1,6.W.2a);6.2l=6.1Q+((6.1B-6.1Q)*6.4g);6.4j()}I Q}};E.2w.2M={2D:G(a){a.T.2D=a.2l},2z:G(a){a.T.2z=a.2l},1v:G(a){E.1y(a.T.R,"1v",a.2l)},6w:G(a){a.T.R[a.1c]=a.2l+a.2k}};E.1b.6m=G(){H c=0,3y=0,T=6[0],5m;9(T)8L(E.V){H b=E.18(T,"2W")=="4D",1D=T.14,21=T.21,2Q=T.3N,5y=1H&&!b&&3q(4f)<8J;9(T.6v){5x=T.6v();1f(5x.1R+32.2Y(2Q.35.2D,2Q.1K.2D),5x.3y+32.2Y(2Q.35.2z,2Q.1K.2z));9(1g){H d=E("4n").18("9L");d=(d=="8G"||E.5f&&3q(4f)>=7)&&2||d;1f(-d,-d)}}J{1f(T.5j,T.5C);1Y(21){1f(21.5j,21.5C);9(39&&/^t[d|h]$/i.12(1D.34)||!5y)d(21);9(5y&&!b&&E.18(21,"2W")=="4D")b=Q;21=21.21}1Y(1D.34&&/^1K|4n$/i.12(1D.34)){9(/^8D|1F-9R.*$/i.12(E.18(1D,"19")))1f(-1D.2D,-1D.2z);9(39&&E.18(1D,"2N")!="3X")d(1D);1D=1D.14}9(1H&&b)1f(-2Q.1K.5j,-2Q.1K.5C)}5m={3y:3y,1R:c}}I 5m;G d(a){1f(E.18(a,"8C"),E.18(a,"9T"))}G 1f(l,t){c+=3q(l)||0;3y+=3q(t)||0}}})();', 62, 615, '||||||this|||if|||||||||||||||||||||||||||||||||function|var|return|else|data|length|for|type|each|false|true|style|null|elem|document|browser|options||nodeName|||undefined|test||parentNode|apply|jQuery|window|css|display|push|fn|prop|constructor|indexOf|add|msie|event|extend|in|arguments|complete|className|typeof|replace|isFunction|new|div|status|firstChild|url|opacity|hide|show|attr|nodeType|filter|end|Array|parent|success|table|height|safari|cache|tbody|body|trigger|string|value|hidden|script|start|left|merge|id|match|animate|map|find|while|dataType||offsetParent|break|global|select|toggle|toUpperCase|catch|get|selected|duration|cur|try|ready|remove|done|al|makeArray|nextSibling|none|unit|now|handle||target|split|swap|guid|slice|text|stack|pushStack|fx|tb|button|scrollTop|events|preventDefault|readyState|scrollLeft|width|toLowerCase|delete|timeout|px|name|checked|exec|step|overflow|ret|one|doc|nth|inArray|grep|block|val|position|childNodes|max|timers|removeData|rl|Math|trim|tagName|documentElement|disabled|load|insertBefore|mozilla|opera|encodeURIComponent|call|oldblock|append|param|src|async|readyList|is|removeChild|color|args|last|first|eval|parseInt|self|domManip|has|getTime|Date|ajax|prototype|top|toString|orig|form|old|innerHTML|easing||multiFilter|curAnim|queue|custom|parseFloat|stopPropagation|defaultView|ownerDocument|curCSS|getComputedStyle|bind|which|json|String|error|static|isReady|visible|oWidth|oHeight|on|setInterval|getElementById|currentStyle|shift|ol|child|RegExp|jsre|input|isXMLDoc|lastModified|previousSibling|jquery|dir|version|pos|styleFloat|state|update|tr|getAttribute|el|html|empty|responseText|getElementsByTagName|float|radio|runtimeStyle|ajaxSettings|visibility|mouseover|handleHover|getPropertyValue|selectedIndex|clearInterval|safariTimer|__ie_init|absolute|lastToggle|GET|fromElement|relatedTarget|clean|index|init|click|fix|evt|removeEventListener|handler|andSelf|addEventListener|cloneNode|triggered|nodeIndex|unique|classFilter|Number|prevObject|unshift|submit|password|file|after|removeAttribute|expr|_|appendChild|setTimeout|client|active|jsonp|sibling|win|deep|boxModel|cssFloat|globalEval|getResponseHeader|offsetLeft|lastChild|wrapAll|results|startTime|props|dequeue|swing|createElement|handleError|parsererror|checkbox|00|object|box|safari2|Modified|ifModified|setRequestHeader|offsetTop|col|contentType|ajaxSend|ajaxSuccess|ajaxComplete|ajaxStop|ajaxStart|serializeArray|notmodified|POST|loaded|onreadystatechange|appendTo|DOMContentLoaded|bindReady|mouseout|not|unbind|unload|ctrlKey|removeAttr|metaKey|keyCode|charCode|Width|clientX|pageX|srcElement|join|outerHTML|substr|parse|zoom|textarea|reset|image|odd|ajaxError|even|before|quickClass|quickID|quickChild|prepend|processData|offset|scroll|execScript|contents|uuid|continue|textContent|clone|setArray|getBoundingClientRect|_default|nodeValue|xml|100|alpha|href|speed|splice|throw|createTextNode|_toggle|replaceWith|linear|304|200|colgroup|Last|httpData|httpNotModified|fl|httpSuccess|beforeSend|fieldset|webkit|XMLHttpRequest|ActiveXObject|http|callback|img|br|attributes|abbr|urlencoded|www|pixelLeft|application|post|getJSON|getScript|elements|serialize|defer|ipt|scr|write|clientWidth|hasClass|clientHeight|mousemove|mouseup|relative|mousedown|dblclick|resize|focus|change|keydown|keypress|keyup|FORM|blur|frames|right|hover|triggerHandler|offsetWidth|offsetHeight|clientY|pageY|border|toElement|padding|Left|cancelBubble|returnValue|Right|Bottom|Top|detachEvent|attachEvent|substring|animated|line|header|weight|font|enabled|innerText|contains|only|eq|gt|ajaxSetup|lt|size|uFFFF|u0128|417|inner|Height|toggleClass|removeClass|addClass|replaceAll|insertAfter|prependTo|contentWindow|contentDocument|head|wrap|iframe|children|noConflict|siblings|prevAll|nextAll|prev|wrapInner|next|parents|maxLength|maxlength|readOnly|Boolean|readonly|class|htmlFor|CSS1Compat|compatMode|compatible|borderLeftWidth|inline|ie|ra|medium|it|rv|522|userAgent|with|navigator|1px|concat|10000|array|PI|cos|ig|fast|NaN|600|slow|Function|Object|setAttribute|reverse|changed|be|can|fadeTo|property|fadeOut|fadeIn|slideToggle|slideUp|getAttributeNode|slideDown|method|action|stop|cssText|responseXML|content|300|protocol|location|option|send|400|abort|th|td|cap|colg|tfoot|With|Requested|thead|GMT|1970|leg|Jan|01|opt|Thu|Since|If|Type|area|Content|hr|borderWidth|open|XMLHTTP|Microsoft|meta|onload|row|link|borderTopWidth|specified'.split('|'), 0, {}))
} catch (e) {
	consoleLog(e);
}
var isMobile;

window.onresize = function (event) {
	isMobile = detectmob();
}
var checkInfoTails = 0;
var alarmStatus = 0;
var alarms = 0;
var ethernet = 0;
var archive = 0;
var config = 0;
var serial = 0;

var mainPage = 0;

function checkChange() {
	if ((g_regChange.P != checkInfoTails) & mainPage) {
		setTimeout(function () {
			checkInfoTails = g_regChange.P;
			getTailsInfoCfg();
		}, 50);
	}
	if ((g_regChange.As != alarmStatus) & mainPage) {
		setTimeout(function () {
			alarmStatus = g_regChange.As;
			AlarmStatusInitialization();
		}, 100)
	}
	if (((g_regChange.A != alarms) & alarm == 1)) {
		setTimeout(function () {
			alarms = g_regChange.A;
			AlarmSettingInitialization();
		}, 150)
	}
	if (((g_regChange.E != ethernet) & eth == 1)) {
		setTimeout(function () {
			ethernet = g_regChange.E;
			ethernetCfgInitialization()
		}, 200)
	}
	if (((g_regChange.Ar != archive) & arch == 1)) {
		setTimeout(function () {
			archive = g_regChange.Ar;
			arhCfgInitialization();
		}, 250)
	}
	if ((g_regChange.C != config) & (mainPage | (harm == 1))) {
		setTimeout(function () {
			config = g_regChange.C;
			getPagesCfg();
		}, 500);
	}
	if (((g_regChange.S != serial) & mod == 1)) {
		setTimeout(function () {
			serial = g_regChange.S;
			mdbCfgInitialization();
		}, 350)
	}
	if (harm == 1) {
		setTimeout(function () {
			getHarmValU();
		}, 400)
	}
}

function reloadElement(filename, filetype) {
	console.log("Problem with element load: " + (filename).toString());

	setTimeout(function () {
		try {
			loadjscssfile(filename, filetype);
		} catch (err) {
			console.log("Multiple problems, webpage will be reloaded.");
			console.log(err);
			window.location = "nr30.htm";
		}
	}, 5000);
}

function loadjscssfile(filename, filetype) {
	var fileref;
	if (filetype == "js") { //if filename is a external JavaScript file
		fileref = document.createElement('script');
		fileref.setAttribute("type", "text/javascript");
		fileref.setAttribute("src", filename);
	} else if (filetype == "css") { //if filename is an external CSS file
		fileref = document.createElement("link");
		fileref.setAttribute("rel", "stylesheet")
		fileref.setAttribute("type", "text/css")
		fileref.setAttribute("href", filename);
	}
	if (typeof fileref != "undefined")
		document.getElementsByTagName("head")[0].appendChild(fileref);
}

function logout() {
	eraseCookie('session_id');
	eraseCookie('username');
	if (isMobile) {
		window.location = "../index.htm"
	} else {
		window.location = "index.htm";
	}
}

function eraseCookie(name) {
	createCookie(name, "", -1);
}

function fillField(id, virable, unit) {
	if ((virable < -10000000000000000)) {
		$(id).text("-??????");
		$(id).next().text(unit);
	} else if ((virable >= -10000000000000000) & (virable < -10000000000000)) {
		virable = virable / 1000000000000;
		$(id).text(virable.toFixed(3));
		$(id).next().text("T" + unit);
	} else if ((virable >= -10000000000000) & (virable < -10000000000)) {
		virable = virable / 1000000000;
		$(id).text(virable.toFixed(3));
		$(id).next().text("G" + unit);
	} else if ((virable >= -10000000000) & (virable < -10000000)) {
		virable = virable / 1000000;
		$(id).text(virable.toFixed(3));
		$(id).next().text("M" + unit);
	} else if ((virable >= -10000000) & (virable < -10000)) {
		virable = virable / 1000;
		$(id).text(virable.toFixed(3));
		$(id).next().text("k" + unit);
	} else if ((virable >= -10000) & (virable < 10000)) {
		$(id).text(virable.toFixed(3));
		$(id).next().text(unit);
	} else if ((virable >= 10000) & (virable < 10000000)) {
		virable = virable / 1000;
		$(id).text(virable.toFixed(3));
		$(id).next().text("k" + unit);
	} else if ((virable >= 10000000) & (virable < 10000000000)) {
		virable = virable / 1000000;
		$(id).text(virable.toFixed(3));
		$(id).val(virable.toFixed(3));
		$(id).next().text("M" + unit);
	} else if ((virable >= 10000000000) & (virable < 10000000000000)) {
		virable = virable / 1000000000;
		$(id).text(virable.toFixed(3));
		$(id).next().text("G" + unit);
	} else if ((virable >= 10000000000000) & (virable < 10000000000000000)) {
		virable = virable / 1000000000000;
		$(id).text(virable.toFixed(3));
		$(id).next().text("T" + unit);
	} else if ((virable >= 10000000000000000)) {
		$(id).text("+??????");
		$(id).next().text(unit);
	}
	if (virable == 1e20) $(id).text("??????");
	if (isNaN(virable)) {
		$(id).text("-----");
		$(id).next().text(unit);
	}
	return false;
}

function fillField1(id, virable, unit) {
	if (virable < -10000000000000000) {
		if (virable == -1e20) $(id).val("-??????");
	} else if ((virable >= -10000000000000000) & (virable < -10000000000000)) {
		virable = virable / 1000000000000;
		$(id).val(virable.toFixed(3) + " T" + unit);
	} else if ((virable >= -10000000000000) & (virable < -10000000000)) {
		virable = virable / 1000000000;
		$(id).val(virable.toFixed(3) + " G" + unit);
	} else if ((virable >= -10000000) & (virable < -10000)) {
		virable = virable / 1000;
		$(id).val(virable.toFixed(3) + " M" + unit);
	} else if ((virable >= -10000) & (virable < 0)) {
		virable = virable / 1000;
		$(id).val(virable.toFixed(3) + " k" + unit);
		$(id).val(virable.toFixed(3) + unit);
	} else if ((virable >= 0) & (virable < 10000)) {
		$(id).val(virable.toFixed(3) + unit);
	} else if ((virable >= 10000) & (virable < 10000000)) {
		virable = virable / 1000;
		$(id).val(virable.toFixed(3) + " k" + unit);
	} else if ((virable >= 10000000) & (virable < 10000000000)) {
		virable = virable / 1000000;
		$(id).val(virable.toFixed(3) + " M" + unit);
	} else if ((virable >= 10000000000) & (virable < 10000000000000)) {
		virable = virable / 1000000000;
		$(id).val(virable.toFixed(3) + " G" + unit);
	} else if ((virable >= 10000000000000) & (virable < 10000000000000000)) {
		virable = virable / 1000000000000;
		$(id).val(virable.toFixed(3) + " T" + unit);
	} else if (virable >= 10000000000000000) {
		if (virable == 1e20) $(id).val("+??????");
	}

	if (virable == 1e20) $(id).val("+??????");
	if (virable == -1e20) $(id).val("-??????");
	if (virable == undefined) $(id).val("-----");
	return false;
}

function readCookie(e) {
	sleep(50);
	var t = e + "=";
	var n = document.cookie.split(";");
	for (var r = 0; r < n.length; r++) {
		var i = n[r];
		while (i.charAt(0) == " ") i = i.substring(1, i.length);
		if (i.indexOf(t) == 0) return i.substring(t.length, i.length)
	}
	return null;
}

function sleep(milliseconds) {

}

function detectmob() {
	if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
		return true;
	}

	if ($(window).width() < 950) {
		return true;
	} 
	
	return false;
}

function closeAllWindows() {
	if (isMobile) {
		energy = 0;
		minmax = 0;
		measure = 0;
		settings = 0;
		eth = 0;
		mod = 0;
		arch = 0;
		alarm = 0;
		mail = 0;
		about = 0;
		harm = 0;
		$('#VisAbout').css('display', ("none"));
		$('#VisAlarms').css('display', ("none"));
		$('#VisArchive').css('display', ("none"));
		$('#VisModbus').css('display', ("none"));
		$('#VisEthernet').css('display', ("none"));
		$('#VisSettings').css('display', ("none"));
		$('#VisMeasure').css('display', ("none"));
		$('#VisMinMax').css('display', ("none"));
		$('#VisEnergy').css('display', ("none"));
		$('#VisHarm').css('display', ("none"));
	}
}

function ftp() {
	var addr;
	var serv = window.location.hostname;
	addr = ("ftp://" + serv.toString() + ":" + FTP_port_adress.toString() + "/");
	return addr;
}

function shwCookie() {
	var log = readCookie('username');
	document.write(" (" + log + "  ");
}


function err(msg) {
	var log = readCookie('username');
	if (msg != "OK") alert(log + " : No permission / Brak uprawnie\u0144");
}

function acc1(accFunction) {
	var formID = "IPSettingsForm";
	var ajaxDataStr = "";
	ajaxDataStr += readCookie('session_id');
	$.ajax({
		type: "GET",
		url: "ajax.sht",
		data: "ajaxFun=setAccSettings&bigString=" + ajaxDataStr,
		cache: false,
		timeout: 6000,
		success: function (msg) {
			//err(msg);
			switch (jQuery.trim(msg)) {
				case "OK":
					accFunction();
				case "NoPass":
					break;
				default:
					break;
			}
		},
		error: function (jqXHR, textStatus, errorThrown) {}
	});
	return false;
}

function acc2() {
	//var formID = "IPSettingsForm"; 
	var ajaxDataStr = "";
	ajaxDataStr += readCookie('session_id');
	$.ajax({
		type: "GET",
		url: "ajax.sht",
		data: "ajaxFun=setAccSettings2&bigString=" + ajaxDataStr,
		cache: false,
		timeout: 6000,
		success: function (msg) {
			//err(msg);

			if (msg != "Pass") logout();

			switch (jQuery.trim(msg)) {
				case "ok":

				case "error":
					break;
				default:
					break;
			}
		},
		error: function (jqXHR, textStatus, errorThrown) {}
	});
	return false;
}

function dat_tim() {

	var now = new Date();
	var year = now.getFullYear();
	var month = (now.getMonth() + 1).toString();
	if (month.length == 1)
		month = "0" + month;
	var day = (now.getDate()).toString();
	if (day.length == 1)
		day = "0" + day;
	var hour = (now.getHours()).toString();
	if (hour.length == 1)
		hour = "0" + hour;
	var minutes = (now.getMinutes()).toString();
	if (minutes.length == 1)
		minutes = "0" + minutes;
	var seconds = (now.getSeconds()).toString();
	if (seconds.length == 1)
		seconds = "0" + seconds;
	$("#dat").val(year + "-" + month + "-" + day);
	$("#clc").val(hour + ":" + minutes + ":" + seconds);


	Date.prototype.format = function (format) {
		var returnStr = '';
		var replace = Date.replaceChars;
		for (var i = 0; i < format.length; i++) {
			var curChar = format.charAt(i);
			if (i - 1 >= 0 && format.charAt(i - 1) == "\\") {
				returnStr += curChar;
			} else if (replace[curChar]) {
				returnStr += replace[curChar].call(this);
			} else if (curChar != "\\") {
				returnStr += curChar;
			}
		}
		return returnStr;
	};
}

var min = 5;
var sec = 0;

function time() {
	if (sec > 0) {
		sec--;
	} else if (min > 0) {
		min--;
		sec = 59;
	}

	if (min == 0 && sec == 0) {
		logout();
	}

	document.getElementById('tm').innerHTML =
		min + ":" + ((sec < 10) ? "0" + sec : sec) + " )";

	setTimeout("time();", 1000);
}

function checkValue(e) {
	var e;
	if (e >= 1e20) {
		return "1e20";
	} else if (e <= -1e20) {
		return "-1e20";
	} else {
		return e;
	}
}

function setElementHeight(isMobile) {
	var width = $(window).width();
	var height = $(window).height();

	$('.BODY').css('min-height', (height));

	if ((width < 950) || isMobile) {
		width = 450;
		$('.measure').css('width', 439);
		$('.minmax').css('width', 439);
		$('.general').css('width', 439);
		$('.text-config').css('font-size', '60%');
		$('#tab1').css('max-width', "110%");
		$('#tab2').css('max-width', "110%");
		$('.elegant label>span').css('padding-right', "0px");
	} else {
		$('.measure').css('width', 886);
		$('.minmax').css('width', 886);
		$('.general').css('width', 886);
		width = 950;
	}

	$('.main').css('max-width', (width));


};
var harm = 0;
var setVisHarm = function () {
	if (isMobile) {
		window.location = "btails/harm.htm"
	}
	if (harm == 0) {
		harm = 1;
		$("#visHarm").load("btails/harm.htm");
		closeAllWindows()
		$('#VisHarm').css('display', ("block"));
	} else if (harm == 1) {
		$('#VisHarm').css('display', ("none"));
		harm = 0;
	}
}
var energy = 0;
var energyL = 1;
var intervallEnVall;
var setVisEnergy = function () {
	if (energy == 0) {
		if (energyL == 1) {
			energyL = 2;
			$("#energyVis").load("btails/energy.htm");
		}
		closeAllWindows()
		energy = 1;
		$('#VisEnergy').css('display', ("block"));
		if (isMobile == 0) $('#empty1').css('display', ("block"));
		intervallEnVall = setInterval(function () {
			getMeasEnCfg();
		}, 2000);
	} else {
		energy = 0;
		clearInterval(intervallEnVall);
		$('#VisEnergy').css('display', ("none"));
		$('#empty1').css('display', ("none"));
	}
};

var minmax = 0;
var minmaxL = 1;
var intervallMin;
var intervallMax;
var setVisMinMax = function () {
	if (minmax == 0) {
		if (minmaxL == 1) {
			$("#minmaxVis").load("btails/minmax.htm");
			minmaxL = 2;
		}
		closeAllWindows()
		minmax = 1;
		$('#VisMinMax').css('display', ("block"));
		intervallMin = setInterval(function () {
			getMeasMinCfg();
		}, 2000);
		intervallMax = setInterval(function () {
			getMeasMaxCfg();
		}, 2200);
		if (minmaxL == 2) {
			minmaxL = 3;
			measMinCfgInitialization();
			measMaxCfgInitialization();
		}
	} else {
		minmax = 0;
		clearInterval(intervallMin);
		clearInterval(intervallMax);
		$('#VisMinMax').css('display', ("none"));
	}
};
var measure = 0;
var mLoad = 1;
var intervallMeasure;
var setVisMeasure = function () {
	if (measure == 0) {
		closeAllWindows();
		if (mLoad) {
			$("#measureVis").load("btails/measf.htm");
			mLoad = 0;
		}
		measure = 1;
		$('#VisMeasure').css('display', ("block"));
		intervallMeasure = setInterval(function () {
			getMeasCfg();
		}, 2000);
	} else {
		measure = 0;
		clearInterval(intervallMeasure);
		$('#VisMeasure').css('display', ("none"));
	}
};
/*
var settings = 0;
var settingsL = 1;
var setVisGeneralSettings = function() {
    if (settings == 0) {
		closeAllWindows()
		if(settingsL){
			$("#settingsCon").load("btails/set.htm");
			settingsL = 0;
		}
		$('#VisSettings').css('display', ("block"));
		settings = 1;
	}else{
        settings = 0;
        $('#VisSettings').css('display', ("none"));
		}
};
*/
var eth = 0;

var setVisEthernet = function () {

	if (eth == 0) {
		eth = 1;
		ethernet -= 1;
		if (isMobile) {
			window.location = "btails/ethForm.htm"
		} else {
			$('#ethCon').load("btails/ethForm.htm");
			$('#VisEthernet').css('display', ("block"));
		}

		$('#VisEthernet').css('display', ("block"));
	} else {
		eth = 0;
		$('#VisEthernet').css('display', ("none"));
	}
};

var mod = 0;
var modL = 1;
var intervallIdmodb;
var setVisModbus = function () {
	if (mod == 0) {
		if (modL == 1) {
			modL = 2;
			if (isMobile) {
				window.location = "btails/modForm.htm"
			} else {
				$("#modCon").load("btails/modForm.htm");
			}
		}
		closeAllWindows()
		mod = 1;
		$('#VisModbus').css('display', ("block"));
	} else {
		mod = 0;
		$('#VisModbus').css('display', ("none"));
	}
};

var arch = 0;
var archL = 1;
var setVisArchive = function () {
	if (arch == 0) {
		if (archL == 1) {
			archL = 2;
			if (isMobile) {
				window.location = "btails/archForm.htm"
			} else {
				$("#archCon").load("btails/archForm.htm");
			}
		}
		closeAllWindows()
		arch = 1;
		$('#VisArchive').css('display', ("block"));
		arhCfgInitialization();
	} else {
		arch = 0;
		$('#VisArchive').css('display', ("none"));
	}
};

var alarm = 0;
var alarmL = 1;

var setVisAlarms = function () {
	if (alarm == 0) {
		if (alarmL == 1) {
			alarmL == 2;
			if (isMobile) {
				window.location = "btails/alarms.htm"
			} else {
				$("#alarmsCon").load("btails/alarms.htm");
			}
		}
		closeAllWindows()
		alarm = 1;
		$('#VisAlarms').css('display', ("block"));
		//AlarmSettingInitialization();
	} else {
		alarm = 0;
		$('#VisAlarms').css('display', ("none"));
	}
};

var mail = 0;
var mailL = 1;
var setVisEmail = function () {
	if (mail == 0) {
		if (mailL == 1) {
			if (isMobile) {
				window.location = "btails/mailForm.htm"
			} else {
				$("#mailCon").load("btails/mailForm.htm");
			}
			mailL = 2;
		}
		closeAllWindows()
		mail = 1;
		MailSettingInitialization();
	} else {
		mail = 0;
		$('#VisEmail').css('display', ("none"));
	}
};

var about = 0;
var setVisAbout = function () {
	if (about == 0) {
		about = 1;
		if (isMobile) {
			window.location = "btails/about.htm"
		} else {
			$("#visCon").load("btails/about.htm");
		}
		$('#VisAbout').css('display', ("block"));
		aboutCfgInitialization()
	} else {
		about = 0;
		$('#VisAbout').css('display', ("none"));
	}
}

var files = 0;
var setVisFiles = function () {
	if (files == 0) {
		files = 1;
		if (isMobile) {
			window.location = "btails/fileExp.htm"
		} else {
			$("#visFiles").load("btails/fileExp.htm");
		}
		$('#VisFiles').css('display', ("block"));
		aboutCfgInitialization()
	} else {
		files = 0;
		$('#VisFiles').css('display', ("none"));
	}
}

//--------------------------------------Getting Data Functions------------------------------------------//
function getPuschArchive() {
	$.getJSON("ajax.sht" + Math.random(), "ajaxFun=getPuschArchive", function (e) {
		try {
			g_PuschArchive = e;
			if (g_regChange == 6) {
				logout();
			} else {}
		} catch (t) {
			console.error(t);
		}
	})
}

function getCheckRegisterChange() {
	$.getJSON("ajax.sht" + Math.random(), "ajaxFun=getCheckRegisterChange", function (e) {
		try {
			g_regChange = e;
			if (g_regChange == 6) {
				logout();
			} else {
				checkChange()
			}
		} catch (t) {
			console.error(t);
		}
	})
}

function getAlarmsStatus() {
	$.getJSON("ajax.sht" + Math.random(), "ajaxFun=getAlarmsStatus", function (e) {
		try {
			g_getAlarmsStatus = e;
			if (g_getAlarmsStatus == 6) {
				logout();
			} else {
				fillAlarmStatus()
			}
		} catch (t) {
			console.error(t);
		}
	})
}

function getTailsInfoCfg() {
	$.getJSON("ajax.sht" + Math.random(), "ajaxFun=getTailsInfoCfg", function (e) {
		try {
			g_TailsInfoCfg = e;
			if (g_TailsInfoCfg == 6) {
				logout();
			} else {
				fillTailsInfoSettings();
			}
		} catch (t) {
			console.error(t);
		}
	})
}
/*
function getConfigCfg() {
	$.getJSON("ajax.sht" + Math.random(), "ajaxFun=getConfigCfg", function(e) {
		try{
			g_ConfigCfg = e;
			if (g_ConfigCfg == 6) {
				logout();
			}
			}catch (t) {
            console.error(t);
        }
	})

}
*/
function getAboutCfg() {
	$.getJSON("ajax.sht" + Math.random(), "ajaxFun=getAboutCfg", function (e) {
		try {
			g_AboutCfg = e;
			if (g_AboutCfg == 6) {
				logout();
			} else {
				fillAboutSettings();
			}
		} catch (t) {
			console.error(t);
		}
	});
}

function getMeasEnCfg() {
	$.getJSON("ajax.sht" + Math.random(), "ajaxFun=getMeasEnCfg", function (e) {
		try {
			g_eMCfg = e;
			if (g_eMCfg == 6) {
				logout();
			}
			fillMeasEnSettings();
			chanLang();
		} catch (t) {
			console.error(t);
		}
	})
}
/*
function getAlarm2Cfg() {
    $.getJSON("ajax.sht" + Math.random(), "ajaxFun=getAlarm2Cfg", function(e) {
        try {
            g_Al1MCfg = e;
            if (g_mxMCfg == 6) {
                logout();
            }
            fillMeasMaxSettings();
        } catch (t) {
            console.error(t);
        }
    })
}
function getAlarm1Cfg() {
    $.getJSON("ajax.sht" + Math.random(), "ajaxFun=getAlarm1Cfg", function(e) {
        try {
            g_Al2MCfg = e;
            if (g_mxMCfg == 6) {
                logout();
            }
            fillMeasMaxSettings();
        } catch (t) {
            console.error(t);
        }
    })
}
*/
function getMeasMaxCfg() {
	$.getJSON("ajax.sht" + Math.random(), "ajaxFun=getMeasMaxCfg", function (e) {
		try {
			g_mxMCfg = e;
			if (g_mxMCfg == 6) {
				logout();
			}
			fillMeasMaxSettings();
		} catch (t) {
			console.error(t);
		}
	});
}

function getMeasMinCfg() {
	$.getJSON("ajax.sht" + Math.random(), "ajaxFun=getMeasMinCfg", function (e) {
		try {
			g_miMCfg = e;
			if (g_miMCfg == 6) {
				logout();
			}
			fillMeasMinSettings();
		} catch (t) {
			console.error(t);
		}
	});
}

function getMeasCfg() {
	$.getJSON("ajax.sht" + Math.random(), "ajaxFun=getMeasCfg", function (msg) {
		try {
			g_MCfg = msg;
			if (g_MCfg == 6) {
				logout();
			}
			fillMeasSettings();

		} catch (err) {
			console.error(err);
		}
	});
}

function getServCfg() {
	$.getJSON("ajax.sht" + Math.random(), "ajaxFun=getServCfg", function (msg) {
		try {
			g_srvCfg = msg;
			if (g_srvCfg == 6) {
				logout();
			}
			fillServSettings();
		} catch (err) {
			console.error(err);
		}
	});
}

function getArchCfg() {
	$.getJSON("ajax.sht" + Math.random(), "ajaxFun=getArchCfg", function (e) {
		try {
			g_getArchCfg = e;
			if (g_getArchCfg == 6) {
				logout();
			} else {
				fillArchCfgG1()
				fillArchCfgG2()
				fillArchCfgRest()
			}
		} catch (t) {
			console.error(t);
		}
	})
	readCookie('session_id')
	$(document).ready(function () {
		chanLang();
	});
}

function getGeneralSetting() {
	$.getJSON("ajax.sht" + Math.random(), "ajaxFun=getGeneralSetting", function (msg) {
		try {
			g_inPCfg = msg;
			if (g_inPCfg == 6) {
				logout();
			}
			fillGeneralSetting();
		} catch (err) {
			console.error(err);
		}
	});
}

function getEthernetCfg() {
	$.getJSON("ajax.sht" + Math.random(), "ajaxFun=getEthernetCfg", function (msg) {
		try {
			g_ethCfg = msg;
			if (g_ethCfg == 6) {
				logout();
			}
			try {
				fillEthernetSettings();
			} catch (e) {
				console.log(e)
			}
		} catch (err) {
			console.error(err);
		}
	});
}

function getAlarmSetting() {
	$.getJSON("ajax.sht" + Math.random(), "ajaxFun=getAlarmCfg", function (msg) {
		try {
			g_inPCfg = msg;
			if (g_inPCfg == 6) {
				logout();
			}
			fillAlarmCfg();
		} catch (err) {
			console.error(err);
		}
	});
}

function getMailSetting() {
	$.getJSON("ajax.sht" + Math.random(), "ajaxFun=getMailSetting", function (msg) {
		try {
			g_inPCfg = msg;
			if (g_inPCfg == 6) {
				logout();
			}
			fillMailSettings();
		} catch (err) {
			console.error(err);
		}
	});
}

function getMdbCfg() {
	$.getJSON("ajax.sht" + Math.random(), "ajaxFun=getMdbCfg", function (msg) {
		try {
			g_mdbCfg = msg;
			if (g_mdbCfg == 6) {
				logout();
			}
			fillMdbSettings();
		} catch (err) {
			console.error(err);
		}
	});
}

//--------------------------------Fill Data Functions------------------------------------------//

function fillArchCfgRest() {
	document.getElementById("ArchFieldSep").value = g_getArchCfg.aFS.toString();
	document.getElementById("ArchSep").value = g_getArchCfg.aS.toString();
}

function fillArchCfgG1() {
	//setSelectedIndex(document.getElementById("archTypeArchiveG1"),g_getArchCfg.G1ArchT);
	document.getElementById("archTypeArchiveG1").value = g_getArchCfg.g1AT.toString();
	document.getElementById("trigArchiveG1").value = g_getArchCfg.g1T.toString();
	$('#interArchiveG1').val(g_getArchCfg.g1I.toString());
	$('#lowArchiveG1').val(g_getArchCfg.g1LT.toString());
	$('#highArchiveG1').val(g_getArchCfg.g1HT.toString());

	for (i = 0; i <= 15; i++) {
		console.log(dec2bin(g_getArchCfg.g1TA >> i))
		if ((g_getArchCfg.g1TA >> i) & 1) {
			setSelectedIndex(document.getElementById("parArchiveG1"), i);
		}
	}

	for (i = 16; i <= 31; i++) {
		console.log(dec2bin(g_getArchCfg.g1TB >> i - 16))
		if ((g_getArchCfg.g1TB >> i - 16) & 1) {
			setSelectedIndex(document.getElementById("parArchiveG1"), i);
		}
	}

	for (i = 32; i <= 47; i++) {
		console.log(dec2bin(g_getArchCfg.g1TC >> i - 32))
		if ((g_getArchCfg.g1TC >> i - 32) & 1) {
			setSelectedIndex(document.getElementById("parArchiveG1"), i);
		}
	}

	for (i = 48; i <= 63; i++) {
		console.log(dec2bin(g_getArchCfg.g1TD >> i - 48))
		if ((g_getArchCfg.g1TD >> i - 48) & 1) {
			setSelectedIndex(document.getElementById("parArchiveG1"), i);
		}
	}

}

function fillArchCfgG2() {
	document.getElementById("archTypeArchiveG2").value = g_getArchCfg.g2AT.toString();
	document.getElementById("trigArchiveG2").value = g_getArchCfg.g2T.toString();
	$('#interArchiveG2').val(g_getArchCfg.g2I.toString());
	$('#lowArchiveG2').val(g_getArchCfg.g2LT.toString());
	$('#highArchiveG2').val(g_getArchCfg.g2HT.toString());

	for (i = 0; i <= 15; i++) {
		console.log(dec2bin(g_getArchCfg.g2TA >> i))
		if ((g_getArchCfg.g2TA >> i) & 1) {
			setSelectedIndex(document.getElementById("parArchiveG2"), i);
		}
	}

	for (i = 16; i <= 31; i++) {
		console.log(dec2bin(g_getArchCfg.g2TB >> i - 16))
		if ((g_getArchCfg.g2TB >> i - 16) & 1) {
			setSelectedIndex(document.getElementById("parArchiveG2"), i);
		}
	}

	for (i = 32; i <= 47; i++) {
		console.log(dec2bin(g_getArchCfg.g2TC >> i - 32))
		if ((g_getArchCfg.g2TC >> i - 32) & 1) {
			setSelectedIndex(document.getElementById("parArchiveG2"), i);
		}
	}

	for (i = 48; i <= 63; i++) {
		console.log(dec2bin(g_getArchCfg.g2TD >> i - 48))
		if ((g_getArchCfg.g2TD >> i - 48) & 1) {
			setSelectedIndex(document.getElementById("parArchiveG2"), i);
		}
	}
}

function fillAlarmStatus() {
	if (g_getAlarmsStatus.a1On) {
		$('#A1Text').css('color', '#ff0404');
	} else {
		$('#A1Text').css('color', '#808080');
	}
	if (g_getAlarmsStatus.a1C1On) {
		$('#A1top').attr("src", 'img/aact.gif');
	} else if (g_getAlarmsStatus.a1C1OnS) {
		$('#A1top').attr("src", 'img/asig.gif');
	} else {
		$('#A1top').attr("src", 'img/adis.gif');
	}
	if (g_getAlarmsStatus.a1C2On) {
		$('#A1middle').attr("src", 'img/aact.gif');
	} else if (g_getAlarmsStatus.a1C2OnS) {
		$('#A1middle').attr("src", 'img/asig.gif');
	} else {
		$('#A1middle').attr("src", 'img/adis.gif');
	}
	if (g_getAlarmsStatus.a1C3On) {
		$('#A1bottom').attr("src", 'img/aact.gif');
	} else if (g_getAlarmsStatus.a1C3OnS) {
		$('#A1bottom').attr("src", 'img/asig.gif');
	} else {
		$('#A1bottom').attr("src", 'img/adis.gif');
	}

	if (g_getAlarmsStatus.a2On) {
		$('#A2Text').css('color', '#ff0404');
	} else {
		$('#A2Text').css('color', '#808080');
	}
	if (g_getAlarmsStatus.a2C1On) {
		$('#A2top').attr("src", 'img/aact.gif');
	} else if (g_getAlarmsStatus.a2C1OnS) {
		$('#A2top').attr("src", 'img/asig.gif');
	} else {
		$('#A2top').attr("src", 'img/adis.gif');
	}
	if (g_getAlarmsStatus.a2C2On) {
		$('#A2middle').attr("src", 'img/aact.gif');
	} else if (g_getAlarmsStatus.a2C2OnS) {
		$('#A2middle').attr("src", 'img/asig.gif');
	} else {
		$('#A2middle').attr("src", 'img/adis.gif');
	}
	if (g_getAlarmsStatus.a2C3On) {
		$('#A2bottom').attr("src", 'img/aact.gif');
	} else if (g_getAlarmsStatus.a2C3OnS) {
		$('#A2bottom').attr("src", 'img/asig.gif');
	} else {
		$('#A2bottom').attr("src", 'img/adis.gif');
	}
}

function fillAlarmCfg() {
	document.getElementById("logConA1").value = g_inPCfg.A1LC.toString();
	document.getElementById("reallyONA1").value = g_inPCfg.A1RS.toString();
	document.getElementById("reallyOFFA1").value = g_inPCfg.A1HO.toString();
	document.getElementById("dispAlEventA1").value = g_inPCfg.A1DE.toString();

	document.getElementById("logConA2").value = g_inPCfg.A2LC.toString();
	document.getElementById("reallyONA2").value = g_inPCfg.A2RS.toString();
	document.getElementById("reallyOFFA2").value = g_inPCfg.A2HO.toString();
	document.getElementById("dispAlEventA2").value = g_inPCfg.A2DE.toString();

	document.getElementById("valA1C1").value = g_inPCfg.A1C1Val.toString();
	document.getElementById("conTypeA1C1").value = g_inPCfg.A1C1CT.toString();
	document.getElementById("delayConONA1C1").value = g_inPCfg.A1C1DTCon.toString();
	document.getElementById("delayConOFFA1C1").value = g_inPCfg.A1C1DTCoff.toString();
	somevalue = (g_inPCfg.A1C1LLC / 10)
	$('#lowLimitconA1C1').val(somevalue.toString() + '%');
	somevalue = (g_inPCfg.A1C1HLC / 10)
	$('#highLimitA1C1').val(somevalue.toString() + '%');
	document.getElementById("holdBackconOFFONNA1C1").value = g_inPCfg.A1C1HCOnnOff.toString();
	document.getElementById("dispConEventA1C1").value = g_inPCfg.A1C1DCE.toString();

	document.getElementById("valA1C2").value = g_inPCfg.A1C2Val.toString();
	document.getElementById("conTypeA1C2").value = g_inPCfg.A1C2CT.toString();
	document.getElementById("delayConONA1C2").value = g_inPCfg.A1C2DTCon.toString();
	document.getElementById("delayConOFFA1C2").value = g_inPCfg.A1C2DTCoff.toString();
	somevalue = (g_inPCfg.A1C2LLC / 10)
	$('#lowLimitconA1C2').val(somevalue.toString() + '%');
	somevalue = (g_inPCfg.A1C2HLC / 10)
	$('#highLimitA1C2').val(somevalue.toString() + '%');
	document.getElementById("holdBackconOFFONNA1C2").value = g_inPCfg.A1C2HCOnnOff.toString();
	document.getElementById("dispConEventA1C2").value = g_inPCfg.A1C2DCE.toString();

	document.getElementById("valA1C3").value = g_inPCfg.A1C3Val.toString();
	document.getElementById("conTypeA1C3").value = g_inPCfg.A1C3CT.toString();
	document.getElementById("delayConONA1C3").value = g_inPCfg.A1C3DTCon.toString();
	document.getElementById("delayConOFFA1C3").value = g_inPCfg.A1C3DTCoff.toString();
	somevalue = (g_inPCfg.A1C3LLC / 10)
	$('#lowLimitconA1C3').val(somevalue.toString() + '%');
	somevalue = (g_inPCfg.A1C3HLC / 10)
	$('#highLimitA1C3').val(somevalue.toString() + '%');
	document.getElementById("holdBackconOFFONNA1C3").value = g_inPCfg.A1C3HCOnnOff.toString();
	document.getElementById("dispConEventA1C3").value = g_inPCfg.A1C3DCE.toString();

	document.getElementById("valA2C1").value = g_inPCfg.A2C1Val.toString();
	document.getElementById("conTypeA2C1").value = g_inPCfg.A2C1CT.toString();
	document.getElementById("delayConONA2C1").value = g_inPCfg.A2C1DTCon.toString();
	document.getElementById("delayConOFFA2C1").value = g_inPCfg.A2C1DTCoff.toString();
	somevalue = (g_inPCfg.A2C1LLC / 10)
	$('#lowLimitconA2C1').val(somevalue.toString() + '%');
	somevalue = (g_inPCfg.A2C1HLC / 10)
	$('#highLimitA2C1').val(somevalue.toString() + '%');
	document.getElementById("holdBackconOFFONNA2C1").value = g_inPCfg.A2C1HCOnnOff.toString();
	document.getElementById("dispConEventA2C1").value = g_inPCfg.A2C1DCE.toString();

	document.getElementById("valA2C2").value = g_inPCfg.A2C2Val.toString();
	document.getElementById("conTypeA2C2").value = g_inPCfg.A2C2CT.toString();
	document.getElementById("delayConONA2C2").value = g_inPCfg.A2C2DTCon.toString();
	document.getElementById("delayConOFFA2C2").value = g_inPCfg.A2C2DTCoff.toString();
	somevalue = (g_inPCfg.A2C2LLC / 10)
	$('#lowLimitconA2C2').val(somevalue.toString() + '%');
	somevalue = (g_inPCfg.A2C2HLC / 10)
	$('#highLimitA2C2').val(somevalue.toString() + '%');
	document.getElementById("holdBackconOFFONNA2C2").value = g_inPCfg.A2C2HCOnnOff.toString();
	document.getElementById("dispConEventA2C2").value = g_inPCfg.A2C2DCE.toString();

	document.getElementById("valA2C3").value = g_inPCfg.A2C3Val.toString();
	document.getElementById("conTypeA2C3").value = g_inPCfg.A2C3CT.toString();
	document.getElementById("delayConONA2C3").value = g_inPCfg.A2C3DTCon.toString();
	document.getElementById("delayConOFFA2C3").value = g_inPCfg.A2C3DTCoff.toString();
	somevalue = (g_inPCfg.A2C3LLC / 10)
	$('#lowLimitconA2C3').val(somevalue.toString() + '%');
	somevalue = (g_inPCfg.A2C3HLC / 10)
	$('#highLimitA2C3').val(somevalue.toString() + '%');
	document.getElementById("holdBackconOFFONNA2C3").value = g_inPCfg.A2C3HCOnnOff.toString();
	document.getElementById("dispConEventA2C3").value = g_inPCfg.A2C3DCE.toString();
}

function fillTailsInfoSettings() {
	$("#ipAdress").text(g_TailsInfoCfg.ip.toString());
	$("#mask0").text(g_TailsInfoCfg.netmask.toString());
	$("#gateway_status").text(g_TailsInfoCfg.gateway.toString());
	if (g_TailsInfoCfg.dhcp) {
		$("#dhcp_status").text("On");
	} else {
		$("#dhcp_status").text("Off");
	}
	$("#modb_ID").text(g_TailsInfoCfg.mAdr.toString());
	$("#macAddr").text(g_TailsInfoCfg.mac.toString());

	if (g_TailsInfoCfg.br == 0) $("#baudModb").text("4800");
	else if (g_TailsInfoCfg.br == 1) $("#baudModb").text("9600");
	else if (g_TailsInfoCfg.br == 2) $("#baudModb").text("19200");
	else if (g_TailsInfoCfg.br == 3) $("#baudModb").text("38400");
	else if (g_TailsInfoCfg.br == 4) $("#baudModb").text("57600");
	else if (g_TailsInfoCfg.br == 5) $("#baudModb").text("115200");


	if (g_TailsInfoCfg.trM == 0) $("#tryb").text("8N2");
	else if (g_TailsInfoCfg.trM == 1) $("#tryb").text("8E1");
	else if (g_TailsInfoCfg.trM == 2) $("#tryb").text("8O1");
	else if (g_TailsInfoCfg.trM == 3) $("#tryb").text("8N1");

	$("#memUsed1").text(g_TailsInfoCfg.memUsed.toString() + "%");
	if (g_TailsInfoCfg.memUsed < 9) {
		$("#memUsed").text("|....................|");
	} else if (g_TailsInfoCfg.memUsed < 19) {
		$("#memUsed").text("|#..................|");
	} else if (g_TailsInfoCfg.memUsed < 29) {
		$("#memUsed").text("|##................|");
	} else if (g_TailsInfoCfg.memUsed < 39) {
		$("#memUsed").text("|###..............|");
	} else if (g_TailsInfoCfg.memUsed < 49) {
		$("#memUsed").text("|####............|");
	} else if (g_TailsInfoCfg.memUsed < 59) {
		$("#memUsed").text("|#####..........|");
	} else if (g_TailsInfoCfg.memUsed < 69) {
		$("#memUsed").text("|######........|");
	} else if (g_TailsInfoCfg.memUsed < 79) {
		$("#memUsed").text("|#######......|");
	} else if (g_TailsInfoCfg.memUsed < 89) {
		$("#memUsed").text("|########....|");
	} else {
		$("#memUsed").text("|##########|");
	}
	if (g_TailsInfoCfg.memLoad) {
		$("#sd_load").css('display', 'block');
		$("#sd_load1").css('display', 'none');
	} else {
		$("#sd_load").css('display', 'none');
		$("#sd_load1").css('display', 'block');
	}
	g_TailsInfoCfg.memCopy = g_TailsInfoCfg.memCopy / 10
	$("#memCopy1").text(g_TailsInfoCfg.memCopy.toString() + "%");
	if (g_TailsInfoCfg.memCopy < 9) {
		$("#memCopy").text("|....................|");
	} else if (g_TailsInfoCfg.memCopy < 19) {
		$("#memCopy").text("|#..................|");
	} else if (g_TailsInfoCfg.memCopy < 29) {
		$("#memCopy").text("|##................|");
	} else if (g_TailsInfoCfg.memCopy < 39) {
		$("#memCopy").text("|###..............|");
	} else if (g_TailsInfoCfg.memCopy < 49) {
		$("#memCopy").text("|####............|");
	} else if (g_TailsInfoCfg.memCopy < 59) {
		$("#memCopy").text("|#####..........|");
	} else if (g_TailsInfoCfg.memCopy < 69) {
		$("#memCopy").text("|######........|");
	} else if (g_TailsInfoCfg.memCopy < 79) {
		$("#memCopy").text("|#######......|");
	} else if (g_TailsInfoCfg.memCopy < 89) {
		$("#memCopy").text("|########....|");
	} else {
		$("#memCopy").text("|##########|");
	}
	if (g_TailsInfoCfg.memLoad) {
		$("#sd_load").css('display', 'block');
		$("#sd_load1").css('display', 'none');
	} else {
		$("#sd_load").css('display', 'none');
		$("#sd_load1").css('display', 'block');
	}
}

function fillAboutSettings() {
	$("#serialNm").val((g_AboutCfg.sNm).toString());
	$("#oCd").val((g_AboutCfg.oCd).toString());
	$("#fVr").val((g_AboutCfg.fVr).toString());
	$("#bVr").val((g_AboutCfg.bVr).toString());
	$("#vr").val((g_AboutCfg.vr).toString());
}

function fillEthernetSettings() {
	$("#IPAddress").val(g_ethCfg.ip);
	$("#SubnetMask").val(g_ethCfg.netmask);
	$("#Gateway").val(g_ethCfg.gateway);
	$("#MACAddress").val(g_ethCfg.mac);
	$("#EtchSpeed").val(g_ethCfg.EtchSpeed);
	$("#wwwPort").val(g_ethCfg.wwwPort);
	$("#ftpCmdPort").val(g_ethCfg.ftpCmdPort);
	$("#ftpDataPort").val(g_ethCfg.ftpDataPort);
	$("#dAdr").val(g_ethCfg.dAdr);
	$("#pNum").val(g_ethCfg.pNum);
	$("#mSiCn").val(g_ethCfg.mSiCn);
	$("#pClTi").val(g_ethCfg.pClTi);
	$("#wwwAdm").val(g_ethCfg.wwwAdm);
	$("#wwwUsr").val(g_ethCfg.wwwUsr);
	$("#ftpAdm").val(g_ethCfg.ftpAdm);
	$("#ftpUsr").val(g_ethCfg.ftpUsr);
	if (g_ethCfg.aPE == 1) $('input:checkbox[name=aPE]').attr('checked', 'checked');
	else $('input:checkbox[name=aPE]').removeAttr('checked');
}

function fillGeneralSetting() {
	g_inPCfg.websiteTitle = unescape(g_inPCfg.websiteTitle);
	$("#websiteTitle1").val(g_inPCfg.websiteTitle);
	$("#websiteTitle").text((g_inPCfg.websiteTitle).toString());
	if (g_inPCfg.timeCheck == 1) $('input:checkbox[name=timeCheck]').attr('checked', 'checked');
	else $('input:checkbox[name=timeCheck]').removeAttr('checked');
}

function fillMdbSettings() {
	$("#mAdr").val(g_mdbCfg.mAdr);
	$("#br").val(g_mdbCfg.br);
	$("#trM").val(g_mdbCfg.trM);
}

function fillArhSettings() {
	$("#archType").val(g_arhCfg.archType);
	$("#lowThr").val(g_arhCfg.lowThr);
	$("#upThr").val(g_arhCfg.upThr);
	$("#archPeroid").val(g_arhCfg.archPeroid);
	$("#intMemThr").val(g_arhCfg.intMemThr);
}

function fillServSettings() {
	$("#clc").val(g_srvCfg.clc);
	if (g_srvCfg.clcA == 1) $('input:checkbox[name=clcA]').attr('checked', 'checked');
	else $('input:checkbox[name=clcA]').removeAttr('checked');
	$("#dat").val(g_srvCfg.dat);
	$("#passCod").val(g_srvCfg.passCod);
	if (g_srvCfg.defSet == 1) $('input:checkbox[name=defSet]').attr('checked', 'checked');
	else $('input:checkbox[name=defSet]').removeAttr('checked');
	if (g_srvCfg.defSet1 == 1) $('input:checkbox[name=defSet1]').attr('checked', 'checked');
	else $('input:checkbox[name=defSet1]').removeAttr('checked');
	if (g_srvCfg.resetDev == 1) $('input:checkbox[name=resetDev]').attr('checked', 'checked');
	else $('input:checkbox[name=resetDev]').removeAttr('checked');

	$("#fDF").val(g_srvCfg.fDF);
	$("#mSD").val(g_srvCfg.mSD);
	$("#cSD").val(g_srvCfg.cSD);

	if (g_srvCfg.b31 == 1) $('input:checkbox[name=b31]').attr('checked', 'checked');
	else $('input:checkbox[name=b31]').removeAttr('checked');
	if (g_srvCfg.b30 == 1) $('input:checkbox[name=b30]').attr('checked', 'checked');
	else $('input:checkbox[name=b30]').removeAttr('checked');
	if (g_srvCfg.b29 == 1) $('input:checkbox[name=b29]').attr('checked', 'checked');
	else $('input:checkbox[name=b29]').removeAttr('checked');
	if (g_srvCfg.b28 == 1) $('input:checkbox[name=b28]').attr('checked', 'checked');
	else $('input:checkbox[name=b28]').removeAttr('checked');
	if (g_srvCfg.b27 == 1) $('input:checkbox[name=b27]').attr('checked', 'checked');
	else $('input:checkbox[name=b27]').removeAttr('checked');
	if (g_srvCfg.b26 == 1) $('input:checkbox[name=b26]').attr('checked', 'checked');
	else $('input:checkbox[name=b26]').removeAttr('checked');
	if (g_srvCfg.b25 == 1) $('input:checkbox[name=b25]').attr('checked', 'checked');
	else $('input:checkbox[name=b25]').removeAttr('checked');
	if (g_srvCfg.b24 == 1) $('input:checkbox[name=b24]').attr('checked', 'checked');
	else $('input:checkbox[name=b24]').removeAttr('checked');
	if (g_srvCfg.b23 == 1) $('input:checkbox[name=b23]').attr('checked', 'checked');
	else $('input:checkbox[name=b23]').removeAttr('checked');
	if (g_srvCfg.b22 == 1) $('input:checkbox[name=b22]').attr('checked', 'checked');
	else $('input:checkbox[name=b22]').removeAttr('checked');
	if (g_srvCfg.b21 == 1) $('input:checkbox[name=b21]').attr('checked', 'checked');
	else $('input:checkbox[name=b21]').removeAttr('checked');
	if (g_srvCfg.b20 == 1) $('input:checkbox[name=b20]').attr('checked', 'checked');
	else $('input:checkbox[name=b20]').removeAttr('checked');
	if (g_srvCfg.b19 == 1) $('input:checkbox[name=b19]').attr('checked', 'checked');
	else $('input:checkbox[name=b19]').removeAttr('checked');
	if (g_srvCfg.b16 == 1) $('input:checkbox[name=b16]').attr('checked', 'checked');
	else $('input:checkbox[name=b16]').removeAttr('checked');
	if (g_srvCfg.b14 == 1) $('input:checkbox[name=b14]').attr('checked', 'checked');
	else $('input:checkbox[name=b14]').removeAttr('checked');
	if (g_srvCfg.b10 == 1) $('input:checkbox[name=b10]').attr('checked', 'checked');
	else $('input:checkbox[name=b10]').removeAttr('checked');
	if (g_srvCfg.b9 == 1) $('input:checkbox[name=b9]').attr('checked', 'checked');
	else $('input:checkbox[name=b9]').removeAttr('checked');
	if (g_srvCfg.b8 == 1) $('input:checkbox[name=b8]').attr('checked', 'checked');
	else $('input:checkbox[name=b8]').removeAttr('checked');
	if (g_srvCfg.b7 == 1) $('input:checkbox[name=b7]').attr('checked', 'checked');
	else $('input:checkbox[name=b7]').removeAttr('checked');
	if (g_srvCfg.b5 == 1) $('input:checkbox[name=b5]').attr('checked', 'checked');
	else $('input:checkbox[name=b5]').removeAttr('checked');
	if (g_srvCfg.b4 == 1) $('input:checkbox[name=b4]').attr('checked', 'checked');
	else $('input:checkbox[name=b4]').removeAttr('checked');
	if (g_srvCfg.b3 == 1) $('input:checkbox[name=b3]').attr('checked', 'checked');
	else $('input:checkbox[name=b3]').removeAttr('checked');
	if (g_srvCfg.b2 == 1) $('input:checkbox[name=b2]').attr('checked', 'checked');
	else $('input:checkbox[name=b2]').removeAttr('checked');




	if (g_srvCfg.statMC == 0) $("#statMC").val("ERR 0");
	else if (g_srvCfg.statMC == 1) $("#statMC").val("ERR 1");
	else if (g_srvCfg.statMC == 2) $("#statMC").val("ERR 2");
	else if (g_srvCfg.statMC == 3) $("#statMC").val("ERR 3");
	else if (g_srvCfg.statMC == 4) $("#statMC").val("OK");
	else if (g_srvCfg.statMC == 5) $("#statMC").val("FULL");
	else if (g_srvCfg.statMC == 6) $("#statMC").val("mem. initializ.");

}

function fillMeasSettings() {
	console.log (g_MCfg.mV1);
	$("#meas_val_1").val(checkValue(g_MCfg.mV1) + " V");
	fillField1("#meas_val_1", g_MCfg.mV1, "V")
	$("#meas_val_2").val(checkValue(g_MCfg.mV2) + " A");
	fillField1("#meas_val_2", g_MCfg.mV2, "A")
	$("#meas_val_3").val(checkValue(g_MCfg.mV3) + " W");
	fillField1("#meas_val_3", g_MCfg.mV3, "W")
	$("#meas_val_4").val(checkValue(g_MCfg.mV4) + " var");
	fillField1("#meas_val_4", g_MCfg.mV4, "var")
	$("#meas_val_5").val(checkValue(g_MCfg.mV5) + " VA");
	fillField1("#meas_val_5", g_MCfg.mV5, "VA")
	$("#meas_val_6").val(checkValue(g_MCfg.mV6));
	fillField1("#meas_val_6", g_MCfg.mV6, "")
	$("#meas_val_7").val(checkValue(g_MCfg.mV7));
	fillField1("#meas_val_7", g_MCfg.mV7, "")
	$("#meas_val_8").val(checkValue(g_MCfg.mV8) + " %");
	fillField1("#meas_val_8", g_MCfg.mV8, "%")
	$("#meas_val_9").val(checkValue(g_MCfg.mV9) + " %");
	fillField1("#meas_val_9", g_MCfg.mV9, "%")
	$("#meas_val_10").val(checkValue(g_MCfg.mV10) + " V");
	fillField1("#meas_val_10", g_MCfg.mV10, "V")
	$("#meas_val_11").val(checkValue(g_MCfg.mV11) + " A");
	fillField1("#meas_val_11", g_MCfg.mV11, "A")
	$("#meas_val_12").val(checkValue(g_MCfg.mV12) + " W");
	fillField1("#meas_val_12", g_MCfg.mV12, "W")
	$("#meas_val_13").val(checkValue(g_MCfg.mV13) + " var");
	fillField1("#meas_val_13", g_MCfg.mV13, "var")
	$("#meas_val_14").val(checkValue(g_MCfg.mV14) + " VA");
	fillField1("#meas_val_14", g_MCfg.mV14, "VA")
	$("#meas_val_15").val(checkValue(g_MCfg.mV15));
	fillField1("#meas_val_15", g_MCfg.mV15, "")
	$("#meas_val_16").val(checkValue(g_MCfg.mV16));
	fillField1("#meas_val_16", g_MCfg.mV16, "")
	$("#meas_val_17").val(checkValue(g_MCfg.mV17) + " %");
	fillField1("#meas_val_17", g_MCfg.mV17, "%")
	$("#meas_val_18").val(checkValue(g_MCfg.mV18) + " %");
	fillField1("#meas_val_18", g_MCfg.mV18, "%")
	$("#meas_val_19").val(checkValue(g_MCfg.mV19) + " V");
	fillField1("#meas_val_19", g_MCfg.mV19, "V")
	$("#meas_val_20").val(checkValue(g_MCfg.mV20) + " A");
	fillField1("#meas_val_20", g_MCfg.mV20, "A")
	$("#meas_val_21").val(checkValue(g_MCfg.mV21) + " W");
	fillField1("#meas_val_21", g_MCfg.mV21, "W")
	$("#meas_val_22").val(checkValue(g_MCfg.mV22) + " var");
	fillField1("#meas_val_22", g_MCfg.mV22, "var")
	$("#meas_val_23").val(checkValue(g_MCfg.mV23) + " VA");
	fillField1("#meas_val_23", g_MCfg.mV23, "VA")
	$("#meas_val_24").val(checkValue(g_MCfg.mV24));
	fillField1("#meas_val_24", g_MCfg.mV24, "")
	$("#meas_val_25").val(checkValue(g_MCfg.mV25));
	fillField1("#meas_val_25", g_MCfg.mV25, "")
	$("#meas_val_26").val(checkValue(g_MCfg.mV26) + " %");
	fillField1("#meas_val_26", g_MCfg.mV26, "%")
	$("#meas_val_27").val(checkValue(g_MCfg.mV27) + " %");
	fillField1("#meas_val_27", g_MCfg.mV27, "%")
	$("#meas_val_28").val(checkValue(g_MCfg.mV28) + " V");
	fillField1("#meas_val_28", g_MCfg.mV28, "V")
	$("#meas_val_29").val(checkValue(g_MCfg.mV29) + " A");
	fillField1("#meas_val_29", g_MCfg.mV29, "A")
	$("#meas_val_30").val(checkValue(g_MCfg.mV30) + " W");
	fillField1("#meas_val_30", g_MCfg.mV30, "W")
	$("#meas_val_31").val(checkValue(g_MCfg.mV31) + " var");
	fillField1("#meas_val_31", g_MCfg.mV31, "var")
	$("#meas_val_32").val(checkValue(g_MCfg.mV32) + " VA");
	fillField1("#meas_val_32", g_MCfg.mV32, "VA")
	$("#meas_val_33").val(checkValue(g_MCfg.mV33));
	fillField1("#meas_val_33", g_MCfg.mV33, "")
	$("#meas_val_34").val(checkValue(g_MCfg.mV34));
	fillField1("#meas_val_34", g_MCfg.mV34, "")
	$("#meas_val_35").val(checkValue(g_MCfg.mV35) + " %");
	fillField1("#meas_val_35", g_MCfg.mV35, "%")
	$("#meas_val_36").val(checkValue(g_MCfg.mV36) + " %");
	fillField1("#meas_val_36", g_MCfg.mV36, "%")
	$("#meas_val_37").val(checkValue(g_MCfg.mV37) + " Hz");
	fillField1("#meas_val_37", g_MCfg.mV37, "Hz")
	$("#meas_val_38").val(checkValue(g_MCfg.mV38) + " V");
	fillField1("#meas_val_38", g_MCfg.mV38, "V")
	$("#meas_val_39").val(checkValue(g_MCfg.mV39) + " V");
	fillField1("#meas_val_39", g_MCfg.mV39, "V")
	$("#meas_val_40").val(checkValue(g_MCfg.mV40) + " V");
	fillField1("#meas_val_40", g_MCfg.mV40, "V")
	$("#meas_val_41").val(checkValue(g_MCfg.mV41) + " V");
	fillField1("#meas_val_41", g_MCfg.mV41, "V")
	$("#meas_val_42").val(checkValue(g_MCfg.mV42) + " W");
	fillField1("#meas_val_42", g_MCfg.mV42, "W")
	$("#meas_val_43").val(checkValue(g_MCfg.mV43) + " VA");
	fillField1("#meas_val_43", g_MCfg.mV43, "VA")
	$("#meas_val_44").val(checkValue(g_MCfg.mV44) + " A");
	fillField1("#meas_val_44", g_MCfg.mV44, "A")
	$("#meas_val_45").val(checkValue(g_MCfg.mV45) + " A")
	fillField1("#meas_val_45", g_MCfg.mV45, "A")
}

function fillMeasEnSettings() {
	/*
	$("#meas_en_val_1").val(checkValue((g_eMCfg.enV1 * 1e5 + g_eMCfg.enV2)) + " kWh");
	fillField1("#meas_en_val_1",((g_eMCfg.enV1 * 1e5 + g_eMCfg.enV2)*1000),"Wh")
    $("#meas_en_val_2").val(checkValue((g_eMCfg.enV3 * 1e5 + g_eMCfg.enV4)) + " kWh");
	fillField1("#meas_en_val_2",((g_eMCfg.enV3 * 1e5 + g_eMCfg.enV4)*1000),"Wh")
    $("#meas_en_val_3").val(checkValue((g_eMCfg.enV5 * 1e5 + g_eMCfg.enV6)) + " kvarh");
	fillField1("#meas_en_val_3",((g_eMCfg.enV5 * 1e5 + g_eMCfg.enV6)*1000),"varh")
    $("#meas_en_val_4").val(checkValue((g_eMCfg.enV7 * 1e5 + g_eMCfg.enV8)) + " kvarh");
	fillField1("#meas_en_val_4",((g_eMCfg.enV7 * 1e5 + g_eMCfg.enV8)*1000),"varh")
    $("#meas_en_val_5").val(checkValue((g_eMCfg.enV9 * 1e5 + g_eMCfg.enV10)) + " kvAh");
	fillField1("#meas_en_val_5",((g_eMCfg.enV9 * 1e5 + g_eMCfg.enV10)*1000),"VAh")
    $("#meas_en_val_6").val(checkValue((g_eMCfg.enV11 * 1e5 + g_eMCfg.enV12)) + " kWh")
	fillField1("#meas_en_val_6",((g_eMCfg.enV11 * 1e5 + g_eMCfg.enV12)*1000),"Wh")
	*/
	$("#meas_en_val_1").val(g_eMCfg.en3pInp.toString() + " kWh");
	$("#meas_en_val_2").val(g_eMCfg.en3pExp.toString() + " kWh");
	$("#meas_en_val_3").val(g_eMCfg.en3pInd.toString() + " kvarh");
	$("#meas_en_val_4").val(g_eMCfg.en3pCap.toString() + " kvarh");
	$("#meas_en_val_5").val(g_eMCfg.en3pS.toString() + " kVAh");
}

function fillMeasMinSettings() {
	$("#meas_min_val_1").val(checkValue(g_miMCfg.miV1) + " V");
	fillField1("#meas_min_val_1", g_miMCfg.miV1, "V")
	$("#meas_min_val_2").val(checkValue(g_miMCfg.miV2) + " V");
	fillField1("#meas_min_val_2", g_miMCfg.miV2, "V")
	$("#meas_min_val_3").val(checkValue(g_miMCfg.miV3) + " V");
	fillField1("#meas_min_val_3", g_miMCfg.miV3, "V")
	$("#meas_min_val_4").val(checkValue(g_miMCfg.miV4) + " A");
	fillField1("#meas_min_val_4", g_miMCfg.miV4, "A")
	$("#meas_min_val_5").val(checkValue(g_miMCfg.miV5) + " A");
	fillField1("#meas_min_val_5", g_miMCfg.miV5, "A")
	$("#meas_min_val_6").val(checkValue(g_miMCfg.miV6) + " A");
	fillField1("#meas_min_val_6", g_miMCfg.miV6, "A")
	$("#meas_min_val_7").val(checkValue(g_miMCfg.miV7) + " W");
	fillField1("#meas_min_val_7", g_miMCfg.miV7, "W")
	$("#meas_min_val_8").val(checkValue(g_miMCfg.miV8) + " W");
	fillField1("#meas_min_val_8", g_miMCfg.miV8, "W")
	$("#meas_min_val_9").val(checkValue(g_miMCfg.miV9) + " W");
	fillField1("#meas_min_val_9", g_miMCfg.miV9, "W")
	$("#meas_min_val_10").val(checkValue(g_miMCfg.miV10) + " var");
	fillField1("#meas_min_val_10", g_miMCfg.miV10, "var")
	$("#meas_min_val_11").val(checkValue(g_miMCfg.miV11) + " var");
	fillField1("#meas_min_val_11", g_miMCfg.miV11, "var")
	$("#meas_min_val_12").val(checkValue(g_miMCfg.miV12) + " var");
	fillField1("#meas_min_val_12", g_miMCfg.miV12, "var")
	$("#meas_min_val_13").val(checkValue(g_miMCfg.miV13) + " VA");
	fillField1("#meas_min_val_13", g_miMCfg.miV13, "VA")
	$("#meas_min_val_14").val(checkValue(g_miMCfg.miV14) + " VA");
	fillField1("#meas_min_val_14", g_miMCfg.miV14, "VA")
	$("#meas_min_val_15").val(checkValue(g_miMCfg.miV15) + " VA");
	fillField1("#meas_min_val_15", g_miMCfg.miV15, "VA")
	$("#meas_min_val_16").val(checkValue(g_miMCfg.miV16));
	fillField1("#meas_min_val_16", g_miMCfg.miV16, "")
	$("#meas_min_val_17").val(checkValue(g_miMCfg.miV17));
	fillField1("#meas_min_val_17", g_miMCfg.miV17, "")
	$("#meas_min_val_18").val(checkValue(g_miMCfg.miV18));
	fillField1("#meas_min_val_18", g_miMCfg.miV18, "")
	$("#meas_min_val_19").val(checkValue(g_miMCfg.miV19));
	fillField1("#meas_min_val_19", g_miMCfg.miV19, "")
	$("#meas_min_val_20").val(checkValue(g_miMCfg.miV20));
	fillField1("#meas_min_val_20", g_miMCfg.miV20, "")
	$("#meas_min_val_21").val(checkValue(g_miMCfg.miV21));
	fillField1("#meas_min_val_21", g_miMCfg.miV21, "")
	$("#meas_min_val_22").val(checkValue(g_miMCfg.miV22) + " V");
	fillField1("#meas_min_val_22", g_miMCfg.miV22, "V")
	$("#meas_min_val_23").val(checkValue(g_miMCfg.miV23) + " V");
	fillField1("#meas_min_val_23", g_miMCfg.miV23, "V")
	$("#meas_min_val_24").val(checkValue(g_miMCfg.miV24) + " V");
	fillField1("#meas_min_val_24", g_miMCfg.miV24, "V")
	$("#meas_min_val_25").val(checkValue(g_miMCfg.miV25) + " V");
	fillField1("#meas_min_val_25", g_miMCfg.miV25, "V")
	$("#meas_min_val_26").val(checkValue(g_miMCfg.miV26) + " A");
	fillField1("#meas_min_val_26", g_miMCfg.miV26, "A")
	$("#meas_min_val_27").val(checkValue(g_miMCfg.miV27) + " W");
	fillField1("#meas_min_val_27", g_miMCfg.miV27, "W")
	$("#meas_min_val_28").val(checkValue(g_miMCfg.miV28) + " var");
	fillField1("#meas_min_val_28", g_miMCfg.miV28, "var")
	$("#meas_min_val_29").val(checkValue(g_miMCfg.miV29) + " VA");
	fillField1("#meas_min_val_29", g_miMCfg.miV29, "VA")
	$("#meas_min_val_30").val(checkValue(g_miMCfg.miV30));
	fillField1("#meas_min_val_30", g_miMCfg.miV30, "")
	$("#meas_min_val_31").val(checkValue(g_miMCfg.miV31));
	fillField1("#meas_min_val_31", g_miMCfg.miV31, "")
	$("#meas_min_val_32").val(checkValue(g_miMCfg.miV32) + " Hz");
	fillField1("#meas_min_val_32", g_miMCfg.miV32, "Hz")
	$("#meas_min_val_33").val(checkValue(g_miMCfg.miV33) + " V");
	fillField1("#meas_min_val_33", g_miMCfg.miV33, "V")
	$("#meas_min_val_34").val(checkValue(g_miMCfg.miV34) + " W");
	fillField1("#meas_min_val_34", g_miMCfg.miV34, "W")
	$("#meas_min_val_35").val(checkValue(g_miMCfg.miV35) + " VA");
	fillField1("#meas_min_val_35", g_miMCfg.miV35, "VA")
	$("#meas_min_val_36").val(checkValue(g_miMCfg.miV36) + " A");
	fillField1("#meas_min_val_36", g_miMCfg.miV36, "A")
	$("#meas_min_val_37").val(checkValue(g_miMCfg.miV37) + " A");
	fillField1("#meas_min_val_37", g_miMCfg.miV37, "A")
	$("#meas_min_val_40").val(checkValue(g_miMCfg.miV40) + " %");
	fillField1("#meas_min_val_40", g_miMCfg.miV40, "%")
	$("#meas_min_val_41").val(checkValue(g_miMCfg.miV41) + " %");
	fillField1("#meas_min_val_41", g_miMCfg.miV41, "%")
	$("#meas_min_val_42").val(checkValue(g_miMCfg.miV42) + " %");
	fillField1("#meas_min_val_42", g_miMCfg.miV42, "%")
	$("#meas_min_val_43").val(checkValue(g_miMCfg.miV43) + " %")
	fillField1("#meas_min_val_43", g_miMCfg.miV43, "%")

	$("#meas_min_val_44").val(checkValue(g_miMCfg.miV44) + " %")
	fillField1("#meas_min_val_44", g_miMCfg.miV44, " %")
	$("#meas_min_val_45").val(checkValue(g_miMCfg.miV45) + " %")
	fillField1("#meas_min_val_45", g_miMCfg.miV45, " %")
	$("#meas_min_val_46").val(checkValue(g_miMCfg.miV46) + " %")
	fillField1("#meas_min_val_46", g_miMCfg.miV46, " %")
	$("#meas_min_val_47").val(checkValue(g_miMCfg.miV47) + " %")
	fillField1("#meas_min_val_47", g_miMCfg.miV47, " %")
}

function fillMeasMaxSettings() {
	$("#meas_max_val_1").val(checkValue(g_mxMCfg.mxV1) + " V");
	fillField1("#meas_max_val_1", g_mxMCfg.mxV1, "V")
	$("#meas_max_val_2").val(checkValue(g_mxMCfg.mxV2) + " V");
	fillField1("#meas_max_val_2", g_mxMCfg.mxV2, "V")
	$("#meas_max_val_3").val(checkValue(g_mxMCfg.mxV3) + " V");
	fillField1("#meas_max_val_3", g_mxMCfg.mxV3, "V")
	$("#meas_max_val_4").val(checkValue(g_mxMCfg.mxV4) + " A");
	fillField1("#meas_max_val_4", g_mxMCfg.mxV4, "A")
	$("#meas_max_val_5").val(checkValue(g_mxMCfg.mxV5) + " A");
	fillField1("#meas_max_val_5", g_mxMCfg.mxV5, "A")
	$("#meas_max_val_6").val(checkValue(g_mxMCfg.mxV6) + " A");
	fillField1("#meas_max_val_6", g_mxMCfg.mxV6, "A")
	$("#meas_max_val_7").val(checkValue(g_mxMCfg.mxV7) + " W");
	fillField1("#meas_max_val_7", g_mxMCfg.mxV7, "W")
	$("#meas_max_val_8").val(checkValue(g_mxMCfg.mxV8) + " W");
	fillField1("#meas_max_val_8", g_mxMCfg.mxV8, "W")
	$("#meas_max_val_9").val(checkValue(g_mxMCfg.mxV9) + " W");
	fillField1("#meas_max_val_9", g_mxMCfg.mxV9, "W")
	$("#meas_max_val_10").val(checkValue(g_mxMCfg.mxV10) + " var");
	fillField1("#meas_max_val_10", g_mxMCfg.mxV10, "var")
	$("#meas_max_val_11").val(checkValue(g_mxMCfg.mxV11) + " var");
	fillField1("#meas_max_val_11", g_mxMCfg.mxV11, "var")
	$("#meas_max_val_12").val(checkValue(g_mxMCfg.mxV12) + " var");
	fillField1("#meas_max_val_12", g_mxMCfg.mxV12, "var")
	$("#meas_max_val_13").val(checkValue(g_mxMCfg.mxV13) + " VA");
	fillField1("#meas_max_val_13", g_mxMCfg.mxV13, "VA")
	$("#meas_max_val_14").val(checkValue(g_mxMCfg.mxV14) + " VA");
	fillField1("#meas_max_val_14", g_mxMCfg.mxV14, "VA")
	$("#meas_max_val_15").val(checkValue(g_mxMCfg.mxV15) + " VA");
	fillField1("#meas_max_val_15", g_mxMCfg.mxV15, "VA")
	$("#meas_max_val_16").val(checkValue(g_mxMCfg.mxV16));
	fillField1("#meas_max_val_16", g_mxMCfg.mxV16, "")
	$("#meas_max_val_17").val(checkValue(g_mxMCfg.mxV17));
	fillField1("#meas_max_val_17", g_mxMCfg.mxV17, "")
	$("#meas_max_val_18").val(checkValue(g_mxMCfg.mxV18));
	fillField1("#meas_max_val_18", g_mxMCfg.mxV18, "")
	$("#meas_max_val_19").val(checkValue(g_mxMCfg.mxV19));
	fillField1("#meas_max_val_19", g_mxMCfg.mxV19, "")
	$("#meas_max_val_20").val(checkValue(g_mxMCfg.mxV20));
	fillField1("#meas_max_val_20", g_mxMCfg.mxV20, "")
	$("#meas_max_val_21").val(checkValue(g_mxMCfg.mxV21));
	fillField1("#meas_max_val_21", g_mxMCfg.mxV21, "")
	$("#meas_max_val_22").val(checkValue(g_mxMCfg.mxV22) + " V");
	fillField1("#meas_max_val_22", g_mxMCfg.mxV22, "V")
	$("#meas_max_val_23").val(checkValue(g_mxMCfg.mxV23) + " V");
	fillField1("#meas_max_val_23", g_mxMCfg.mxV23, "V")
	$("#meas_max_val_24").val(checkValue(g_mxMCfg.mxV24) + " V");
	fillField1("#meas_max_val_24", g_mxMCfg.mxV24, "V")
	$("#meas_max_val_25").val(checkValue(g_mxMCfg.mxV25) + " V");
	fillField1("#meas_max_val_25", g_mxMCfg.mxV25, "V")
	$("#meas_max_val_26").val(checkValue(g_mxMCfg.mxV26) + " A");
	fillField1("#meas_max_val_26", g_mxMCfg.mxV26, "A")
	$("#meas_max_val_27").val(checkValue(g_mxMCfg.mxV27) + " W");
	fillField1("#meas_max_val_27", g_mxMCfg.mxV27, "W")
	$("#meas_max_val_28").val(checkValue(g_mxMCfg.mxV28) + " var");
	fillField1("#meas_max_val_28", g_mxMCfg.mxV28, "var")
	$("#meas_max_val_29").val(checkValue(g_mxMCfg.mxV29) + " VA");
	fillField1("#meas_max_val_29", g_mxMCfg.mxV29, "VA")
	$("#meas_max_val_30").val(checkValue(g_mxMCfg.mxV30));
	fillField1("#meas_max_val_30", g_mxMCfg.mxV30, "")
	$("#meas_max_val_31").val(checkValue(g_mxMCfg.mxV31));
	fillField1("#meas_max_val_31", g_mxMCfg.mxV31, "")
	$("#meas_max_val_32").val(checkValue(g_mxMCfg.mxV32) + " Hz");
	fillField1("#meas_max_val_32", g_mxMCfg.mxV32, "Hz")
	$("#meas_max_val_33").val(checkValue(g_mxMCfg.mxV33) + " V");
	fillField1("#meas_max_val_33", g_mxMCfg.mxV33, "V")
	$("#meas_max_val_34").val(checkValue(g_mxMCfg.mxV34) + " W");
	fillField1("#meas_max_val_34", g_mxMCfg.mxV34, "W")
	$("#meas_max_val_35").val(checkValue(g_mxMCfg.mxV35) + " VA");
	fillField1("#meas_max_val_35", g_mxMCfg.mxV35, "VA")
	$("#meas_max_val_36").val(checkValue(g_mxMCfg.mxV36) + " A");
	fillField1("#meas_max_val_36", g_mxMCfg.mxV36, "A")
	$("#meas_max_val_37").val(checkValue(g_mxMCfg.mxV37) + " A");
	fillField1("#meas_max_val_37", g_mxMCfg.mxV37, "A");
	$("#meas_max_val_40").val(checkValue(g_mxMCfg.mxV40) + " %");
	fillField1("#meas_max_val_40", g_mxMCfg.mxV40, "%")
	$("#meas_max_val_41").val(checkValue(g_mxMCfg.mxV41) + " %");
	fillField1("#meas_max_val_41", g_mxMCfg.mxV41, "%")
	$("#meas_max_val_42").val(checkValue(g_mxMCfg.mxV42) + " %");
	fillField1("#meas_max_val_42", g_mxMCfg.mxV42, "%")
	$("#meas_max_val_43").val(checkValue(g_mxMCfg.mxV43) + " %")
	fillField1("#meas_max_val_43", g_mxMCfg.mxV43, "%")

	$("#meas_max_val_44").val(checkValue(g_mxMCfg.mxV44) + " %")
	fillField1("#meas_max_val_44", g_mxMCfg.mxV44, " %")
	$("#meas_max_val_45").val(checkValue(g_mxMCfg.mxV45) + " %")
	fillField1("#meas_max_val_45", g_mxMCfg.mxV45, " %")
	$("#meas_max_val_46").val(checkValue(g_mxMCfg.mxV46) + " %")
	fillField1("#meas_max_val_46", g_mxMCfg.mxV46, " %")
	$("#meas_max_val_47").val(checkValue(g_mxMCfg.mxV47) + " %")
	fillField1("#meas_max_val_47", g_mxMCfg.mxV47, " %")

}
//----------------------------------Initialization Getting Data Functions--------------------------//
function AlarmStatusInitialization() {
	sleep(50)
	getAlarmsStatus();
	sleep(50)
}

function TailsInfoSettingsInitialization() {
	sleep(50);
	getTailsInfoCfg();
	sleep(50);
}
/*
function ConfigSettingInitialization() {
    acc1();
	sleep(50);
	acc2();
	sleep(50);
    getConfigCfg();
	sleep(50);
	
}
*/
function GeneralSettingInitialization() {
	acc2();
	sleep(50);
	getGeneralSetting();
	sleep(50);
}

function AlarmSettingInitialization() {
	acc2();
	sleep(50);
	getAlarmSetting();
	sleep(50);
}

function MailSettingInitialization() {
	acc2();
	sleep(50);
	getMailSetting();
	sleep(50);
}

function inputParamCfgInitialization() {
	acc2;
	sleep(50);
	getInputParamCfg();
	sleep(50);
}

function mdbCfgInitialization() {
	sleep(50);
	acc2();
	sleep(50);
	getMdbCfg();
	sleep(50);
}

function ethernetCfgInitialization() {
	acc1(getEthernetCfg);
}

function arhCfgInitialization() {
	acc2;
	sleep(50);
	getArchCfg();
	sleep(50);
}

function servCfgInitialization() {
	acc2;
	sleep(50);
	getServCfg();
	sleep(50);
}

function aboutCfgInitialization() {
	acc2;
	getAboutCfg();
	sleep(50);

}

function measMinCfgInitialization() {
	acc2;
	getMeasMinCfg()
}

function measMaxCfgInitialization() {
	acc2;
	getMeasMaxCfg()
}

function AlarmsCfgInitialization() {
	acc2;
	sleep(50);
	getAlarm1Cfg();
	sleep(50);
	getAlarm2Cfg();
	sleep(50);
}
//------------------------------------------------------Saving Data Functions------------------------------------------//
/*
function SavGeneralSetting() {
    var formID = "generalSettingsForm";
    var ajaxDataStr = "";
	if(g_ConfigCfg.conConfig == 2){
		var P1T1;
		var P1T2;
		var P1T3;
		if ($('input:checkbox[name=P1T1]').is(':checked')) P1T1 = 1;
		if ($('input:checkbox[name=P1T2]').is(':checked')) P1T2 = 1;
		if ($('input:checkbox[name=P1T3]').is(':checked')) P1T3 = 1;
		ajaxDataStr += g_ConfigCfg.conConfig + ";" + P1T1 + ";" + P1T2 + ";" + P1T3;
	}
	if(g_ConfigCfg.conConfig == 0){
		var P4T1; var P4T2; var P4T3; var P4T4; var P4T5;  var P4T6; var P4T7; var P4T8; var P4T9;
		if ($('input:checkbox[name=P4T1]').is(':checked')) P4T1 = 1;
		if ($('input:checkbox[name=P4T2]').is(':checked')) P4T2 = 1;
		if ($('input:checkbox[name=P4T3]').is(':checked')) P4T3 = 1;
		if ($('input:checkbox[name=P4T4]').is(':checked')) P4T4 = 1;
		if ($('input:checkbox[name=P4T5]').is(':checked')) P4T5 = 1;
		if ($('input:checkbox[name=P4T6]').is(':checked')) P4T6 = 1;
		if ($('input:checkbox[name=P4T7]').is(':checked')) P4T7 = 1;
		if ($('input:checkbox[name=P4T8]').is(':checked')) P4T8 = 1;
		if ($('input:checkbox[name=P4T9]').is(':checked')) P4T9 = 1;
		if ($('input:checkbox[name=P4T10]').is(':checked')) P4T10 = 1;
		ajaxDataStr += g_ConfigCfg.conConfig + ";" + P4T1 + ";" + P4T2 + ";" + P4T3 + ";" + P4T4 + ";" + P4T5 + ";" + P4T6 + ";" + P4T7 + ";" + P4T8 + ";" + P4T9 + ";" + P4T10;
	}
	if(g_ConfigCfg.conConfig == 1){
		var P3T1; var P3T2; var P3T3; var P3T4; var P3T5;
		if ($('input:checkbox[name=P3T1]').is(':checked')) P3T1 = 1;
		if ($('input:checkbox[name=P3T2]').is(':checked')) P3T2 = 1;
		if ($('input:checkbox[name=P3T3]').is(':checked')) P3T3 = 1;
		if ($('input:checkbox[name=P3T4]').is(':checked')) P3T4 = 1;
		if ($('input:checkbox[name=P3T5]').is(':checked')) P3T5 = 1;

		ajaxDataStr += g_ConfigCfg.conConfig + ";" + P3T1 + ";" + P3T2 + ";" + P3T3 + ";" + P3T4 + ";" + P3T5;
	}
    $.ajax({
        type: "GET",
        url: "ajax.sht",
        data: "ajaxFun=setConfigCfg&bigString=" + ajaxDataStr,
        cache: false,
        timeout: 6000,
        success: function(msg) {
            err(msg);
            switch (jQuery.trim(msg)) {
                case "ok":

                case "error":
                    break;
                default:
                    break;
            }
        },
        error: function(jqXHR, textStatus, errorThrown) {}
    });
    return false;
}
*/

function SaveIPSettings1() {
	var formID = "IPSettingsForm1";
	walidEth1();
	if (walidEth1() == false) {
		alert("Bad data format!");
		return;
	}
	if (ftpAdmPassControl.equal == 0) ftpAdmPassControl.compare();
	if (ftpUserPassControl.equal == 0) ftpUserPassControl.compare();
	if (wwwAdmPassControl.equal == 0) wwwAdmPassControl.compare();
	if (wwwUserPassControl.equal == 0) wwwUserPassControl.compare();
	if ((ftpAdmPassControl.equal & ftpUserPassControl.equal & wwwAdmPassControl.equal & wwwUserPassControl.equal) == 0) {
		alert("Passwords fields are not equal");
		return;
	}
	alert("Passwords changed!");
	var ajaxDataStr = "";
	ajaxDataStr += readCookie('session_id') + ";" + $("#wwwAdm").val() + ";" + $("#wwwUsr").val() + ";" + $("#ftpAdm").val() + ";" + $("#ftpUsr").val();
	$.ajax({
		type: "GET",
		url: "ajax.sht",
		data: "ajaxFun=setIP1Settings&bigString=" + ajaxDataStr,
		cache: false,
		timeout: 6000,
		success: function (msg) {
			err(msg);
			switch (jQuery.trim(msg)) {
				case "ok":

				case "error":
					break;
				default:
					break;
			}
		},
		error: function (jqXHR, textStatus, errorThrown) {}
	});
	return false;
}

function walidEth1(){     
	var e=true;
	if(!wal3("wwwAdm")) 
	e=false;
	if(!wal3("wwwUsr")) 
	e=false;
	if(!wal3("ftpAdm"))
	e=false;
	if(!wal3("ftpUsr")) 
	e=false;
	return e
}

function wal3(t){
	var n=document.getElementById(t);
	var letterNumber = /^[0-9a-zA-Z]+$/;
	if(n.value.match(letterNumber)){
		n.className="";
		return true
	}else{
		n.className="error";
		return false
	}
}

function wal2(reg, nam) {
	var p = document.getElementById(nam);
	if ((!reg.test(p.value))) {
		p.className = "error";
		return false;
	} else {
		p.className = '';
		return true;
	}
}
var reg5 = /^([0-9a-zA-Z]+).{3,8}$/; //znaki do hasel
function SaveEraseVal() {
	var tmp = 1;
	var str = "";
	str +=
		readCookie('session_id') + ";" +
		tmp;

	$.ajax({
		type: "GET",
		url: "ajax.sht",
		data: "ajaxFun=setEraseMinMax&bigString=" + str,
		cache: false,
		timeout: 9000,
		async: false,
		success: function (msg) {
			err(msg);
			switch (jQuery.trim(msg)) {
				case "ok":
				case "error":
					break;
				default:
					break;
			}
		},
		error: function (jqXHR, textStatus, errorThrown) {}
	});
	return false;
};
//Strony z pomiarami
var conConfig;

function getPagesCfg() {
	$.getJSON("ajax.sht" + Math.random(), "ajaxFun=getPagesCfg", function (msg) {
		try {
			g_PagesCfg = msg;
			conConfig = g_PagesCfg.conConfig;
			if (g_PagesCfg == 6) {
				logout();
			}
			if (mainPage == 1) {
				fillPagesCfg();
			}
			if (harm == 1) {
				if (g_PagesCfg.conConfig == 1) {
					$("#U1").text("U1-2 ")
					$("#U2").text("U2-3 ")
					$("#U3").text("U3-1 ")
					$("#I1").text("I1-2 ")
					$("#I2").text("I2-3 ")
					$("#I3").text("I3-1 ")
				}
			}
		} catch (err) {
			console.error(err);
		}
	});
}
var rej = [];

var tailString = "";
/*
var int1
int1 = setInterval(function(){
	getPagesCfg()
},60400)
*/

var int2
var measStart = 0;
int2 = setInterval(function () {
	if (measStart) {
		getMeasureCfg()
		if (readCookie('session_id') < 1) {
			window.location = "index.htm";
		} else
			$(document).ready(function () {
				chanLang();
			});
	}
}, 5000)


function fillPagesCfg() {
	var idxData = new Array(
		g_PagesCfg.r5, g_PagesCfg.r6, g_PagesCfg.r7, g_PagesCfg.r8, g_PagesCfg.r9, 
		g_PagesCfg.r10, g_PagesCfg.r11, g_PagesCfg.r12, g_PagesCfg.r13, g_PagesCfg.r14, g_PagesCfg.r15, g_PagesCfg.r16, g_PagesCfg.r17, g_PagesCfg.r18, g_PagesCfg.r19,
		g_PagesCfg.r20, g_PagesCfg.r21, g_PagesCfg.r22, g_PagesCfg.r23, g_PagesCfg.r24, g_PagesCfg.r25, g_PagesCfg.r26, g_PagesCfg.r27, g_PagesCfg.r28, g_PagesCfg.r29,
		g_PagesCfg.r30, g_PagesCfg.r31, g_PagesCfg.r32, g_PagesCfg.r33, g_PagesCfg.r34, g_PagesCfg.r35, g_PagesCfg.r36, g_PagesCfg.r37, g_PagesCfg.r38, g_PagesCfg.r39,
		g_PagesCfg.r40, g_PagesCfg.r41, g_PagesCfg.r42, g_PagesCfg.r43, g_PagesCfg.r44, g_PagesCfg.r45, g_PagesCfg.r46, g_PagesCfg.r47, g_PagesCfg.r48, g_PagesCfg.r49,
		g_PagesCfg.r50, g_PagesCfg.r51, g_PagesCfg.r52, g_PagesCfg.r53, g_PagesCfg.r54, g_PagesCfg.r55, g_PagesCfg.r56, g_PagesCfg.r57, g_PagesCfg.r58, g_PagesCfg.r59,
		g_PagesCfg.r60, g_PagesCfg.r61, g_PagesCfg.r62, g_PagesCfg.r63, g_PagesCfg.r64, g_PagesCfg.r65, g_PagesCfg.r66, g_PagesCfg.r67, g_PagesCfg.r68, g_PagesCfg.r69,
		g_PagesCfg.r70, g_PagesCfg.r71, g_PagesCfg.r72, g_PagesCfg.r73, g_PagesCfg.r74, g_PagesCfg.r75, g_PagesCfg.r76, g_PagesCfg.r77, g_PagesCfg.r78, g_PagesCfg.r79,
		g_PagesCfg.r80, g_PagesCfg.r81, g_PagesCfg.r82, g_PagesCfg.r83, g_PagesCfg.r84, g_PagesCfg.r85)

	rej = idxData;
	
	tailString = "";
	var ilStron = 0;
	for (y = 1; y <= 22; y++) {
		if (y <= 16) {
			if (( g_PagesCfg.r3 >>> (y - 1)) & 1) {
				tailString + genetateTail(y);
				ilStron = ilStron + 1;
			}
		} else {
			if (( g_PagesCfg.r4 >>> (y - 17)) & 1) {
				tailString + genetateTail(y);
				ilStron = ilStron + 1;
			}
		}
	}
	var emptyCard = ilStron % 4;
	if (ilStron % 4 != 0) {
		if (isMobile == 0) {
			for (var i = 0; i < emptyCard; i++)
				tailString = tailString + '<div class="tile low wide empty"></div>'
		}
	}

	document.getElementById("allTails").innerHTML = tailString;

	getMeasureCfg();
	chanLang();
	measStart = 1;

}
var FTP_port_adress = 0;
var loadLogo = 0;
	
function getMeasureCfg() {
	$.getJSON("ajax.sht" + Math.random(), "ajaxFun=getMeasureCfg", function (msg) {
		try {
			g_MeasureCfg = msg;
			FTP_port_adress = msg.DPort;
			if (g_PagesCfg == 6) {
				logout();
			}
			fillMeasureCfg();
			if (loadLogo == 0) {
				loadLogoFunc(g_MeasureCfg.brand)
				loadLogo += 1;
			}
		} catch (err) {
			console.error(err);
		}
	});
}

function loadLogoFunc(brand) {
	if (brand == 0) {
		$('#logoText').css('display', 'block');
		$('#foot').html('<div class="text-footer margin" align="center"></br>Copyright &copy; 2018, <a href="http://www.lumel.com.pl/" link="#C0C0C0" vlink="#808080" alink="#FF0000">Lumel S.A.</a> All rights reserved.</div>');
	}
	if (brand == 1) {
		var logoString = '<?xml version="1.0" encoding="UTF-8"?> <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"> <!-- Creator: CorelDRAW --> <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="123.956mm" height="29.8516mm" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd" viewBox="0 0 105.545 25.4178" xmlns:xlink="http://www.w3.org/1999/xlink"> <defs> <style type="text/css"> <![CDATA[ .str0 {stroke:#666666;stroke-width:0.170294} .fil5 {fill:none} .fil3 {fill:white} .fil4 {fill:#C2C1C1} .fil6 {fill:#666666} .fil2 {fill:#8A1718} .fil7 {fill:#666666;fill-rule:nonzero} .fil1 {fill:url(#id1)} .fil0 {fill:url(#id2)} ]]> </style> <clipPath id="id0"> <path d="M10.9833 4.38721c4.81141,0 9.62291,0 14.4344,0l0 3.1742 0 2.37535 -3.30397 0 0 -2.37535 -2.47778 0 0 11.7077 1.96716 0 0 3.17429 -1.96716 0 -3.85538 0 -1.96716 0 0 -3.17429 1.96716 0 0 -11.7077 -2.24354 0 0 2.34172 -4.35239 0 0 -1.47867c0,-1.33536 -1.8385,-2.06065 -3.23219,-1.78477 -1.39795,0.276643 -2.22856,1.93591 -0.914992,2.79615 1.43311,0.938663 4.58245,1.14361 6.3599,2.41716 3.06462,2.19586 2.50963,7.19503 -0.926572,9.16993 -3.28575,1.8884 -8.14799,0.845512 -9.69708,-2.52095l-0.773733 0 0 -3.56835 4.06825 0 0 1.52252c0.363323,0.814689 0.894216,1.44682 1.95328,1.71393 2.41716,0.609484 4.32676,-2.43666 1.59081,-3.47895 -2.57596,-0.981237 -7.33169,-1.57761 -7.33169,-6.32193 0,-5.74003 7.28349,-6.6047 10.7027,-3.98199z"/> </clipPath> <linearGradient id="id1" gradientUnits="userSpaceOnUse" x1="24.6781" y1="9.54798" x2="0.739504" y2="15.8697"> <stop offset="0" style="stop-color:#EB684D"/> <stop offset="0.439216" style="stop-color:#F5B3A6"/> <stop offset="1" style="stop-color:white"/> </linearGradient> <linearGradient id="id2" gradientUnits="userSpaceOnUse" x1="6.68882" y1="18.8893" x2="18.7289" y2="6.52841"> <stop offset="0" style="stop-color:#C31B22"/> <stop offset="1" style="stop-color:#8A1718"/> </linearGradient> </defs> <g id="Warstwa_x0020_1"> <metadata id="CorelCorpID_0Corel-Layer"/> <g id="_170397504"> <path id="_170397672" class="fil0" d="M25.4177 0l8.51472e-005 0 -8.51472e-005 0c-12.5596,5.04421 -20.5241,10.3149 -25.4176,25.4176l0 0.000170294c12.8724,-4.54303 22.0315,-12.3807 25.4176,-25.4178z"/> <path id="_170397624" class="fil1" d="M0 0l25.4177 0c-12.5596,5.04421 -20.5241,10.315 -25.4177,25.4178l0 -25.4178z"/> <path id="_170397576" class="fil2" d="M25.4177 0l0 25.4178 -25.4177 0c12.8725,-4.54303 22.0316,-12.3807 25.4177,-25.4178z"/> <path id="_170397528" class="fil3" d="M10.9833 4.38721c4.81141,0 9.62291,0 14.4344,0l0 3.1742 0 2.37535 -3.30397 0 0 -2.37535 -2.47778 0 0 11.7077 1.96716 0 0 3.17429 -1.96716 0 -3.85538 0 -1.96716 0 0 -3.17429 1.96716 0 0 -11.7077 -2.24354 0 0 2.34172 -4.35239 0 0 -1.47867c0,-1.33536 -1.8385,-2.06065 -3.23219,-1.78477 -1.39795,0.276643 -2.22856,1.93591 -0.914992,2.79615 1.43311,0.938663 4.58245,1.14361 6.3599,2.41716 3.06462,2.19586 2.50963,7.19503 -0.926572,9.16993 -3.28575,1.8884 -8.14799,0.845512 -9.69708,-2.52095l-0.773733 0 0 -3.56835 4.06825 0 0 1.52252c0.363323,0.814689 0.894216,1.44682 1.95328,1.71393 2.41716,0.609484 4.32676,-2.43666 1.59081,-3.47895 -2.57596,-0.981237 -7.33169,-1.57761 -7.33169,-6.32193 0,-5.74003 7.28349,-6.6047 10.7027,-3.98199z"/> <g style="clip-path:url(#id0)"> <g> <path id="_170396976" class="fil4" d="M25.4177 0l0 25.4178 -25.4177 0c12.8725,-4.54303 22.0316,-12.3807 25.4177,-25.4178z"/> </g> </g> <path class="fil5" d="M10.9833 4.38721c4.81141,0 9.62291,0 14.4344,0l0 3.1742 0 2.37535 -3.30397 0 0 -2.37535 -2.47778 0 0 11.7077 1.96716 0 0 3.17429 -1.96716 0 -3.85538 0 -1.96716 0 0 -3.17429 1.96716 0 0 -11.7077 -2.24354 0 0 2.34172 -4.35239 0 0 -1.47867c0,-1.33536 -1.8385,-2.06065 -3.23219,-1.78477 -1.39795,0.276643 -2.22856,1.93591 -0.914992,2.79615 1.43311,0.938663 4.58245,1.14361 6.3599,2.41716 3.06462,2.19586 2.50963,7.19503 -0.926572,9.16993 -3.28575,1.8884 -8.14799,0.845512 -9.69708,-2.52095l-0.773733 0 0 -3.56835 4.06825 0 0 1.52252c0.363323,0.814689 0.894216,1.44682 1.95328,1.71393 2.41716,0.609484 4.32676,-2.43666 1.59081,-3.47895 -2.57596,-0.981237 -7.33169,-1.57761 -7.33169,-6.32193 0,-5.74003 7.28349,-6.6047 10.7027,-3.98199z"/> </g> <path class="fil6 str0" d="M43.9086 9.18883l1.10828 1.18738c0.462435,-0.309595 0.855985,-0.709872 1.73854,-0.563249 1.03846,0.172508 1.20986,0.53762 1.20986,1.52848l-2.06967 0c-3.06913,0 -3.16007,4.5535 0.248374,4.5535 1.04058,0 1.22442,-0.262594 1.8213,-0.662275l0 0.579512 1.90432 0 0 -4.80188c0,-1.85519 -1.07626,-2.81497 -2.89782,-2.81497 -1.35001,0 -2.04106,0.177787 -3.06317,0.993498zm48.1017 2.48374l0 0.827972c0,1.88507 1.28164,3.39439 3.1461,3.39439 1.12233,0 2.18139,-0.268129 3.18314,-1.18738 -0.26915,-0.283711 -0.827546,-0.799107 -1.1133,-1.13076 -0.887489,0.867735 -1.9675,0.673344 -2.06984,0.66236 -0.853516,-0.0926402 -1.30301,-0.837678 -1.24187,-1.57309l4.63635 0c0.148412,-2.40541 -0.598755,-4.47074 -3.39448,-4.47074 -1.91488,0 -3.1461,1.58442 -3.1461,3.47724zm7.94807 5.1331l-0.66236 0 0 1.73862 1.07626 0c0.791869,0 1.46887,-0.546219 1.78843,-1.39531 1.04918,-2.78823 1.88652,-5.21016 3.2619,-8.87081l-1.95694 0c-0.472312,1.279 -1.05131,3.2757 -1.52499,4.54073l-1.48556 -4.54073 -2.06984 0c0.61902,1.28998 1.05795,3.01106 1.63014,4.41369 0.294184,0.721367 0.544346,1.43218 0.802598,2.17849 0.208696,0.656485 -0.162546,2.00547 -0.859646,1.93531zm-69.876 -6.37497l0 0.248374c0,2.95946 4.13952,1.34277 4.13952,2.81497 0,0.787782 -1.02977,0.745123 -1.57301,0.745123 -0.799362,0 -1.26307,-0.34391 -1.73862,-0.66236 -0.115971,0.0776543 -1.15911,1.11866 -1.15911,1.15911 0.961482,1.01972 2.09147,1.15902 3.39448,1.15902 1.58238,0 2.98049,-0.90537 2.98049,-2.48374 0,-3.13154 -4.22237,-1.67212 -4.22237,-2.89765 0,-0.734224 0.797744,-0.745123 1.32464,-0.745123 0.650865,0 1.09942,0.234921 1.47151,0.478102l1.17784 -1.22322c-1.04288,-0.698292 -1.93906,-0.827972 -3.1461,-0.827972 -1.30037,0 -2.64927,0.961312 -2.64927,2.23537zm51.8274 0l0 0.248374c0,2.95946 4.13952,1.34277 4.13952,2.81497 0,0.787782 -1.02977,0.745123 -1.57292,0.745123 -0.799447,0 -1.26316,-0.34391 -1.73862,-0.66236 -0.115971,0.0776543 -1.15919,1.11866 -1.15919,1.15911 0.961568,1.01972 2.09156,1.15902 3.39456,1.15902 1.58229,0 2.98049,-0.90537 2.98049,-2.48374 0,-3.13154 -4.22237,-1.67212 -4.22237,-2.89765 0,-0.734224 0.797659,-0.745123 1.32455,-0.745123 0.650865,0 1.09942,0.234921 1.4716,0.478102l1.17784 -1.22322c-1.04288,-0.698292 -1.93914,-0.827972 -3.14619,-0.827972 -1.30037,0 -2.64927,0.961312 -2.64927,2.23537zm-41.4784 -2.15252l-0.827972 0 0 1.4074 0.579597 0c0.190645,0 0.248374,0.0577298 0.248374,0.248374l0 5.87822 1.90415 0 0 -6.1266 1.32472 0 0 -1.4074 -1.32472 0 0 -0.827972c0,-0.193029 0.220872,-0.413901 0.413901,-0.413901l0.91082 0 0 -1.49025 -1.32472 0c-2.20846,0.056708 -1.90244,2.30851 -1.90415,2.73212zm26.9072 0c-0.275962,0 -0.552009,0 -0.827972,0l0 1.4074 0.827972 0c0,0.242244 0.0305679,2.25163 0,3.20835 -0.0472567,1.47833 0.331478,2.96568 2.06976,2.91825l1.15911 0 0 -1.62027c-0.221042,-8.51472e-005 -0.59288,0.0334629 -0.993498,-0.0355915 -0.167314,-0.0288649 -0.331223,-0.180172 -0.331223,-0.413901l0 -4.05684 1.32472 0 0 -1.4074 -1.32472 0 0 -1.32472 -1.90415 0 0 1.32472zm21.3602 5.46424c0,1.2337 0.915843,2.06976 2.15252,2.06976l1.15902 0 0 -1.57292c-0.970082,-8.51472e-005 -1.4074,0.105838 -1.4074,-0.662445l0 -8.03075 -1.90415 0 0 8.19636zm-51.7447 2.06976l1.90423 0 0 -7.534 -1.90423 0 0 7.534zm34.524 0l1.90415 0 0 -7.534 -1.90415 0 0 7.534zm-25.9966 -2.56651l0 0.331138c0,0.525018 0.473163,0.745123 0.993498,0.745123 1.19215,0 1.49025,-0.591262 1.49025,-1.65586l-1.73862 0c-0.323219,0 -0.745123,0.315896 -0.745123,0.579597zm48.433 -1.90423l2.73212 0c0,-0.796637 -0.391592,-1.57301 -1.32464,-1.57301 -0.984132,0 -1.40748,0.709787 -1.40748,1.57301zm-22.4365 -4.30513l1.90415 0 0 -1.57301 -1.90415 0 0 1.57301zm-34.6068 0l1.987 0 0 -1.49025 -1.987 0 0 1.49025zm14.221 1.30096l1.91428 0 0 0.581981c0.712171,-0.626939 1.4716,-0.751765 1.91879,-0.723922 0.447108,0.027758 1.45959,0.213038 1.88065,0.97732 0.443958,-0.554819 1.27746,-0.97732 2.21204,-0.97732 1.81704,0 2.77342,1.30795 2.77342,2.83821l0 4.77965 -1.92424 0 0 -3.92128c0,-0.51761 0.0546645,-2.00053 -1.30463,-1.95796 -1.35921,0.0424033 -1.14804,1.6539 -1.14804,2.28901l0 3.59023 -1.92433 0 0 -4.0972c0,-0.743165 -0.0275877,-1.78205 -1.31561,-1.78205 -1.28794,0 -1.15809,1.29603 -1.15809,2.24584l0 3.6334 -1.92424 0 0 -7.47593zm29.9268 3.8266l0 3.59015 -1.92433 0 0 -4.0972c0,-0.743165 -0.0275877,-1.78205 -1.31561,-1.78205 -1.28794,0 -1.158,1.29603 -1.158,2.24584l0 3.6334 -1.92433 0 0 -7.47584 1.91428 0 0 0.581896c1.12718,-0.992135 2.96432,-0.883913 3.86364,0.249056 0.679134,0.855559 0.568528,2.003 0.544346,3.05474z"/> <path class="fil7" d="M29.7289 19.29l0 -2.35602 0.903412 0c0.15897,0 0.28056,0.00766325 0.36426,0.0224789 0.117673,0.0192433 0.216359,0.0559417 0.296142,0.110266 0.0791869,0.053813 0.143303,0.13002 0.191837,0.227088 0.0485339,0.0976639 0.0725454,0.204609 0.0725454,0.321516 0,0.200181 -0.064797,0.37022 -0.194136,0.50901 -0.129935,0.138279 -0.364175,0.20793 -0.70272,0.20793l-0.614593 0 0 0.957736 -0.316748 0zm0.316748 -1.23591l0.619616 0c0.204694,0 0.350211,-0.0372945 0.436124,-0.112394 0.0859135,-0.075185 0.128913,-0.180512 0.128913,-0.316492 0,-0.0987708 -0.0251184,-0.183237 -0.0759513,-0.253483 -0.0507477,-0.0701613 -0.117077,-0.116311 -0.200181,-0.13879 -0.0535576,-0.0137087 -0.151732,-0.0208611 -0.295631,-0.0208611l-0.61289 0 0 0.842021zm2.37016 1.23591l0 -2.35602 1.06187 0c0.213549,0 0.37584,0.021372 0.486872,0.063605 0.110947,0.0423182 0.199585,0.116907 0.266596,0.223852 0.0663297,0.107541 0.0991965,0.225981 0.0991965,0.35549 0,0.167314 -0.0545794,0.307722 -0.1651,0.42233 -0.10984,0.114693 -0.279964,0.187579 -0.509691,0.218914 0.0842106,0.0395083 0.147816,0.0784206 0.191326,0.117333 0.092555,0.0834443 0.180172,0.188175 0.263275,0.313257l0.41654 0.641244 -0.398744 0 -0.316833 -0.490363c-0.092555,-0.141004 -0.169017,-0.249652 -0.229131,-0.324241 -0.0597733,-0.0750998 -0.113246,-0.127806 -0.160673,-0.157437 -0.0473419,-0.0301421 -0.0953649,-0.0510032 -0.14441,-0.0630941 -0.0362727,-0.00706722 -0.0947689,-0.010984 -0.176766,-0.010984l-0.367581 0 0 1.04612 -0.316748 0zm0.316748 -1.31595l0.681518 0c0.14441,0 0.258166,-0.0148156 0.339652,-0.0444468 0.0819968,-0.0296312 0.143899,-0.0768028 0.186302,-0.141515 0.0423182,-0.0647119 0.0635198,-0.134958 0.0635198,-0.211165 0,-0.111373 -0.0407004,-0.202991 -0.123293,-0.274855 -0.0819116,-0.0718643 -0.211846,-0.107541 -0.389804,-0.107541l-0.757895 0 0 0.779523zm2.55135 1.31595l0 -2.35602 1.73181 0 0 0.278091 -1.41498 0 0 0.721367 1.32506 0 0 0.276473 -1.32506 0 0 0.802002 1.47075 0 0 0.278091 -1.78758 0zm4.38406 -0.826098l0.317344 0.0790166c-0.0664148,0.255612 -0.186302,0.450855 -0.35864,0.585813 -0.172849,0.134362 -0.383673,0.201288 -0.633495,0.201288 -0.258252,0 -0.467969,-0.0515141 -0.629749,-0.154627 -0.161695,-0.103709 -0.284988,-0.253483 -0.369113,-0.449322 -0.0842106,-0.196349 -0.126699,-0.407004 -0.126699,-0.631878 0,-0.245224 0.047427,-0.459199 0.142792,-0.64184 0.0953649,-0.182641 0.230919,-0.321431 0.407089,-0.41637 0.175744,-0.094854 0.369283,-0.142026 0.580704,-0.142026 0.239775,0 0.441148,0.0597733 0.60446,0.179916 0.163483,0.120143 0.277239,0.288564 0.341355,0.506285l-0.311724 0.0724603c-0.0557714,-0.171742 -0.136065,-0.296227 -0.242074,-0.374648 -0.105412,-0.0785057 -0.238157,-0.117418 -0.398744,-0.117418 -0.184003,0 -0.337438,0.0433399 -0.461242,0.13002 -0.123804,0.0871908 -0.210739,0.203502 -0.260465,0.349955 -0.0502369,0.145942 -0.0753553,0.296738 -0.0753553,0.451961 0,0.200777 0.0296312,0.375244 0.0888085,0.525018 0.0596031,0.149178 0.151647,0.261061 0.277154,0.335139 0.125422,0.0740781 0.260976,0.110777 0.407174,0.110777 0.177277,0 0.327306,-0.0504072 0.450599,-0.150796 0.123208,-0.100985 0.206397,-0.250673 0.249822,-0.448726zm1.21182 0.826098l0 -2.35602 0.316748 0 0 2.35602 -0.316748 0zm1.21778 -0.756959l0.299037 -0.0257996c0.013879,0.117929 0.046831,0.214486 0.0986856,0.290182 0.0518547,0.0756959 0.132148,0.136576 0.240881,0.183237 0.108733,0.0465755 0.23143,0.0696504 0.367495,0.0696504 0.121079,0 0.227599,-0.0175403 0.320154,-0.0527061 0.0926402,-0.0356767 0.16178,-0.08387 0.206908,-0.145346 0.0452132,-0.0619872 0.0680326,-0.128913 0.0680326,-0.201884 0,-0.0739929 -0.0217125,-0.138194 -0.0657337,-0.193625 -0.0435102,-0.0554308 -0.11546,-0.101495 -0.215337,-0.13879 -0.0647119,-0.0246927 -0.206312,-0.0630941 -0.426588,-0.115204 -0.219765,-0.0521101 -0.374307,-0.100899 -0.462435,-0.146964 -0.114268,-0.0587516 -0.199585,-0.132234 -0.255953,-0.219424 -0.0557714,-0.0872759 -0.0836146,-0.184855 -0.0836146,-0.293502 0,-0.11844 0.0339737,-0.229812 0.102602,-0.332926 0.0686287,-0.103709 0.168932,-0.18213 0.300655,-0.235943 0.132148,-0.0531319 0.278261,-0.0800384 0.43936,-0.0800384 0.177958,0 0.334118,0.0279283 0.470183,0.084466 0.135554,0.0559417 0.239775,0.13879 0.312916,0.247949 0.0725454,0.109159 0.112054,0.233133 0.117673,0.371327l-0.30389 0.022564c-0.0168591,-0.148667 -0.0719494,-0.261657 -0.166207,-0.337353 -0.0943431,-0.0762919 -0.233133,-0.114182 -0.417221,-0.114182 -0.191837,0 -0.331308,0.0345698 -0.419435,0.103709 -0.0875313,0.0691395 -0.131552,0.152499 -0.131552,0.249566 0,0.0850621 0.031249,0.154712 0.0931511,0.209036 0.0612209,0.0548348 0.220276,0.110777 0.477931,0.167825 0.257655,0.0576447 0.434421,0.107541 0.530382,0.150285 0.139386,0.0636901 0.242584,0.143729 0.308999,0.240285 0.0663297,0.0970678 0.0991965,0.209036 0.0991965,0.335139 0,0.125677 -0.0361876,0.243606 -0.109244,0.354383 -0.0730563,0.110862 -0.177873,0.196946 -0.314619,0.258933 -0.136576,0.0614763 -0.290522,0.0921293 -0.461242,0.0921293 -0.216955,0 -0.398744,-0.030653 -0.544857,-0.0932362 -0.146624,-0.0619872 -0.261487,-0.155223 -0.345272,-0.280305 -0.0831037,-0.124485 -0.12704,-0.266 -0.131042,-0.423437zm2.84366 0.756959l0 -2.35602 0.316748 0 0 2.35602 -0.316748 0zm1.22893 -1.14753c0,-0.391166 0.106604,-0.697271 0.320154,-0.918313 0.213634,-0.221042 0.489171,-0.331819 0.82712,-0.331819 0.220872,0 0.420542,0.0521101 0.597819,0.155734 0.177447,0.10422 0.312916,0.249056 0.406067,0.435017 0.0931511,0.185365 0.139471,0.396616 0.139471,0.631963 0,0.239093 -0.0486191,0.453068 -0.146709,0.641244 -0.0981747,0.188686 -0.236965,0.331308 -0.416625,0.428376 -0.180172,0.0970678 -0.373626,0.145346 -0.581641,0.145346 -0.225896,0 -0.427269,-0.053217 -0.60463,-0.160673 -0.177958,-0.10703 -0.312235,-0.253483 -0.403768,-0.438849 -0.0914481,-0.184855 -0.137257,-0.381289 -0.137257,-0.588027zm0.326795 0.00493854c0,0.284136 0.0775691,0.507392 0.232622,0.670875 0.155564,0.163398 0.350296,0.245139 0.584536,0.245139 0.238668,0 0.435017,-0.0822522 0.588963,-0.247353 0.153946,-0.1651 0.23143,-0.39934 0.23143,-0.70272 0,-0.191411 -0.0334629,-0.358725 -0.0993668,-0.501943 -0.0657337,-0.143132 -0.162205,-0.253909 -0.288819,-0.332926 -0.12721,-0.0784206 -0.269321,-0.117929 -0.427269,-0.117929 -0.224704,0 -0.417647,0.0756959 -0.579427,0.227599 -0.161695,0.151477 -0.24267,0.404875 -0.24267,0.759258zm2.81914 1.14259l0 -2.35602 0.325177 0 1.25822 1.84974 0 -1.84974 0.30389 0 0 2.35602 -0.325177 0 -1.25814 -1.85136 0 1.85136 -0.303976 0zm4.78332 0l0 -2.35602 0.316833 0 0 2.35602 -0.316833 0zm1.32217 0l0 -2.35602 0.325092 0 1.25822 1.84974 0 -1.84974 0.303976 0 0 2.35602 -0.325177 0 -1.25822 -1.85136 0 1.85136 -0.30389 0zm2.76218 -0.756959l0.299037 -0.0257996c0.013879,0.117929 0.046831,0.214486 0.0986856,0.290182 0.0518547,0.0756959 0.132148,0.136576 0.240881,0.183237 0.108733,0.0465755 0.23143,0.0696504 0.367495,0.0696504 0.121079,0 0.227599,-0.0175403 0.320154,-0.0527061 0.0926402,-0.0356767 0.16178,-0.08387 0.206908,-0.145346 0.0452132,-0.0619872 0.0680326,-0.128913 0.0680326,-0.201884 0,-0.0739929 -0.0217125,-0.138194 -0.0658188,-0.193625 -0.0434251,-0.0554308 -0.115374,-0.101495 -0.215252,-0.13879 -0.0647119,-0.0246927 -0.206312,-0.0630941 -0.426588,-0.115204 -0.219765,-0.0521101 -0.374307,-0.100899 -0.462435,-0.146964 -0.114268,-0.0587516 -0.199585,-0.132234 -0.255953,-0.219424 -0.0557714,-0.0872759 -0.0836146,-0.184855 -0.0836146,-0.293502 0,-0.11844 0.0339737,-0.229812 0.102517,-0.332926 0.0687138,-0.103709 0.169017,-0.18213 0.30074,-0.235943 0.132148,-0.0531319 0.278261,-0.0800384 0.43936,-0.0800384 0.177958,0 0.334118,0.0279283 0.470183,0.084466 0.135554,0.0559417 0.239775,0.13879 0.312916,0.247949 0.0725454,0.109159 0.112054,0.233133 0.117673,0.371327l-0.30389 0.022564c-0.0168591,-0.148667 -0.0719494,-0.261657 -0.166207,-0.337353 -0.0943431,-0.0762919 -0.233133,-0.114182 -0.417221,-0.114182 -0.191837,0 -0.331308,0.0345698 -0.419435,0.103709 -0.0875313,0.0691395 -0.131552,0.152499 -0.131552,0.249566 0,0.0850621 0.031249,0.154712 0.0931511,0.209036 0.0612209,0.0548348 0.220276,0.110777 0.477931,0.167825 0.257655,0.0576447 0.434421,0.107541 0.530382,0.150285 0.139386,0.0636901 0.242584,0.143729 0.308999,0.240285 0.0663297,0.0970678 0.0991965,0.209036 0.0991965,0.335139 0,0.125677 -0.0361876,0.243606 -0.109244,0.354383 -0.0730563,0.110862 -0.177873,0.196946 -0.314619,0.258933 -0.136576,0.0614763 -0.290522,0.0921293 -0.461242,0.0921293 -0.216955,0 -0.398744,-0.030653 -0.544857,-0.0932362 -0.146624,-0.0619872 -0.261572,-0.155223 -0.345272,-0.280305 -0.0831037,-0.124485 -0.12704,-0.266 -0.131042,-0.423437zm3.39908 0.756959l0 -2.07793 -0.789144 0 0 -0.278091 1.89853 0 0 0.278091 -0.79255 0 0 2.07793 -0.316833 0zm1.88942 0l0 -2.35602 1.06187 0c0.213549,0 0.375925,0.021372 0.486872,0.063605 0.111032,0.0423182 0.19967,0.116907 0.266681,0.223852 0.0662445,0.107541 0.0991965,0.225981 0.0991965,0.35549 0,0.167314 -0.0546645,0.307722 -0.1651,0.42233 -0.10984,0.114693 -0.279964,0.187579 -0.509691,0.218914 0.0842106,0.0395083 0.14773,0.0784206 0.191241,0.117333 0.092555,0.0834443 0.180172,0.188175 0.263275,0.313257l0.416625 0.641244 -0.398744 0 -0.316833 -0.490363c-0.092555,-0.141004 -0.169017,-0.249652 -0.229216,-0.324241 -0.0596882,-0.0750998 -0.113246,-0.127806 -0.160673,-0.157437 -0.0473419,-0.0301421 -0.0952797,-0.0510032 -0.14441,-0.0630941 -0.0362727,-0.00706722 -0.0947689,-0.010984 -0.176766,-0.010984l-0.367581 0 0 1.04612 -0.316748 0zm0.316748 -1.31595l0.681603 0c0.14441,0 0.258166,-0.0148156 0.339567,-0.0444468 0.0819968,-0.0296312 0.143899,-0.0768028 0.186302,-0.141515 0.0424033,-0.0647119 0.063605,-0.134958 0.063605,-0.211165 0,-0.111373 -0.0407004,-0.202991 -0.123293,-0.274855 -0.0819968,-0.0718643 -0.211931,-0.107541 -0.389804,-0.107541l-0.757981 0 0 0.779523zm4.11636 -1.04007l0.317344 0 0 1.3615c0,0.236454 -0.0273323,0.424544 -0.0819116,0.56393 -0.0546645,0.139301 -0.152839,0.252291 -0.295035,0.339567 -0.142281,0.0877016 -0.328583,0.131042 -0.559417,0.131042 -0.224278,0 -0.408196,-0.0378054 -0.550477,-0.114097 -0.142792,-0.0756959 -0.244798,-0.185962 -0.305679,-0.330201 -0.061306,-0.144239 -0.091363,-0.340674 -0.091363,-0.590241l0 -1.3615 0.316748 0 0 1.35989c0,0.204609 0.0195839,0.355404 0.0579853,0.451961 0.0384865,0.0970678 0.105412,0.171742 0.199074,0.224363 0.0943431,0.0527061 0.209718,0.0790166 0.345783,0.0790166 0.233133,0 0.39934,-0.0521101 0.498622,-0.15633 0.0987708,-0.103709 0.148326,-0.30338 0.148326,-0.599011l0 -1.35989zm1.28487 2.35602l0 -2.35602 0.477335 0 0.56674 1.66812c0.0523655,0.155223 0.0908521,0.271534 0.114353,0.348933 0.0272471,-0.085573 0.0696504,-0.211761 0.127636,-0.377969l0.573381 -1.63908 0.426673 0 0 2.35602 -0.305593 0 0 -1.97201 -0.696079 1.97201 -0.286095 0 -0.692758 -2.00547 0 2.00547 -0.305593 0zm3.25407 0l0 -2.35602 1.73181 0 0 0.278091 -1.41498 0 0 0.721367 1.32515 0 0 0.276473 -1.32515 0 0 0.802002 1.47075 0 0 0.278091 -1.78758 0zm2.67183 0l0 -2.35602 0.325177 0 1.25822 1.84974 0 -1.84974 0.303976 0 0 2.35602 -0.325177 0 -1.25822 -1.85136 0 1.85136 -0.303976 0zm3.47946 0l0 -2.07793 -0.789144 0 0 -0.278091 1.89844 0 0 0.278091 -0.792465 0 0 2.07793 -0.316833 0zm1.37291 0l0.920271 -2.35602 0.341355 0 0.980385 2.35602 -0.361365 0 -0.279453 -0.713619 -1.00159 0 -0.262764 0.713619 -0.336842 0zm0.691055 -0.967613l0.812645 0 -0.250503 -0.652228c-0.075781,-0.198052 -0.132659,-0.360939 -0.169528,-0.488745 -0.030653,0.151392 -0.0736523,0.301166 -0.129339,0.450344l-0.263275 0.690629zm2.61547 0.967613l0 -2.07793 -0.78923 0 0 -0.278091 1.89853 0 0 0.278091 -0.792465 0 0 2.07793 -0.316833 0zm1.93846 0l0 -2.35602 0.316748 0 0 2.35602 -0.316748 0zm1.22893 -1.14753c0,-0.391166 0.106604,-0.697271 0.320154,-0.918313 0.213634,-0.221042 0.489171,-0.331819 0.82712,-0.331819 0.220787,0 0.420542,0.0521101 0.597819,0.155734 0.177362,0.10422 0.312916,0.249056 0.406067,0.435017 0.0931511,0.185365 0.139471,0.396616 0.139471,0.631963 0,0.239093 -0.0486191,0.453068 -0.146709,0.641244 -0.0981747,0.188686 -0.23705,0.331308 -0.416625,0.428376 -0.180172,0.0970678 -0.373626,0.145346 -0.581726,0.145346 -0.22581,0 -0.427184,-0.053217 -0.604545,-0.160673 -0.177958,-0.10703 -0.31232,-0.253483 -0.403768,-0.438849 -0.0914481,-0.184855 -0.137257,-0.381289 -0.137257,-0.588027zm0.326795 0.00493854c0,0.284136 0.0775691,0.507392 0.232622,0.670875 0.155564,0.163398 0.350296,0.245139 0.584536,0.245139 0.238668,0 0.435017,-0.0822522 0.588963,-0.247353 0.153946,-0.1651 0.23143,-0.39934 0.23143,-0.70272 0,-0.191411 -0.0334629,-0.358725 -0.0993668,-0.501943 -0.0657337,-0.143132 -0.162205,-0.253909 -0.288819,-0.332926 -0.12721,-0.0784206 -0.269321,-0.117929 -0.427269,-0.117929 -0.224704,0 -0.417732,0.0756959 -0.579427,0.227599 -0.161695,0.151477 -0.24267,0.404875 -0.24267,0.759258zm2.81914 1.14259l0 -2.35602 0.325092 0 1.25822 1.84974 0 -1.84974 0.303976 0 0 2.35602 -0.325177 0 -1.25822 -1.85136 0 1.85136 -0.30389 0z"/> </g> </svg>'
		$('#foot').html('<div class="text-footer margin" align="center"></br>Copyright &copy; 2018, <a href="https://www.sifamtinsley.com/" link="#C0C0C0" vlink="#808080" alink="#FF0000">Sifam Tinsley</a> Instrumentation Inc.</div>');
	}
}

function getHarmValU() {
	$.getJSON("ajax.sht" + Math.random(), "ajaxFun=getHarmValU", function (msg) {
		try {
			g_HarmValU = msg;
			if (g_HarmValU == 6) {
				logout();
			}
			getHarmValI();
		} catch (err) {
			console.error(err);
		}
	});
}

function getHarmValI() {
	$.getJSON("ajax.sht" + Math.random(), "ajaxFun=getHarmValI", function (msg) {
		try {
			g_HarmValI = msg;
			if (g_HarmValI == 6) {
				logout();
			}
			fillHarSettings();
		} catch (err) {
			console.error(err);
		}
	});
}
var val = [];

function fillMeasureCfg() {
	var idxData = new Array(
		g_MeasureCfg.v0, g_MeasureCfg.v1, g_MeasureCfg.v2, g_MeasureCfg.v3, g_MeasureCfg.v4, g_MeasureCfg.v5, g_MeasureCfg.v6, g_MeasureCfg.v7, g_MeasureCfg.v8, g_MeasureCfg.v9,
		g_MeasureCfg.v10, g_MeasureCfg.v11, g_MeasureCfg.v12, g_MeasureCfg.v13, g_MeasureCfg.v14, g_MeasureCfg.v15, g_MeasureCfg.v16, g_MeasureCfg.v17, g_MeasureCfg.v18, g_MeasureCfg.v19,
		g_MeasureCfg.v20, g_MeasureCfg.v21, g_MeasureCfg.v22, g_MeasureCfg.v23, g_MeasureCfg.v24, g_MeasureCfg.v25, g_MeasureCfg.v26, g_MeasureCfg.v27, g_MeasureCfg.v28, g_MeasureCfg.v29,
		g_MeasureCfg.v30, g_MeasureCfg.v31, g_MeasureCfg.v32, g_MeasureCfg.v33, g_MeasureCfg.v34, g_MeasureCfg.v35, g_MeasureCfg.v36, g_MeasureCfg.v37, g_MeasureCfg.v38, g_MeasureCfg.v39,
		g_MeasureCfg.v40, g_MeasureCfg.v41, g_MeasureCfg.v42, g_MeasureCfg.v43, g_MeasureCfg.v44, g_MeasureCfg.v45, g_MeasureCfg.v46, (g_MeasureCfg.v47 * 1000), (g_MeasureCfg.v48 * 1000), (g_MeasureCfg.v49 * 1000),
		(g_MeasureCfg.v50 * 1000), (g_MeasureCfg.v51 * 1000)
	)
	
	g_PagesCfg.pag_low1 = g_PagesCfg.pag_low >>> 1
	for (i = 0; i <= 30; i++) {
		if (((g_PagesCfg.pag_low1 >>> i) & 1) == 0)
			idxData[i] = "-----"
	}
	for (i = 0; i <= 31; i++) {
		if (((g_PagesCfg.pag_high >>> i) & 1) == 0)
			idxData[i + 31] = "-----"
	}

	val = idxData;

	for (y = 1; y <= 22; y++) {
		if ((g_PagesCfg.r3 >>> (y - 1)) & 1) {
			fill_tail_content(y)
		} else {
			if (( g_PagesCfg.r3 >>> (y - 17)) & 1) {
				fill_tail_content(y)
			}
		}
	}

	
	if(g_PagesCfg.conConfig != g_MeasureCfg.conConfig){
		getPagesCfg();
	}
	
}


function checkUnit(numer) {
	var tmp = ['', '']
	switch (numer) {
		case 0:
			return ['', '']
		case 1:
			return ['U1', 'V']
		case 2:
			return ['I1', 'A']
		case 3:
			return ['P1', 'W']
		case 4:
			return ['Q1', 'var']
		case 5:
			return ['S1', 'VA']
		case 6:
			return ['PF1', '']
		case 7:
			return ['tg1', '']
		case 8:
			if (g_PagesCfg.conConfig == 1) {
				tmp = ['THDU12', '%']
			} else {
				tmp = ['THD U1', '%']
			}
			return tmp
		case 9:
			return ['THD I1', '%']
		case 10:
			return ['U2', 'V']
		case 11:
			return ['I2', 'A']
		case 12:
			return ['P2', 'W']
		case 13:
			return ['Q2', 'var']
		case 14:
			return ['S2', 'VA']
		case 15:
			return ['PF2', '']
		case 16:
			return ['tg2', '']
		case 17:
			if (g_PagesCfg.conConfig == 1) {
				tmp = ['THDU23', '%']
			} else {
				tmp = ['THD U2', '%']
			}
			return tmp
		case 18:
			return ['THD I2', '%']
		case 19:
			return ['U3', 'V']
		case 20:
			return ['I3', 'A']
		case 21:
			return ['P3', 'W']
		case 22:
			return ['Q3', 'var']
		case 23:
			return ['S3', 'VA']
		case 24:
			return ['PF3', '']
		case 25:
			return ['tg3', '']
		case 26:
			if (g_PagesCfg.conConfig == 1) {
				tmp = ['THDU31', '%']
			} else {
				tmp = ['THD U3', '%']
			}
			return tmp
		case 27:
			return ['THD I3', '%']
		case 28:
			return ['U avg', 'V']
		case 29:
			return ['I avg', 'A']
		case 30:
			return ['ΣP', 'W']
		case 31:
			return ['ΣQ', 'var']
		case 32:
			return ['ΣS', 'VA']
		case 33:
			return ['PF avg', '']
		case 34:
			return ['tg avg', '']
		case 35:
			return ['THD U', '%']
		case 36:
			return ['THD I', '%']
		case 37:
			return ['f', 'Hz']
		case 38:
			return ['U12', 'V']
		case 39:
			return ['U23', 'V']
		case 40:
			return ['U31', 'V']
		case 41:
			return ['U123', 'V']
		case 42:
			return ['P DMD', 'W']
		case 43:
			return ['S DMD', 'VA']
		case 44:
			return ['I DMD', 'A']
		case 45:
			return ['I(N)', 'A']
		case 46:
			return ['EnP+', 'Wh']
		case 47:
			return ['EnP-', 'Wh']
		case 48:
			return ['EnQ L', 'varh']
		case 49:
			return ['EnQ C', 'varh']
		case 50:
			return ['En S', 'VAh']
		case 51:
			return ['THD U1', '%']
		case 52:
			return ['THD U1', '%']
		case 53:
			return ['THD U1', '%']
		case 54:
			return ['THD U1', '%']
	}

}

function fill_tail_content(tailNumber) {
	var str = "";
	for (i = ((tailNumber - 1) * 3); i < tailNumber * 3; i++) {
		var parametr_jednostka = checkUnit(rej[i]);
		$("#par_" + (i).toString()).text(parametr_jednostka[0]);
		fillField("#val_" + (i).toString(), val[rej[i]-1], parametr_jednostka[1]);
	}
}


function genetateTail(tailNumber) {
	
	i = tailNumber - 1

	tailString = tailString + '<div class="tile low wide pages">'
	tailString = tailString + '<label><pag class="smaller i_m" m_l="p' + (i + 1).toString() + '">Page ' + (i + 1).toString() + '</pag></label>'
	tailString = tailString + '<label class="three">'

	tailString = tailString + '<span id="par_' + (i * 3).toString() + '"></span>'
	tailString = tailString + '<text id="val_' + (i * 3).toString() + '"></text>'
	tailString = tailString + '<span1 id="jedn_' + (i * 3).toString() + '" class="smaller"></span1>'

	tailString = tailString + '<span id="par_' + (1 + i * 3).toString() + '"></span>'
	tailString = tailString + '<text id="val_' + (1 + i * 3).toString() + '"></text>'
	tailString = tailString + '<span1 id="jedn_' + (1 + i * 3).toString() + '" class="smaller"></span1>'

	tailString = tailString + '<span id="par_' + (2 + i * 3).toString() + '"></span>'
	tailString = tailString + '<text id="val_' + (2 + i * 3).toString() + '"></text>'
	tailString = tailString + '<span1 id="jedn_' + (2 + i * 3).toString() + '" class="smaller"></span1>'


	tailString = tailString + '</label></div>'

	return tailString;

}

function dec2bin(dec) {
	return (dec >>> 0).toString(2);
}



//Tłumaczenie strony
var g_s = new Object();
g_s['e'] = new Object();
g_s['p'] = new Object();
g_s['d'] = new Object();
// nr30.html
g_s['e']['l1'] = "EVERYTHING COUNTS"
g_s['p']['l1'] = "LICZY SIĘ WSZYSTKO"
g_s['d']['l1'] = "ALLES ZÄHL"

g_s['e']['2a'] = "3-PHASE POWER NETWORK METER TYPE NR30";
g_s['p']['2a'] = "Miernik parametrów sieci 3-fazowej typ NR30";
g_s['d']['2a'] = "MESSGERÄT FÜR NETZPARAMETER TYP NR30";


g_s['e']['m1'] = "Measure"
g_s['p']['m2'] = "mierzone"
g_s['d']['m1'] = "Gemessene"
g_s['e']['m2'] = "values"
g_s['p']['m1'] = "Wielkości"
g_s['d']['m2'] = "Werte"

g_s['e']['m3'] = "Energy counters"
g_s['p']['m3'] = "Liczniki energii"
g_s['d']['m3'] = "Energiezähler"

g_s['e']['m4'] = "Min-max values"
g_s['p']['m4'] = "Podgląd min-max"
g_s['d']['m4'] = "Min-Max Werte"
g_s['e']['m5'] = "Ethernet"
g_s['p']['m5'] = "Ethernet"
g_s['d']['m5'] = "Ethernet"
g_s['e']['m6'] = "Modbus"
g_s['p']['m6'] = "Modbus"
g_s['d']['m6'] = "Modbus"
g_s['e']['m7'] = "Archive"
g_s['p']['m7'] = "Archiwizacja"
g_s['d']['m7'] = "Archivierung"
g_s['e']['m8'] = "Alarms"
g_s['p']['m8'] = "Alarmy"
g_s['d']['m8'] = "Alarme"
g_s['e']['m9'] = "Mask:"
g_s['p']['m9'] = "Maska:"
g_s['d']['m9'] = "Mask:"
g_s['e']['m10'] = "Baud rate:"
g_s['p']['m10'] = "Prędkość:"
g_s['d']['m10'] = "Baud rate"
g_s['e']['m11'] = "Control:"
g_s['p']['m11'] = "Kontrola:"
g_s['d']['m11'] = "Kontrole"
g_s['e']['m12'] = "Data copying: "
g_s['p']['m12'] = "Kopiowanie do archiwum: "
g_s['d']['m12'] = "Dateien kopieren:"
g_s['e']['m13'] = "Memory used:"
g_s['p']['m13'] = "Zapełnienie pamięci:"
g_s['d']['m13'] = "Speicher voll:"

// energy.html
g_s['e']['e1'] = "EnP+"
g_s['p']['e1'] = "EnP+"
g_s['d']['e1'] = "EnP+"
g_s['e']['e2'] = "EnP-"
g_s['p']['e2'] = "EnP-"
g_s['d']['e2'] = "EnP-"
g_s['e']['e3'] = "EnQ L"
g_s['p']['e3'] = "EnQ L"
g_s['d']['e3'] = "EnQ L"
g_s['e']['e4'] = "EnQ C"
g_s['p']['e4'] = "EnQ C"
g_s['d']['e4'] = "EnQ C"
g_s['e']['e5'] = "EnS"
g_s['p']['e5'] = "EnS"
g_s['d']['e5'] = "EnS"
g_s['e']['e7'] = "Energy counters"
g_s['p']['e7'] = "Liczniki Energii"
g_s['d']['e7'] = "Energiezähler"

g_s['e']['e8'] = " "
g_s['p']['e8'] = " "
g_s['d']['e8'] = " "

g_s['e']['e9'] = "Close"
g_s['p']['e9'] = "Zamknij"
g_s['d']['e9'] = "Beenden"

//measf.htm
g_s['e']['v1'] = "Measure values"
g_s['p']['v1'] = "Wartości mierzone"
g_s['d']['v1'] = "Gemessene Werte"

g_s['e']['v2'] = " "
g_s['p']['v2'] = " "
g_s['d']['v2'] = " "

g_s['e']['v3'] = "Close"
g_s['p']['v3'] = "Zamknij"
g_s['d']['v3'] = "Beenden"

//minmax.htm
g_s['e']['mm1'] = "Min-max values"
g_s['p']['mm1'] = "Podgląd min-max"
g_s['d']['mm1'] = "Min-Max Werte"

g_s['e']['mm2'] = " "
g_s['p']['mm2'] = " "
g_s['d']['mm2'] = " "

g_s['e']['mm3'] = "U avg interphases"
g_s['p']['mm3'] = "U śr. międzyfazowe"
g_s['d']['mm3'] = "U avg L-L"
g_s['e']['mm4'] = "Neutral current"
g_s['p']['mm4'] = "Prąd w przewodzie N"
g_s['d']['mm4'] = "Strom Neutralleiter"
g_s['e']['mm5'] = "Ratio of P to Q avg"
g_s['p']['mm5'] = "Uśredniony stosunek P do Q"
g_s['d']['mm5'] = "Ratio P to Q avg"
g_s['e']['mm6'] = "Parameter"
g_s['p']['mm6'] = "Parametr"
g_s['d']['mm6'] = "Parameter"
g_s['e']['mm7'] = "Min. value"
g_s['p']['mm7'] = "Min. wartość"
g_s['d']['mm7'] = "Min Wert"
g_s['e']['mm8'] = "Max. value"
g_s['p']['mm8'] = "Max. wartość"
g_s['d']['mm8'] = "Max Wert"
g_s['e']['mm9'] = "Parameter"
g_s['p']['mm9'] = "Parametr"
g_s['d']['mm9'] = "Parameter"
g_s['e']['mm10'] = "Min. value"
g_s['p']['mm10'] = "Min. wartość"
g_s['d']['mm10'] = "Min Wert"
g_s['e']['mm11'] = "Max. value"
g_s['p']['mm11'] = "Max. wartość"
g_s['d']['mm11'] = "Max Wert"
g_s['e']['mm12'] = "Erase values"
g_s['p']['mm12'] = "Kasowanie wartości"
g_s['d']['mm12'] = "Löschen der Werte"
g_s['e']['mm13'] = "Close"
g_s['p']['mm13'] = "Zamknij"
g_s['d']['mm13'] = "Beenden"

//ethForm.htm
g_s['e']['et1'] = "Ethernet"
g_s['p']['et1'] = "Ethernet"
g_s['d']['et1'] = "Ethernet"
g_s['e']['et2'] = "Settings preview"
g_s['p']['et2'] = "Podgląd ustawień"
g_s['d']['et2'] = "Übersicht der Einstellungen"
g_s['e']['et3'] = "Address IP"
g_s['p']['et3'] = "Adres IP"
g_s['d']['et3'] = "IP Adresse"
g_s['e']['et4'] = "Subnet mask"
g_s['p']['et4'] = "Maska podsieci"
g_s['d']['et4'] = "Subnet Mask"
g_s['e']['et5'] = "Gateway"
g_s['p']['et5'] = "Brama wyjściowa"
g_s['d']['et5'] = "Gateway"
g_s['e']['et6'] = "Mac address"
g_s['p']['et6'] = "Mac adres"
g_s['d']['et6'] = "Mac Adresse"
g_s['e']['et7'] = "Transmission speed:"
g_s['p']['et7'] = "Prędkość transmisji:"
g_s['d']['et7'] = "Übertragungsgeschwindigkeit:"
g_s['e']['et8'] = "Close"
g_s['p']['et8'] = "Zamknij"
g_s['d']['et8'] = "Beenden"
g_s['e']['et9'] = "FTP command port"
g_s['p']['et9'] = "Port komend FTP"
g_s['d']['et9'] = "FTP Command Port"
g_s['e']['et10'] = "FTP data port"
g_s['p']['et10'] = "Port danych FTP"
g_s['d']['et10'] = "FTP Data Port"
g_s['e']['et11'] = "Modbus port number"
g_s['p']['et11'] = "Numer portu Modbus"
g_s['d']['et11'] = "Modbus Port Nummer"
g_s['e']['et12'] = "Modbus slave ID"
g_s['p']['et12'] = "ID klienta Modbus"
g_s['d']['et12'] = "Modbus Slave ID"
g_s['e']['et13'] = "Waiting Time"
g_s['p']['et13'] = "Czas oczekiwania"
g_s['d']['et13'] = "Wartezeit"
g_s['e']['et14'] = "Maximum number of connect"
g_s['p']['et14'] = "Maksymalna ilość połączeń"
g_s['d']['et14'] = "Max. Zahl der Verbindungen"
g_s['e']['et15'] = "WWW port"
g_s['p']['et15'] = "Port WWW"
g_s['d']['et15'] = "WWW Port"
g_s['e']['et16'] = "FTP server Settings"
g_s['p']['et16'] = "Ustawienia serwera FTP"
g_s['d']['et16'] = "Einstellungen FTP Server"
g_s['e']['et17'] = "Modbus TCP"
g_s['p']['et17'] = "Modbus TCP"
g_s['d']['et17'] = "Modbus TCP"
g_s['e']['et18'] = "FTP admin pass"
g_s['p']['et18'] = "Hasło admin FTP"
g_s['d']['et18'] = "FTP Admin Passwort"
g_s['e']['et19'] = "FTP user pass"
g_s['p']['et19'] = "Hasło user FTP"
g_s['d']['et19'] = "FTP User Paswort"
g_s['e']['et20'] = "WWW admin pass"
g_s['p']['et20'] = "Hasło admin WWW"
g_s['d']['et20'] = "WWW Admin Passwort"
g_s['e']['et21'] = "WWW user pass"
g_s['p']['et21'] = "Hasło user WWW"
g_s['d']['et21'] = "WWW User Passwort"
g_s['e']['et22'] = "Save"
g_s['p']['et22'] = "Zapisz"
g_s['d']['et22'] = "Speichern"
g_s['p']['et23'] = "Powtórz hasło"
g_s['e']['et23'] = "Repeat password"
g_s['d']['et23'] = "Passwort wiederholen"

//modForm.htm
g_s['e']['mf1'] = "Modbus"
g_s['p']['mf1'] = "Modbus"
g_s['d']['mf1'] = "Modbus"
g_s['e']['mf2'] = "Settings preview"
g_s['p']['mf2'] = "Podgląd ustawień"
g_s['d']['mf2'] = "Übersicht der Einstellungen"
g_s['e']['mf3'] = "Adress"
g_s['p']['mf3'] = "Adres"
g_s['d']['mf3'] = "Adresse"
g_s['e']['mf4'] = "Baud rate"
g_s['p']['mf4'] = "Prędkość transmisji"
g_s['d']['mf4'] = "Baud rate"
g_s['e']['mf5'] = "Mode"
g_s['p']['mf5'] = "Tryb"
g_s['d']['mf5'] = "Mode"
g_s['e']['mf6'] = "Close"
g_s['p']['mf6'] = "Zamknij"
g_s['d']['mf6'] = "Beenden"

//archForm.htm
g_s['e']['a1'] = "Archive"
g_s['p']['a1'] = "Archiwizacja"
g_s['d']['a1'] = "Archivierung"
g_s['e']['a2'] = "Settings preview"
g_s['p']['a2'] = "Podgląd ustawień"
g_s['d']['a2'] = "Übersicht der Einstellungen"
g_s['e']['a3'] = "Choose group"
g_s['p']['a3'] = "Wybierz grupę"
g_s['d']['a3'] = "Gruppe wählen"
g_s['e']['a4'] = "Group 1"
g_s['p']['a4'] = "Grupa 1"
g_s['d']['a4'] = "Gruppe 1"
g_s['e']['a5'] = "Group 2"
g_s['p']['a5'] = "Grupa 2"
g_s['d']['a5'] = "Gruppe 2"
g_s['e']['a6'] = "CSV settings"
g_s['p']['a6'] = "Ustawienia CVS"
g_s['d']['a6'] = "CSV Einstellungen"
g_s['e']['a8'] = "Archive type"
g_s['p']['a8'] = "Typ archiwum"
g_s['d']['a8'] = "Archivtyp"
g_s['e']['a9'] = "Parameters"
g_s['p']['a9'] = "Parametry"
g_s['d']['a9'] = "Parameter"
g_s['e']['a10'] = "Trigger"
g_s['p']['a10'] = "Wyzwalanie"
g_s['d']['a10'] = "Trigger"
g_s['e']['a11'] = "Interval"
g_s['p']['a11'] = "Interwał"
g_s['d']['a11'] = "Interval"
g_s['e']['a12'] = "Archive low"
g_s['p']['a12'] = "Dolny próg"
g_s['d']['a12'] = "Untere Schwelle"
g_s['e']['a13'] = "Archive high"
g_s['p']['a13'] = "Górny próg"
g_s['d']['a13'] = "Obere Schwelle"
g_s['e']['a15'] = "Archive type"
g_s['p']['a15'] = "Typ archiwum"
g_s['d']['a15'] = "Archivtyp"
g_s['e']['a16'] = "Parameters"
g_s['p']['a16'] = "Parametry"
g_s['d']['a16'] = "Parameter"
g_s['e']['a17'] = "Trigger"
g_s['p']['a17'] = "Wyzwalanie"
g_s['d']['a17'] = "Trigger"
g_s['e']['a18'] = "Interval"
g_s['p']['a18'] = "Interwał"
g_s['d']['a18'] = "Interval"
g_s['e']['a19'] = "Archive low"
g_s['p']['a19'] = "Dolny próg"
g_s['d']['a19'] = "Untere Schwelle"
g_s['e']['a20'] = "Archive high"
g_s['p']['a20'] = "Górny próg"
g_s['d']['a20'] = "Obere Schwelle"
g_s['e']['a21'] = "Value separator"
g_s['p']['a21'] = "Separator pola"
g_s['d']['a21'] = "Trennzeichen"
g_s['e']['a22'] = "Decimal separator"
g_s['p']['a22'] = "Separator dziesiętny"
g_s['d']['a22'] = "Dezimaltrennzeichen"
g_s['e']['a23'] = "Comma"
g_s['p']['a23'] = "Przecinek"
g_s['d']['a23'] = "Komma"
g_s['e']['a24'] = "Semicolon"
g_s['p']['a24'] = "Średnik"
g_s['d']['a24'] = "Semikolon"
g_s['e']['a25'] = "Tabulator"
g_s['p']['a25'] = "Tabulator"
g_s['d']['a25'] = "Tabulator"
g_s['e']['a26'] = "Dot"
g_s['p']['a26'] = "Kropka"
g_s['d']['a26'] = "Punkt"
g_s['e']['a27'] = "Comma"
g_s['p']['a27'] = "Przecinek"
g_s['d']['a27'] = "Komma"
g_s['e']['a28'] = "File Explorer"
g_s['p']['a28'] = "Explorator plików"
g_s['d']['a28'] = "Datei Explorer"
g_s['e']['a29'] = "Close"
g_s['p']['a29'] = "Zamknij"
g_s['d']['a29'] = "Beenden"
g_s['e']['a30'] = "Copy arch. to CSV"
g_s['p']['a30'] = "Kopiuj arch. do CSV"
g_s['d']['a30'] = "Archiv als CSV Speichern"

//alarms.htm
g_s['e']['al1'] = "Alarms"
g_s['p']['al1'] = "Alarmy"
g_s['d']['al1'] = "Alarme"
g_s['e']['al2'] = "Settings preview"
g_s['p']['al2'] = "Podgląd ustawień"
g_s['d']['al2'] = "Übersicht der Einstellungen "
g_s['e']['al3'] = "Configuration preview"
g_s['p']['al3'] = "Podgląd konfiguracji"
g_s['d']['al3'] = "Übersicht der Konfiguration"
g_s['e']['al4'] = "Alarm 1 configuration settings"
g_s['p']['al4'] = "Ustawienia alarmu 1"
g_s['d']['al4'] = "Einstellungen Alarm 1"
g_s['e']['al5'] = "Alarm 1 C1 condition settings"
g_s['p']['al5'] = "Alarm 1 C1 stan ustawień"
g_s['d']['al5'] = "Alarm 1 Bedingung C1"
g_s['e']['al6'] = "Alarm 1 C2 condition settings"
g_s['p']['al6'] = "Alarm 1 C2 stan ustawień"
g_s['d']['al6'] = "Alarm 1 Bedingung C2"
g_s['e']['al7'] = "Alarm 1 C3 condition settings"
g_s['p']['al7'] = "Alarm 1 C3 stan ustawień"
g_s['d']['al7'] = "Alarm 1 Bedingung C3"
g_s['e']['al8'] = "Alarm 2 configuration settings"
g_s['p']['al8'] = "Ustawienia alarmu 2"
g_s['d']['al8'] = "Alarmeinstellungen 2"
g_s['e']['al9'] = "Alarm 2 C1 condition settings"
g_s['p']['al9'] = "Alarm 2 C1 stan ustawień"
g_s['d']['al9'] = "Alarm 2 Bedingung C1"
g_s['e']['al10'] = "Alarm 2 C2 condition settings"
g_s['p']['al10'] = "Alarm 2 C2 stan ustawień"
g_s['d']['al10'] = "Alarm 2 Bedingung C2"
g_s['e']['al11'] = "Alarm 2 C3 condition settings"
g_s['p']['al11'] = "Alarm 2 C3 stan ustawień"
g_s['d']['al11'] = "Alarm 2 Bedingung C3"
g_s['e']['al12'] = "Choose Alarm 1 settings"
g_s['p']['al12'] = "Wybierz ustawienia Alarmu 1"
g_s['d']['al12'] = "Einstellungen von Alarm 1 wählen"
g_s['e']['al13'] = "Logical conditions"
g_s['p']['al13'] = "Warunki logiczne"
g_s['d']['al13'] = "Logische Bedingungen"
g_s['e']['al14'] = "Relay state if alarm on"
g_s['p']['al14'] = "Stan przekaźnika przy załączonym alarmie"
g_s['d']['al14'] = "Relaisstatus mit Alarm an"
g_s['e']['al15'] = "Holdback alarm off"
g_s['p']['al15'] = "Blokada wył. alarmu"
g_s['d']['al15'] = "Sperren Alarm"
g_s['e']['al16'] = "Display alarm event"
g_s['p']['al16'] = "Sygnalizacja alarmu"
g_s['d']['al16'] = "Alarmsignalisierung"
g_s['e']['al18'] = "Value"
g_s['p']['al18'] = "Wielkość"
g_s['d']['al18'] = "Größe"
g_s['e']['al19'] = "Condition type"
g_s['p']['al19'] = "Typ warunku"
g_s['d']['al19'] = "Konditionsart"
g_s['e']['al20'] = "Low limit condition"
g_s['p']['al20'] = "Dolna wartość warunku"
g_s['d']['al20'] = "Niedriger Wert der Bedingung"
g_s['e']['al21'] = "High limit condition"
g_s['p']['al21'] = "Górna wartość warunku"
g_s['d']['al21'] = "Der obere Wert der Bedingung"
g_s['e']['al22'] = "Delay to condition on"
g_s['p']['al22'] = "Opóźnienie załączania warunku"
g_s['d']['al22'] = "Verzögerung der Einbeziehung der Bedingung"
g_s['e']['al23'] = "Delay to condition off"
g_s['p']['al23'] = "Opóźnienie wyłączania warunku"
g_s['d']['al23'] = "Verzögerung zum Deaktivieren des Zustandes"
g_s['e']['al24'] = "Holdback condition off->on"
g_s['p']['al24'] = "Blokada ponownego załączania warunku"
g_s['d']['al24'] = "Beschränkung wieder verbundenen Zustand"
g_s['e']['al25'] = "Display condition event"
g_s['p']['al25'] = "Sygnalizacja załączenia warunku"
g_s['d']['al25'] = "Signalisierung der bedingten Einbeziehung"
g_s['e']['al27'] = "Values"
g_s['p']['al27'] = "Wielkość"
g_s['d']['al27'] = "Größe"
g_s['e']['al28'] = "Condition type"
g_s['p']['al28'] = "Typ warunku"
g_s['d']['al28'] = "Konditionsart"
g_s['e']['al29'] = "Low limit condition"
g_s['p']['al29'] = "Dolna wartość warunku"
g_s['d']['al29'] = "Niedriger Wert der Bedingung"
g_s['e']['al30'] = "High limit condition"
g_s['p']['al30'] = "Górna wartość warunku"
g_s['d']['al30'] = "Der obere Wert der Bedingung"
g_s['e']['al31'] = "Delay to condition on"
g_s['p']['al31'] = "Opóźnienie załączania warunku"
g_s['d']['al31'] = "Verzögerung der Einbeziehung der Bedingung"
g_s['e']['al32'] = "Delay to condition off"
g_s['p']['al32'] = "Opóźnienie wyłączania warunku"
g_s['d']['al32'] = "Verzögerung zum Deaktivieren des Zustandes"
g_s['e']['al33'] = "Holdback condition off->on"
g_s['p']['al33'] = "Blokada ponownego załączania warunku"
g_s['d']['al33'] = "Beschränkung wieder verbundenen Zustand"
g_s['e']['al34'] = "Display condition event"
g_s['p']['al34'] = "Sygnalizacja załączenia warunku"
g_s['d']['al34'] = "Signalisierung der bedingten Einbeziehung"
g_s['e']['al36'] = "Values"
g_s['p']['al36'] = "Wielkość"
g_s['d']['al36'] = "Größe"
g_s['e']['al37'] = "Condition type"
g_s['p']['al37'] = "Typ warunku"
g_s['d']['al37'] = "Konditionsart"
g_s['e']['al38'] = "Low limit condition"
g_s['p']['al38'] = "Dolna wartość warunku"
g_s['d']['al38'] = "Niedriger Wert der Bedingung"
g_s['e']['al39'] = "High limit condition"
g_s['p']['al39'] = "Górna wartość warunku"
g_s['d']['al39'] = "Der obere Wert der Bedingung"
g_s['e']['al40'] = "Delay to condition on"
g_s['p']['al40'] = "Opóźnienie załączania warunku"
g_s['d']['al40'] = "Verzögerung der Einbeziehung der Bedingung"
g_s['e']['al41'] = "Delay to condition off"
g_s['p']['al41'] = "Opóźnienie wyłączania warunku"
g_s['d']['al41'] = "Verzögerung zum Deaktivieren des Zustandes"
g_s['e']['al42'] = "Holdback condition off->on"
g_s['p']['al42'] = "Blokada ponownego załączania warunku"
g_s['d']['al42'] = "Beschränkung wieder verbundenen Zustand"
g_s['e']['al43'] = "Display condition event"
g_s['p']['al43'] = "Sygnalizacja załączenia warunku"
g_s['d']['al43'] = "Signalisierung der bedingten Einbeziehung"
g_s['e']['al45'] = "Logical conditions"
g_s['p']['al45'] = "Warunki logiczne"
g_s['d']['al45'] = "Logische Bedingungen"
g_s['e']['al46'] = "Relay state if alarm on"
g_s['p']['al46'] = "Stan przekaźnika przy załączonym alarmie"
g_s['d']['al46'] = "Relaisstatus mit Alarm an"
g_s['e']['al47'] = "Holdback alarm off"
g_s['p']['al47'] = "Blokada wył. alarmu"
g_s['d']['al47'] = "Sperren Alarm"
g_s['e']['al48'] = "Display alarm event"
g_s['p']['al48'] = "Sygnalizacja alarmu"
g_s['d']['al48'] = "Alarmsignalisierung"
g_s['e']['al50'] = "Values"
g_s['p']['al50'] = "Wielkość"
g_s['d']['al50'] = "Größe"
g_s['e']['al51'] = "Condition type"
g_s['p']['al51'] = "Typ warunku"
g_s['d']['al51'] = "Konditionsart"
g_s['e']['al52'] = "Low limit condition"
g_s['p']['al52'] = "Dolna wartość warunku"
g_s['d']['al52'] = "Niedriger Wert der Bedingung"
g_s['e']['al53'] = "High limit condition"
g_s['p']['al53'] = "Górna wartość warunku"
g_s['d']['al53'] = "Der obere Wert der Bedingung"
g_s['e']['al54'] = "Delay to condition on"
g_s['p']['al54'] = "Opóźnienie załączania warunku"
g_s['d']['al54'] = "Verzögerung der Einbeziehung der Bedingung"
g_s['e']['al55'] = "Delay to condition off"
g_s['p']['al55'] = "Opóźnienie wyłączania warunku"
g_s['d']['al55'] = "Verzögerung zum Deaktivieren des Zustandes"
g_s['e']['al56'] = "Holdback condition off->on"
g_s['p']['al56'] = "Blokada ponownego załączania warunku"
g_s['d']['al56'] = "Beschränkung wieder verbundenen Zustand"
g_s['e']['al57'] = "Display condition event"
g_s['p']['al57'] = "Sygnalizacja załączenia warunku"
g_s['d']['al57'] = "Signalisierung der bedingten Einbeziehung"
g_s['e']['al59'] = "Values"
g_s['p']['al59'] = "Wielkość"
g_s['d']['al59'] = "Größe"
g_s['e']['al60'] = "Condition type"
g_s['p']['al60'] = "Typ warunku"
g_s['d']['al60'] = "Konditionsart"
g_s['e']['al61'] = "Low limit condition"
g_s['p']['al61'] = "Dolna wartość warunku"
g_s['d']['al61'] = "Niedriger Wert der Bedingung"
g_s['e']['al62'] = "High limit condition"
g_s['p']['al62'] = "Górna wartość warunku"
g_s['d']['al62'] = "Der obere Wert der Bedingung"
g_s['e']['al63'] = "Delay to condition on"
g_s['p']['al63'] = "Opóźnienie załączania warunku"
g_s['d']['al63'] = "Verzögerung der Einbeziehung der Bedingung"
g_s['e']['al64'] = "Delay to condition off"
g_s['p']['al64'] = "Opóźnienie wyłączania warunku"
g_s['d']['al64'] = "Verzögerung zum Deaktivieren des Zustandes"
g_s['e']['al65'] = "Holdback condition off->on"
g_s['p']['al65'] = "Blokada ponownego załączania warunku"
g_s['d']['al65'] = "Beschränkung wieder verbundenen Zustand"
g_s['e']['al66'] = "Display condition event"
g_s['p']['al66'] = "Sygnalizacja załączenia warunku"
g_s['d']['al66'] = "Signalisierung der bedingten Einbeziehung"
g_s['e']['al68'] = "Values"
g_s['p']['al68'] = "Wielkość"
g_s['d']['al68'] = "Größe"
g_s['e']['al69'] = "Condition type"
g_s['p']['al69'] = "Typ warunku"
g_s['d']['al69'] = "Konditionsart"
g_s['e']['al70'] = "Low limit condition"
g_s['p']['al70'] = "Dolna wartość warunku"
g_s['d']['al70'] = "Niedriger Wert der Bedingung"
g_s['e']['al71'] = "High limit condition"
g_s['p']['al71'] = "Górna wartość warunku"
g_s['d']['al71'] = "Der obere Wert der Bedingung"
g_s['e']['al72'] = "Delay to condition on"
g_s['p']['al72'] = "Opóźnienie załączania warunku"
g_s['d']['al72'] = "Verzögerung der Einbeziehung der Bedingung"
g_s['e']['al73'] = "Delay to condition off"
g_s['p']['al73'] = "Opóźnienie wyłączania warunku"
g_s['d']['al73'] = "Verzögerung zum Deaktivieren des Zustandes"
g_s['e']['al74'] = "Holdback condition off->on"
g_s['p']['al74'] = "Blokada ponownego załączania warunku"
g_s['d']['al74'] = "Beschränkung wieder verbundenen Zustand"
g_s['e']['al75'] = "Display condition event"
g_s['p']['al75'] = "Sygnalizacja załączenia warunku"
g_s['d']['al75'] = "Signalisierung der bedingten Einbeziehung"
g_s['e']['al76'] = "Close"
g_s['p']['al76'] = "Zamknij"
g_s['d']['al76'] = "Beenden"

//tpx.htm do wszystkich te same tablice
g_s['e']['p1'] = "Page 1"
g_s['p']['p1'] = "Strona 1"
g_s['d']['p1'] = "Seite 1"
g_s['e']['p2'] = "Page 2"
g_s['p']['p2'] = "Strona 2"
g_s['d']['p2'] = "Seite 2"
g_s['e']['p3'] = "Page 3"
g_s['p']['p3'] = "Strona 3"
g_s['d']['p3'] = "Seite3"
g_s['e']['p4'] = "Page 4"
g_s['p']['p4'] = "Strona 4"
g_s['d']['p4'] = "Seite 4"
g_s['e']['p5'] = "Page 5"
g_s['p']['p5'] = "Strona 5"
g_s['d']['p5'] = "Seite 5"
g_s['e']['p6'] = "Page 6"
g_s['p']['p6'] = "Strona 6"
g_s['d']['p6'] = "Seite 6"
g_s['e']['p7'] = "Page 7"
g_s['p']['p7'] = "Strona 7"
g_s['d']['p7'] = "Seite 7"
g_s['e']['p8'] = "Page 8"
g_s['p']['p8'] = "Strona 8"
g_s['d']['p8'] = "Seite 8"
g_s['e']['p9'] = "Page 9"
g_s['p']['p9'] = "Strona 9"
g_s['d']['p9'] = "Seite 9"
g_s['e']['p10'] = "Page 10"
g_s['p']['p10'] = "Strona 10"
g_s['d']['p10'] = "Seite 10"

//about.htm do wszystkich te same tablice
g_s['e']['ab1'] = "Serial number "
g_s['p']['ab1'] = "Numer seryjny"
g_s['d']['ab1'] = "Seriennummer"
g_s['e']['ab2'] = "Order Code "
g_s['p']['ab2'] = "Kod zamówienia"
g_s['d']['ab2'] = "Bestellcode"
g_s['e']['ab3'] = "Firmware version "
g_s['p']['ab3'] = "Wersja oprogramowania "
g_s['d']['ab3'] = "Softwareversion"
g_s['e']['ab4'] = "Bootloader version "
g_s['p']['ab4'] = "Wersja bootloadera "
g_s['d']['ab4'] = "Bootloader-Version "
g_s['e']['ab5'] = "variant "
g_s['p']['ab5'] = "Wariant "
g_s['d']['ab5'] = "Variante"
g_s['e']['ab6'] = "About"
g_s['p']['ab6'] = "Informacje o urządzeniu"
g_s['d']['ab6'] = "Geräteinformationen"
g_s['e']['ab7'] = "The NR30 3-phase energy meter"
g_s['p']['ab7'] = "Miernik parametrów sieci typ NR30"
g_s['d']['ab7'] = "Netzwerkparameter Meter Typ NR30"
g_s['e']['ab8'] = "Close"
g_s['p']['ab8'] = "Zamknij"
g_s['d']['ab8'] = "Beenden"
g_s['e']['ab9'] = "All settings you can change by e-con program, which is avliable on webpage:"
g_s['p']['ab9'] = "Wszystkie ustawienia miernika zmienić można przy pomocy programu e-con dostępnego na stronie:"
g_s['d']['ab9'] = "Alle Einstellungen des Messgerätes können mit dem e-con Programm geändert werden unter:"

//harm.htm 
g_s['e']['h1'] = "Harmonics numbers"
g_s['p']['h1'] = "Numery harmonicznych"
g_s['d']['h1'] = ""
g_s['e']['h2'] = ""
g_s['p']['h2'] = ""
g_s['d']['h2'] = ""
g_s['e']['h3'] = "Close"
g_s['p']['h3'] = "Zamknij"
g_s['d']['h3'] = "Beenden"

//fileExp.htm
g_s['e']['fe1'] = "File explorer"
g_s['p']['fe1'] = "Explorator plików"
g_s['d']['fe1'] = "Datei-Explorer"

function createCookie(name, value, minutes) {
	var expires = "";

	if (minutes != null) {
		if (minutes > 0) {
			var date = new Date();
			date.setTime(date.getTime() + (minutes * 60 * 1000));
			expires = "; expires=" + date.toGMTString();
		}
		if (minutes == 0) {
			expires = "; expires=1 Jan 2050 23:59:59 UTC";
		}
	}
	document.cookie = name + "=" + value + expires + "; path=/";
};

function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') c = c.substring(1, c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
	}
	return null;
};

function eraseCookie(name) {
	createCookie(name, "", -1);
};
var lang = readCookie('prefer_lang');

function chanLang() {
	var lang1 = readCookie('prefer_lang');
	if ((lang1 == "") | (lang1 == null)) {
		setActiveFlag('e');
		lang1 = "e";
	}
	if (lang1 == "p") setActiveFlag('p');
	if (lang1 == "e") setActiveFlag('e');
	if (lang1 == "d") setActiveFlag('d');
	changeAllString(lang1);
	lang = lang1;
}

function setActiveFlag(lang) {

	$("#enFlagDiv").removeClass("selected");
	$("#plFlagDiv").removeClass("selected");
	$("#deFlagDiv").removeClass("selected");

	if (lang == 'p') {
		$("#plFlagDiv").addClass("selected");
	} else if (lang == 'd') {
		$("#deFlagDiv").addClass("selected");
	} else {
		$("#enFlagDiv").addClass("selected");
	}
}

function changeAllString(lang) {
	$(".i_m").each(function () {
		try {
			$(this).text(g_s[lang][$(this).attr("m_l")]);


			var attr = $(this).attr('value');

			if (typeof attr !== typeof undefined && attr !== false) {
				$(this).attr('value', g_s[lang][$(this).attr("m_l")]);
			}

		} catch (e) {

		}
	});
}

function setLang(lang) {
	if (lang != "p" && lang != "e" && lang != "d") {
		setActiveFlag('e');
		lang = "e";
	}
	if (lang == "p")
		setActiveFlag('p');
	if (lang == "e")
		setActiveFlag('e');
	if (lang == "d")
		setActiveFlag('d');

	createCookie('prefer_lang', lang, 0);
	changeAllString(lang);
}
chanLang();
var infoU = ""
var infoI = ""

function fillHarSettings() {
	var idxData1 = new Array(
		g_HarmValU.U1_2, g_HarmValU.U1_3, g_HarmValU.U1_4, g_HarmValU.U1_5, g_HarmValU.U1_6, g_HarmValU.U1_7, g_HarmValU.U1_8, g_HarmValU.U1_9, g_HarmValU.U1_10,
		g_HarmValU.U1_11, g_HarmValU.U1_12, g_HarmValU.U1_13, g_HarmValU.U1_14, g_HarmValU.U1_15, g_HarmValU.U1_16, g_HarmValU.U1_17, g_HarmValU.U1_18, g_HarmValU.U1_19, g_HarmValU.U1_20,
		g_HarmValU.U1_21, g_HarmValU.U1_22, g_HarmValU.U1_23, g_HarmValU.U1_24, g_HarmValU.U1_25, g_HarmValU.U1_26, g_HarmValU.U1_27, g_HarmValU.U1_28, g_HarmValU.U1_29, g_HarmValU.U1_30,
		g_HarmValU.U1_31, g_HarmValU.U1_32, g_HarmValU.U1_33, g_HarmValU.U1_34, g_HarmValU.U1_35, g_HarmValU.U1_36, g_HarmValU.U1_37, g_HarmValU.U1_38, g_HarmValU.U1_39, g_HarmValU.U1_40,
		g_HarmValU.U1_41, g_HarmValU.U1_42, g_HarmValU.U1_43, g_HarmValU.U1_44, g_HarmValU.U1_45, g_HarmValU.U1_46, g_HarmValU.U1_47, g_HarmValU.U1_48, g_HarmValU.U1_49, g_HarmValU.U1_50,
		g_HarmValU.U1_51
	)
	var idxData2 = new Array(
		g_HarmValU.U2_2, g_HarmValU.U2_3, g_HarmValU.U2_4, g_HarmValU.U2_5, g_HarmValU.U2_6, g_HarmValU.U2_7, g_HarmValU.U2_8, g_HarmValU.U2_9, g_HarmValU.U2_10,
		g_HarmValU.U2_11, g_HarmValU.U2_12, g_HarmValU.U2_13, g_HarmValU.U2_14, g_HarmValU.U2_15, g_HarmValU.U2_16, g_HarmValU.U2_17, g_HarmValU.U2_18, g_HarmValU.U2_19, g_HarmValU.U2_20,
		g_HarmValU.U2_21, g_HarmValU.U2_22, g_HarmValU.U2_23, g_HarmValU.U2_24, g_HarmValU.U2_25, g_HarmValU.U2_26, g_HarmValU.U2_27, g_HarmValU.U2_28, g_HarmValU.U2_29, g_HarmValU.U2_30,
		g_HarmValU.U2_31, g_HarmValU.U2_32, g_HarmValU.U2_33, g_HarmValU.U2_34, g_HarmValU.U2_35, g_HarmValU.U2_36, g_HarmValU.U2_37, g_HarmValU.U2_38, g_HarmValU.U2_39, g_HarmValU.U2_40,
		g_HarmValU.U2_41, g_HarmValU.U2_42, g_HarmValU.U2_43, g_HarmValU.U2_44, g_HarmValU.U2_45, g_HarmValU.U2_46, g_HarmValU.U2_47, g_HarmValU.U2_48, g_HarmValU.U2_49, g_HarmValU.U2_50,
		g_HarmValU.U2_51
	)
	var idxData3 = new Array(
		g_HarmValU.U3_2, g_HarmValU.U3_3, g_HarmValU.U3_4, g_HarmValU.U3_5, g_HarmValU.U3_6, g_HarmValU.U3_7, g_HarmValU.U3_8, g_HarmValU.U3_9, g_HarmValU.U3_10,
		g_HarmValU.U3_11, g_HarmValU.U3_12, g_HarmValU.U3_13, g_HarmValU.U3_14, g_HarmValU.U3_15, g_HarmValU.U3_16, g_HarmValU.U3_17, g_HarmValU.U3_18, g_HarmValU.U3_19, g_HarmValU.U3_20,
		g_HarmValU.U3_21, g_HarmValU.U3_22, g_HarmValU.U3_23, g_HarmValU.U3_24, g_HarmValU.U3_25, g_HarmValU.U3_26, g_HarmValU.U3_27, g_HarmValU.U3_28, g_HarmValU.U3_29, g_HarmValU.U3_30,
		g_HarmValU.U3_31, g_HarmValU.U3_32, g_HarmValU.U3_33, g_HarmValU.U3_34, g_HarmValU.U3_35, g_HarmValU.U3_36, g_HarmValU.U3_37, g_HarmValU.U3_38, g_HarmValU.U3_39, g_HarmValU.U3_40,
		g_HarmValU.U3_41, g_HarmValU.U3_42, g_HarmValU.U3_43, g_HarmValU.U3_44, g_HarmValU.U3_45, g_HarmValU.U3_46, g_HarmValU.U3_47, g_HarmValU.U3_48, g_HarmValU.U3_49, g_HarmValU.U3_50,
		g_HarmValU.U3_51
	)

	//Harmoniczne


	var max = []
	max.push(Math.max.apply(Math, idxData1))
	max.push(Math.max.apply(Math, idxData2))
	max.push(Math.max.apply(Math, idxData3))

	var maxValFromTab = Math.max.apply(Math, max);

	var maxHeight = maxValFromTab;
	if (maxValFromTab < 10) {
		maxHeight = 10;
	}

	var strU1 = "U1="
	var strU2 = "U2="
	var strU3 = "U3="
	if (g_PagesCfg.conConfig == 1) {
		strU1 = "U1-2="
		strU2 = "U2-3="
		strU3 = "U3-1="
	}


	var formHtml1 = "";
	formHtml1 += '<table style="background: white; border: 1px solid black; vertical-align: bottom; border-collapse: collapse; border-right-style: dashed;">';
	formHtml1 += '<tr style="border: 1px; vertical-align: bottom; border-collapse: collapse; width:200px;">';
	formHtml1 += '<td style="padding-right: 5px;padding-left: 5px; vertical-align: bottom; border-right-style: dashed;"><text style="display: block; margin-bottom: 80px;" id="Ug"></text><text style="display: block; margin-bottom: 80px;" id="Ud"></text></td>';
	for (var i = 0; i < 50; i++) {
		formHtml1 += '<td title="' + strU1 + idxData1[i].toFixed(1) + '% ,' + strU2 + idxData2[i].toFixed(1) + '% ,' + strU3 + idxData3[i].toFixed(1) + '%" style="border: 1px; border-left:none" style="padding-right: 1px;padding-left: 2px; border: 1px solid black; vertical-align: bottom; border-collapse: collapse;" id="hu"+i><dd id="hU"+i style=" height: ' + ((idxData1[i]) / maxHeight) * 100 * 2 + 'px; background-color : #E6E907"></dd></td>';
		formHtml1 += '<td title="' + strU1 + idxData1[i].toFixed(1) + '% ,' + strU2 + idxData2[i].toFixed(1) + '% ,' + strU3 + idxData3[i].toFixed(1) + '%" style="border: 1px; border:none" onmouseover="fMOuseOnU(' + (i + 2) + ',' + idxData1[i] + ',' + idxData2[i] + ',' + idxData3[i] + ');" style="padding-right: 1px;padding-left: 2px; border: 1px solid black; vertical-align: bottom; border-collapse: collapse;" id="hu"+i><dd id="hU"+i style="margin-left:-4px;height: ' + ((idxData2[i]) / maxHeight) * 100 * 2 + 'px; background-color : #4BD106" "></dd></td>';
		formHtml1 += '<td title="' + strU1 + idxData1[i].toFixed(1) + '% ,' + strU2 + idxData2[i].toFixed(1) + '% ,' + strU3 + idxData3[i].toFixed(1) + '%" style="border: 1px; border-right:none" onmouseover="fMOuseOnU(' + (i + 2) + ',' + idxData1[i] + ',' + idxData2[i] + ',' + idxData3[i] + ');" style="style="padding-right: 1px;padding-left: 2px; border: 1px solid black; vertical-align: bottom; border-collapse: collapse;" id="hu"+i><dd id="hU"+i style="margin-left:-4px;height: ' + ((idxData3[i]) / maxHeight) * 100 * 2 + 'px; background-color : #8306D1"></dd></td>';
		formHtml1 += '<td width="3px"></td>'
	}
	formHtml1 += '</tr>';
	formHtml1 += '<tr>';
	formHtml1 += '<td></td>';
	for (var i = 2; i < 52; i++) {
		formHtml1 += '<td colspan="4" style="font-size : 10px;"><center>' + i + '</center></td>';
	}
	formHtml1 += '</tr>';
	formHtml1 += '</table >';
	$("#harmUTab").html(formHtml1);
	$('#Ug').text(maxHeight.toFixed(1) + "%");
	$('#Ud').text((maxHeight / 2).toFixed(1) + "%");

	var idxData1 = new Array(
		g_HarmValI.I1_2, g_HarmValI.I1_3, g_HarmValI.I1_4, g_HarmValI.I1_5, g_HarmValI.I1_6, g_HarmValI.I1_7, g_HarmValI.I1_8, g_HarmValI.I1_9, g_HarmValI.I1_10,
		g_HarmValI.I1_11, g_HarmValI.I1_12, g_HarmValI.I1_13, g_HarmValI.I1_14, g_HarmValI.I1_15, g_HarmValI.I1_16, g_HarmValI.I1_17, g_HarmValI.I1_18, g_HarmValI.I1_19, g_HarmValI.I1_20,
		g_HarmValI.I1_21, g_HarmValI.I1_22, g_HarmValI.I1_23, g_HarmValI.I1_24, g_HarmValI.I1_25, g_HarmValI.I1_26, g_HarmValI.I1_27, g_HarmValI.I1_28, g_HarmValI.I1_29, g_HarmValI.I1_30,
		g_HarmValI.I1_31, g_HarmValI.I1_32, g_HarmValI.I1_33, g_HarmValI.I1_34, g_HarmValI.I1_35, g_HarmValI.I1_36, g_HarmValI.I1_37, g_HarmValI.I1_38, g_HarmValI.I1_39, g_HarmValI.I1_40,
		g_HarmValI.I1_41, g_HarmValI.I1_42, g_HarmValI.I1_43, g_HarmValI.I1_44, g_HarmValI.I1_45, g_HarmValI.I1_46, g_HarmValI.I1_47, g_HarmValI.I1_48, g_HarmValI.I1_49, g_HarmValI.I1_50,
		g_HarmValI.I1_51
	)
	var idxData2 = new Array(
		g_HarmValI.I2_2, g_HarmValI.I2_3, g_HarmValI.I2_4, g_HarmValI.I2_5, g_HarmValI.I2_6, g_HarmValI.I2_7, g_HarmValI.I2_8, g_HarmValI.I2_9, g_HarmValI.I2_10,
		g_HarmValI.I2_11, g_HarmValI.I2_12, g_HarmValI.I2_13, g_HarmValI.I2_14, g_HarmValI.I2_15, g_HarmValI.I2_16, g_HarmValI.I2_17, g_HarmValI.I2_18, g_HarmValI.I2_19, g_HarmValI.I2_20,
		g_HarmValI.I2_21, g_HarmValI.I2_22, g_HarmValI.I2_23, g_HarmValI.I2_24, g_HarmValI.I2_25, g_HarmValI.I2_26, g_HarmValI.I2_27, g_HarmValI.I2_28, g_HarmValI.I2_29, g_HarmValI.I2_30,
		g_HarmValI.I2_31, g_HarmValI.I2_32, g_HarmValI.I2_33, g_HarmValI.I2_34, g_HarmValI.I2_35, g_HarmValI.I2_36, g_HarmValI.I2_37, g_HarmValI.I2_38, g_HarmValI.I2_39, g_HarmValI.I2_40,
		g_HarmValI.I2_41, g_HarmValI.I2_42, g_HarmValI.I2_43, g_HarmValI.I2_44, g_HarmValI.I2_45, g_HarmValI.I2_46, g_HarmValI.I2_47, g_HarmValI.I2_48, g_HarmValI.I2_49, g_HarmValI.I2_50,
		g_HarmValI.I2_51
	)
	var idxData3 = new Array(
		g_HarmValI.I3_2, g_HarmValI.I3_3, g_HarmValI.I3_4, g_HarmValI.I3_5, g_HarmValI.I3_6, g_HarmValI.I3_7, g_HarmValI.I3_8, g_HarmValI.I3_9, g_HarmValI.I3_10,
		g_HarmValI.I3_11, g_HarmValI.I3_12, g_HarmValI.I3_13, g_HarmValI.I3_14, g_HarmValI.I3_15, g_HarmValI.I3_16, g_HarmValI.I3_17, g_HarmValI.I3_18, g_HarmValI.I3_19, g_HarmValI.I3_20,
		g_HarmValI.I3_21, g_HarmValI.I3_22, g_HarmValI.I3_23, g_HarmValI.I3_24, g_HarmValI.I3_25, g_HarmValI.I3_26, g_HarmValI.I3_27, g_HarmValI.I3_28, g_HarmValI.I3_29, g_HarmValI.I3_30,
		g_HarmValI.I3_31, g_HarmValI.I3_32, g_HarmValI.I3_33, g_HarmValI.I3_34, g_HarmValI.I3_35, g_HarmValI.I3_36, g_HarmValI.I3_37, g_HarmValI.I3_38, g_HarmValI.I3_39, g_HarmValI.I3_40,
		g_HarmValI.I3_41, g_HarmValI.I3_42, g_HarmValI.I3_43, g_HarmValI.I3_44, g_HarmValI.I3_45, g_HarmValI.I3_46, g_HarmValI.I3_47, g_HarmValI.I3_48, g_HarmValI.I3_49, g_HarmValI.I3_50,
		g_HarmValI.I3_51
	)
	var max = []
	max.push(Math.max.apply(Math, idxData1))
	max.push(Math.max.apply(Math, idxData2))
	max.push(Math.max.apply(Math, idxData3))

	var maxValFromTab = Math.max.apply(Math, max);

	var maxHeight = maxValFromTab;
	if (maxValFromTab < 10) {
		maxHeight = 10;
	}


	var strI1 = " I1="
	var strI2 = " I2="
	var strI3 = " I3="
	if (g_PagesCfg.conConfig == 1) {
		strI1 = " I1-2="
		strI2 = " I2-3="
		strI3 = " I3-1="
	}

	var formHtml2 = "";
	formHtml2 += '<table style="background: white; border: 1px solid black; vertical-align: bottom; border-collapse: collapse;">';
	formHtml2 += '<tr style="border: 1px; vertical-align: bottom; border-collapse: collapse; width:200px;">';
	formHtml2 += '<td style=" padding-right: 5px;padding-left: 5px; vertical-align: bottom; border-right-style: dashed;"><text style="display: block; margin-bottom: 80px;" id="Ig"></text><text style="display: block; margin-bottom: 80px;" id="Id"></text></td>';
	for (var i = 0; i < 50; i++) {
		formHtml2 += '<td title="' + strI1 + idxData1[i].toFixed(1) + '% ,' + strI2 + idxData2[i].toFixed(1) + '% ,' + strI3 + idxData3[i].toFixed(1) + '%" style="border: 1px; border-left:none" style="padding-right: 1px;padding-left: 2px; border: 1px solid black; vertical-align: bottom; border-collapse: collapse;" id="hu"+i><dd id="hU"+i style=" height: ' + ((idxData1[i]) / maxHeight) * 100 * 2 + 'px; background-color : #E6E907"></dd></td>';
		formHtml2 += '<td title="' + strI1 + idxData1[i].toFixed(1) + '% ,' + strI2 + idxData2[i].toFixed(1) + '% ,' + strI3 + idxData3[i].toFixed(1) + '%" style="border: 1px; border:none" onmouseover="fMOuseOnI(' + (i + 2) + ',' + idxData1[i] + ',' + idxData2[i] + ',' + idxData3[i] + ');" style="padding-right: 1px;padding-left: 2px; border: 1px solid black; vertical-align: bottom; border-collapse: collapse;" id="hu"+i><dd id="hU"+i style="margin-left:-4px;height: ' + ((idxData2[i]) / maxHeight) * 100 * 2 + 'px; background-color : #4BD106" "></dd></td>';
		formHtml2 += '<td title="' + strI1 + idxData1[i].toFixed(1) + '% ,' + strI2 + idxData2[i].toFixed(1) + '% ,' + strI3 + idxData3[i].toFixed(1) + '%" style="border: 1px; border-right:none" onmouseover="fMOuseOnI(' + (i + 2) + ',' + idxData1[i] + ',' + idxData2[i] + ',' + idxData3[i] + ');" style="style="padding-right: 1px;padding-left: 2px; border: 1px solid black; vertical-align: bottom; border-collapse: collapse;" id="hu"+i><dd id="hU"+i style="margin-left:-4px;height: ' + ((idxData3[i]) / maxHeight) * 100 * 2 + 'px; background-color : #8306D1"></dd></td>';
		formHtml2 += '<td width="3px"></td>'
	}
	formHtml2 += '</tr>';
	formHtml2 += '<tr>';
	formHtml2 += '<td></td>';
	for (var i = 2; i < 52; i++) {
		formHtml2 += '<td colspan="4" style="font-size : 10px;"><center>' + i + '</center></td>';
	}
	formHtml2 += '</tr>';
	formHtml2 += '</table >';
	$("#harmITab").html(formHtml2);
	countSize();

	$('#Ig').text(maxHeight.toFixed(1) + "%");
	$('#Id').text((maxHeight / 2).toFixed(1) + "%");
}

function fMOuseOnU(a, e, f, g) {
	var strU1 = " U1="
	var strU2 = " U2="
	var strU3 = " U3="
	if (g_PagesCfg.conConfig == 1) {
		strU1 = " U1-2="
		strU2 = " U2-3="
		strU3 = " U3-1="
		$('#U1').text('U12');
		$('#U2').text('U23');
		$('#U3').text('U31');
	}
	$("#p1").text("H" + a.toString() + strU1 + e.toFixed(1) + " %, " + strU2 + f.toFixed(1) + " %, " + strU3 + g.toFixed(1) + " %")
}

function fMOuseOnI(a, e, f, g) {
	var strI1 = " I1="
	var strI2 = " I2="
	var strI3 = " I3="
	$("#p1").text("H" + a.toString() + strI1 + e.toFixed(1) + " %, " + strI2 + f.toFixed(1) + " %, " + strI3 + g.toFixed(1) + " %")
}

function countSize() {
	$("dd").css("width", (window.innerWidth * 0.011).toString() + "px")
}

function checkField(passfield, checkfield) {
	this.passfield = passfield;
	this.checkfield = checkfield;
	this.equal = 1;

	this.compare = function () {
		if ($('#' + this.checkfield).val() == $('#' + this.passfield).val()) {
			this.equal = 1;

			p = document.getElementById(this.checkfield);
			p.className = "";
		} else {
			this.equal = 0;

			p = document.getElementById(this.checkfield);
			p.className = "error";

		}
	}

	this.activate = function () {
		$('#' + this.checkfield).css('display', 'inline');
		$('#' + this.checkfield).prev().css('display', 'inline');
		this.equal = 0;
	}
}
var ftpAdmPassControl = new checkField('ftpAdm', 'ftpAdmCheck');
var ftpUserPassControl = new checkField('ftpUsr', 'ftpUsrCheck');
var wwwAdmPassControl = new checkField('wwwAdm', 'wwwAdmCheck');
var wwwUserPassControl = new checkField('wwwUsr', 'wwwUsrCheck');

//-----------File explorer
var lineIcon = '<svg style="margin-bottom: 10px" xmlns:svg="http://www.w3.org/2000/svg" width="50" height="30" viewBox="0 0 50.000001 30" id="svg2" version="1.1" inkscape:version="0.91 r13725" sodipodi:docname="drawing.svg"> <defs id="defs4"></defs> <sodipodi:namedview id="base" pagecolor="#ffffff" bordercolor="#666666" borderopacity="1.0" inkscape:pageopacity="0.0" inkscape:pageshadow="2" inkscape:zoom="15.839192" inkscape:cx="27.894718" inkscape:cy="12.999316" inkscape:document-units="px" inkscape:current-layer="layer1" showgrid="false" units="px" inkscape:window-width="1920" inkscape:window-height="1018" inkscape:window-x="-8" inkscape:window-y="334" inkscape:window-maximized="1"></sodipodi:namedview> <metadata id="metadata7"> <rdf:rdf> <cc:work rdf:about=""> <dc:format>image/svg+xml</dc:format> <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage"></dc:type> <dc:title></dc:title> </cc:work> </rdf:rdf> </metadata> <g inkscape:label="Layer 1" inkscape:groupmode="layer" id="layer1" transform="translate(0,-1022.3622)"> <path style="fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1;fill-opacity:1;stroke-miterlimit:4;stroke-dasharray:2,1;stroke-dashoffset:0" d="m 11.048543,1024.2042 0,16.1624 35.607878,-0.1262" id="path4164" inkscape:connector-curvature="0"></path> </g></svg>'
var fileIcon = '<svg width="30" height="30" viewBox="0 -20 1792 1900" xmlns="http://www.w3.org/2000/svg"><path d="M1717 931q0-35-53-35h-1088q-40 0-85.5 21.5t-71.5 52.5l-294 363q-18 24-18 40 0 35 53 35h1088q40 0 86-22t71-53l294-363q18-22 18-39zm-1141-163h768v-160q0-40-28-68t-68-28h-576q-40 0-68-28t-28-68v-64q0-40-28-68t-68-28h-320q-40 0-68 28t-28 68v853l256-315q44-53 116-87.5t140-34.5zm1269 163q0 62-46 120l-295 363q-43 53-116 87.5t-140 34.5h-1088q-92 0-158-66t-66-158v-960q0-92 66-158t158-66h320q92 0 158 66t66 158v32h544q92 0 158 66t66 158v160h192q54 0 99 24.5t67 70.5q15 32 15 68z"/></svg>'
var plusIcon = '<svg class = "plisIcon"style="margin-bottom: 8px;" width="15" height="15" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1344 800v64q0 14-9 23t-23 9h-352v352q0 14-9 23t-23 9h-64q-14 0-23-9t-9-23v-352h-352q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h352v-352q0-14 9-23t23-9h64q14 0 23 9t9 23v352h352q14 0 23 9t9 23zm128 448v-832q0-66-47-113t-113-47h-832q-66 0-113 47t-47 113v832q0 66 47 113t113 47h832q66 0 113-47t47-113zm128-832v832q0 119-84.5 203.5t-203.5 84.5h-832q-119 0-203.5-84.5t-84.5-203.5v-832q0-119 84.5-203.5t203.5-84.5h832q119 0 203.5 84.5t84.5 203.5z"/></svg>'
var minusIcon = '<svg style="margin-bottom: 8px;" width="15" height="15" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1344 800v64q0 14-9 23t-23 9h-832q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h832q14 0 23 9t9 23zm128 448v-832q0-66-47-113t-113-47h-832q-66 0-113 47t-47 113v832q0 66 47 113t113 47h832q66 0 113-47t47-113zm128-832v832q0 119-84.5 203.5t-203.5 84.5h-832q-119 0-203.5-84.5t-84.5-203.5v-832q0-119 84.5-203.5t203.5-84.5h832q119 0 203.5 84.5t84.5 203.5z"/></svg>'
var archIcon = '<svg width="30" height="30" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M768 384v-128h-128v128h128zm128 128v-128h-128v128h128zm-128 128v-128h-128v128h128zm128 128v-128h-128v128h128zm700-388q28 28 48 76t20 88v1152q0 40-28 68t-68 28h-1344q-40 0-68-28t-28-68v-1600q0-40 28-68t68-28h896q40 0 88 20t76 48zm-444-244v376h376q-10-29-22-41l-313-313q-12-12-41-22zm384 1528v-1024h-416q-40 0-68-28t-28-68v-416h-128v128h-128v-128h-512v1536h1280zm-627-721l107 349q8 27 8 52 0 83-72.5 137.5t-183.5 54.5-183.5-54.5-72.5-137.5q0-25 8-52 21-63 120-396v-128h128v128h79q22 0 39 13t23 34zm-141 465q53 0 90.5-19t37.5-45-37.5-45-90.5-19-90.5 19-37.5 45 37.5 45 90.5 19z"></path></svg>';

function generateFileTree(fileList) {
	var fileArray = fileList.split(';');
	var tmp = "";

	for (var i = 0; i < fileArray.length; i++) {
		tmp += "<div id='" + fileArray[i].replace('.', '_') + "'></div>"
	}
	$("#fileExplorerWindow").html(tmp);

	for (var i = 0; i < fileArray.length; i++) {

		tmp = "";
		if (fileArray[i].indexOf('.') == -1) {
			tmp += "<div class='folder1'><a class='fileText' patch='" + fileArray[i] + "'>" + plusIcon + fileIcon + fileArray[i] + "</a></div><div></div>";
		} else {
			tmp += "<div class='file'><a href=" + fileArray[i] + " ><a class='fileText'>" + archIcon + fileArray[i] + "</a></div>";;
		}
		$('#' + fileArray[i].replace('.', '_')).html(tmp);
	}
	$('.folder1').removeAttr();
	$('.file').removeAttr();
	$('.folder1').click(clickOnFolder);
}

var lastSelectedObDir;
var lastSelectedDir;

function generateFileTreeInter(filelist, obiect) {
	var fileArray = filelist.split(';');
	fileArray.pop();
	var tmp = "";

	for (var i = 0; i < fileArray.length; i++) {
		tmp += "<div id='" + fileArray[i].replace('.', '_') + "'></div>"
	}
	$(obiect).html(tmp);

	var childArray = $(obiect).children();

	for (var i = 0; i < fileArray.length; i++) {
		var beforePath = lastSelectedDir;
		if (beforePath != undefined) {
			beforePath += "/";
		} else {
			beforePath = "";
		}

		tmp = "";
		if (fileArray[i].indexOf('.') == -1) {
			tmp += "<div class='folder' style='margin-left: 30px'>" + lineIcon + "<a class='fileText' patch='" + beforePath + fileArray[i] + "'>" + plusIcon + fileIcon + fileArray[i] + "</a></div><div style='margin-left: 75px'></div>";
		} else {
			tmp += "<div class='file' style='margin-left: 30px'>" + lineIcon + "<a href=" + beforePath + fileArray[i] + "><span class='fileText'>" + archIcon + fileArray[i] + "</span></a></div>";;
		}
		//$('#'+fileArray[i].replace('.','_')).html(tmp);
		$(childArray[i]).html(tmp);
	}
	$('.folder').removeAttr();
	$('.file').removeAttr();
	$('.folder').click(clickOnFolder1);
}

function clickOnFolder() {
	console.log(lastSelectedObDir = $(this).next());
	lastSelectedDir = $($(this).children()[0]).attr('patch');

	getDir(lastSelectedDir, generateFileTreeInter)
}

function clickOnFolder1() {
	console.log(lastSelectedObDir = $(this).next());
	lastSelectedDir = $($(this).children()[1]).attr('patch');

	getDir(lastSelectedDir, generateFileTreeInter)
}

function getDir(dir, fun) {
	$.getJSON("ajax.sht" + Math.random(), "ajaxFun=getDir?" + dir + "?", function (msg) {
		try {
			fun(msg.conConfig, lastSelectedObDir);
		} catch (err) {
			console.error(err);
		}
	});
}