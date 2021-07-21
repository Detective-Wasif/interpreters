const print=x=>console.log(JSON.stringify(x))
code=code.split("\n").slice(1)
variable={}
code.forEach(function(line,i){
  if([...'_$!'].some(x=>line[0]==x)){
    pairs=line.split("?")
    name=pairs[0].slice(1).trim()
    val=pairs[1].trim()
    if(['!','!!'].includes(val)){val=['!','!!'].indexOf(val)}
    try{variable[name]=JSON.parse(val)}
    catch{variable[name]=val}
  }
  if(line[0]=="#"){
    print(line.slice(2))
  }
})
print(variable)
