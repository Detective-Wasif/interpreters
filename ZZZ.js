f=b=>i=>eval(`m=Array(3e5).fill(k=p=0);o='';${[...b].map(c=>'m[p]++@m[p]--@p++@p--@while(m[p]){@}@m[p]=i.charCodeAt(k++)||0@o+=String.fromCharCode(m[p])'.split`@`['+-><[],.'.indexOf(c)]).join`;`};o`)
const print=x=>console.log(JSON.stringify(x))
sub={'zz':'>','-zz':'<','z':'+','-z':'-','zzz':'.','-zzz':',','z+z':'[','z-z':']'}
code=code.split(" ").map(x=>sub[x]).join('')
print(f(code)())
