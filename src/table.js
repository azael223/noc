/* Table manager */
const addRow = (table) => {
  table.addRow({ id: table["rowManager"]["rows"].length });
};
const addColumn = (table) => {
  const id = "id_" + (table["columnManager"]["columns"].length + 1);
  table.addColumn({ field: id });
};
const deleteRow = (table) => {
  let rowsl = table["rowManager"]["rows"].length;
  return (rowsl = rowsl > 3 ? table.deleteRow(rowsl - 1) : 0);
};
const deleteColumn = (table) => {
  let columnsl = table["columnManager"]["columns"].length;
  return columnsl > 3 ? table.deleteColumn("id_" + columnsl) : 0;
};

/* table init */
var tabledata = [{}, {}, {}];

var table1 = new Tabulator("#tabla1", {
  headerVisible: false,
  height: 205, // set height of table (in CSS or here), this enables the Virtual DOM and improves render speed dramatically (can be any valid css height value)
  data: tabledata, //assign data to table
  layout: "fitColumns", //fit columns to width of table (optional)
  columns: [
    //Define Table Columns
    {},
    {},
    {},
  ],
});
