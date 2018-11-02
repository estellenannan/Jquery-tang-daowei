$(function () {
  $.get('http://localhost:3000/comment', (data) => {
    let datasss = JSON.parse(data);
    $('.commentDiv').append(template('comments', {data: datasss}))
  });

  let $pageup = $('.pageup');
  let $num = $('.num');
  $num.click(function (event) {

  })
});