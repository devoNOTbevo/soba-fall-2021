$('#add-grocery-item-button').click((e) => {
  const inputValue = $('#grocery-item-input').val();
  $('#grocery-list').append(`<li>${inputValue}</li>`);
});

// send https://www.youtube.com/watch?v=nYkdrAPrdcw
