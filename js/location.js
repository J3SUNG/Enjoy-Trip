// index page 로딩시 검색할 지역 정보 얻기.
const serviceKey = `ubnkXnSW8ajYtdl2qGsp0c8z4d9%2B6njKihzCNrAq%2Fp2bpdu0yhN%2BtuDgdnjI9qcQBj9KkcbdY8%2F6ApS52nw%2F6g%3D%3D`;
let areaCode = "";
let contentTypeId = 15;
let detailAreaUrl = `https://apis.data.go.kr/B551011/KorService1/areaBasedSyncList1?serviceKey=${serviceKey}&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&_type=json&showflag=1&listYN=Y&arrange=A&contentTypeId=${contentTypeId}&areaCode=${areaCode}`;
let areaUrl = `https://apis.data.go.kr/B551011/KorService1/areaCode1?serviceKey=${serviceKey}&numOfRows=20&pageNo=1&MobileOS=ETC&MobileApp=AppTest&_type=json`;

console.log(location.search);
const params = new URLSearchParams(location.search);
const loc = parseInt(params.get("loc"));
const detailLoc = parseInt(params.get("detailLoc"));
const search = parseInt(params.get("search"));
// areaCode = loc > 0 ? loc : "";
console.log(loc, detailLoc, search);

fetch(areaUrl)
  .then((response) => response.json())
  .then((data) => makeArea(data));

fetch(detailAreaUrl)
  .then((response) => response.json())
  .then((data) => receive(data));

function makeArea(data) {
  let sel = document.querySelector("#search-area");
  let areas = data.response.body.items.item;
  areas.forEach(function (area, i) {
    let opt = document.createElement("option");
    opt.setAttribute("value", area.code);
    opt.appendChild(document.createTextNode(area.name));
    sel.appendChild(opt);
  });
}

function receive(data) {
  console.log(data);
}
