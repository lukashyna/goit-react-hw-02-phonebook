(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],[,function(t,e,n){t.exports={label:"contactForm_label__3lbiJ",input:"contactForm_input__2aBGS",submit:"contactForm_submit__2-WXl"}},function(t,e,n){t.exports={container:"app_container__SMeVN",phonebook:"app_phonebook__ks6xW",contactForm:"app_contactForm__1nL6c",contacts:"app_contacts__1iqDt"}},,,,,,function(t,e,n){t.exports={findContacts:"contactFilter_findContacts__3dgCu",findContactInput:"contactFilter_findContactInput__1EKJN"}},function(t,e,n){t.exports={contactList:"contactList_contactList__1T8vT",contactListItem:"contactList_contactListItem__2J6lS"}},,,,function(t,e,n){t.exports={delete:"contactListItem_delete__7uOqN"}},,function(t,e,n){t.exports=n(20)},,,,,function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),o=n(11),r=n.n(o),l=n(14),i=n(3),s=n(4),m=n(7),u=n(6),d=n(22),p=n(12),b=n(5),f=n(1),h=n.n(f),v=function(t){Object(m.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){t.setState(Object(b.a)({},e.target.name,e.target.value))},t.handleSubmit=function(e){e.preventDefault(),t.props.onAddContact(Object(p.a)({},t.state)),t.setState({name:"",number:""})},t}return Object(s.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return c.a.createElement("form",{onSubmit:this.handleSubmit},c.a.createElement("label",{className:h.a.label},"Name",c.a.createElement("input",{className:h.a.input,type:"text",name:"name",value:e,onChange:this.handleChange})),c.a.createElement("label",{className:h.a.label},"Number",c.a.createElement("input",{className:h.a.input,type:"tel",pattern:"[0-9]{3}-[0-9]{2}-[0-9]{2}",name:"number",placeholder:"000-00-00",value:n,onChange:this.handleChange})),c.a.createElement("button",{className:h.a.submit,type:"submit"},"Add contact"))}}]),n}(a.Component),C=n(8),_=n.n(C),E=function(t){var e=t.changeFilter,n=t.value;return c.a.createElement("div",null,c.a.createElement("label",{className:_.a.findContacts},"Find contacts by name",c.a.createElement("input",{className:_.a.findContactInput,onChange:e,value:n,type:"text",name:"search"})))},g=n(13),N=n.n(g),F=function(t){var e=t.contact,n=t.removeContact;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",null,c.a.createElement("span",null,e.name," "),c.a.createElement("span",null,e.number)),c.a.createElement("button",{className:N.a.delete,onClick:n,type:"button"},"Delete"))},y=n(9),L=n.n(y),S=function(t){var e=t.contacts,n=t.removeContact;return c.a.createElement("ul",{className:L.a.contactList},e.map((function(t){return c.a.createElement("li",{className:L.a.contactListItem,key:t.id},c.a.createElement(F,{removeContact:function(){return n(t.id)},contact:t}))})))},k=n(2),O=n.n(k),j=function(t){Object(m.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.addContact=function(e){var n=e.name,a=e.number,c={id:Object(d.a)(),name:n,number:a};t.state.contacts.some((function(t){return t.name.toLowerCase()===c.name.toLowerCase()}))?alert("".concat(n," is already in contacts.")):t.setState((function(t){return{contacts:[].concat(Object(l.a)(t.contacts),[c])}}))},t.removeContact=function(e){var n=t.filterContact();t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}})),1===n.length&&t.resetFilter()},t.changeFilter=function(e){t.setState({filter:e.target.value})},t.resetFilter=function(){t.setState({filter:""})},t.filterContact=function(){return t.state.contacts.filter((function(e){return e.name.toLowerCase().includes(t.state.filter.toLowerCase())}))},t}return Object(s.a)(n,[{key:"render",value:function(){var t=this.state,e=t.contacts,n=t.filter;return c.a.createElement("div",{className:O.a.container},c.a.createElement("div",{className:O.a.contactForm},c.a.createElement("h1",{className:O.a.phonebook},"Phonebook"),c.a.createElement(v,{onAddContact:this.addContact})),c.a.createElement("div",null,e.length>0&&c.a.createElement("div",null,c.a.createElement("h2",{className:O.a.contacts},"Contacts"),e.length>=2&&c.a.createElement(E,{changeFilter:this.changeFilter,value:n}),c.a.createElement(S,{contacts:this.filterContact(),removeContact:this.removeContact}))))}}]),n}(a.Component);r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(j,null)),document.getElementById("root"))}],[[15,1,2]]]);
//# sourceMappingURL=main.2d83b68b.chunk.js.map