
    $.get("nav.html", function(data){
      $("#nav-placeholder").replaceWith(data);
      let path = window.location.pathname
      path = path.slice(1, path.length - 1)
      console.log(path)
      $("#" + path + "btn").toggleClass("active")
    });
