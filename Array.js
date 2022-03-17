const Arr = [9,100,2,50,4,100,22,30];

//tìm các số chia hết cho 2
const Chan = (a) =>{return ((a%2)==0)?true:false};
const Arrchan = Arr.filter(Chan);
console.log(Arrchan);

//tìm các số lớn hơn 7
const tren7 = (a) =>{return (a>7)?true:false};
const Arrtren7 = Arr.filter(tren7);
console.log(Arrtren7);

//tìm các số nhỏ hơn 5
const duoi5 = (a) =>{return (a<5)?true:false};
const Arrduoi5 = Arr.filter(duoi5);
console.log(Arrduoi5);

//tìm các số nhỏ hơn 50 rồi nhân đôi
const duoi50 = (a) =>{return (a<50)?true:false};
const Arrduoi50 = Arr.filter(duoi50);
const Arrduoi50x2 =Arrduoi50.map((number) => number*2);
console.log(Arrduoi50x2);

