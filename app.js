//BÀI 1 Viết một chương trình JavaScript đơn giản để nối tất cả các phần tử của mảng sau thành một chuỗi.
// let myCoLor= ["Red","Green","White","Black"];
// let A = myCoLor.join(',');
// console.log(A);
// let B = myCoLor.join('+');
// console.log(B);

// // bài 2 Viết chương trình JavaScript chấp nhận một số làm đầu vào và chèn dấu gạch ngang (-) vào 
// // giữa hai số chẵn. Ví dụ: nếu bạn chấp nhận 025468, đầu ra phải là 0-2-5-4-6-8.
// let useInput = prompt('nhập vào chuỗi').split('');
// let arr = [];
// for(i=0;i<=useInput.length-1;i++){
//     arr.push(useInput[i]);
// }let kqua = arr.join('-');
// console.log(kqua);

//bài 4 Viết kịch bản yêu cầu người dùng nhập một dãy số, Các số được phân tách bằng dấu phẩy, 
//tính tổng các số và hiển thị cho người dùng
// let useInput = prompt('nhập vào 1 dãy số phân tách nhau bằng dấu phẩy').split(',');
// let tong=0;
// for(i=0;i<=useInput.length-1;i++){
//     tong=tong + Number(useInput[i]); 
// }console.log(tong);

//bài 5 Viết script yêu cầu người dùng nhập một dãy số, các số được phân tách bằng dấu phẩy, 
//tìm số nhỏ nhất và đăng xuất cho người dùng
// let useInput = prompt('nhập vào dãy số phân tách bằng dấu phẩy').split(',');
// let min = useInput[0];
// for(i=1;i<useInput.length;i++){
//     if(min>Number(useInput[i])){
//         min=useInput[i];
//     }
// }console.log(min);



//bài 6Tạo một mảng chứa ít nhất 5 số, sau đó yêu cầu người dùng nhập một số, thực hiện tìm kiếm
//  để tìm số trong mảng, nếu số được tìm thấy, hãy cho người dùng biết rằng với chỉ số của nó trong mảng, 
//  nếu không, cũng nói với họ như vậy

// let arr= [5,6,7,8,9,3,4];
// let cantim = Number(prompt("nhập vào 1 số"));
// let index= -1 ;
// for(i=0 ; i<=arr.length-1; i++){
//     if(cantim===arr[i]){
//         index= i
//     }
// }if (index===-1){
//     console.log('không có số này');
// }else{
//     console.log(`${cantim} đã tìm thấy số bạn nhập với chỉ số là ${index} `);
// }

//bài 8 (Tùy chọn) Viết tập lệnh yêu cầu người dùng nhập một chuỗi tên, được phân tách bằng dấu phẩy (,),
//  Tạo một mảng mới chứa các tên, mỗi tên được bao quanh bằng dấu <>.
//  Nếu bạn cần gợi ý, hãy tìm chúng ở cuối bài tập về nhà này 
// let useInput=prompt('mời bạn nhập vào chuỗi tên cách bởi dấu phẩy').split(',');
// let arr=[];
// for(i=0;i<=useInput.length-1;i++){
//     arr.push(`<${useInput[i]}>`);
// }alert(`${useInput} => ${arr}`);

//bài 9  (Tùy chọn) Viết tập lệnh yêu cầu người dùng nhập một chuỗi Số, được phân tách bằng dấu phẩy (,).
// Tạo một mảng mới chỉ chứa các Số lẻ của dãy đã nhập.
// let useInput= prompt('nhập vào chuỗi số').split(',');
// let arr = [];
// for(i=0; i<=useInput.length-1;i++){
//     if(Number(useInput[i]%2===1)){
//         arr.push(useInput[i]);
//     }
// }console.log(`${useInput}=> ${arr}`);


//bài 7
//7.1 
let kichThuoc= [5,7,300,90,24,50,75];
console.log(`kichs cỡ đàn cừu là ${kichThuoc}`);
alert(`kichs cỡ đàn cừu là ${kichThuoc}`);

//7.2
let thang = prompt(' nhập vào số tháng muốn tính');
for(j=1; j<=thang;j++){
let max = kichThuoc[0];
maxIndex=-1
for(i=0;i<=kichThuoc.length-1;i++){
    if(max<kichThuoc[i]){
        max=kichThuoc[i]
        maxIndex=i
    }
}console.log(`con cừu lớn nhất của tôi là ${max} hãy cạo nó`);
//7.3
console.log(`sau khi cạo lông con ${max} kích thước của nó trở về 8`);
kichThuoc[maxIndex]=8;
console.log(`kichs cỡ đàn cừu củ tôi là ${kichThuoc}`);
//7.4
console.log(` sau 1 tháng kích cỡ mỗi con tăng lên 50`);
for(i=0; i<=kichThuoc.length-1;i++){
kichThuoc[i]= kichThuoc[i] +50;
}console.log(`sau 1 tháng kích cỡ đàn cừu là ${kichThuoc}`);

//7.5
let max2= kichThuoc[0];
maxIndex2=-1;
for(i=0;i<=kichThuoc.length-1;i++){
    if(max2<kichThuoc[i]){
        max2=kichThuoc[i]
        maxIndex2=i
    }
}console.log(`con cừu lớn nhất của tôi là ${max2} hãy cạo nó `);
}kichThuoc[maxIndex2]=8;
console.log(`kich thuoc dan cuu của tôi là ${kichThuoc}`);
// 

// //7.6

//7.7
let tong = 0;
for(i=0;i<=kichThuoc.length-1;i++){
    tong=tong +kichThuoc[i]
}console.log(`tong kích thươc đàn cừu là : ${tong} `);
let giaBan= prompt('nhập vào giá muốn bán') ;
let doanhThu = tong*giaBan;
console.log(` tổng doanh thu là ${doanhThu}`);

