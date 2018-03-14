function computeFactor() {
    var s = document.getElementById("s").innerHTML;
    var h = document.getElementById("h").innerHTML;
    var l = document.getElementById("l").innerHTML;

    s = parseInt(s);
    h = parseInt(h);
    l = parseInt(l);

    var t = (h + l) / 2;
    var w = Math.pow(s, 0.16);
    var f = 35.74 + 0.6215 * t - 35.75 * w + 0.4275 * t * w;
    f = f.toFixed(2);

    document.getElementById("result").innerHTML = f;
}
