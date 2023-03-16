// index page 로딩시 검색할 지역 정보 얻기.
const serviceKey =
  "ubnkXnSW8ajYtdl2qGsp0c8z4d9%2B6njKihzCNrAq%2Fp2bpdu0yhN%2BtuDgdnjI9qcQBj9KkcbdY8%2F6ApS52nw%2F6g%3D%3D";
let areaUrl = `https://apis.data.go.kr/B551011/KorService1/areaCode1?serviceKey=${serviceKey}&numOfRows=20&pageNo=1&MobileOS=ETC&MobileApp=AppTest&_type=json`;
fetch(areaUrl)
  .then((response) => response.json())
  .then((data) => makeArea(data));

function makeArea(data) {
  let sel = document.querySelector("#search-area");
  // console.log(data);
  console.log(data);
  let areas = data.response.body.items.item;
  areas.forEach(function (area, i) {
    // console.log(area)
    let opt = document.createElement("option");
    opt.setAttribute("value", area.code);
    opt.appendChild(document.createTextNode(area.name));

    sel.appendChild(opt);
  });
}