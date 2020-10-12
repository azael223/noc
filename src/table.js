const TABLE1 = document.querySelector("#table1");
const TABLE2 = document.querySelector("#table2");
// const BTN_ADDROW = document.querySelector("#btn_addrow")
// const BTN_ADDCOL = document.querySelector("#btn_addcol")
let ID_COL = 2;
let ID_ROW = 2;

const headerContextMenu = [
  {
    label: "Delete Column",
    action: function (e, column) {
      if (getColsSize(table1) > 3) column.delete();
      console.log(ID_COL);
      console.log(getColsSize(table1));
    },
  },
];
const rowContextMenu = [
  {
    label: "Delete Row",
    action: function (e, row) {
      if (getRowsSize(table1) > 2) row.delete();
    },
  },
];
/* Table Manager */
const hideDiv = (divId) =>
  document.querySelector(`#${divId}`).classList.add("hide");

const showDiv = (divId) =>
  document.querySelector(`#${divId}`).classList.remove("hide");

const changeTable = () => {
  table2.setData([{ values: "xd" }, { values: "xd2" }]);
  if (TABLE2.classList.contains("hide")) {
    hideDiv("table1");
    showDiv("table2");
    hideDiv("btn_addrow");
    hideDiv("btn_addcol");
  } else {
    hideDiv("table2");
    showDiv("table1");
    showDiv("btn_addrow");
    showDiv("btn_addcol");
  }
};
/* *Row Manager*/
const addRow = (table) => table.addRow({ id: ID_ROW++ });

// const deleteRow = (table) =>
//   getRowsSize(table) > 3 ? table.deleteRow(getRowsSize(table) - 1) : 0;

const getRowsSize = (table) => table["rowManager"]["rows"].length;

/* *Column Manager */
const addColumn = (table) =>
  table.addColumn({
    field: `col${ID_COL++}`,
    title: `Value ${ID_COL}`,
    editableTitle: true,
    headerContextMenu: headerContextMenu,
  });

// const deleteColumn = (table) =>
//   getColsSize(table) > 3
//     ? table.deleteColumn(`col${getColsSize(table) - 1}`)
//     : 0;

const getColsSize = (table) => table["columnManager"]["columns"].length;

/* table1 init */
let table1rows = [{ id: 1 }, { id: 2 }];
let table1 = new Tabulator("#table1", {
  headerVisible: true,
  headerSort: false,
  rowContextMenu: rowContextMenu,
  height: 205, // set height of table (in CSS or here), this enables the Virtual DOM and improves render speed dramatically (can be any valid css height value)
  data: table1rows, //assign data to table
  layout: "fitColumns", //fit columns to width of table (optional)
  columns: [
    { title: "id", editor: "input" },
    {
      editor: "number",
      editableTitle: true,
      title: "Value 1",
      headerContextMenu: headerContextMenu,
    },
    {
      editor: "number",
      editableTitle: true,
      title: "Value 2",
      headerContextMenu: headerContextMenu,
    },
  ],
});

/* table2 init */
let table2rows = [{ id: 1 }, { id: 2 }];
let table2cols = [
  { title: "values" },
  { title: "Maximin" },
  { title: "Maximax" },
  { title: "Laplace" },
  { title: "Optim-pesim" },
  { title: "Minimax" },
];
let table2 = new Tabulator("#table2", {
  headerVisible: true,
  headerSort: false,
  height: 205, // set height of table (in CSS or here), this enables the Virtual DOM and improves render speed dramatically (can be any valid css height value)
  data: table2rows, //assign data to table
  layout: "fitColumns", //fit columns to width of table (optional)
  columns: table2cols,
});

/* functions */
const maximin = (values) => Math.max(values)
const maximax = (values) => Math.max(values)
const optimPesim = (op, max, min) => {
  const optimism = op / 100;
  const pesimism = 1 - optimism;
  return optimism * max + pesimism * min;
};
const laplace = (values) => values / values.length;
const minmax = (values) => Math.min(values);


/* main */
hideDiv("table2");
