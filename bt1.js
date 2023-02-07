var product = [{
    id: 'SP1',
    name: 'Áo dài thêu họa tiết 111111',
    img: 'https://salt.tikicdn.com/cache/w1200/ts/product/be/69/c7/479390fd3b130863198608cf280589fc.jpg',
    price: 122000,
    },
    {
    id: 'SP2',
    name: 'Áo dài truyền thống',
    img: 'https://salt.tikicdn.com/cache/w1200/ts/product/be/69/c7/479390fd3b130863198608cf280589fc.jpg',
    price: 400000,
    },
    {
    id: 'SP3',
    name: 'Áo dài',
    img: 'https://salt.tikicdn.com/cache/w1200/ts/product/be/69/c7/479390fd3b130863198608cf280589fc.jpg',
    price: 350000,
    },
    {
    id: 'SP4',
    name: 'Áo dài hiện đại',
    img: 'https://salt.tikicdn.com/cache/w1200/ts/product/be/69/c7/479390fd3b130863198608cf280589fc.jpg',
    price: 564000,
    },
    {
    id: 'SP5',
    name: 'Áo dài hiện đại',
    img: 'https://salt.tikicdn.com/cache/w1200/ts/product/be/69/c7/479390fd3b130863198608cf280589fc.jpg',
    price: 654000,
    },
    {
    id: 'SP6',
    name: 'Áo dài hiện đại',
    img: 'https://salt.tikicdn.com/cache/w1200/ts/product/be/69/c7/479390fd3b130863198608cf280589fc.jpg',
    price: 123000,
    },
    {
    id: 'SP7',
    name: 'Áo dài hiện đại',
    img: 'https://salt.tikicdn.com/cache/w1200/ts/product/be/69/c7/479390fd3b130863198608cf280589fc.jpg',
    price: 345000,
    },
    {
    id: 'SP8',
    name: 'Áo dài hiện đại',
    img: 'https://salt.tikicdn.com/cache/w1200/ts/product/be/69/c7/479390fd3b130863198608cf280589fc.jpg',
    price: 258000,
    },
    ];
  // đẩy mảng product vào local
  function Save() {
  localStorage.setItem('listProduct', JSON.stringify(product));
  }
  //lấy sản phẩm
  function load() {
  productss = JSON.parse(localStorage.getItem('listProduct'));
  }
  //xuất sản phẩm ra html
  if (localStorage.getItem('listProduct') != null) {
  load();
  }
  var listLocal = function() {
  var listproduct = '';
  for (var i in productss) {
  var data = JSON.parse(JSON.stringify(productss[i]));
  
  var listproduct = '<div class="col-lg-3 col-md-6 col-sm-6 col-6 mt-3">';
  listproduct += '<div class="card product p-2" styte="width:auto">';
  listproduct +=	'<img class="card-img-top" src="' + data.img + '" alt="...">';
  
  listproduct +=	'<div class="card-title product-title text-center h5" >' +data.name +'</div>';
  
  listproduct +='<div class="price text-center h6">' + data.price + '₫</div>';
  
  listproduct +='<span class="text-center add-to-cart btn btn-outline-warning add-cart" data-id="' +data.id +" data-name=" +data.name +" data-img=" +data.img +" data-price=" +	data.price +'" onclick="tks()">';
  listproduct += '<a>';
  listproduct += '<i class="fas fa-cart-plus"></i>';
  listproduct += '</a>';
  listproduct += '</span>'
  listproduct +='<span class="text-center add-to-cart btn btn-outline-warning add-cart" data-id="' +data.id +" data-name=" +data.name +" data-img=" +data.img +" data-price=" +	data.price +'" onclick="tks()">';
  listproduct += '<a>';
  listproduct += '<button class="btn btn-secondary" data-toggle="modal" data-target="#proDetails" onclick="proDetail('+i+')">Detail</button>';listproduct += '</a>';
  listproduct += '</span>';
  listproduct += '</div>';
  listproduct += '</div>';
  document.getElementById('banchay').innerHTML += listproduct;
  }
  Save();
  };
  listLocal();
  localStorage.clear();
  function proDetail(i){
    var pDetail='';
    for(var key in product){
        if(key==i){
            var data = product[i];
            pDetail+='<form class="form-row">';
            pDetail+='<div class="col-lg-12 col-md-6 col-sm-6 col-6 mt-3">';
            pDetail+= '<div class="card" style="width:auto">';
            pDetail+= '<img class="card-img-top" src="' + data.img + '" alt="...">';
            pDetail += '<div class="card-body">';
            pDetail += '<div class="card-title">' + data.name +'</div>';
            pDetail += '<div class="card-text">';
            pDetail+= data.price+'</div>';
            pDetail+= '<span class="text-center add-to-cart btn">';
            pDetail+='<button class="btn btn-success">'+ '<i class="fa fa-cart-plus mt-3"> </i>'+'</button> </span>';
            pDetail+= '</form>';
            break;
        }
    }
    document.getElementById("proDetail").innerHTML=pDetail;
  }