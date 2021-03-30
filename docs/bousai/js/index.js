

function init() {
    // リサイズ適用
    $("#targetImgDiv1").resizable();

    // 移動適用
$('#targetImgDiv1').draggable();

    // リサイズ適用
    $("#targetImgDiv2").resizable();
 
    // 移動適用
    $('#targetImgDiv2').draggable();
    
    // リサイズ適用
    $(".targetImgDiv3").resizable();
 
    // 移動適用
    $('.targetImgDiv3').draggable();
}
 
window.onload = init();

const position = { x: 0, y: 0 }

interact('.draggable').draggable({
  listeners: {
    start (event) {
      console.log(event.type, event.target)
    },
    move (event) {
      position.x += event.dx
      position.y += event.dy

      event.target.style.transform =
        `translate(${position.x}px, ${position.y}px)`
    },
  }
})

interact('.resizable')
  .resizable({
    edges: { top: true, left: true, bottom: true, right: true },
    listeners: {
      move: function (event) {
        let { x, y } = event.target.dataset

        x = (parseFloat(x) || 0) + event.deltaRect.left
        y = (parseFloat(y) || 0) + event.deltaRect.top

        Object.assign(event.target.style, {
          width: `${event.rect.width}px`,
          height: `${event.rect.height}px`,
          transform: `translate(${x}px, ${y}px)`
        })

        Object.assign(event.target.dataset, { x, y })
      }
    }
  })