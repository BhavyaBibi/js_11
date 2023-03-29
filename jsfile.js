const values = [ ["firstName", "lastName"], ["S", "Holmes"] ];
const grid = Grid.create(values, {
  fullName (json) {
    const {firstName, lastName} = json;
    return `${firstName} ${lastName}`;
  },
  serial (json, row) {
    // pad so there are two characters
    return row.idx.toString().padStart(2, '0');
  },

});

for (const {json} of grid) {
  Logger.log(json);  
  // {serial: '01', fullName: "S Holmes", ...}
}