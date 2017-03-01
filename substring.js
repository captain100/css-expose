var str = 'ABSDCRJSKFADC'


function getStr(s, o){
    var obj = {}
    var minLength = s.length
    for(var i = 0; i < s.length; i++){
        if(o.includes(s[i])) {
            obj[s[i]] = i
            var arr = Object.keys(obj).map(function(key) {
                return obj[key]
            })
            if(arr.length == o.length) {
                arr.sort(function(a,b) { return a - b})
                console.log(arr)
                minLength = arr[arr.length -1] - arr[0] + 1 < minLength ? arr[arr.length -1] - arr[0] + 1: minLength
            }
        }
    }
    return minLength

}
getStr(str, ['A', 'B', 'D'])