(this["webpackJsonpgoit-react-hw-02-bank-account"]=this["webpackJsonpgoit-react-hw-02-bank-account"]||[]).push([[0],{2:function(e,t,a){e.exports={table:"TransactionHistory_table__s3ssx",tableHead:"TransactionHistory_tableHead__3ZzHZ",tableTitle:"TransactionHistory_tableTitle__3LHXw",data:"TransactionHistory_data__3rlFy"}},23:function(e,t,a){e.exports={dashboard:"Dashboard_dashboard__3uOvU"}},25:function(e,t,a){e.exports=a(39)},3:function(e,t,a){e.exports={balance:"Balance_balance__2L_75",arrow_increase:"Balance_arrow_increase__108Ed",arrow_decrease:"Balance_arrow_decrease__3xpIS",amount:"Balance_amount__2_ScH"}},38:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(4),c=a.n(o),s=a(14),l=a.n(s),i=a(24),u=a(12),p=a(19),m=a(7),b=a(8),d=a(10),h=a(9),y=a(11),f=a(20),_=a.n(f),g=a(13),O=(a(33),a(5)),v=a.n(O),E=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={amount:"",type:"",date:""},a.notifyLittleMoney=function(){Object(g.b)("Sorry, you don't have enough money on your account",{autoClose:2e3,position:"top-center"})},a.notifyNegativeMoney=function(){Object(g.b)("The amount needs to be bigger than zero",{autoClose:2e3,position:"top-center"})},a.onChange=function(e){a.setState({amount:""===e.target.value?"":parseFloat(e.target.value)})},a.onClick=function(e){var t=a.props.balance,n=a.state.amount;if(n>0){if(t<("Withdrawal"===e.target.name?n:0))return a.notifyLittleMoney(),void a.setState({amount:"",type:"",date:""});var r=new Date;a.setState({type:e.target.name,date:r.toLocaleString()},(function(){a.props.addOperation(a.state),a.setState({amount:"",type:"",date:""})}))}else a.notifyNegativeMoney(),a.setState({amount:"",type:"",date:""})},a}return Object(y.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=this.state.amount;return r.a.createElement("section",{className:v.a.controls},r.a.createElement("input",{className:v.a.input,value:e,type:"number",onChange:this.onChange,step:"0.01"}),r.a.createElement("button",{className:v.a.btn,name:"Deposit",onClick:this.onClick,type:"button"},"Deposit"),r.a.createElement("button",{className:v.a.btn,name:"Withdrawal",onClick:this.onClick,type:"button"},"Withdraw"),r.a.createElement(g.a,null))}}]),t}(n.Component),w=a(3),j=a.n(w),C=function(e){var t=e.changeBalance,a=t.Deposit,n=t.Withdrawal,o=t.balance,c=a.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1 "),s=n.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1 "),l=o.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1 ");return r.a.createElement("section",{className:j.a.balance},r.a.createElement("span",{className:j.a.arrow_increase},String.fromCharCode(8593)," "),r.a.createElement("span",{className:j.a.amount},c,"$"),r.a.createElement("span",{className:j.a.arrow_decrease},String.fromCharCode(8595)," "),r.a.createElement("span",{className:j.a.amount},s,"$"),r.a.createElement("span",{className:j.a.amount},"Balance: ",l,"$"))},N=a(2),k=a.n(N),S=function(e){var t=e.transactions;return t.length>0&&r.a.createElement("table",{className:k.a.table},r.a.createElement("thead",{className:k.a.tableHead},r.a.createElement("tr",null,r.a.createElement("th",{className:k.a.tableTitle},"Transaction"),r.a.createElement("th",{className:k.a.tableTitle},"Amount"),r.a.createElement("th",{className:k.a.tableTitle},"Date"))),r.a.createElement("tbody",null,t.map((function(e){return r.a.createElement("tr",{key:e.id},r.a.createElement("td",{className:k.a.data},e.type),r.a.createElement("td",{className:k.a.data},e.amount.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1 "),"$"),r.a.createElement("td",{className:k.a.data},e.date))})).reverse()))},x=a(23),D=a.n(x);function T(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function H(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?T(a,!0).forEach((function(t){Object(u.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):T(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var W=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={transaction:[],balance:{Deposit:0,Withdrawal:0,balance:0}},a.handleClick=function(){var e=Object(p.a)(l.a.mark((function e(t){var n,r,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=H({},t,{id:_.a.v4()}),e.next=3,a.setState((function(e){return{transaction:[].concat(Object(i.a)(e.transaction),[n])}}));case 3:r=a.state.transaction,o=a.getValues(r),a.setState((function(e){return H({},e,{balance:o})}));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.getValues=function(e){var t=e.reduce((function(e,t){return e[t.type]?H({},e,Object(u.a)({},t.type,e[t.type]+=t.amount)):H({},e,Object(u.a)({},t.type,t.amount))}),{Deposit:0,Withdrawal:0});return t.balance=t.Deposit-t.Withdrawal,t},a}return Object(y.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=this.state,t=e.transaction,a=e.balance;return r.a.createElement("div",{className:D.a.dashboard},r.a.createElement(E,{addOperation:this.handleClick,balance:a.balance}),r.a.createElement(C,{changeBalance:a}),r.a.createElement(S,{transactions:t}))}}]),t}(n.Component);a(38);c.a.render(r.a.createElement(W,null),document.getElementById("root"))},5:function(e,t,a){e.exports={controls:"Controls_controls__2Job5",input:"Controls_input__1qWUy",btn:"Controls_btn__194ew Controls_input__1qWUy"}}},[[25,1,2]]]);
//# sourceMappingURL=main.5d90acea.chunk.js.map