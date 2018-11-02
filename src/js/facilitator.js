
$(function () {
  $.get('http://localhost:3000/service', (data) => {
    let datas=JSON.parse(data);
    $('.ulactivety').append(template('servers',{data:datas}));
  })
});
