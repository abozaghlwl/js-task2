y=prompt("does wife alive")
d=parseInt(prompt("how many amount of mony"))
if(y=="yes"){
    wife=d/8
    alert("Wife's right"+wife)
    sons=parseInt(prompt("how many number of sons"))
    let rest = d-wife
    let sons_right=rest/sons
    alert("son's right"+sons_right)
} else{ 
    sons=parseInt(prompt("how many number of sons"))
    let sons_right=d/sons
    alert("son's right"+sons_right)
}
