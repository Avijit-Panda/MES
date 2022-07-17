//write Buffer ,displays the length
//const buf1=Buffer.allocUnsafe(100);
//const len=buf1.write("welcomeClass",2,5,"utf8");
//console.log(len);

/* compare func
var buf1=Buffer.alloc(10,"W");
var buf2=Buffer.alloc(10,"Hi Welcome");
var result =buf1.compare(buf2);
if (result<0)
{
    console.log(buf1 +"comesbefore"+ buf2);

}
else if (result==0){
    console.log(buf1 +"equal to"+ buf2);

}
else
{
    console.log(buf1+"comesafter"+buf2);
}*/
/*copy func
var buf3=Buffer.alloc(10,"w");
var buf4=Buffer.alloc(10);
console.log("buff4 bfore copy"+buf4);
buf3.copy(buf4);
console.log("buff4 after copy"+buf4);*/
//memory efficiency______________________streams________________time eficiency____________
var http =require('http');
var options={
    host:'localhost',
    port:"8081",
    path:"/index.htm"};
    
var callback=function(response)
{
    var body="";
    response.on(data,function(data){
        body=body+data;
    });
    response.on("end",function(){console.log(body)});
}





var req=http.request(options,callback);
req.end();