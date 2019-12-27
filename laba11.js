var i = 0;
var point = 0;
img_a = new Array();


for(point;point<=61;point++)
{
    img_a[point] = new Image();
}

point = 0;

for(point;point<=61;point++)
{
    img_a[point].src = point + ".gif";
}

/*
img_a[0] = new Image();
img_a[1] = new Image();
img_a[2] = new Image();
img_a[3] = new Image();
img_a[4] = new Image();
img_a[5] = new Image();
img_a[6] = new Image();
img_a[7] = new Image();
img_a[8] = new Image();
img_a[9] = new Image();
img_a[10] = new Image();
img_a[11] = new Image();
img_a[12] = new Image();
img_a[13] = new Image();
img_a[14] = new Image();
img_a[15] = new Image();

img_a[0].src = "1.jpg";
img_a[1].src = "2.jpg";
img_a[2].src = "3.jpg";
img_a[3].src = "4.jpg";
img_a[4].src = "5.jpg";
img_a[5].src = "6.jpg";
img_a[6].src = "7.jpg";
img_a[7].src = "8.jpg";
img_a[8].src = "9.jpg";
img_a[9].src = "10.jpg";
img_a[10].src = "11.jpg";
img_a[11].src = "12.jpg";
img_a[12].src = "13.jpg";
img_a[13].src = "14.jpg";
img_a[14].src = "15.jpg";*/

function img_b() {
    document.images[0].src = img_a[i].src;
    i++;
    if (i > 61)
        i = 0;
    setTimeout("img_b()", 20);
}

function positiv(obj) {
    var num = 0;
    var mas = String(obj.t1.value).split(" ");
    for (var i = 0; i < mas.length; i++) {
        if (Number(mas[i]) > 0) {
            num++;
        }
    }
    obj.t2.value = num;
}

function elemmax(obj) {
    var mas = String(obj.p1.value).split(" ");
    var max = Number(mas[0]);
    for (var i = 1; i < mas.length; i++) {
        if (max < Number(mas[i])) {
            max = Number(mas[i]);
        }
    }
    obj.p2.value = max;
}