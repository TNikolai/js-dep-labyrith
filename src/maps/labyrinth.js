import {LOCAL_STORAGE_MAP_COLLECTION_KEY} from '../constants/localStorageKeys';

const defaultBoard = JSON.stringify([
  {"name":"Tue May 09 2017 22:35:05 GMT+0300 (EEST)","data":[[{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"}],[{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"}],[{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"}],[{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"1"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"}],[{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"1"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"3"},{"type":"3"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"}],[{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"1"},{"type":"1"},{"type":"1"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"3"},{"type":"3"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"}],[{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"}],[{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"}],[{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"1"},{"type":"1"},{"type":"1"},{"type":"1"},{"type":"1"},{"type":"1"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"}],[{"type":"4","id":"01","color":"red","moveResults":[]},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"1"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"}],[{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"1"},{"type":"0"},{"type":"0"},{"type":"1"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"}],[{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"1"},{"type":"1"},{"type":"1"},{"type":"1"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"}],[{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"1"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"}],[{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"1"},{"type":"1"},{"type":"1"},{"type":"1"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"1"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"}],[{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"1"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"1"},{"type":"0"},{"type":"3"},{"type":"3"},{"type":"0"}],[{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"1"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"3"},{"type":"3"},{"type":"0"}],[{"type":"0"},{"type":"1"},{"type":"1"},{"type":"1"},{"type":"1"},{"type":"0"},{"type":"0"},{"type":"1"},{"type":"1"},{"type":"1"},{"type":"1"},{"type":"0"},{"type":"0"},{"type":"1"},{"type":"1"},{"type":"1"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"}],[{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"}],[{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"}],[{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"4","id":"02","color":"blue","moveResults":[]},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"}]]},{"name":"Tue May 09 2017 22:50:07 GMT+0300 (EEST)","data":[[{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"1"},{"type":"1"},{"type":"1"},{"type":"1"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"}],[{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"1"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"3"},{"type":"3"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"1"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"}],[{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"1"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"3"},{"type":"3"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"1"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"}],[{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"1"},{"type":"1"},{"type":"1"},{"type":"1"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"}],[{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"}],[{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"}],[{"type":"0"},{"type":"0"},{"type":"1"},{"type":"1"},{"type":"1"},{"type":"1"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"1"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"1"},{"type":"1"},{"type":"1"},{"type":"1"},{"type":"0"},{"type":"0"}],[{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"1"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"}],[{"type":"1"},{"type":"1"},{"type":"1"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"1"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"1"}],[{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"1"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"}],[{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"}],[{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"1"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"1"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"}],[{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"1"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"1"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"}],[{"type":"1"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"1"},{"type":"1"},{"type":"1"},{"type":"1"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"1"},{"type":"1"},{"type":"1"},{"type":"1"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"1"}],[{"type":"1"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"1"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"1"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"1"}],[{"type":"1"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"1"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"1"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"1"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"1"}],[{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"1"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"}],[{"type":"0"},{"type":"0"},{"type":"0"},{"type":"1"},{"type":"1"},{"type":"1"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"1"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"1"},{"type":"1"},{"type":"1"},{"type":"0"},{"type":"0"},{"type":"0"}],[{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"1"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"}],[{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"4","id":"02","color":"blue","moveResults":[{"pass":false,"finish":false,"type":"1"},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":false,"finish":false,"type":"1"},{"pass":false,"finish":false,"type":"1"},{"pass":false,"finish":false,"type":"1"},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":false,"finish":false,"type":"1"},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":false,"finish":false,"type":"1"},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":false,"finish":false,"type":"1"},{"pass":false,"finish":false,"type":"1"},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":false,"finish":false,"type":"1"},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":false,"finish":false,"type":"1"},{"pass":false,"finish":false,"type":"1"},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":false,"finish":false,"type":"1"},{"pass":false,"finish":false,"type":"1"},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":false,"finish":false,"type":"1"},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":false,"finish":false,"type":"1"},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":false,"finish":false,"type":"1"},{"pass":false,"finish":false,"type":"1"},{"pass":false,"finish":false,"type":"1"},{"pass":false,"finish":false,"type":"1"},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false}],"moveResult":{"pass":true,"finish":false},"previousMove":"FORWARD"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"1"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"4","id":"01","color":"red","moveResults":[{"pass":false,"finish":false,"type":"1"},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":false,"finish":false,"type":"1"},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":false,"finish":false,"type":"1"},{"pass":false,"finish":false,"type":"1"},{"pass":false,"finish":false,"type":"1"},{"pass":false,"finish":false,"type":"1"},{"pass":false,"finish":false,"type":"1"},{"pass":false,"finish":false,"type":"1"},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":false,"finish":false,"type":"1"},{"pass":false,"finish":false,"type":"1"},{"pass":false,"finish":false,"type":"1"},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":false,"finish":false,"type":"1"},{"pass":false,"finish":false,"type":"1"},{"pass":false,"finish":false,"type":"1"},{"pass":false,"finish":false,"type":"1"},{"pass":false,"finish":false,"type":"1"},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":false,"finish":false,"type":"1"},{"pass":false,"finish":false,"type":"1"},{"pass":false,"finish":false,"type":"1"},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":false,"finish":false,"type":"1"},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":false,"finish":false,"type":"1"},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":false,"finish":false,"type":"1"},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false},{"pass":true,"finish":false}],"moveResult":{"pass":true,"finish":false},"previousMove":"RIGHT"},{"type":"0"},{"type":"0"},{"type":"0"},{"type":"0"}]]}
]);

export default function initializeDefaultBoard() {
  localStorage.setItem(LOCAL_STORAGE_MAP_COLLECTION_KEY, defaultBoard);
}
