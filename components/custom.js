import $ from "jquery";

function letterJumble() {
    const small = $(".small");
    const medium = $(".medium");
    const large = $(".large");

    const arr = [...small, ...medium, ...large];

    arr.forEach((el) => {
      let angle =
        Math.ceil(Math.random() * 6) * (Math.round(Math.random()) ? 1 : -1);

      $(el).css("transform", "rotate(" + angle + "deg)");
    });
    
}

export {letterJumble}