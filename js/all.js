// 全域變數設定
const map = document.querySelector('#mapId');
const list = document.querySelector('.listClass');
var recordsData = [];


// 動作與監聽
updated();


// 函式設定
	// 遠端讀取資料
function updated(e){
	for (let i = 0; i < 3; i++){
		const xhr = new XMLHttpRequest();
		xhr.open('get', `https://data.kcg.gov.tw/api/action/datastore_search?offset=${i * 100}&resource_id=ec196e10-d3da-412d-b178-738ce06f62e2`, true);
		xhr.send(null);
		xhr.onload = () => {
			if (xhr.readyState === 4){
				if (xhr.status === 200){
					const data = JSON.parse(xhr.responseText).result.records;		
					// 陣列合併
					recordsData = recordsData.concat(data);
				}
			}
		}
	}
	setTimeout(zoneDisplay, 600);
}
	// 將讀取得到的資料放上 HTML
function zoneDisplay(e){
	// 建立一個只含有行政區資料的陣列
	const zoneData = recordsData.map((object) => {
		return object.行政區;
	});
	// 將重複的資料剃除，建立只保留一筆行政區資料的陣列
	const zoneDataList = zoneData.filter((item, index, array) => {
		return array.indexOf(item) === index;
	});
	const selectArea = document.querySelector('select');
	let str = '';
	const Len = zoneDataList.length;
	for (let i = 0; i < Len; i++){
		str += `<option value='${zoneDataList[i]}區'>${zoneDataList[i]}區</option>`;
	}
	selectArea.innerHTML = `<option value="_">- - 請選擇行政區 - -</option>${str}`;
}
