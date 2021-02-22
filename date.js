//τι επιστρεφει αλλιως τρεχει ολο
//.getDate για να διαλέξω property
exports.getDate = function(){
  let today = new Date();
  let options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };
  let day = today.toLocaleDateString("en-US", options);
  return day;
};

//αλλο property που θα εχει το object date
exports.getDay = function(){
  let today = new Date();
  let options = {
    weekday: "long",
  };
  let day = today.toLocaleDateString("en-US", options);
  return day;
};
