function toggle(cellNumber) {
  if (document.getElementById(`info-cell-${cellNumber}`).dataset.state === 'closed' || !document.getElementById(`info-cell-${cellNumber}`).dataset.state) {
    document.getElementById(`info-cell-${cellNumber}`).classList.add('info-cell-active');
    document.getElementById(`info-cell-${cellNumber}`).dataset.state = 'opened';
    document.getElementById(`info-cell-${cellNumber}`).children[0].innerHTML = 'remove_circle';
    for (let i = 0; i<7; i++) {
      if (i != cellNumber) {
        document.getElementById(`info-cell-${i}`).classList.remove('info-cell-active');
        document.getElementById(`info-cell-${i}`).children[0].innerHTML = 'add_circle';
      }
    }
  } else {
    document.getElementById(`info-cell-${cellNumber}`).classList.remove('info-cell-active');
    document.getElementById(`info-cell-${cellNumber}`).dataset.state = 'closed';
    document.getElementById(`info-cell-${cellNumber}`).children[0].innerHTML = 'add_circle';
  }
}