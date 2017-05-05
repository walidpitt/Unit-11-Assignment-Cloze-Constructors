var inquirer = require('inquirer');

var BasicCard=require("./basicCard.js");

function clozeCard (text,cloze){
  this.text=text;
  this.cloze=cloze;
  }


var newCloze=new clozeCard();


var pantherQbCloze=new clozeCard("Who is the Quarterback of the Carolina Panthers","Cam Newton");
pantherQbCloze.partial=new clozeCard("...is the Quarterback of the Carolina Panthers.");
pantherQbCloze.fullText=new clozeCard("Cam Newton is the Quarterback of the Carolina Panthers.");

var draftPickCloze=new clozeCard("Who is the 2017 first round draft pick of the Carolina Panthers?","Christian Mccaffery");
draftPickCloze.partial= new clozeCard("...is the 2017 first round draft pick of the Carolina Panthers.");
draftPickCloze.fullText=new clozeCard("Christian Mccaffery is the 2017 first round draft pick of the Carolina Panthers.");

var pantherCoachCloze=new clozeCard("Who's the coach of the Carolina Panthers?","Ron Rivera");
lpantherCoachCloze.partial=new clozeCard("...is the coach of the Carolina Panthers.");
pantherCoachCloze.fullText=new clozeCard("Ron Rivera is the coach of the Carolina Panthers.");

var pantherFanCloze=new clozeCard("Who is the number one Panthers fan?","Wali Pitt");
pantherFanCloze.partial=new clozeCard("...is the number one Panthers fan.");
pantherFanCloze.fullText=new clozeCard("Wali Pitt is the number one Panthers fan.");

clozeCard.prototype.printCloze=function(){
	console.log(this.text);
    console.log(this.cloze);
};


inquirer.prompt([

   {
    type: "list",
    message: "What kind of card would you like to use?",
    choices: ["Basic","Cloze"],
    name: "card"
  },

 
  {
    type: "confirm",
    message: "Are you sure:",
    name: "confirm",
    default: true

  }


]).then(function(user) {


   
  if (user.confirm) {

    console.log("==============================================");
    console.log("");
    console.log("Welcome to CAROLINA PANTHER'S FLASH CARDS!");
    console.log("");   
    console.log("==============================================");

    if(user.card==="Basic"){
    	console.log("You chose Basic Cards!")
    	console.log("==============================================");
    	console.log("");
    
    	var pantherQbCloze=new clozeCard("Who is the Quarterback of the Carolina Panthers","Cam Newton");
  		var draftPickCloze=new clozeCard("Who is the 2017 first round draft pick of the Carolina Panthers?","Christian Mccaffery");
  		var pantherCoachCloze=new clozeCard("Who's the coach of the Carolina Panthers?","Ron Rivera");
  		var pantherFanCloze=new clozeCard("Who is the number one Panthers fan?","Wali Pitt");
          inquirer.prompt([
            {
             name:"question",
             message:"Who is the Quarterback of the Carolina Panthers?",
             name:"answer"
            }
            ]).then(function(answers){
              if(answers.answer===pantherQb.back){
               console.log("That's right! Well Done!");
               console.log("---------------------------------------------------------------------------------------------"); 
              }
              else{
                console.log("");
                console.log("Sorry, that is incorrect...");
                console.log("");
                console.log("The correct answer is: ");
                console.log(pantherQb.back);
                console.log("-----------------------------------------------------------------------------------------------");                
              }
            

            inquirer.prompt([
            {
             name:"question",
             message:"Who is the 2017 first round draft pick of the Carolina Panthers?",
             name:"answer"
            }
            ]).then(function(answers){
              if(answers.answer===draftPick.back){
               console.log("That's right! Well Done!");
               console.log("---------------------------------------------------------------------------------------------"); 
              }
              else{
                console.log("");
                console.log("Sorry, that is incorrect...");
                console.log("");
                console.log("The correct answer is: ");
                console.log(draftPick.back);
                console.log("-----------------------------------------------------------------------------------------------");                
              }
            

            inquirer.prompt([
            {
             name:"question",
             message:"Who's the coach of the Carolina Panthers?",
             name:"answer"
            }
            ]).then(function(answers){
              if(answers.answer===pantherCoach.back){
               console.log("That's right! Well Done!");
               console.log("---------------------------------------------------------------------------------------------"); 
              }
              else{
                console.log("");
                console.log("Sorry, that is incorrect...");
                console.log("");
                console.log("The correct answer is: ");
                console.log(pantherCoach.back);
                console.log("-----------------------------------------------------------------------------------------------");                
              }
            
            inquirer.prompt([
            {
             name:"question",
             message:"Who is the number one Panthers fan?",
             name:"answer"
            }
            ]).then(function(answers){
              if(answers.answer===pantherFan.back){
               console.log("That's right! Well Done!");
               console.log("---------------------------------------------------------------------------------------------"); 
              }
              else{
                console.log("");
                console.log("Sorry, that is incorrect...");
                console.log("");
                console.log("The correct answer is: ");
                console.log(pantherFan.back);
                console.log("-----------------------------------------------------------------------------------------------");                
              }
            })
            })
            })
            })          
       }
    else{
    	console.log("You chose Cloze Cards!")
    	console.log("==============================================");
    	console.log("");

         
	    	inquirer.prompt([
	    	{
	    	 name:"question",
	    	 message:"...is the Quarterback of the Carolina Panthers.",
	    	 name:"answer"
	    	}
	    	]).then(function(answers){
	    		if(answers.answer=== pantherQbCloze.cloze){
	    			console.log("That's right! Well Done!");
            console.log("---------------------------------------------------------------------------------------------");
	    		}

	    		else{
	    			console.log("");
	    			console.log("Sorry, that is incorrect...");
	    			console.log("");
	    			console.log("The correct answer is: ");
	    			console.log(pantherQbCloze.fullText.text)
            console.log("-----------------------------------------------------------------------------------------------");
	    		}

         
        inquirer.prompt([
        {
         name:"question",
         message:"...is the 2017 first round draft pick of the Carolina Panthers.",
         name:"answer"
        }
        ]).then(function(answers){
          if(answers.answer=== draftPickCloze.cloze){
            console.log("That's right! Well Done!");
            console.log("---------------------------------------------------------------------------------------------");

          }
          else{
            console.log("");
            console.log("Sorry, that is incorrect...");
            console.log("");
            console.log("The correct answer is: ");
            console.log(draftPickCloze.fullText.text)
            console.log("----------------------------------------------------------------------------------------------");
          }

           
        inquirer.prompt([
        {
         name:"question",
         message:"...is the coach of the Carolina Panthers.",
         name:"answer"
        }
        ]).then(function(answers){
          if(answers.answer=== pantherCoachCloze.cloze){
            console.log("That's right! Well Done!");
            console.log("---------------------------------------------------------------------------------------------");

       }
          else{
            console.log("");
            console.log("Sorry, that is incorrect...");
            console.log("");
            console.log("The correct answer is: ");
            console.log(pantherCoachCloze.fullText.text)
            console.log("---------------------------------------------------------------------------------------------");
          }

          
        inquirer.prompt([
        {
         name:"question",
         message:"...is the number one Panthers fan.",
         name:"answer"
        }
        ]).then(function(answers){
          if(answers.answer=== pantherFanCloze.cloze){
            console.log("That's right! Well Done!");
            console.log("---------------------------------------------------------------------------------------------");

       }/
          else{
            console.log("");
            console.log("Sorry, that is incorrect...");
            console.log("");
            console.log("The correct answer is: ");
            console.log(pantherFanCloze.fullText.text)
            console.log("---------------------------------------------------------------------------------------------");
          }
        });
        });
        });
        });
	     } 
      }
     

  else {

    console.log("");
    console.log("");
    console.log("You ain't no Panther fan...scaddle.");
    console.log("");
    console.log("");

  }

});


