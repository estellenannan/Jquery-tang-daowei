$(function () {
  $.get('http://localhost:3000/home', (data) => {
    let datas=JSON.parse(data);
    $('.wrapMainBody').append(template('serviceMain',{data:datas}));
  })
});