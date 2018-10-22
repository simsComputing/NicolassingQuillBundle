var containers = $(".quill");
containers.each(function () {
  var quill = new Quill($(this), {
    theme: $(this).data('theme')
  });
  quill.on('text-change', function(delta, oldDelta, source) {
    $($(this).data('id')).val(quill.root.innerHTML);
  });
});