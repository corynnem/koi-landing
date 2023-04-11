import $ from "jquery";
import "jquery.ripples";

export default initRipples = () => {
  $(".ripples").ripples({
    resolution: 600,
    dropRadius: 27,
    perturbance: 0.05,
  });
};
