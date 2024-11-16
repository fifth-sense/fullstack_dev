const users = [{
    name: 'john',
    kedneys : [{
        healthy: false },
        {healthy: true}
    ]
}

]

const express = require('express');

const app = express();
app.use(express.json());

app.get("/", function(req,res){

    const noOfkidneys = users[0].kedneys.length;
    let noOfHealthyKedneys = 0;
    for(let i=0;i<noOfkidneys;i++){
        if(users[0].kedneys[i].healthy) {
            noOfHealthyKedneys=noOfHealthyKedneys+1;
        }
    }
    const noOfUnhealthyKedneys = noOfkidneys - noOfHealthyKedneys;
    res.json({ noOfkidneys, noOfUnhealthyKedneys, noOfHealthyKedneys}) 
})

app.post("/post", function(req, res){
    //add a new user provided kedney healthy or not take healthy value from user and add it
    const isHealthy = req.body.isHealthy;
    users[0].kedneys.push({healthy: isHealthy});
    res.json({msg: 'done!'});
})

app.put("/put", function(req, res){
    
    const noOfkidneys = users[0].kedneys.length;
    for(let i=0;i<noOfkidneys;i++){
        users[0].kedneys[i].healthy = true;
    }
    res.json({msg: 'done!'})

})

app.delete("/delete", function(req,res){
    let newArray=[];
    const noOfkidneys = users[0].kedneys.length;
    for(let i=0;i<noOfkidneys;i++){
        if(users[0].kedneys[i].healthy) {

        }
    }

})

//create 4 routes
//get = user can check how many kidney they have and thier health return to user how many kedneys and howm many are healthy
//post = user can add a new kidney
//put: user can replace a new kedney, make it healthy
//delete: user can remove a kidney
// create everything in memory and use wherever needed

app.listen(3000);