function phase(code){
    var x = window.open("");
    x.document.write(code);
    return x;
}
function pm(code,t){
    document.getElementsByTagName("iframe")[0].contentWindow.postMessage({
        "type": t,
        "code": code
    }, "*");
}
function kill(){
    if(document.getElementById("killsw").value == "1"){
        window.location.replace('https://kahoot.it/');
    }
}
function initB(){
    var ir = document.createElement("iframe");
    ir.setAttribute("src", document.getElementById("provi").value);
    document.body.appendChild(ir);
    setTimeout(function(){
        //pm(`var x = window.open("");x.document.write(`);
        var e = (function(){
            if(window.__files == undefined){
                document.getElementById("closew").textContent = "Failed to initialize bunker: compiled.js missing (reload the page and make sure you have extracted bunker-vX-beta.zip first)";
            } else {
                var d = window.__files["files"]["/root.html"];
                return d;
            }
        })();
        //phase(e.replace("{{COMPILEDJS}}", `window.__files=JSON.parse(decodeURIComponent("${encodeURIComponent(JSON.stringify(window.__files))}"))`))
        //var b = `window.open("").document.write(decodeURIComponent("${
        //	encodeURIComponent()
        //}"))`;
        //var k = e.replace("{{COMPILEDJS}}", `window.__files=JSON.parse(decodeURIComponent("${encodeURIComponent())}"))`);
        //var b = encodeURIComponent(e);
        //var j = encodeURIComponent(JSON.stringify(window.__files));
        //console.log(b.indexOf("%7B%7BCOMPILEDJS%7D%7D"));
        //var k = b.replace("%7B%7BCOMPILEDJS%7D%7D", `window.__files=JSON.parse(decodeURIComponent(\\"${j}\\"))`);delete b; delete j;
        //var a = `window.open("").document.write(decodeURIComponent("${
        //	k
        //}"))`;
        pm(`window.__files=${JSON.stringify(window.__files)}`, "exec");
        pm(e, "load");
        setTimeout(kill, 2000);
    }, 2000);
}