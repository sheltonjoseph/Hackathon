
function foo() {
    try{
    let cc = document.getElementById("name").value;
    
    console.log(cc);
    
    async function foo1(){
        let data = await fetch(`https://api.github.com/users/${cc}`);
        let data1 = await fetch(`https://api.github.com/users/${cc}/repos`)
        let result = await data.json();
        let result1= await data1.json();
        
        // for (i in result1){
        //     // console.log(`${result1[i].name}`);
        //     console.log(`${result1[i].name}:${result1[i].forks}`);


        // }
        document.getElementById("img").innerHTML = `
        <img src =${result.avatar_url}/>`
        
        for(var i in result1){
           var div1= document.createElement("div");
        //    setAttribute()
           
        div1.innerHTML = ` REPO NAME: ${result1[i].name} , Forks:${result1[i].forks} , repositery link: ${result1[i].html_url}`
        document.body.append(div1);
        
        
        }
        

    }
    foo1();
}catch(error){
    console.log(error);
}
}
(foo());