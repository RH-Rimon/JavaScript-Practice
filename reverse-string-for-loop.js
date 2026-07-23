const commitment = 'I will work hard and will never give up';

let reverseCm = '';
for(const letter of commitment){

    reverseCm =  letter + reverseCm;
    console.log(letter, reverseCm);
}