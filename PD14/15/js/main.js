let s1 = 222;
let s2 = 245;

for (let i = s1; i <= s2; i++){
    if (i % 3 === 0 ){
        let s3 = i.toString();
        if (s3.includes('3') || s3.includes('6') || s3.includes('9')){
            console.log(s3);
        }
    }
}