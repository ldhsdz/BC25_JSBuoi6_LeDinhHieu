document.getElementById('btnTinhDiem').onclick = function(){
    var diemChuan = document.getElementById('txtDiemChuan').value*1;
    var mon1 = document.getElementById('txtMon1').value*1;
    var mon2 = document.getElementById('txtMon2').value*1;
    var mon3 = document.getElementById('txtMon3').value*1;
    var KV = document.getElementById('txtKV').value;
    var DT = document.getElementById('txtDT').value*1;
    var diemKV;
    var diemDT;
    var diemUuTien;
    var dauRot;
    var diemTongKet;

    if(KV == "A" || KV == "a"){
        diemKV = 2;
        
    }else if (KV == "B" || KV == "b"){
        diemKV = 1;
       
    }else if (KV == "C" || KV == "c"){
        diemKV = 0.5;
        
    }else if (KV == "X" || KV == "x"){
        diemKV = 0;
        
    }else{
        diemKV = "Điểm nhập vào bị sai, kiểm tra lại !";
       
    };

    if(DT == 1){
        diemDT = 2.5;
    }else if (DT = 2){
        diemDT = 1.5;
    }else if (DT == 3){
        diemDT = 1;
    }else if (DT == 0){
        diemDT = 0;
    }else{
        diemDT = " Điểm nhập vào bị sai, kiểm tra lại !";
    };
    diemUuTien = diemKV + diemDT;

    diemTongKet = mon1+mon2+mon3+diemUuTien;

    if(diemChuan > diemTongKet){
       dauRot = "Thí Sinh Rớt!";
    }else if(diemChuan < diemTongKet){
        dauRot =  "Thí Sinh Đậu!";
    }else{
        dauRot = "Warning !!!"
    }
    ketQua1 = dauRot + " Với số điểm là: " + diemTongKet;
    document.getElementById('txtKetQua1').innerHTML = ketQua1;
};


// Bài 2
document.getElementById('btnTinhTienDien').onclick = function(){
    var ten = document.getElementById('txtTen').value;
    var soKW = document.getElementById('txtSoKW').value*1;
    var tienDien;
    var bac1=500, bac2=650, bac3=850, bac4=1100, bac5=1300;
    if(soKW < 0 ){
        tienDien = "Vui Lòng Nhập lại Số KW Điện"
    }else if (soKW <= 50){
        tienDien = soKW*bac1;
    }else if (soKW <= 100){
        tienDien = 50*bac1+ ((soKW-50)*bac2);
    }else if (soKW <= 200){
        tienDien = 50*bac1 + (50*bac2)+ ((soKW-100)*bac3) ;
    }else if (soKW <= 350){
        tienDien = 50* bac1 + (50*bac2)+ (100*bac3)+((soKW-200)*bac4);
    }else if(soKW >350){
        tienDien = 50* bac1 + (50*bac2)+ (100*bac3)+(150*bac4)+((soKW-350)*bac5);
    }
    ketQua2 = "Tiền Điện Của "+ ten + " là: " + tienDien +" VNĐ";
    document.getElementById('txtKetQua2').innerHTML = ketQua2;
};