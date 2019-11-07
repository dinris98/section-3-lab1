const settitlebutton=document.querySelector('.settitle');
settitlebutton.addEventListener('click',settitle);
const title=document.querySelector('.titleContant');
const label1=document.querySelector('.lab1');
    function settitle(){
      pagetitle.document.createElement('title');
      pagetitle.textContext=title.value;
      document.body.apprendChild(pagetitle);
      header1=document.createElement('h1');
      header1.textContext=title.value;
      document.body.apprendChild(header1);
      counter=1
      remove();
    }
    function remove() {
      label1.parentNode.removeChild(label1);
      settitlebutton.parentNode.removeChild(settitlebutton);
      title.parentNode.removeChild(title);
      addproductform;
      }
    newline=document.createElement('br');
    label1=document.createElement('label');
    input1= document.createElement('input');
    submit1=document.createElement('button');
    pproduct=document.createElement('p');
    function addproductform() {
      input1.value.lenght=0;
      label1 textContext='enter your 10 products list :';
      document.body.apprendChild(label);
      document.body.apprendChild(newline);
      submit1.textContext='add product :';
      document.body.apprendChild(submit1);
      submit1.addEventListener('click',addyourProduct);


    }
