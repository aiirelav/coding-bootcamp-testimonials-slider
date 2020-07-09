var index = 0;
     var img = document.getElementById("image");
     var quote = document.getElementById("quote");
     var nm = document.getElementById("student-name");
     var role = document.getElementById("role");

     var person = [
     {
      pic: "images/image-tanya.jpg",
      qt: "“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so   excited about the future. ”",
      studentName: "Tanya Sinclair",
      role: "UX Engineer"
     },
     {
      pic: "images/image-john.jpg",
      qt: "“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about  starting up as a professional developer. ”",
      studentName: "John Tarkpor",
      role: "Junior Front-end Developer"
     }];

     document.onkeydown = function(e){
      if(e.keyCode === 37){
        decreaseIndex();
      } else if(e.keyCode === 39){
        increaseIndex();
      } 
     }
     function decreaseIndex(){
      if (index === 0){
        index = person.length - 1;
      }
      else {
        index--;
      }
      changeContent(index);
     }
     function increaseIndex(){
      if(index === person.length -1){
        index = 0;  
      }
      else {
        index++;
      }
      changeContent(index);
     }

     function changeContent(index){  
         console.log(nm);
         img.src = person[index].pic;
         quote.innerHTML = person[index].qt;
         nm.innerHTML = person[index].studentName;
         role.innerHTML = person[index].role;   
    }