const API_URL = "https://5f871d4b49ccbb0016176fe1.mockapi.io/ai";
function callAPI(endpoint, method = "GET", body) {
    return axios({
        method: method,
        url: `${API_URL}/${endpoint}`,
        data: body,
    })
        .catch((err) => {
            console.log(err);
        });
}
var id;
function save() {
    // document.getElementById("huy").style.display = "none";
    // document.getElementById("themmoi").style.display = "block";
    // document.getElementById("divAddHotel").style.display = "none";
    let hotel = [];
    callAPI("hotels", "GET", null).then((res) => {
        hotel = res.data;})
    for ( let i = 0; i < hotel.length; i++){
        id = i;
    }
    var name = document.getElementById("nameproduct").value;
    var price = document.getElementById("priceproduct").value;
    var note = document.getElementById("noteproduct").value;
    var detail = document.getElementById("detailproduct").value;
    var img = document.getElementById("imgproduct").value;
    let image = img.split("\\")[2];
    if (name | detail | note | (price != "")) {
        var oneProduct = {
            id: id,
            name: name,
            price: price,
            note: note,
            detail: detail,
            img: "images/" + image,
        };
        callAPI("hotels","POST", oneProduct).then((response) => {
            show();
            alert("Thêm thành công");
        });
    } else {
        reset();
    }
}

function show() {
    var hotelss = [];
    callAPI("hotels", "GET", null).then((res) => {
        hotelss = res.data;
        let row = "";
        for (i in hotelss) {
            row += "<tr>";
            row += "<td>" + hotelss[i].id + "</td>";
            row += "<td>" + hotelss[i].name + "</td>";
            row +="<td>" + "<img src='" + hotelss[i].img + "style='width: 80px; height: 80px; >" + "</td>";
            row += "<td>" + hotelss[i].price + "</td>";
            row += "<td>" + hotelss[i].note + "</td>";
            row +="<td>" +`<button type="button" onclick="editsp (${hotelss[i].id})" class="btn btn-success">Edit</button></td>`;
            row +="<td>" + `<button type="button" onclick="deletesp (${hotelss[i].id})" class="btn btn-danger">Delete</button></td>`;
            row += "</tr>";
        }
        document.getElementById("tab").innerHTML += row;
    })
}

function editsp(id) {
    callAPI(`hotels/${id}`, "GET", null).then((res) => {
        let hotelup = [];
        hotelup = res.data;
        console.log(hotelup);
        document.getElementById("nameproduct").value = hotelup.name;
        document.getElementById("priceproduct").value = hotelup.price;
        document.getElementById("noteproduct").value = hotelup.note;
        document.getElementById("detailproduct").value = hotelup.detail;
    });
    document.getElementById("ok").style.display = "none";
    document.getElementById("edit").style.display = "block";
    document.getElementById("edit").innerHTML =`<button type='button' onclick='editok (${id})' class='btn btn-success'>Update</button>`;
}

function editok(id) {
    var nameproduct = document.getElementById("nameproduct").value;
    var price = document.getElementById("priceproduct").value;
    var note = document.getElementById("noteproduct").value;
    var detail = document.getElementById("detailproduct").value;
    let img = document.getElementById("imgproduct").value;
    var image =img.split("\\")[2];
    var oneProduct = {
        id: id,
        name: nameproduct,
        price: price,
        note: note,
        detail: detail,
        img: "images/" + image
    }
    callAPI(`hotels/${id}`,"PUT",oneProduct).then((respense) => {
        alert("Cập nhập thành công!");
        show();
    });
    if (document.getElementById("edit").style.display = "block") {
        document.getElementById("edit").style.display = "none";
        document.getElementById("ok").style.display = "block";
    } else {
        document.getElementById("edit").style.display = "block";
        document.getElementById("ok").style.display = "none";
    }
    reset();}

    function deletesp (id) {
        var r = confirm("Do you want delete this data?")
        if ( r == true) {
        callAPI (`hotels/${id}`,"DELETE", null).then((response) => {
            show();
            alert("xoa thanh cong")
        });
        } else {
        window.location.href ="file:///C:/Users/ken%20dang.PNVD188/Desktop/MockAPII/mockAPI/testhotel.html";
    }
}
        function reset() {
        document.getElementById("nameproduct").value ="";
        document.getElementById("priceproduct").value ="";
        document.getElementById("noteproduct").value ="";
        document.getElementById("detailproduct").value ="";
        document.getElementById("imgproduct").value =""; }

        function them() {
            // document.getElementById("huy").style.display = "none";
            // document.getElementById("themmoi").style.display = "block";
            // document.getElementById("divAddHotel").style.display = "none";
            let hotel = [];
            callAPI("hotels", "GET", null).then((res) => {
                hotel = res.data;})
            for ( let i = 0; i < hotel.length; i++){
                id = i;
            }
            var name = document.getElementById("nameproduct").value;
            var price = document.getElementById("priceproduct").value;
            var note = document.getElementById("noteproduct").value;
            var detail = document.getElementById("detailproduct").value;
            var img = document.getElementById("imgproduct").value;
            let image = img.split("\\")[2];
            if (name | detail | note | (price != "")) {
                var oneProduct = {
                    id: id,
                    name: name,
                    price: price,
                    note: note,
                    detail: detail,
                    img: "images/" + image,
                };
                callAPI("hotels","POST", oneProduct).then((response) => {
                    show();
                    alert("Thêm thành công");
                });
            } else {
                reset();
            }
        }