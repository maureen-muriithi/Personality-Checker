$(document).ready(function() {
      
    $(function(){
        $('.carousel').carousel({
          interval: 1500
        });
    });


    function getPersonality(event) {
        event.preventDefault();

            var ans1 = document.getElementsByName("question1");
            var ans2 = document.getElementsByName("question2");
            var ans3 = document.getElementsByName("question3");
            var ans4 = document.getElementsByName("question4");
            var ans5 = document.getElementsByName("question5");
            var ans6 = document.getElementsByName("question6");
            var ans7 = document.getElementsByName("question7");
            var ans8 = document.getElementsByName("question8");
            var ans9 = document.getElementsByName("question9");
            var ans10 = document.getElementsByName("question10");

            var total = 0;
            ans1.forEach((evnt) => {
                if(evnt.checked){
                    total = total + parseInt(evnt.value);
                    return;
                }
            });

            ans2.forEach((evnt) => {
                if(evnt.checked){
                    total = total + parseInt(evnt.value);
                    return;
                }
            });

            ans3.forEach((evnt) => {
                if(evnt.checked){
                    total = total + parseInt(evnt.value);
                    return;
                }
            });

            ans4.forEach((evnt) => {
                if(evnt.checked){
                    total = total + parseInt(evnt.value);
                    return;
                }
            });

            ans5.forEach((evnt) => {
                if(evnt.checked){
                    total = total + parseInt(evnt.value);
                    return;
                }
            });

            ans6.forEach((evnt) => {
                if(evnt.checked){
                    total = total + parseInt(evnt.value);
                    return;
                }
            });

            ans7.forEach((evnt) => {
                if(evnt.checked){
                    total = total + parseInt(evnt.value);
                    return;
                }
            });

            ans8.forEach((evnt) => {
                if(evnt.checked){
                    total = total + parseInt(evnt.value);
                    return;
                }
            });

            ans9.forEach((evnt) => {
                if(evnt.checked){
                    total = total + parseInt(evnt.value);
                    return;
                }
            });

            ans10.forEach((evnt) => {
                if(evnt.checked){
                    total = total + parseInt(evnt.value);
                    return;
                }
            });

            console.log ("Total Marks = " + total)
            
            // display scores
            var score = document.getElementById("results");
            var userFirstName = document.getElementById("first-name").value;
            var userLastName = document.getElementById("last-name").value;

            if (!userFirstName || !userLastName){
                window.alert("Please fill in your names")
            }

            else if (document.querySelector('input[name="question1"]:checked')== null) {
                window.alert("You need to choose an answer for question 1")
            }
            else if (document.querySelector('input[name="question2"]:checked')== null) {
                window.alert("You need to choose an answer for question 2")
            }

            else if (document.querySelector('input[name="question3"]:checked')== null) {
                window.alert("You need to choose an answer for question 3")
            }

            else if (document.querySelector('input[name="question4"]:checked')== null) {
                window.alert("You need to choose an answer for question 4")
            }

            else if (document.querySelector('input[name="question5"]:checked')== null) {
                window.alert("You need to choose an answer for question 5")
            }

            else if (document.querySelector('input[name="question6"]:checked')== null) {
                window.alert("You need to choose an answer for question 6")
            }

            else if (document.querySelector('input[name="question7"]:checked')== null) {
                window.alert("You need to choose an answer for question 7")
            }

            else if (document.querySelector('input[name="question8"]:checked')== null) {
                window.alert("You need to choose an answer for question 8")
            }

            else if (document.querySelector('input[name="question9"]:checked')== null) {
                window.alert("You need to choose an answer for question 9")
            }

            else if (document.querySelector('input[name="question10"]:checked')== null) {
                window.alert("You need to choose an answer for question 10")
            }

            else if (total === 0) {
                score.innerHTML = `Unknown personality!! Please try again!`
            }
            else if (total < 50) {
                score.innerHTML = `Helloo ${userFirstName} ${userLastName}! Your personality type is Extrovert. <br> An Etroverts is someone who is motivated by external stimuli. Extroverts tend to really like people and socializing and to have outgoing, vocal personalities. <br> Extroverts are often described as the life of the party. Their outgoing, vibrant nature draws people to them, and they have a hard time turning away the attention. Extroverts are great at pulling out the best from people — conversation, energy and confidence.`;
            }    
            else if (total > 60) { 
                score.innerHTML = `Helloo ${userFirstName} ${userLastName}! Your personality type is Introvert. <br> An Introvert is someone who prefers calm, minimally stimulating environments. Introverts tend to feel drained after socializing and regain their energy by spending time alone. <br> Because an introvert's advantage stems in that they tend to think before speaking or acting, they are less prone to impulsive behavior, they are good listners, and amazingly make good romantic partners!!`;
            }
            else {
                score.innerHTML = `Helloo ${userFirstName} ${userLastName}! Your personality type is Ambivert.<br> An Ambivert is someone who exhibits qualities of both introversion and extroversion, and can flip into either depending on their mood, context, and goals. <br> The ambivert advantage stems from the tendency to be assertive and enthusiastic enough to persuade and close, but at the same time, listening carefully to customers and avoiding the appearance of being overly confident or excited`;
            }
            console.log("data",total)
        
        };

    function refreshForm(){
        document.getElementById("results").innerHTML="";
    }

    var form = document.getElementById("form"); 
    form.addEventListener("submit", getPersonality);
    form.addEventListener("reset", refreshForm);
     
});    