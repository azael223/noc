const TABLE1 = document.querySelector("#table1");
const TABLE2 = document.querySelector("#table2");

/* Table Manager */
const hideDiv = (divId) =>
  document.querySelector(`#${divId}`).classList.add("hide");
const showDiv = (divId) =>
  document.querySelector(`#${divId}`).classList.remove("hide");
const changeTable = () => {
  if (TABLE2.classList.contains("hide")) {
    hideDiv("table1");
    showDiv("table2");
  } else {
    hideDiv("table2");
    showDiv("table1");
  }
};
/* *Row Manager*/
const addRow = (table) => table.addRow({ id: getRowsSize(table) });

const deleteRow = (table) =>
  getRowsSize(table) > 3 ? table.deleteRow(getRowsSize(table) - 1) : 0;

const getRowsSize = (table) => table["rowManager"]["rows"].length;

/* *Column Manager */
const addColumn = (table) =>
  table.addColumn({
    field: `col${getColsSize(table)}`,
    title: `Value ${getColsSize(table)}`,
    editableTitle: true,
  });

const deleteColumn = (table) =>
  getColsSize(table) > 3
    ? table.deleteColumn(`col${getColsSize(table) - 1}`)
    : 0;

const getColsSize = (table) => table["columnManager"]["columns"].length;

/* table1 init */
var table1rows = [{ id: 1 }, { id: 2 }];
var table1cols = [
  { title: "id" },
  { editor: "number", editableTitle: true, title: "Value 1" },
  { editor: "number", editableTitle: true, title: "Value 2" },
];
var table1 = new Tabulator("#table1", {
  headerVisible: true,
  headerSort: false,
  height: 205, // set height of table (in CSS or here), this enables the Virtual DOM and improves render speed dramatically (can be any valid css height value)
  data: table1rows, //assign data to table
  layout: "fitColumns", //fit columns to width of table (optional)
  columns: table1cols,
});

/* table2 init */
var table2rows = [{ id: 1 }, { id: 2 }];
var table2cols = [
  { title: "values" },
  { title: "Maximin" },
  { title: "Laplace" },
  { title: "Optim-pesim" },
  { title: "Minimax" },
];
var table2 = new Tabulator("#table2", {
  headerVisible: true,
  headerSort: false,
  height: 205, // set height of table (in CSS or here), this enables the Virtual DOM and improves render speed dramatically (can be any valid css height value)
  data: table2rows, //assign data to table
  layout: "fitColumns", //fit columns to width of table (optional)
  columns: table2cols,
});

hideDiv("table2");
