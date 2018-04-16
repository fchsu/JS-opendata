// 全域變數設定
const selectArea = document.querySelector('select');
var recordsData = [];
var map;


// 動作與監聽
updated();
selectArea.addEventListener('change', zonePosition, false);


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
	// 將讀取得到的資料放上 HTML <select>
function zoneDisplay(e){
	// 建立一個只含有行政區資料的陣列
	const zoneData = recordsData.map((object) => {
		return object['行政區'];
	});
	// 將重複的資料剃除，建立只保留一筆行政區資料的陣列
	const zoneDataList = zoneData.filter((item, index, array) => {
		return array.indexOf(item) === index;
	});
	let str = '';
	const Len = zoneDataList.length;
	for (let i = 0; i < Len; i++){
		str += `<option value='${zoneDataList[i]}區'>${zoneDataList[i]}區</option>`;
	}
	selectArea.innerHTML = `<option value="_">- - 請選擇行政區 - -</option>${str}`;
}
	//建立 google map
function initMap(e){
	const mapDom = document.querySelector('#mapId');
	map = new google.maps.Map(mapDom, {
		center: {lat: 22.912466, lng: 120.519116}, 
		zoom: 9
	});
	// 高亮顯示地圖
	var polygonMask = new google.maps.Polygon({
		map:map,
		strokeColor: '#000000',
		strokeOpacity: 0.5,
		strokeWeight: 2,
		fillColor: '#CACACA',
		fillOpacity: 0.7,
		paths: [
			[
				new google.maps.LatLng(21.285377, 118.301427),
				new google.maps.LatLng(24.323590, 118.301427),
				new google.maps.LatLng(24.323590, 121.885717),
				new google.maps.LatLng(21.285377, 121.885717),
				new google.maps.LatLng(21.285377, 118.301427)
			],
			[
				new google.maps.LatLng(22.767318, 120.233002),
				new google.maps.LatLng(22.704622, 120.260468),
				new google.maps.LatLng(22.672630, 120.263901),
				new google.maps.LatLng(22.668036, 120.253258),
				new google.maps.LatLng(22.650532, 120.243816),
				new google.maps.LatLng(22.617061, 120.266905),
				new google.maps.LatLng(22.611733, 120.261283),
				new google.maps.LatLng(22.509197, 120.352199),
				new google.maps.LatLng(22.474017, 120.414963),
				new google.maps.LatLng(22.493962, 120.424061),
				new google.maps.LatLng(22.516621, 120.422087),
				new google.maps.LatLng(22.545706, 120.432429),
				new google.maps.LatLng(22.559295, 120.441720),
				new google.maps.LatLng(22.601276, 120.443963),
				new google.maps.LatLng(22.620994, 120.432038),
				new google.maps.LatLng(22.680278, 120.445301),
				new google.maps.LatLng(22.715365, 120.453767),
				new google.maps.LatLng(22.783366, 120.455366),
				new google.maps.LatLng(22.798805, 120.464519),
				new google.maps.LatLng(22.829624, 120.469095),
				new google.maps.LatLng(22.838291, 120.473671),
				new google.maps.LatLng(22.830993, 120.508604),
				new google.maps.LatLng(22.832333, 120.523689),
				new google.maps.LatLng(22.828890, 120.535694),
				new google.maps.LatLng(22.828610, 120.553880),
				new google.maps.LatLng(22.836004, 120.565971),
				new google.maps.LatLng(22.852889, 120.579093),
				new google.maps.LatLng(22.876436, 120.611746),
				new google.maps.LatLng(22.880300, 120.634424),
				new google.maps.LatLng(22.886062, 120.644399),
				new google.maps.LatLng(22.885251, 120.659886),
				new google.maps.LatLng(22.859538, 120.659390),
				new google.maps.LatLng(22.857437, 120.673561),
				new google.maps.LatLng(22.863030, 120.680304),
				new google.maps.LatLng(22.864112, 120.687139),
				new google.maps.LatLng(22.882683, 120.704633),
				new google.maps.LatLng(22.881010, 120.720754),
				new google.maps.LatLng(22.874276, 120.740479),
				new google.maps.LatLng(22.864582, 120.748282),
				new google.maps.LatLng(22.865429, 120.755617),
				new google.maps.LatLng(22.833372, 120.780118),
				new google.maps.LatLng(22.841869, 120.792899),
				new google.maps.LatLng(22.851812, 120.792766),
				new google.maps.LatLng(22.852671, 120.806776),
				new google.maps.LatLng(22.866817, 120.826966),
				new google.maps.LatLng(22.864105, 120.840738),
				new google.maps.LatLng(22.851902, 120.846270),
				new google.maps.LatLng(22.856783, 120.853519),
				new google.maps.LatLng(22.855268, 120.856027),
				new google.maps.LatLng(22.853009, 120.857367),
				new google.maps.LatLng(22.851879, 120.859668),
				new google.maps.LatLng(22.849811, 120.859016),
				new google.maps.LatLng(22.847037, 120.862381),
				new google.maps.LatLng(22.843155, 120.864372),
				new google.maps.LatLng(22.846648, 120.865135),
				new google.maps.LatLng(22.850773, 120.868644),
				new google.maps.LatLng(22.853802, 120.866221),
				new google.maps.LatLng(22.856855, 120.868929),
				new google.maps.LatLng(22.864069, 120.858551),
				new google.maps.LatLng(22.865035, 120.863622),
				new google.maps.LatLng(22.871694, 120.864917),
				new google.maps.LatLng(22.878087, 120.859110),
				new google.maps.LatLng(22.882964, 120.839599),
				new google.maps.LatLng(22.899675, 120.832164),
				new google.maps.LatLng(22.963441, 120.818667),
				new google.maps.LatLng(23.003794, 120.857699),
				new google.maps.LatLng(23.029654, 120.862795),
				new google.maps.LatLng(23.036908, 120.869391),
				new google.maps.LatLng(23.031524, 120.878046),
				new google.maps.LatLng(23.045419, 120.881687),
				new google.maps.LatLng(23.058680, 120.869536),
				new google.maps.LatLng(23.095944, 120.887253),
				new google.maps.LatLng(23.111318, 120.888459),
				new google.maps.LatLng(23.113479, 120.885972),
				new google.maps.LatLng(23.119744, 120.885545),
				new google.maps.LatLng(23.123192, 120.888164),
				new google.maps.LatLng(23.130745, 120.884947),
				new google.maps.LatLng(23.137325, 120.888125),
				new google.maps.LatLng(23.144487, 120.886241),
				new google.maps.LatLng(23.151823, 120.876303),
				new google.maps.LatLng(23.160322, 120.890915),
				new google.maps.LatLng(23.180121, 120.897315),
				new google.maps.LatLng(23.187295, 120.910581),
				new google.maps.LatLng(23.209815, 120.908288),
				new google.maps.LatLng(23.231801, 120.911948),
				new google.maps.LatLng(23.243689, 120.923848),
				new google.maps.LatLng(23.263145, 120.953943),
				new google.maps.LatLng(23.281338, 120.968933),
				new google.maps.LatLng(23.280972, 120.988444),
				new google.maps.LatLng(23.292458, 121.010216),
				new google.maps.LatLng(23.296690, 121.029241),
				new google.maps.LatLng(23.303484, 121.033503),
				new google.maps.LatLng(23.309016, 121.046005),
				new google.maps.LatLng(23.320080, 121.046977),
				new google.maps.LatLng(23.327813, 121.044483),
				new google.maps.LatLng(23.329083, 121.039243),
				new google.maps.LatLng(23.334145, 121.035972),
				new google.maps.LatLng(23.337019, 121.027370),
				new google.maps.LatLng(23.351592, 121.020123),
				new google.maps.LatLng(23.344299, 121.012723),
				new google.maps.LatLng(23.355289, 121.003606),
				new google.maps.LatLng(23.356780, 120.988119),
				new google.maps.LatLng(23.369226, 120.987199),
				new google.maps.LatLng(23.384745, 121.007681),
				new google.maps.LatLng(23.392700, 121.001728),
				new google.maps.LatLng(23.403568, 121.028102),
				new google.maps.LatLng(23.421996, 121.030444),
				new google.maps.LatLng(23.435378, 121.014871),
				new google.maps.LatLng(23.443626, 121.009834),
				new google.maps.LatLng(23.451243, 121.016128),
				new google.maps.LatLng(23.462068, 121.008458),
				new google.maps.LatLng(23.471239, 120.966542),
				new google.maps.LatLng(23.456289, 120.926623),
				new google.maps.LatLng(23.455511, 120.900780),
				new google.maps.LatLng(23.433157, 120.881632),
				new google.maps.LatLng(23.421191, 120.850772),
				new google.maps.LatLng(23.395516, 120.840320),
				new google.maps.LatLng(23.374010, 120.825224),
				new google.maps.LatLng(23.368529, 120.813272),
				new google.maps.LatLng(23.370297, 120.804068),
				new google.maps.LatLng(23.341684, 120.782568),
				new google.maps.LatLng(23.344659, 120.758796),
				new google.maps.LatLng(23.320178, 120.741845),
				new google.maps.LatLng(23.308936, 120.712192),
				new google.maps.LatLng(23.283030, 120.698503),
				new google.maps.LatLng(23.296225, 120.658722),
				new google.maps.LatLng(23.268986, 120.638895),
				new google.maps.LatLng(23.247635, 120.649066),
				new google.maps.LatLng(23.228126, 120.649259),
				new google.maps.LatLng(23.223442, 120.654774),
				new google.maps.LatLng(23.218158, 120.656319),
				new google.maps.LatLng(23.201789, 120.642328),
				new google.maps.LatLng(23.175319, 120.635204),
				new google.maps.LatLng(23.131204, 120.589371),
				new google.maps.LatLng(23.099076, 120.577183),
				new google.maps.LatLng(23.068203, 120.549889),
				new google.maps.LatLng(22.998852, 120.477448),
				new google.maps.LatLng(22.907803, 120.368958),
				new google.maps.LatLng(22.895786, 120.263901),
				new google.maps.LatLng(22.920136, 120.179787),
				new google.maps.LatLng(22.907013, 120.173435),
				new google.maps.LatLng(22.767318, 120.233002)
			]
		]
	});
}
	// 選擇行政區後，顯示該區所有資料
function zonePosition(e){
	const Len = recordsData.length;
	const select = e.target.value;
	const remindText = document.querySelector('#remindTextId');
	const zoneName = document.querySelector('#zoneNameId');
	const listClass = document.querySelector('.listClass');
	if (select === '_'){
		remindText.style.display = 'block';
		zoneName.style.display = 'none';
		listClass.innerHTML = '';
		return;
	}
	// 將選擇的行政區的每筆資料存放至 zone 陣列
	const zone = recordsData.filter((object, index, array) => {
		return `${object['行政區']}區` === select;
	});
	const zoneLen = zone.length;
	let str = '';
	if (window.innerWidth > 812){
		for (let i = 0; i < zoneLen; i++){
			str += `
				<li class='zoneListHover' data-num='${i}'>
					<span>${(i + 1)}</span>
					<ul>
						<li>速限: <span class='speedLimit'>${zone[i]['速限']}</span></li>
						<li>測照地點: ${zone[i]['測  照  地  點']}</li>
						<li>測照型式: ${zone[i]['測照型式']}</li>
					</ul>
				</li>`;
		}
	}else{
		for (let i = 0; i < zoneLen; i++){
			str += `
				<li data-num='${i}'>
					<span>${(i + 1)}</span>
					<ul>
						<li>速限: <span class='speedLimit'>${zone[i]['速限']}</span></li>
						<li>測照地點: ${zone[i]['測  照  地  點']}</li>
						<li>測照型式: ${zone[i]['測照型式']}</li>
					</ul>
				</li>`;
		}
	}
	remindText.style.display = 'none';
	zoneName.style.display = 'block';
	zoneName.textContent = select;
	listClass.innerHTML = str;
	listClass.scrollTop = 0;
	mapTag(zone);
}
	// 在 google map 顯示行政區內測照地點
function mapTag(zone){
	const mapDom = document.querySelector('#mapId');
	const Len = zone.length;	
	const centerLat = parseFloat(zone[0]['座標緯(N)度']);
	const centerLng = parseFloat(zone[0]['座標經(E)度']);
	let markers = [];
	let infowindows = [];
	map = new google.maps.Map(mapDom, {
		center: {lat: centerLat, lng: centerLng}, 
		zoom: 12
	});
	for (let i = 0; i < Len; i++){
		const positionLat = parseFloat(zone[i]['座標緯(N)度']);
		const positionLng = parseFloat(zone[i]['座標經(E)度']);
		const marker = new google.maps.Marker({
			position: {lat: positionLat, lng: positionLng},
			map: map,
			title: `編號${(i + 1)}`
		});
		// 偵測螢幕寬度，來決定資訊視窗顯示內容
		if (window.screen.width > 667){
			const infowindow = new google.maps.InfoWindow({
				content: `
					<ul>
						<li>編號: ${(i + 1)}</li>
						<li>速限: ${zone[i]['速限']}</li>
						<li>測照型式: ${zone[i]['測照型式']}</li>
					</ul>`,
				maxWidth: 350
			});	
			clickTag(marker, infowindow, i);
			clickList(marker, infowindow, i);
		}else{
			const infowindow = new google.maps.InfoWindow({
				content: `
					<ul>
						<li>編號: ${(i + 1)}</li>
						<li>速限: ${zone[i]['速限']}</li>
						<li>測照地點: ${zone[i]['測  照  地  點']}</li>
						<li>測照型式: ${zone[i]['測照型式']}</li>
					</ul>`,
				maxWidth: 350
			});		
			clickTag(marker, infowindow, i);
			clickList(marker, infowindow, i);
		}
	}
}
	// 點擊 google map 標籤後，在 map 上顯示資訊視窗 
function clickTag(marker, infowindow, i){
	marker.addListener('click', () => {
		infowindow.open(map, marker);
		document.querySelector(`li[data-num='${i}']`).classList.add('background-linearGradient');
		// 監聽 '點擊 資訊視窗的關閉按鈕'
		infowindow.addListener('closeclick', () => {
			document.querySelector(`li[data-num='${i}']`).classList.remove('background-linearGradient');
		});
	});
}
	// 點擊 list 後，在 map 上顯示資訊視窗
function clickList(marker, infowindow, i){
	document.querySelector(`li[data-num='${i}']`).addEventListener('click', () => {
		if (document.querySelector(`li[data-num='${i}']`).classList.contains('background-linearGradient')){
			infowindow.close(map, marker);
				document.querySelector(`li[data-num='${i}']`).classList.remove('background-linearGradient');
		}else{
			infowindow.open(map, marker);
			document.querySelector(`li[data-num='${i}']`).classList.add('background-linearGradient');
			// 監聽 '點擊 資訊視窗的關閉按鈕'
			infowindow.addListener('closeclick', () => {
				document.querySelector(`li[data-num='${i}']`).classList.remove('background-linearGradient');
			});
		}
	}, false);
}