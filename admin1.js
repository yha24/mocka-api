class Product {
    constructor(id, img, name, price) {
        this.id = id;
        this.img = img;
        this.name = name;
        this.price = price;
    }
  }
  
  const LIST_PRODUCT_NAME = "listProduct";
  const CLICK_EVENT_NAME = 'onclick'
  
  var listProduct = [];
  const localStorage = window.localStorage;
  var count = 0;
  
  const $ = (id) => {
    return document.getElementById(id);
  };
  const loadLocalStorage = () => {
    if (localStorage.getItem(LIST_PRODUCT_NAME) == null) {
        listProduct = [];
        return;
    }
    listProduct = JSON.parse(localStorage.getItem(LIST_PRODUCT_NAME));
  
    listProduct.forEach((ele) => {
        addEle(ele.id, ele.img, ele.name, ele.price);
    });
    count = listProduct.length;
  };
  const saveIntoLocalStorage = () => {
    localStorage.setItem(LIST_PRODUCT_NAME, JSON.stringify(listProduct));
  };
  const addProduct = () => {
    count++;
    var link = $("link-img").value;
    var name = $("product-name").value;
    var price = parseInt($("price").value);
  
    listProduct.push(new Product(count, link, name, price));
    saveIntoLocalStorage();
    addEle(count, link, name, price);
    reset();
  };
  const addEle = (id, link, name, price) => {
    $("tbl-body").innerHTML += `
        <tr>
            <th scope='row'>${id}</th>
            <td><img src='${link}' class='img-fluid' width='100px'></td>
            <td>${name}</td>
            <td>${price}</td>
            <td>
                <button class='btn btn-danger text-light'
                    type='button' onclick='deleteR(${id - 1})'>
                    <i class="fa fa-trash" aria-hidden="true"></i>
                </button>
                <button class='btn btn-danger text-light' type='button'
                onclick='displayMEdit(${id - 1})' data-bs-toggle='modal' data-bs-target='#mEditProduct'>
                    <i class="fa fa-pencil" aria-hidden="true"></i>
                </button>
            </td>
        </tr>
    `;
  };
  const deleteR = (rowId) => {
    $("tbl-body").deleteRow(rowId);
    listProduct.splice(rowId, 1);
    listProduct.forEach((ele, index) => {
        ele.id = index + 1;
    })
    saveIntoLocalStorage()
    window.location.reload();
  };
  const displayMEdit = (index) => {
    var ele = listProduct[index]
  
    $("edit-link").value = ele.img;
    $("edit-product-name").value = ele.name;
    $("edit-price").value = ele.price;
    $('btn-save-edit').setAttribute(CLICK_EVENT_NAME, `saveEdit(${index})`)
  }
  const saveEdit = (index) => {
    console.log('save')
    var ele = listProduct[index];
  
    ele.img = $("edit-link").value;
    ele.name = $("edit-product-name").value;
    ele.price = parseInt($("edit-price").value);
  
    saveIntoLocalStorage()
    window.location.reload()
  }
  const reset = () => {
    $("link-img").value = "";
    $("product-name").value = "";
    $("price").value = "";
  };
  loadLocalStorage();